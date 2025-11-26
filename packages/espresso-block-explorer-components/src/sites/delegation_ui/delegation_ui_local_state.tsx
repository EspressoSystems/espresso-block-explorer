import { sleep } from '@/async/sleep';
import { DataContext } from '@/components/contexts/DataProvider';
import { Now } from '@/components/contexts/NowProvider';
import { AsyncIterableResolver } from '@/components/data';
import { RainbowKitAccountAddressContext } from '@/components/rainbowkit';
import { nullableHexArrayBufferCodec } from '@/convert/codec';
import BadResponseClientError from '@/errors/BadResponseClientError';
import WebWorkerErrorResponse from '@/errors/WebWorkerErrorResponse';
import { compareArrayBuffer } from '@/functional/functional';
import { EpochAndBlock } from '@/service/espresso_l1_validator_service/common/epoch_and_block';
import { L1BlockID } from '@/service/espresso_l1_validator_service/common/l1_block_id';
import { L1ValidatorService } from '@/service/espresso_l1_validator_service/l1_validator_service_api';
import { ActiveNodeSetSnapshot } from '@/service/espresso_l1_validator_service/validators_active/active_node_set_snapshot';
import { applyActiveNodesUpdate } from '@/service/espresso_l1_validator_service/validators_active/apply_active_node_update';
import { applyAllNodesUpdate } from '@/service/espresso_l1_validator_service/validators_all/apply_all_nodes_update';
import { FullNodeSetSnapshot } from '@/service/espresso_l1_validator_service/validators_all/full_node_set_snapshot';
import { applyWalletSnapshotUpdates } from '@/service/espresso_l1_validator_service/wallet/apply_wallet_update';
import { WalletSnapshot } from '@/service/espresso_l1_validator_service/wallet/wallet_snapshot';
import { CappuccinoHotShotQueryService } from '@/service/hotshot_query_service/cappuccino/hot_shot_query_service_api';
import { CappuccinoHotShotQueryServiceAPIContext } from 'pages';
import React from 'react';
import { ActiveValidatorsContext } from './contexts/active_validators_context';
import { AllValidatorsContext } from './contexts/all_validators_context';
import { EspressoBlockHeightContext } from './contexts/espresso_block_height_context';
import { EspressoCurrentEpochContext } from './contexts/espresso_current_epoch_context';
import { L1BlockIDContext } from './contexts/l1_block_id_context';
import { L1ValidatorServiceContext } from './contexts/l1_validator_api_context';
import { WalletSnapshotContext } from './contexts/wallet_snapshot_context';

/**
 * The purpose of this file is to codify the local state representation of the
 * L1 Validator Service API data, that will automatically periodically check
 * and update itself with new data as it becomes available.
 *
 * The data derived from the local state will be provided automatically via
 * React Contexts to provide information, and updates to the Delegation UI.
 */

/**
 * DelegationUILocalState represents the local state
 * of the Delegation UI data.
 */
export interface DelegationUILocalState {
  l1Block: null | L1BlockID;
  espressoEpochAndBlock: null | EpochAndBlock;
  espressoBlockHeight: null | number;
  activeWalletAddress: null | ArrayBuffer;

  nodesAllSnapshot: null | FullNodeSetSnapshot;
  nodesActiveSnapshot: null | ActiveNodeSetSnapshot;
  walletSnapshot: null | WalletSnapshot;

  lastUpdated: null | Date;
}

const POLLING_RATE = 1000; // in ms

/**
 * delegationUILocalStateStream is an async generator function
 * that yields updated DelegationUILocalState objects
 * as new data becomes available from the L1 Validator Service API.
 *
 * This method starts with the basic data.  After a syncing delay, it will
 * fetch the latest block information from the L1, an the latest Espresso
 * Block height.  Using this information, it will make further determinations
 * about what data to fetch next, and how to apply it.
 */
async function* delegationUILocalStateStream(
  l1ValidatorService: L1ValidatorService,
  hotShotQueryService: CappuccinoHotShotQueryService,
  activeAccount: null | ArrayBuffer,
) {
  let state: DelegationUILocalState = {
    l1Block: null,
    espressoEpochAndBlock: null,
    espressoBlockHeight: null,
    activeWalletAddress: activeAccount,

    nodesAllSnapshot: null,
    nodesActiveSnapshot: null,
    walletSnapshot: null,

    lastUpdated: null,
  };

  let shouldSlowDown: boolean = false;
  let lastAddress: null | ArrayBuffer = null;
  let lastNow: null | Date = null;

  while (true) {
    const [nextAddress, now]: [null | ArrayBuffer, Date] =
      (yield state) ?? null;
    const previousL1Block = state.l1Block;

    if (
      lastAddress === nextAddress &&
      lastNow?.valueOf() === now.valueOf() &&
      shouldSlowDown
    ) {
      // No changes to the input, we can skip processing.

      // Sleep for a little bit, so that we don't hot loop
      await sleep(100);
      continue;
    }
    lastAddress = nextAddress;
    lastNow = now;

    // First we fetch our initial states.
    const [blockInfo, espressoHeight] = await Promise.all([
      // Should we fetch the block information from the L1 Instead of the
      // L1 Validator service?

      (previousL1Block
        ? l1ValidatorService.l1Block.getBlockForHeight(
            previousL1Block.number + 1n,
          )
        : l1ValidatorService.l1Block.getLatestBlock()
      ).catch(async (err) => {
        // We failed to retrieve the latest block.  This could be due to
        // a number of reasons.  The main reasons are as follows:
        // 1. The block is not yet available.
        // 2. There is a network issue.
        // 3. The service we are requesting th block from is down.
        //
        // In all of these cases, it's not the end of the world, we'll
        // just try again on the next iteration anyway, so we can just
        // swallow the error here.
        let localError: unknown = err;
        if (err instanceof WebWorkerErrorResponse) {
          // We have a WebWorkerErrorResponse, we can inspect the underlying
          // cause.
          localError = err.error;
        }

        if (
          localError instanceof BadResponseClientError &&
          localError.status === 404
        ) {
          // This likely means that the active validator set is not yet
          // available.  We can just return the previous state.
          return null;
        }

        console.debug(
          'failed to retrieve latest l1 block info',
          err,
          previousL1Block,
        );
        return null;
      }),

      // Fetch the latest Espresso block height
      (state.espressoBlockHeight
        ? Promise.resolve(state.espressoBlockHeight + 1)
        : hotShotQueryService.status.blockHeight().then((height) => height - 1)
      ).catch(async (err) => {
        // We failed to retrieve the latest Espresso block height.
        // This could be due to a number of reasons.  The main reasons
        // are as follows:
        // 1. There is a network issue.
        // 2. The service we are requesting the latest height from is down.
        //
        // In all of these cases, it's not the end of the world, we'll
        // just try again on the next iteration anyway, so we can just
        // swallow the error here.
        let localError: unknown = err;
        if (err instanceof WebWorkerErrorResponse) {
          // We have a WebWorkerErrorResponse, we can inspect the underlying
          // cause.
          localError = err.error;
        }

        if (
          localError instanceof BadResponseClientError &&
          localError.status === 404
        ) {
          // This likely means that the active validator set is not yet
          // available.  We can just return the previous state.
          return null;
        }

        console.debug(
          'failed to retrieve latest espresso block height',
          err,
          state.espressoBlockHeight,
        );

        return null;
      }),
    ]);

    if (blockInfo && isL1ReorgDetected(state.l1Block, blockInfo)) {
      // We have detected a reorg, we need to reset our state, and
      // start over.
      state = {
        l1Block: null,
        espressoEpochAndBlock: null,
        espressoBlockHeight: null,
        activeWalletAddress: null,

        nodesAllSnapshot: null,
        nodesActiveSnapshot: null,
        walletSnapshot: null,

        lastUpdated: null,
      };
      continue;
    }

    const [nextState, nextShouldSlowDown] = await deriveAndApplyStateChanges(
      state,
      l1ValidatorService,
      blockInfo,
      espressoHeight,
      nextAddress,
    );

    state = nextState;
    shouldSlowDown = nextShouldSlowDown;
  }
}

/**
 * isL1ReorgDetected determines if a reorg has occurred between the
 * previous L1 block and the new L1 block.
 *
 * The expected next block should be immediately following the previous block.
 */
function isL1ReorgDetected(
  previousBlock: null | L1BlockID,
  newBlock: L1BlockID,
): boolean {
  if (previousBlock === null) {
    return false;
  }

  if (newBlock.number === previousBlock.number) {
    // This is odd, we really shouldn't get here.
    console.warn(
      'request for l1 block at height returned the previous block?!',
      previousBlock,
      newBlock,
    );
    return true;
  }

  if (newBlock.number !== previousBlock.number + 1n) {
    // The block did not progress as expected, reorg detected.
    return true;
  }

  // Do our hashes agree
  if (compareArrayBuffer(previousBlock.hash, newBlock.parent) !== 0) {
    // We have detected a different in the chain, a reorg has occurred.
    return true;
  }

  return false;
}

async function deriveAndApplyStateChanges(
  state: DelegationUILocalState,
  l1ValidatorService: L1ValidatorService,
  newL1Block: null | L1BlockID,
  newEspressoBlockHeight: null | number,
  nextAddress: null | ArrayBuffer,
): Promise<[DelegationUILocalState, boolean]> {
  const [nextAllState, nextActiveState, nextWalletState] = await Promise.all([
    deriveAndApplyNodesAllStateChanges(
      state.nodesAllSnapshot,
      l1ValidatorService,
      newL1Block,
    ),

    deriveAndApplyNodesActiveStateChanges(
      state.nodesActiveSnapshot,
      l1ValidatorService,
      newEspressoBlockHeight,
    ),

    deriveAndApplyWalletStateChanges(
      state.walletSnapshot,
      state.activeWalletAddress,
      l1ValidatorService,
      newL1Block,
      nextAddress,
    ),
  ] as const);

  const shouldSlowDown =
    state.nodesAllSnapshot === nextAllState &&
    state.nodesActiveSnapshot === nextActiveState &&
    state.walletSnapshot === nextWalletState;

  return [
    {
      l1Block: nextAllState && newL1Block ? newL1Block : state.l1Block,
      espressoEpochAndBlock:
        nextActiveState?.espressoBlock ?? state.espressoEpochAndBlock,
      espressoBlockHeight: nextActiveState
        ? Number(nextActiveState.espressoBlock.block)
        : state.espressoBlockHeight,
      activeWalletAddress: nextWalletState
        ? nextAddress
        : state.activeWalletAddress,

      nodesAllSnapshot: nextAllState,
      nodesActiveSnapshot: nextActiveState,
      walletSnapshot: nextWalletState,

      lastUpdated: new Date(),
    },
    shouldSlowDown,
  ];
}

async function deriveAndApplyNodesAllStateChanges(
  state: null | FullNodeSetSnapshot,
  l1ValidatorService: L1ValidatorService,
  newL1Block: null | L1BlockID,
): Promise<null | FullNodeSetSnapshot> {
  if (!newL1Block) {
    // We can't fetch new data without a new L1 block.
    return state;
  }

  if (!state) {
    // We have no previous state, we need to fetch the current snapshot.
    try {
      return await l1ValidatorService.validatorsAll.snapshot(newL1Block.hash);
    } catch (err) {
      console.debug(
        'failed to retrieve full node set snapshot',
        newL1Block,
        err,
      );

      return state;
    }
  }

  try {
    const update = await l1ValidatorService.validatorsAll.updatesSince(
      newL1Block.hash,
    );

    return applyAllNodesUpdate(state, update);
  } catch (err) {
    console.debug(
      'failed to retrieve full node set snapshot updates',
      newL1Block,
      err,
    );

    return state;
  }
}

async function deriveAndApplyNodesActiveStateChanges(
  state: null | ActiveNodeSetSnapshot,
  l1ValidatorService: L1ValidatorService,
  newEspressoBlockHeight: null | number,
): Promise<null | ActiveNodeSetSnapshot> {
  if (!state) {
    // We have no previous state, we need to fetch the current snapshot.
    try {
      return await l1ValidatorService.validatorsActive.active();
    } catch (err) {
      let localError: unknown = err;
      if (err instanceof WebWorkerErrorResponse) {
        // We have a WebWorkerErrorResponse, we can inspect the underlying
        // cause.
        localError = err.error;
      }

      if (
        localError instanceof BadResponseClientError &&
        localError.status === 404
      ) {
        // This likely means that the active validator set is not yet
        // available.  We can just return the previous state.
        return state;
      }
      console.debug(
        'failed to retrieve active node set snapshot',
        newEspressoBlockHeight,
        err,
      );

      return state;
    }
  }

  try {
    const update = await l1ValidatorService.validatorsActive.updatesSince(
      BigInt(state.espressoBlock.block + 1n),
    );

    return applyActiveNodesUpdate(state, update);
  } catch (err) {
    let localError: unknown = err;
    if (err instanceof WebWorkerErrorResponse) {
      // We have a WebWorkerErrorResponse, we can inspect the underlying
      // cause.
      localError = err.error;
    }

    if (
      localError instanceof BadResponseClientError &&
      localError.status === 404
    ) {
      // This likely means that the active validator set is not yet
      // available.  We can just return the previous state.
      await sleep(POLLING_RATE);
      return state;
    }

    console.debug(
      'failed to retrieve active node set snapshot updates',
      newEspressoBlockHeight,
      err,
    );

    return state;
  }
}

async function deriveAndApplyWalletStateChanges(
  state: null | WalletSnapshot,
  activeWalletAddress: null | ArrayBuffer,
  l1ValidatorService: L1ValidatorService,
  newL1Block: null | L1BlockID,
  nextAddress: null | ArrayBuffer,
): Promise<null | WalletSnapshot> {
  if (nextAddress === null) {
    // No active address, then we shouldn't have any wallet state.
    return null;
  }

  if (!newL1Block) {
    // We can't fetch new data without a new L1 block.
    return state;
  }

  if (
    (nextAddress === null) !== (activeWalletAddress === null) ||
    (nextAddress &&
      activeWalletAddress &&
      compareArrayBuffer(nextAddress, activeWalletAddress) !== 0) ||
    state === null
  ) {
    // The active address has changed, or we have no state,
    // in either case, we need to try and fetch the current
    // wallet snapshot for the new address.

    try {
      return await l1ValidatorService.wallet.snapshot(
        nextAddress,
        newL1Block.hash,
      );
    } catch (err) {
      console.debug(
        'failed to retrieve wallet snapshot',
        nextAddress,
        newL1Block,
        err,
      );

      // We failed to retrieve the wallet snapshot
      // Fallback onto the previous state.
      return state;
    }
  }

  // We want to apply an update using the diffs to the wallet.
  try {
    const update = await l1ValidatorService.wallet.updates(
      nextAddress,
      newL1Block.hash,
    );

    /**
     * @todo detect a reorg via the wallet updates?
     */

    return applyWalletSnapshotUpdates(state, update);
  } catch (err) {
    console.debug(
      'failed to retrieve wallet snapshot updates',
      nextAddress,
      newL1Block,
      err,
    );

    // We failed to retrieve the wallet snapshot updates
    // Fallback onto the previous state.
    return state;
  }
}

export const ProvideDelegationUILocalState: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const now = React.useContext(Now);
  const l1ValidatorService = React.useContext(L1ValidatorServiceContext);
  const hotshotQueryService = React.useContext(
    CappuccinoHotShotQueryServiceAPIContext,
  );
  const activeAccountAddress = React.useContext(
    RainbowKitAccountAddressContext,
  );
  const activeAccount =
    nullableHexArrayBufferCodec.decode(activeAccountAddress);

  const delegationUILocalStateIterable = React.useMemo(
    () =>
      delegationUILocalStateStream(
        l1ValidatorService,
        hotshotQueryService,
        activeAccount,
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [l1ValidatorService, hotshotQueryService],
  );

  return (
    <AsyncIterableResolver
      asyncIterable={delegationUILocalStateIterable}
      next={[activeAccount, now]}
    >
      <ResolveDelegationUILocalState>{children}</ResolveDelegationUILocalState>
    </AsyncIterableResolver>
  );
};

const ResolveDelegationUILocalState: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const data = React.useContext(DataContext) as
    | undefined
    | null
    | DelegationUILocalState;

  return (
    <L1BlockIDContext.Provider value={data?.l1Block ?? null}>
      <EspressoBlockHeightContext.Provider
        value={BigInt(data?.espressoBlockHeight ?? 0)}
      >
        <EspressoCurrentEpochContext.Provider
          value={data?.espressoEpochAndBlock?.epoch ?? 0n}
        >
          <ActiveValidatorsContext.Provider
            value={data?.nodesActiveSnapshot ?? null}
          >
            <AllValidatorsContext.Provider
              value={data?.nodesAllSnapshot ?? null}
            >
              <WalletSnapshotContext.Provider
                value={data?.walletSnapshot ?? null}
              >
                {children}
              </WalletSnapshotContext.Provider>
            </AllValidatorsContext.Provider>
          </ActiveValidatorsContext.Provider>
        </EspressoCurrentEpochContext.Provider>
      </EspressoBlockHeightContext.Provider>
    </L1BlockIDContext.Provider>
  );
};

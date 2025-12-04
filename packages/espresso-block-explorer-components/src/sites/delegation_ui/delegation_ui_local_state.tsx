import { breakpoint } from '@/assert/debugger';
import { sleep } from '@/async/sleep';
import { DataContext } from '@/components/contexts/data_provider';
import { AsyncIterableResolver } from '@/components/data';
import { RainbowKitAccountAddressContext } from '@/components/rainbowkit';
import { hexArrayBufferCodec } from '@/convert/codec/array_buffer';
import BadResponseClientError from '@/errors/bad_response_client_error';
import WebWorkerErrorResponse from '@/errors/web_worker_error_response';
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
import React from 'react';
import { ActiveValidatorsContext } from './contexts/active_validators_context';
import { AllValidatorsContext } from './contexts/all_validators_context';
import { EspressoBlockHeightContext } from './contexts/espresso_block_height_context';
import { EspressoCurrentEpochContext } from './contexts/espresso_current_epoch_context';
import { L1BlockIDContext } from './contexts/l1_block_id_context';
import { L1ValidatorServiceContext } from './contexts/l1_validator_api_context';
import { WalletSnapshotContext } from './contexts/wallet_snapshot_context';

/**
 * MINIMUM_SLEEP_TIME defines the minimum sleep time
 * between polling attempts.
 */
const MINIMUM_SLEEP_TIME = 100; // in ms

/**
 * isSameL1Block determines if two L1BlockID objects
 * represent the same L1 Block.
 *
 * This is a convenience check to quickly rule out L1 Block equality.
 */
function isSameL1Block(a: null | L1BlockID, b: null | L1BlockID) {
  if (a === null && b === null) {
    return true;
  }

  if (a === null || b === null) {
    return false;
  }

  return a.number === b.number && compareArrayBuffer(a.hash, b.hash) === 0;
}

/**
 * isNotFoundError is a helper function to determine if an error
 * is, or has, an underlying error that results from a 404 server response.
 */
function isNotFoundError(error: unknown) {
  let localError: unknown = error;
  if (error instanceof WebWorkerErrorResponse) {
    // We have a WebWorkerErrorResponse, we can inspect the underlying
    localError = error.error;
  }

  if (
    localError instanceof BadResponseClientError &&
    localError.status === 404
  ) {
    // This likely means that the active validator set is not yet
    // available.  We can just return the previous state.
    return true;
  }

  return false;
}

/**
 * isRetryableError determines if an error that does not represent
 * a category of errors that prevent the attempt from being reattempted.
 */
function isARetryableError(error: unknown) {
  return isNotFoundError(error);
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

/**
 * L!_BLOCK_ID_POLLING_RATE defines how often we poll
 * for new L1 Block IDs.
 */
const L1_BLOCK_ID_POLLING_RATE = 1_000; // in ms

/**
 * fetchNextL1BlockID attempts to fetch the next L1 Block ID
 * after the provided previousL1BlockID.  If previousL1BlockID
 * is null, the latest L1 Block ID is fetched.
 */
async function fetchNextL1BlockID(
  l1ValidatorService: L1ValidatorService,
  previousL1BlockID: null | L1BlockID,
  pollingInterval: number = L1_BLOCK_ID_POLLING_RATE,
) {
  while (true) {
    try {
      if (!previousL1BlockID) {
        return await l1ValidatorService.l1Block.getLatestBlock();
      }

      return await l1ValidatorService.l1Block.getBlockForHeight(
        previousL1BlockID.number + 1n,
      );
    } catch (err) {
      if (isARetryableError(err)) {
        // This likely means that the active validator set is not yet
        // available.  We can just return the previous state.
        await sleep(pollingInterval);
        continue;
      }

      console.error(
        'encountered error attempting to retrieve l1 block id',
        err,
      );
      await sleep(pollingInterval);
    }
  }
}

/**
 * l1BlocksIDStream is an async generator that yields new L1 Block IDs
 * as they become available.
 */
async function* l1BlocksIDStream(
  l1ValidatorService: L1ValidatorService,
  pollingInterval: number = L1_BLOCK_ID_POLLING_RATE,
) {
  let lastL1Block: L1BlockID = await fetchNextL1BlockID(
    l1ValidatorService,
    null,
    pollingInterval,
  );

  // Yield the l1 block immediately before going into the loop
  yield lastL1Block;

  while (true) {
    await sleep(pollingInterval);
    lastL1Block = await fetchNextL1BlockID(
      l1ValidatorService,
      lastL1Block,
      pollingInterval,
    );
    yield lastL1Block;
  }
}

/**
 * ProvideL1BlockID is a context provider that provides the latest
 * L1 Block ID to its children.
 */
const ProvideL1BlockID: React.FC<React.PropsWithChildren> = ({ children }) => {
  const l1ValidatorService = React.useContext(L1ValidatorServiceContext);
  const stream = React.useMemo(
    () => l1BlocksIDStream(l1ValidatorService),
    [l1ValidatorService],
  );

  return (
    <AsyncIterableResolver asyncIterable={stream}>
      <TransformDataToL1BlockID>{children}</TransformDataToL1BlockID>
    </AsyncIterableResolver>
  );
};

/**
 * TransformDataToL1BlockID transforms the data provided by DataContext
 * into the L1BlockIDContext.
 */
const TransformDataToL1BlockID: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const data = (React.useContext(DataContext) ?? null) as null | L1BlockID;

  return (
    <L1BlockIDContext.Provider value={data}>
      {children}
    </L1BlockIDContext.Provider>
  );
};

/**
 * ESPRESSO_BLOCK_HEIGHT_POLLING_RATE defines how often we poll
 * for changes based on the Espresso Block Height.
 */
const ESPRESSO_BLOCK_HEIGHT_POLLING_RATE = 1_000; // in ms

/**
 * retrieveL1AllNodesSnapshot attempts to retrieve the FullNodeSetSnapshot
 * for the provided L1 Block ID.
 */
async function retrieveL1AllNodesSnapshot(
  l1ValidatorService: L1ValidatorService,
  l1BlockID: L1BlockID,
) {
  let penalty = MINIMUM_SLEEP_TIME; // start with a low penalty in ms
  while (true) {
    try {
      return await l1ValidatorService.validatorsAll.snapshot(l1BlockID.hash);
    } catch (err) {
      if (isARetryableError(err)) {
        // This likely means that the active validator set is not yet
        // available.  We can just return the previous state.
        await sleep(penalty);
        penalty = Math.min(penalty * 2, 5_000); // exponential backoff up to 5s
        continue;
      }

      // Re throw the error
      throw err;
    }
  }
}

/**
 * retrieveL1AllNodesSnapshot attempts to retrieve the FullNodeSetSnapshot
 * for the provided L1 Block ID.
 */
async function retrieveL1AllNodesUpdates(
  l1ValidatorService: L1ValidatorService,
  l1BlockID: L1BlockID,
) {
  let penalty = MINIMUM_SLEEP_TIME; // start with a low penalty in ms
  while (true) {
    try {
      return await l1ValidatorService.validatorsAll.updatesSince(
        l1BlockID.hash,
      );
    } catch (err) {
      if (isARetryableError(err)) {
        // This likely means that the active validator set is not yet
        // available.  We can just return the previous state.
        await sleep(penalty);
        penalty = Math.min(penalty * 2, 5_000); // exponential backoff up to 5s
        continue;
      }

      // Re throw the error
      throw err;
    }
  }
}

/**
 * allNodesStream is an async generator that yields the FullNodeSetSnapshot
 * as it is updated over time.
 */
async function* allNodesStream(l1ValidatorService: L1ValidatorService) {
  let lastL1Block: null | L1BlockID = yield null;
  while (lastL1Block === null) {
    // We don't want to hot loop here, so we need to wait a little bit.
    await sleep(MINIMUM_SLEEP_TIME);

    // We cannot progress without an l1 Block
    lastL1Block = yield null;
  }

  let allNodes: FullNodeSetSnapshot = await retrieveL1AllNodesSnapshot(
    l1ValidatorService,
    lastL1Block,
  );
  while (true) {
    const nextL1Block: L1BlockID = yield allNodes;

    // Did we receive the same block again?
    if (isSameL1Block(nextL1Block, lastL1Block)) {
      // We receive the same block again.  This is due to the
      // AsyncIterableResolver polling before the next block is available.
      // This is not an error, but we don't have any work to do here.
      // So we'll sleep until the next block is different.
      await sleep(MINIMUM_SLEEP_TIME);
      continue;
    }

    if (
      // Reorg detection
      isL1ReorgDetected(lastL1Block, nextL1Block)
    ) {
      breakpoint();
      allNodes = await retrieveL1AllNodesSnapshot(
        l1ValidatorService,
        nextL1Block,
      );
      lastL1Block = nextL1Block;
      continue;
    }

    const updates = await retrieveL1AllNodesUpdates(
      l1ValidatorService,
      nextL1Block,
    );

    // Apply the updates to our local state
    allNodes = applyAllNodesUpdate(allNodes, updates);
    lastL1Block = nextL1Block;
  }
}

/**
 * ProvideAllValidators is a context provider that provides the latest
 * FullNodeSetSnapshot to its children.
 */
const ProvideAllValidators: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const l1ValidatorService = React.useContext(L1ValidatorServiceContext);
  const l1Block = React.useContext(L1BlockIDContext);
  const stream = React.useMemo(
    () => allNodesStream(l1ValidatorService),
    [l1ValidatorService],
  );

  return (
    <AsyncIterableResolver asyncIterable={stream} next={l1Block}>
      <TransformDataToAllValidators>{children}</TransformDataToAllValidators>
    </AsyncIterableResolver>
  );
};

/**
 * TransformDataToAllValidators transforms the data provided by DataContext
 * into the AllValidatorsContext.
 */
const TransformDataToAllValidators: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const data = (React.useContext(DataContext) ??
    null) as null | FullNodeSetSnapshot;
  return (
    <AllValidatorsContext.Provider value={data}>
      {children}
    </AllValidatorsContext.Provider>
  );
};

/**
 * retrieveLatestActiveValidatorsSnapshot attempts to retrieve the latest
 * ActiveNodeSetSnapshot.
 */
async function retrieveLatestActiveValidatorsSnapshot(
  l1ValidatorService: L1ValidatorService,
) {
  let penalty = MINIMUM_SLEEP_TIME; // start with a low penalty in ms
  while (true) {
    try {
      return await l1ValidatorService.validatorsActive.active();
    } catch (err) {
      let localError: unknown = err;
      if (err instanceof WebWorkerErrorResponse) {
        // We have a WebWorkerErrorResponse, we can inspect the underlying
        localError = err.error;
      }
      if (
        localError instanceof BadResponseClientError &&
        localError.status === 404
      ) {
        // This likely means that the active validator set is not yet
        // available.  We can just return the previous state.
        await sleep(penalty);
        penalty = Math.min(penalty * 2, 5_000); // exponential backoff up to 5s
        continue;
      }
      // Re throw the error
      throw err;
    }
  }
}

/**
 * retrieveUpdatesSinceLastActiveValidatorsSnapshot attempts to retrieve
 * the updates to the ActiveNodeSetSnapshot since the provided
 * epochAndBlock.
 */
async function retrieveUpdatesSinceLastActiveValidatorsSnapshot(
  l1ValidatorService: L1ValidatorService,
  epochAndBlock: EpochAndBlock,
  pollingInterval: number = ESPRESSO_BLOCK_HEIGHT_POLLING_RATE,
) {
  while (true) {
    try {
      return await l1ValidatorService.validatorsActive.updatesSince(
        epochAndBlock.block + 1n,
      );
    } catch (err) {
      if (isARetryableError(err)) {
        // This likely means that the active validator set is not yet
        // available.  We can just return the previous state.
        await sleep(pollingInterval);
        continue;
      }

      throw err;
    }
  }
}

/**
 * activeValidatorsStream provides a stream of ActiveNodeSetSnapshot updates.
 */
async function* activeValidatorsStream(
  l1ValidatorService: L1ValidatorService,
  pollingInterval: number = ESPRESSO_BLOCK_HEIGHT_POLLING_RATE,
) {
  let activeNodes =
    await retrieveLatestActiveValidatorsSnapshot(l1ValidatorService);

  let epochAndBlock = activeNodes.espressoBlock;

  while (true) {
    yield activeNodes;

    const activeNodesUpdate =
      await retrieveUpdatesSinceLastActiveValidatorsSnapshot(
        l1ValidatorService,
        epochAndBlock,
        pollingInterval,
      );

    activeNodes = applyActiveNodesUpdate(activeNodes, activeNodesUpdate);
    epochAndBlock = activeNodes.espressoBlock;
  }
}

/**
 * ProvideActiveValidators is a context provider that provides the latest
 * ActiveNodeSetSnapshot to its children.
 */
const ProvideActiveValidators: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const l1ValidatorService = React.useContext(L1ValidatorServiceContext);
  const stream = React.useMemo(
    () => activeValidatorsStream(l1ValidatorService),
    [l1ValidatorService],
  );
  return (
    <AsyncIterableResolver asyncIterable={stream}>
      <TransformDataToActiveValidators>
        {children}
      </TransformDataToActiveValidators>
    </AsyncIterableResolver>
  );
};

/**
 * TransformDataToActiveValidators transforms the data provided by DataContext
 * into the ActiveValidatorsContext.
 */
const TransformDataToActiveValidators: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const data = (React.useContext(DataContext) ??
    null) as null | ActiveNodeSetSnapshot;

  return (
    <EspressoBlockHeightContext.Provider
      value={data?.espressoBlock.block ?? null}
    >
      <EspressoCurrentEpochContext.Provider
        value={data?.espressoBlock.epoch ?? 0n}
      >
        <ActiveValidatorsContext.Provider value={data}>
          {children}
        </ActiveValidatorsContext.Provider>
      </EspressoCurrentEpochContext.Provider>
    </EspressoBlockHeightContext.Provider>
  );
};

/**
 * retrieveWalletSnapshot attempts to retrieve the WalletSnapshot
 * for the provided L1 Block ID and active wallet address.
 */
async function retrieveWalletSnapshot(
  l1ValidatorService: L1ValidatorService,
  l1BlockID: L1BlockID,
  activeWallet: null | `0x${string}`,
) {
  if (!activeWallet) {
    return null;
  }
  const address = hexArrayBufferCodec.decode(activeWallet);
  let penalty = MINIMUM_SLEEP_TIME; // start with a low penalty in ms
  while (true) {
    try {
      return await l1ValidatorService.wallet.snapshot(address, l1BlockID.hash);
    } catch (err) {
      if (isARetryableError(err)) {
        // This likely means that the active validator set is not yet
        // available.  We can just return the previous state.
        await sleep(penalty);
        penalty = Math.min(penalty * 2, 5_000); // exponential backoff up to 5s
        continue;
      }

      // Re throw the error
      throw err;
    }
  }
}

/**
 * retrieveWalletUpdates attempts to retrieve the WalletSnapshot
 * updates for the provided L1 Block ID and active wallet address.
 */
async function retrieveWalletUpdates(
  l1ValidatorService: L1ValidatorService,
  l1BlockID: L1BlockID,
  activeWallet: `0x${string}`,
) {
  const address = hexArrayBufferCodec.decode(activeWallet);
  let penalty = MINIMUM_SLEEP_TIME; // start with a low penalty in ms
  while (true) {
    try {
      return await l1ValidatorService.wallet.updates(address, l1BlockID.hash);
    } catch (err) {
      if (isARetryableError(err)) {
        // This likely means that the active validator set is not yet
        // available.  We can just return the previous state.
        await sleep(penalty);
        penalty = Math.min(penalty * 2, 5_000); // exponential backoff up to 5s
        continue;
      }
      // Re throw the error
      throw err;
    }
  }
}

/**
 * activeWalletStateStream provides a stream of WalletSnapshot
 * updates.
 */
async function* activeWalletStateStream(
  l1ValidatorService: L1ValidatorService,
) {
  let [l1BlockID, activeAccount]: [null | L1BlockID, null | `0x${string}`] =
    yield null;
  while (l1BlockID === null) {
    // We don't want to hot loop here, so we need to wait a little bit.
    await sleep(MINIMUM_SLEEP_TIME);
    // We cannot progress without an l1 Block
    [l1BlockID, activeAccount] = yield null;
  }

  // This is an interesting situation, we need an active account
  // to be able to fetch the wallet state.  We may not have one, so we need
  // to contend with
  let walletSnapshot: null | WalletSnapshot = await retrieveWalletSnapshot(
    l1ValidatorService,
    l1BlockID,
    activeAccount,
  );

  while (true) {
    const [nextL1BlockID, nextActiveAccount]: [
      null | L1BlockID,
      null | `0x${string}`,
    ] = yield walletSnapshot;

    if (nextL1BlockID === null) {
      // We cannot progress without an l1 Block
      await sleep(MINIMUM_SLEEP_TIME);
      continue;
    }

    // Did we receive the same input again?
    if (
      isSameL1Block(nextL1BlockID, l1BlockID) &&
      nextActiveAccount === activeAccount
    ) {
      // We receive the same input again.  This is due to the
      // AsyncIterableResolver polling before the next block is available.
      // This is not an error, but we don't have any work to do here.
      // So we'll sleep until the next input is different.
      await sleep(MINIMUM_SLEEP_TIME);
      continue;
    }

    if (
      // Do we not have a wallet snapshot yet?
      !walletSnapshot ||
      // Has the active account changed?
      activeAccount !== nextActiveAccount ||
      // Do we detect and L1 Reorg?
      isL1ReorgDetected(l1BlockID, nextL1BlockID)
    ) {
      walletSnapshot = await retrieveWalletSnapshot(
        l1ValidatorService,
        nextL1BlockID,
        nextActiveAccount,
      );
      l1BlockID = nextL1BlockID;
      activeAccount = nextActiveAccount;

      // NOTE: We could sleep here... but it doesn't seem particularly
      //       necessary.
      continue;
    }

    // Do we not have an account?
    if (!nextActiveAccount) {
      walletSnapshot = null;
      l1BlockID = nextL1BlockID;
      activeAccount = nextActiveAccount;
      // We do not have an account, we have no potential work to do.
      continue;
    }

    // Let's retrieve our updates
    const updates = await retrieveWalletUpdates(
      l1ValidatorService,
      nextL1BlockID,
      nextActiveAccount,
    );

    // Apply the updates to our local state
    walletSnapshot = applyWalletSnapshotUpdates(walletSnapshot, updates);
    l1BlockID = nextL1BlockID;
    activeAccount = nextActiveAccount;
  }
}

/**
 * ProvideActiveWalletSnapshot is a context provider that provides the latest
 * WalletSnapshot to its children.
 */
const ProvideActiveWalletSnapshot: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const l1ValidatorService = React.useContext(L1ValidatorServiceContext);
  const l1BlockID = React.useContext(L1BlockIDContext);
  const activeWallet = React.useContext(RainbowKitAccountAddressContext);

  const stream = React.useMemo(
    () => activeWalletStateStream(l1ValidatorService),
    [l1ValidatorService],
  );

  return (
    <AsyncIterableResolver
      asyncIterable={stream}
      next={[l1BlockID, activeWallet]}
    >
      <TransformDataToActiveWalletSnapshot>
        {children}
      </TransformDataToActiveWalletSnapshot>
    </AsyncIterableResolver>
  );
};

/**
 * TransformDataToActiveWalletSnapshot transforms the data provided by
 * DataContext into the WalletSnapshotContext.
 */
const TransformDataToActiveWalletSnapshot: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const data = (React.useContext(DataContext) ?? null) as null | WalletSnapshot;
  return (
    <WalletSnapshotContext.Provider value={data}>
      {children}
    </WalletSnapshotContext.Provider>
  );
};

export const ProvideDelegationUILocalState: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  return (
    <ProvideL1BlockID>
      <ProvideAllValidators>
        <ProvideActiveValidators>
          <ProvideActiveWalletSnapshot>{children}</ProvideActiveWalletSnapshot>
        </ProvideActiveValidators>
      </ProvideAllValidators>
    </ProvideL1BlockID>
  );
};

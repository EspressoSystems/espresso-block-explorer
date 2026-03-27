import { assert } from '@/assert/assert';
import { breakpoint } from '@/assert/debugger';
import { sleep } from '@/async/sleep';
import { AsyncIterableResolver } from '@/components/data';
import { RainbowKitAccountAddressContext } from '@/components/rainbowkit';
import { DataContext } from '@/contexts/data_provider';
import { L1ValidatorServiceContext } from '@/contexts/l1_validator_api_context';
import { hexArrayBufferCodec } from '@/convert/codec/array_buffer_hex';
import { compareArrayBuffer } from '@/functional/functional';
import { EpochAndBlock } from '@/service/espresso_l1_validator_service/common/epoch_and_block';
import { L1BlockID } from '@/service/espresso_l1_validator_service/common/l1_block_id';
import { L1BlockInfo } from '@/service/espresso_l1_validator_service/common/l1_block_info';
import { L1ValidatorService } from '@/service/espresso_l1_validator_service/l1_validator_service_api';
import { ActiveNodeSetSnapshot } from '@/service/espresso_l1_validator_service/validators_active/active_node_set_snapshot';
import { applyActiveNodesUpdate } from '@/service/espresso_l1_validator_service/validators_active/apply_active_node_update';
import { applyAllNodesUpdate } from '@/service/espresso_l1_validator_service/validators_all/apply_all_nodes_update';
import { FullNodeSetSnapshot } from '@/service/espresso_l1_validator_service/validators_all/full_node_set_snapshot';
import { applyWalletSnapshotUpdates } from '@/service/espresso_l1_validator_service/wallet/apply_wallet_update';
import { WalletSnapshot } from '@/service/espresso_l1_validator_service/wallet/wallet_snapshot';
import { isGoneError } from 'espresso-block-explorer-components';
import React from 'react';
import { ActiveValidatorsContext } from './contexts/active_validators_context';
import { DeriveNodeSetFromFullNodeSetSnapshot } from './contexts/all_validators_context';
import { EspressoBlockHeightContext } from './contexts/espresso_block_height_context';
import { EspressoCurrentEpochContext } from './contexts/espresso_current_epoch_context';
import { FullNodeSetSnapshotContext } from './contexts/full_node_set_snapshot_context';
import { L1BlockIDContext } from './contexts/l1_block_id_context';
import { WalletSnapshotContext } from './contexts/wallet_snapshot_context';

/**
 * MINIMUM_SLEEP_TIME defines the minimum sleep time
 * between polling attempts.
 */
const MINIMUM_SLEEP_TIME = 250; // in ms

/**
 * ReorgCause provides a list of causes for why a reorg is being detected. In
 * general, the specific cause of the Reorg does not really matter, as the
 * logic result would ultimately be the same regardless of the cause. That
 * being said, the cause is a point of data that could potentially point to
 * errorneous logical behavior in our implementation.
 */
enum ReorgCause {
  none,
  sameHeight,
  notSuccessor,
  hashMismatch,
}

/**
 * detectHeightReorg is a helper function that will determine the cause for
 * a Reorg (should one exist), based on the two provided heights.
 *
 * The only real cause for a reorg in this case is if the next height is not
 * the immediate successor to the previous height. If this is not the case
 * then this is always a reorg cause.  However, specific causes for this
 * difference may be called out in order to help minimize cases where
 * this needs to result in a specific reset.
 */
function detectHeightReorg(
  previousHeight: bigint,
  nextHeight: bigint,
): ReorgCause {
  if (previousHeight === nextHeight) {
    return ReorgCause.sameHeight;
  }

  if (nextHeight !== previousHeight + 1n) {
    return ReorgCause.notSuccessor;
  }

  return ReorgCause.none;
}

/**
 * detectL1BlockIDReorg determines if a reorg has occurred between the
 * previous and the next L1 block ID structures.
 *
 * The expected next block should be the successor to the previous block.
 */
function detectL1BlockIDReorg(
  previous: null | L1BlockID,
  next: L1BlockID,
): ReorgCause {
  if (!previous) {
    return ReorgCause.none;
  }

  assert(next !== null);

  const heightReorg = detectHeightReorg(previous.number, next.number);
  if (heightReorg !== ReorgCause.none) {
    return heightReorg;
  }

  // Do our hashes agree
  if (compareArrayBuffer(previous.hash, next.parent) !== 0) {
    // We have detected a different in the chain, a reorg has occurred.
    breakpoint();
    return ReorgCause.hashMismatch;
  }

  return ReorgCause.none;
}

/**
 * detectL1BlockInfoReorg determins if a reorg has occurred between the
 * previous and next L1 Block Info structures.
 *
 * The expected next block should be the successor to the previous block.
 */
function detectL1BlockInfoReorg(
  previous: null | L1BlockInfo,
  next: L1BlockInfo,
): ReorgCause {
  if (!previous) {
    return ReorgCause.none;
  }

  return detectHeightReorg(previous.number, next.number);
}

/**
 * detectEspressoReorg determines if a reorg has occurred between the
 * previous and next EpochAndBlock structures.
 *
 * The expcted next block should be the successor to the previous block.
 */
function detectEspressoReorg(
  previous: null | EpochAndBlock,
  next: EpochAndBlock,
): ReorgCause {
  if (!previous) {
    return ReorgCause.none;
  }

  return detectHeightReorg(previous.block, next.block);
}

/**
 * FORCE_REORG is a constant used to force a reorg when encountered.
 * This is meant to handle an edge case in otherwise straight forward
 * logic.
 *
 * In the majority of cases when the server is returning us
 * standard status codes, whether they be success or failures, then
 * we are able to proceed without issue.  The exception comes when we
 * receive a `410 GONE` error.  When receiving a `Gone`, it is meant to
 * indicate that the data that we are requesting is **TOO OLD** and that
 * the server has explicitly removed it. When we receive this error, we
 * are unable to progress, and we will continually receive the same
 * error indefinitely.  To fix the issue we **MUST** rest our state.
 *
 * This is meant to act as a sentinel signal to inform us of this case.
 */
const FORCE_REORG = Symbol('FORCE_REOG');

/**
 * L!_BLOCK_ID_POLLING_RATE defines how often we poll
 * for new L1 Block IDs.
 */
const L1_BLOCK_ID_POLLING_RATE = 6_000; // in ms

/**
 * fetchNextL1BlockID attempts to fetch the next L1 Block ID
 * after the provided previousL1BlockID.  If previousL1BlockID
 * is null, the latest L1 Block ID is fetched.
 */
async function fetchNextL1BlockID(
  l1ValidatorService: L1ValidatorService,
  previousL1BlockID: null | L1BlockID,
) {
  try {
    if (!previousL1BlockID) {
      return await l1ValidatorService.l1Block.getLatestBlock();
    }

    return await l1ValidatorService.l1Block.getBlockForHeight(
      previousL1BlockID.number + 1n,
    );
  } catch (err) {
    if (isGoneError(err)) {
      // We **MUST** force a reorg in order to continue progressing
      return FORCE_REORG;
    }
    return null;
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
  let lastL1Block: null | L1BlockID = null;

  // Yield the l1 block immediately before going into the loop
  while (true) {
    // TODO: We need to handle a `410` GONE here.
    const nextL1Block = await fetchNextL1BlockID(
      l1ValidatorService,
      lastL1Block,
    );

    if (!nextL1Block) {
      await sleep(pollingInterval);
      continue;
    }

    if (nextL1Block === FORCE_REORG) {
      // Forced reorg detected, reset state
      lastL1Block = null;
      continue;
    }

    const l1Reorg = detectL1BlockIDReorg(lastL1Block, nextL1Block);
    if (l1Reorg !== ReorgCause.none) {
      // Reorg detected, reset state so we pull the latest information.
      lastL1Block = null;
      continue;
    }

    lastL1Block = nextL1Block;
    yield lastL1Block;
    await sleep(pollingInterval);
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
  try {
    return await l1ValidatorService.validatorsAll.snapshot(l1BlockID.hash);
  } catch {
    return null;
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
  try {
    return await l1ValidatorService.validatorsAll.updatesSince(l1BlockID.hash);
  } catch {
    return null;
  }
}

/**
 * allNodesStream is an async generator that yields the FullNodeSetSnapshot
 * as it is updated over time.
 */
async function* allNodesStream(
  l1ValidatorService: L1ValidatorService,
  pollingInterval: number = MINIMUM_SLEEP_TIME,
) {
  let lastL1Block: null | L1BlockID = null;
  let allNodes: null | FullNodeSetSnapshot = null;
  while (true) {
    const nextL1Block: L1BlockID = yield allNodes;
    if (!nextL1Block) {
      await sleep(pollingInterval);
      continue;
    }

    const l1Reorg = detectL1BlockIDReorg(lastL1Block, nextL1Block);
    // Did we receive the same block again?
    if (l1Reorg === ReorgCause.sameHeight) {
      // We receive the same block again.  This is due to the
      // AsyncIterableResolver polling before the next block is available.
      // This is not an error, but we don't have any work to do here.
      // So we'll sleep until the next block is different.
      await sleep(pollingInterval);
      continue;
    }

    if (
      // If we don't have our `allNodes`
      !allNodes ||
      // If we detect a reorg
      l1Reorg !== ReorgCause.none
    ) {
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

    if (!updates) {
      // No update to apply
      await sleep(pollingInterval);
      continue;
    }

    const l1InfoReorg = detectL1BlockInfoReorg(
      allNodes.l1Block,
      updates.l1Block,
    );
    if (l1InfoReorg === ReorgCause.sameHeight) {
      // Same number, no update.
      await sleep(pollingInterval);
      continue;
    }

    if (l1InfoReorg !== ReorgCause.none) {
      // Oh no, we have been given a block number out of sequence.
      breakpoint();
      allNodes = null;
      continue;
    }

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
    <FullNodeSetSnapshotContext.Provider value={data}>
      <DeriveNodeSetFromFullNodeSetSnapshot>
        {children}
      </DeriveNodeSetFromFullNodeSetSnapshot>
    </FullNodeSetSnapshotContext.Provider>
  );
};

/**
 * retrieveLatestActiveValidatorsSnapshot attempts to retrieve the latest
 * ActiveNodeSetSnapshot.
 */
async function retrieveLatestActiveValidatorsSnapshot(
  l1ValidatorService: L1ValidatorService,
) {
  try {
    return await l1ValidatorService.validatorsActive.active();
  } catch {
    return null;
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
) {
  try {
    return await l1ValidatorService.validatorsActive.updatesSince(
      epochAndBlock.block + 1n,
    );
  } catch (err) {
    if (isGoneError(err)) {
      // We **MUST** force a reorg in order to continue progressing
      return FORCE_REORG;
    }

    return null;
  }
}

/**
 * activeValidatorsStream provides a stream of ActiveNodeSetSnapshot updates.
 */
async function* activeValidatorsStream(
  l1ValidatorService: L1ValidatorService,
  pollingInterval: number = ESPRESSO_BLOCK_HEIGHT_POLLING_RATE,
) {
  let activeNodes: null | ActiveNodeSetSnapshot = null;

  while (true) {
    if (!activeNodes) {
      activeNodes =
        await retrieveLatestActiveValidatorsSnapshot(l1ValidatorService);
    }
    yield activeNodes;

    if (!activeNodes) {
      await sleep(pollingInterval);
      continue;
    }

    const activeNodesUpdate =
      await retrieveUpdatesSinceLastActiveValidatorsSnapshot(
        l1ValidatorService,
        activeNodes.espressoBlock,
      );

    if (!activeNodesUpdate) {
      await sleep(pollingInterval);
      continue;
    }

    if (activeNodesUpdate === FORCE_REORG) {
      // forced reorg detected, reset state.
      activeNodes = null;
      continue;
    }

    const espressoReorg = detectEspressoReorg(
      activeNodes.espressoBlock,
      activeNodesUpdate.espressoBlock,
    );

    if (espressoReorg === ReorgCause.sameHeight) {
      await sleep(pollingInterval);
      continue;
    }

    if (espressoReorg !== ReorgCause.none) {
      // we weren't given the block we were expecting.
      breakpoint();
      activeNodes = null;
      continue;
    }

    activeNodes = applyActiveNodesUpdate(activeNodes, activeNodesUpdate);
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
  try {
    return await l1ValidatorService.wallet.snapshot(address, l1BlockID.hash);
  } catch {
    // Catch the error, and return null.  We don't want to try forever, we
    // have some definite limits to the number of attempts.
    return null;
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
  try {
    const address = hexArrayBufferCodec.decode(activeWallet);
    return await l1ValidatorService.wallet.updates(address, l1BlockID.hash);
  } catch {
    return null;
  }
}

/**
 * activeWalletStateStream provides a stream of WalletSnapshot
 * updates.
 */
async function* activeWalletStateStream(
  l1ValidatorService: L1ValidatorService,
  pollingInterval: number = MINIMUM_SLEEP_TIME,
) {
  let [l1BlockID, activeAccount]: [null | L1BlockID, null | `0x${string}`] =
    yield null;
  while (l1BlockID === null) {
    // We don't want to hot loop here, so we need to wait a little bit.
    await sleep(pollingInterval);
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
      await sleep(pollingInterval);
      continue;
    }

    const l1Reorg = detectL1BlockIDReorg(l1BlockID, nextL1BlockID);
    // Did we receive the same input again?
    if (
      l1Reorg === ReorgCause.sameHeight &&
      nextActiveAccount === activeAccount
    ) {
      // We receive the same input again.  This is due to the
      // AsyncIterableResolver polling before the next block is available.
      // This is not an error, but we don't have any work to do here.
      // So we'll sleep until the next input is different.
      await sleep(pollingInterval);
      continue;
    }

    if (
      // Do we not have a wallet snapshot yet?
      !walletSnapshot ||
      // Has the active account changed?
      activeAccount !== nextActiveAccount ||
      // Do we detect and L1 Reorg?
      l1Reorg !== ReorgCause.none
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

    if (!updates) {
      await sleep(pollingInterval);
      continue;
    }

    const l1InfoReorg = detectL1BlockInfoReorg(
      walletSnapshot.l1Block,
      updates.l1Block,
    );

    if (l1InfoReorg === ReorgCause.sameHeight) {
      // We've been given the same block again, no update
      await sleep(pollingInterval);
      continue;
    }

    if (l1InfoReorg !== ReorgCause.none) {
      // We've been given an update out of sequence, we need to reset
      // our state.
      breakpoint();
      walletSnapshot = null;
      continue;
    }

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

import UnimplementedError from '@/errors/unimplemented_error';
import {
  appendIterables,
  compareArrayBuffer,
  filterIterable,
  firstWhereIterable,
  foldRIterable,
  mapIterable,
  singletonIterable,
} from '@/functional/functional';
import { Delegation } from '../common/delegation';
import { PendingWithdrawal } from '../common/pending_withdrawal';
import { WalletDiffClaimedRewards } from './wallet_diff/claimed_rewards';
import { WalletDiffDelegatedToNode } from './wallet_diff/delegated_to_node';
import { WalletDiffNodeExitWithdrawal } from './wallet_diff/node_exit_withdrawal';
import { WalletDiffNodeExited } from './wallet_diff/node_exited';
import { WalletDiffUndelegatedFromNode } from './wallet_diff/undelegated_from_node';
import { WalletDiffUndelegationWithdrawal } from './wallet_diff/undelegation_withdrawal';
import { WalletDiff } from './wallet_diff/wallet_diff';
import { WalletSnapshot } from './wallet_snapshot';
import { WalletUpdate } from './wallet_update';

export function applyWalletSnapshotUpdates(
  snapshot: WalletSnapshot,
  update: WalletUpdate,
): WalletSnapshot {
  const nextSnapshot = foldRIterable(applyWalletDiff, snapshot, update.diff);

  return new WalletSnapshot(
    nextSnapshot.nodes,
    nextSnapshot.pendingUndelegations,
    nextSnapshot.pendingExits,
    nextSnapshot.claimedRewards,
    update.l1Block,
  );
}

function applyWalletDiff(
  snapshot: WalletSnapshot,
  diff: WalletDiff,
): WalletSnapshot {
  if (diff instanceof WalletDiffClaimedRewards) {
    return applyClaimedRewards(snapshot, diff);
  }

  if (diff instanceof WalletDiffDelegatedToNode) {
    return applyDelegatedToNode(snapshot, diff);
  }

  if (diff instanceof WalletDiffNodeExitWithdrawal) {
    return applyNodeExitWithdrawal(snapshot, diff);
  }

  if (diff instanceof WalletDiffNodeExited) {
    return applyNodeExit(snapshot, diff);
  }

  if (diff instanceof WalletDiffUndelegatedFromNode) {
    return applyUndelegatedFromNode(snapshot, diff);
  }

  if (diff instanceof WalletDiffUndelegationWithdrawal) {
    return appplyUndelegationWithdrawal(snapshot, diff);
  }

  throw new UnimplementedError();
}

function applyClaimedRewards(
  snapshot: WalletSnapshot,
  diff: WalletDiffClaimedRewards,
) {
  return new WalletSnapshot(
    snapshot.nodes,
    snapshot.pendingUndelegations,
    snapshot.pendingExits,
    snapshot.claimedRewards + diff.claimedRewards,
    snapshot.l1Block,
  );
}

function applyDelegatedToNode(
  snapshot: WalletSnapshot,
  diff: WalletDiffDelegatedToNode,
): WalletSnapshot {
  const currentDelegation = firstWhereIterable(
    snapshot.nodes,
    (delegation: Delegation) =>
      compareArrayBuffer(delegation.node, diff.delegation.node) === 0,
  );

  const nodesIt = currentDelegation
    ? snapshot.nodes
    : appendIterables(
        snapshot.nodes,
        singletonIterable(
          new Delegation(diff.delegation.delegator, diff.delegation.node, 0n),
        ),
      );

  return new WalletSnapshot(
    Array.from(
      mapIterable(nodesIt, (delegation: Delegation) => {
        if (compareArrayBuffer(delegation.node, diff.delegation.node) !== 0) {
          return delegation;
        }

        return new Delegation(
          delegation.delegator,
          delegation.node,
          delegation.amount + diff.delegation.amount,
        );
      }),
    ),
    snapshot.pendingUndelegations,
    snapshot.pendingExits,
    snapshot.claimedRewards,
    snapshot.l1Block,
  );
}

function applyNodeExitWithdrawal(
  snapshot: WalletSnapshot,
  diff: WalletDiffNodeExitWithdrawal,
): WalletSnapshot {
  return new WalletSnapshot(
    Array.from(
      filterIterable(
        snapshot.nodes,
        (delegation: Delegation) =>
          compareArrayBuffer(delegation.node, diff.withdrawal.node) !== 0,
      ),
    ),
    snapshot.pendingUndelegations,
    Array.from(
      filterIterable(
        snapshot.pendingExits,
        (withdrawal: PendingWithdrawal) =>
          compareArrayBuffer(withdrawal.node, diff.withdrawal.node) !== 0,
      ),
    ),
    snapshot.claimedRewards,
    snapshot.l1Block,
  );
}

function applyNodeExit(
  snapshot: WalletSnapshot,
  diff: WalletDiffNodeExited,
): WalletSnapshot {
  return new WalletSnapshot(
    snapshot.nodes,
    snapshot.pendingUndelegations,
    Array.from(
      appendIterables(
        snapshot.pendingExits,
        singletonIterable(diff.pendingWithdrawal),
      ),
    ),
    snapshot.claimedRewards,
    snapshot.l1Block,
  );
}

function applyUndelegatedFromNode(
  snapshot: WalletSnapshot,
  diff: WalletDiffUndelegatedFromNode,
): WalletSnapshot {
  return new WalletSnapshot(
    Array.from(
      mapIterable(snapshot.nodes, (delegation: Delegation) => {
        if (
          compareArrayBuffer(delegation.node, diff.pendingWithdrawal.node) !== 0
        ) {
          return delegation;
        }

        return new Delegation(
          delegation.delegator,
          delegation.node,
          delegation.amount - diff.pendingWithdrawal.amount,
        );
      }),
    ),
    Array.from(
      appendIterables(
        snapshot.pendingUndelegations,
        singletonIterable(diff.pendingWithdrawal),
      ),
    ),
    snapshot.pendingExits,
    snapshot.claimedRewards,
    snapshot.l1Block,
  );
}

function appplyUndelegationWithdrawal(
  snapshot: WalletSnapshot,
  diff: WalletDiffUndelegationWithdrawal,
): WalletSnapshot {
  return new WalletSnapshot(
    snapshot.nodes,
    Array.from(
      filterIterable(
        snapshot.pendingUndelegations,
        (withdrawal: PendingWithdrawal) =>
          compareArrayBuffer(withdrawal.node, diff.withdrawal.node) !== 0,
      ),
    ),
    snapshot.pendingExits,
    snapshot.claimedRewards,
    snapshot.l1Block,
  );
}

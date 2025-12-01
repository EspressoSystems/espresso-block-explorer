import UnimplementedError from '@/errors/UnimplementedError';
import { compareArrayBuffer, foldRIterable } from '@/functional/functional';
import { FullNodeSetDiff } from './full_node_set_diff/full_node_set_diff';
import { FullNodeSetDiffNodeExit } from './full_node_set_diff/node_exit';
import { FullNodeSetUpdateNodeUpdate } from './full_node_set_diff/node_update';
import { FullNodeSetSnapshot } from './full_node_set_snapshot';
import { FullNodeSetUpdate } from './full_node_set_update';

export function applyAllNodesUpdate(
  snapshot: FullNodeSetSnapshot,
  update: FullNodeSetUpdate,
): FullNodeSetSnapshot {
  const nextSnapshot = foldRIterable(applyAllNodesDiff, snapshot, update.diff);
  return new FullNodeSetSnapshot(update.l1Block, nextSnapshot.nodes);
}

function applyAllNodesDiff(
  snapshot: FullNodeSetSnapshot,
  update: FullNodeSetDiff,
): FullNodeSetSnapshot {
  if (update instanceof FullNodeSetDiffNodeExit) {
    return applyNodeExit(snapshot, update);
  }

  if (update instanceof FullNodeSetUpdateNodeUpdate) {
    return applyNodeUpdate(snapshot, update);
  }

  throw new UnimplementedError();
}

function applyNodeExit(
  snapshot: FullNodeSetSnapshot,
  update: FullNodeSetDiffNodeExit,
): FullNodeSetSnapshot {
  // Remove the exited node from the snapshot
  const nextNodes = snapshot.nodes.filter(
    (entry) =>
      compareArrayBuffer(entry.address, update.validatorExit.address) !== 0,
  );

  return new FullNodeSetSnapshot(snapshot.l1Block, nextNodes);
}

function applyNodeUpdate(
  snapshot: FullNodeSetSnapshot,
  update: FullNodeSetUpdateNodeUpdate,
): FullNodeSetSnapshot {
  const nextNodes = snapshot.nodes.map((entry) => {
    if (
      compareArrayBuffer(entry.address, update.validatorInformation.address) ===
      0
    ) {
      return update.validatorInformation;
    }
    return entry;
  });

  return new FullNodeSetSnapshot(snapshot.l1Block, nextNodes);
}

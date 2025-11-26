import { breakpoint } from '@/assert/debugger';
import UnimplementedError from '@/errors/UnimplementedError';
import { foldRIterable, mapIterable } from '@/functional/functional';
import { ActiveNodeSetEntry } from '../common/active_node_set_entry';
import { EpochAndBlock } from '../common/epoch_and_block';
import { Ratio, RatioRational } from '../common/ratio';
import { ActiveNodeSetDiff } from './active_node_set_diff/active_node_set_diff';
import { ActiveNodeSetDiffNewBlock } from './active_node_set_diff/new_block';
import { NewEpoch } from './active_node_set_diff/new_epoch';
import { ActiveNodeSetSnapshot } from './active_node_set_snapshot';
import { ActiveNodeSetUpdate } from './active_node_set_update';

export function applyActiveNodesUpdate(
  snapshot: ActiveNodeSetSnapshot,
  update: ActiveNodeSetUpdate,
): ActiveNodeSetSnapshot {
  const nextSnapshot = foldRIterable(
    applyActiveNodeDiff,
    snapshot,
    update.diff,
  );

  return new ActiveNodeSetSnapshot(update.espressoBlock, nextSnapshot.nodes);
}

function applyActiveNodeDiff(
  snapshot: ActiveNodeSetSnapshot,
  update: ActiveNodeSetDiff,
): ActiveNodeSetSnapshot {
  if (update instanceof ActiveNodeSetDiffNewBlock) {
    return applyNewBlock(snapshot, update);
  }

  if (update instanceof NewEpoch) {
    return applyNewEpoch(snapshot, update);
  }

  throw new UnimplementedError();
}

function getRationalFromRatio(
  ratio: null | Ratio,
  epochAndBlock: EpochAndBlock,
): RatioRational {
  if (!ratio) {
    return new RatioRational(0n, 0n);
  }

  if (ratio instanceof RatioRational) {
    return ratio;
  }

  if (ratio.ratio === 1) {
    return new RatioRational(epochAndBlock.block, epochAndBlock.block);
  }

  if (ratio.ratio === 0) {
    return new RatioRational(0n, epochAndBlock.block);
  }

  if (epochAndBlock.block === 0n || epochAndBlock.epoch === 0n) {
    // This shouldn't happen
    breakpoint();
    return new RatioRational(0n, 0n);
  }

  const blocksPerEpoch = epochAndBlock.blocksPerEpoch;

  // We want to try and determine the best rational approximation of the float
  const multiple = ratio.ratio * Number(blocksPerEpoch) * 12 * 1000;

  // Find the greatest common divisor between numerator and denominator

  const numerator = BigInt(Math.floor(multiple));
  const denominator = BigInt(12 * 1000) * blocksPerEpoch;

  const commonDivisor = gcd(numerator, denominator);

  return new RatioRational(
    numerator / commonDivisor,
    denominator / commonDivisor,
  );
}

function getOddMultiple(a: bigint): bigint {
  while ((a & 1n) === 0n) {
    a = a >> 1n;
  }

  return a;
}

function gcd(a: bigint, b: bigint): bigint {
  let d = 1n;
  while ((a & 1n) === 0n && (b & 1n) === 1n) {
    a = a >> 1n;
    b = b >> 1n;
    d = d << 1n;
  }

  a = getOddMultiple(a);
  b = getOddMultiple(b);

  while (a !== b) {
    if (a > b) {
      a = a - b;
      a = getOddMultiple(a);
      continue;
    }

    if (b > a) {
      b = b - a;
      b = getOddMultiple(b);
      continue;
    }

    break;
  }

  return 2n ** d * a;
}

function applyNewBlock(
  snapshot: ActiveNodeSetSnapshot,
  update: ActiveNodeSetDiffNewBlock,
): ActiveNodeSetSnapshot {
  // We want to apply the new block update to the snapshot.
  // This block update will update the participation rates of the
  // validators based on the information provided.

  const nextNodes = snapshot.nodes.slice();

  // Update the leader's participation
  {
    const leaderIndex = update.leaderIndex;
    const leaderEntry = nextNodes[leaderIndex];

    const ratio = getRationalFromRatio(
      leaderEntry.leaderParticipation,
      snapshot.espressoBlock,
    );
    const nextLeaderEntry = new ActiveNodeSetEntry(
      leaderEntry.address,
      leaderEntry.voterParticipation,
      new RatioRational(ratio.numerator + 1n, ratio.denominator + 1n),
    );
    nextNodes[leaderIndex] = nextLeaderEntry;
  }

  // Update the failed leaders' participation
  for (const failedLeaderIndex of update.failedLeaders) {
    const failedLeaderEntry = nextNodes[failedLeaderIndex];
    const ratio = getRationalFromRatio(
      failedLeaderEntry.leaderParticipation,
      snapshot.espressoBlock,
    );
    const nextFailedLeaderEntry = new ActiveNodeSetEntry(
      failedLeaderEntry.address,
      failedLeaderEntry.voterParticipation,
      new RatioRational(ratio.numerator, ratio.denominator + 1n),
    );
    nextNodes[failedLeaderIndex] = nextFailedLeaderEntry;
  }

  // Update the voters' participation
  const voterIndexes = Array.from(update.votersBitVec);
  const length = nextNodes.length;
  for (let index = 0; index < length; index++) {
    if (index === update.leaderIndex) {
      continue;
    }

    const entry = nextNodes[index];
    const ratio = getRationalFromRatio(
      entry.voterParticipation,
      snapshot.espressoBlock,
    );

    const nextEntry = new ActiveNodeSetEntry(
      entry.address,
      new RatioRational(
        ratio.numerator + (voterIndexes[index] ? 1n : 0n),
        ratio.denominator + 1n,
      ),
      entry.leaderParticipation,
    );
    nextNodes[index] = nextEntry;
  }

  return new ActiveNodeSetSnapshot(snapshot.espressoBlock, nextNodes);
}

function applyNewEpoch(
  snapshot: ActiveNodeSetSnapshot,
  update: NewEpoch,
): ActiveNodeSetSnapshot {
  return new ActiveNodeSetSnapshot(
    snapshot.espressoBlock,
    Array.from(
      mapIterable(
        update.entries,
        (address) => new ActiveNodeSetEntry(address, null, null),
      ),
    ),
  );
}

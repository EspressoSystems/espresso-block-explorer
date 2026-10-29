import { EpochPerformance } from './sample_history';

/**
 * Reliability summaries for the validator details views: how a validator's
 * missed leader slots look recently, in windows of epochs, compared with the
 * network.
 */

const HOUR_MS = 60 * 60 * 1000;

/**
 * The number of latest epochs shown in the strip.
 */
export const STRIP_EPOCHS = 30;

/**
 * The period the verdict covers, and the number of epochs used for it when
 * the epoch length isn't known yet.
 */
export const VERDICT_HOURS = 24;
export const FALLBACK_VERDICT_EPOCHS = 10;

/**
 * For ongoing misses, the verdict compares with this many times the verdict
 * period before it (about the 6 days before the last 24 hours).
 */
const TREND_PERIODS = 6;

export type ReliabilityStatus = 'clean' | 'good' | 'fair' | 'poor';

export const RELIABILITY_STATUSES: readonly ReliabilityStatus[] = [
  'clean',
  'good',
  'fair',
  'poor',
];

export const RELIABILITY_STATUS_LABEL: Record<ReliabilityStatus, string> = {
  clean: 'No misses',
  good: 'Good',
  fair: 'Some misses',
  poor: 'Poor',
};

export interface WindowSummary {
  epochs: number;
  slots: number;
  missed: number;
  rate: number;
  networkRate: null | number;
  status: ReliabilityStatus;
}

export type ReliabilityVerdict =
  | {
      kind: 'clean';
      status: ReliabilityStatus;
      /** cleanEpochs is the number of latest epochs without a miss. */
      cleanEpochs: number;
      /** before summarizes the epochs before the clean streak, if any. */
      before: null | WindowSummary;
      networkRate: null | number;
    }
  | {
      kind: 'spike';
      status: ReliabilityStatus;
      epoch: EpochPerformance;
      epochsAgo: number;
      cleanEpochs: number;
      recent: WindowSummary;
    }
  | {
      kind: 'ongoing';
      status: ReliabilityStatus;
      recent: WindowSummary;
      epochsWithMisses: number;
      before: null | WindowSummary;
    };

/**
 * reliabilityStatus grades a missed slot rate against the network average:
 *
 * - clean: no missed slots
 * - good: at most half the network average
 * - fair: up to 1% or the network average, whichever is higher
 * - poor: above that
 *
 * Without a network average nothing grades as good.
 */
export function reliabilityStatus(
  rate: number,
  networkRate: null | number,
): ReliabilityStatus {
  if (rate === 0) {
    return 'clean';
  }
  if (networkRate !== null && rate <= networkRate / 2) {
    return 'good';
  }
  if (rate <= Math.max(0.01, networkRate ?? 0)) {
    return 'fair';
  }
  return 'poor';
}

function averageNetworkRate(
  epochs: EpochPerformance[],
  networkRates: Map<number, number>,
): null | number {
  const rates = epochs
    .map((e) => networkRates.get(e.epoch))
    .filter((rate): rate is number => rate !== undefined);
  return rates.length > 0
    ? rates.reduce((sum, rate) => sum + rate, 0) / rates.length
    : null;
}

/**
 * summarizeWindow totals missed slots over the given epochs.
 */
export function summarizeWindow(
  epochs: EpochPerformance[],
  networkRates: Map<number, number>,
): WindowSummary {
  const slots = epochs.reduce((sum, e) => sum + e.slotsLed, 0);
  const missed = epochs.reduce((sum, e) => sum + e.slotsMissed, 0);
  const rate = slots > 0 ? missed / slots : 0;
  const networkRate = averageNetworkRate(epochs, networkRates);

  return {
    epochs: epochs.length,
    slots,
    missed,
    rate,
    networkRate,
    status: reliabilityStatus(rate, networkRate),
  };
}

/**
 * The period the reliability headline covers.
 */
export const HEADLINE_HOURS = 7 * 24;

export type NetworkComparison = 'above' | 'below' | 'at';

/**
 * compareWithNetwork says whether a missed slot rate is above, below, or at
 * the network average (within 5% of it either way).
 */
export function compareWithNetwork(
  rate: number,
  networkRate: number,
): NetworkComparison {
  if (rate > networkRate * 1.05) {
    return 'above';
  }
  if (rate < networkRate * 0.95) {
    return 'below';
  }
  return 'at';
}

/**
 * lastEpochMissedRate is the share of leader slots missed in the latest
 * epoch, or null without epochs. `epochs` must be in ascending order.
 */
export function lastEpochMissedRate(epochs: EpochPerformance[]): null | number {
  const last = epochs[epochs.length - 1];
  return last && last.slotsLed > 0 ? last.slotsMissed / last.slotsLed : null;
}

/**
 * cleanStreak counts the latest epochs, in order, without a missed slot.
 */
export function cleanStreak(epochs: EpochPerformance[]): number {
  let streak = 0;
  for (let i = epochs.length - 1; i >= 0 && epochs[i].slotsMissed === 0; i--) {
    streak++;
  }
  return streak;
}

/**
 * reliabilityVerdict describes the validator's recent reliability, over the
 * latest `recentCount` epochs: a clean streak, one rough epoch, or ongoing
 * misses. `epochs` must be in ascending epoch order.
 */
export function reliabilityVerdict(
  epochs: EpochPerformance[],
  networkRates: Map<number, number>,
  recentCount: number,
): null | ReliabilityVerdict {
  if (epochs.length === 0) {
    return null;
  }

  const count = Math.max(1, recentCount);
  const recentEpochs = epochs.slice(-count);
  const recent = summarizeWindow(recentEpochs, networkRates);
  const streak = cleanStreak(epochs);

  if (recent.missed === 0) {
    const beforeEpochs = epochs.slice(0, epochs.length - streak);
    return {
      kind: 'clean',
      status: recent.status,
      cleanEpochs: streak,
      before:
        beforeEpochs.length > 0
          ? summarizeWindow(beforeEpochs, networkRates)
          : null,
      networkRate: recent.networkRate,
    };
  }

  const worst = recentEpochs.reduce((a, e) =>
    e.slotsMissed > a.slotsMissed ? e : a,
  );
  if (worst.slotsMissed >= recent.missed * 0.8) {
    return {
      kind: 'spike',
      status: recent.status,
      epoch: worst,
      epochsAgo: epochs.length - 1 - epochs.indexOf(worst),
      cleanEpochs: streak,
      recent,
    };
  }

  const beforeEpochs = epochs.slice(
    Math.max(0, epochs.length - count * (TREND_PERIODS + 1)),
    epochs.length - recentEpochs.length,
  );
  return {
    kind: 'ongoing',
    status: recent.status,
    recent,
    epochsWithMisses: recentEpochs.filter((e) => e.slotsMissed > 0).length,
    before:
      beforeEpochs.length > 0
        ? summarizeWindow(beforeEpochs, networkRates)
        : null,
  };
}

/**
 * EpochDuration turns epoch counts into human time. msPerEpoch is 0 when the
 * epoch length isn't known yet, in which case epochs are used instead.
 */
export class EpochDuration {
  constructor(public readonly msPerEpoch: number) {}

  /**
   * epochsIn is the number of whole epochs closest to a number of hours, at
   * least one, or `fallback` when the epoch length isn't known yet.
   */
  epochsIn(hours: number, fallback: number): number {
    if (this.msPerEpoch <= 0) {
      return fallback;
    }
    return Math.max(1, Math.round((hours * HOUR_MS) / this.msPerEpoch));
  }

  /**
   * span describes a number of epochs as a duration, e.g. "2 days".
   */
  span(epochs: number): string {
    if (this.msPerEpoch <= 0) {
      return `${epochs} ${epochs === 1 ? 'epoch' : 'epochs'}`;
    }
    const hours = (epochs * this.msPerEpoch) / HOUR_MS;
    if (hours < 1) {
      const minutes = Math.max(1, Math.round(hours * 60));
      return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`;
    }
    if (hours < 36) {
      const rounded = Math.round(hours);
      return `${rounded} ${rounded === 1 ? 'hour' : 'hours'}`;
    }
    const days = Math.round(hours / 24);
    return `${days} ${days === 1 ? 'day' : 'days'}`;
  }

  /**
   * ago describes how long ago an epoch was, e.g. "3d ago".
   */
  ago(epochsAgo: number): string {
    if (epochsAgo <= 0) {
      return 'now';
    }
    if (this.msPerEpoch <= 0) {
      return `${epochsAgo} ${epochsAgo === 1 ? 'epoch' : 'epochs'} ago`;
    }
    const hours = (epochsAgo * this.msPerEpoch) / HOUR_MS;
    if (hours < 1) {
      return `${Math.max(1, Math.round(hours * 60))}m ago`;
    }
    if (hours < 24) {
      return `${Math.round(hours)}h ago`;
    }
    return `${Math.round(hours / 24)}d ago`;
  }
}

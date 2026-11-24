import { EpochPerformance } from './sample_history';
/**
 * The number of latest epochs shown in the strip.
 */
export declare const STRIP_EPOCHS = 30;
export type ReliabilityStatus = 'clean' | 'good' | 'fair' | 'poor';
export declare const RELIABILITY_STATUSES: readonly ReliabilityStatus[];
export declare const RELIABILITY_STATUS_LABEL: Record<ReliabilityStatus, string>;
export interface WindowSummary {
    epochs: number;
    slots: number;
    missed: number;
    rate: number;
    networkRate: null | number;
    status: ReliabilityStatus;
}
export type ReliabilityVerdict = {
    kind: 'clean';
    status: ReliabilityStatus;
    /** cleanEpochs is the number of latest epochs without a miss. */
    cleanEpochs: number;
    /** before summarizes the epochs before the clean streak, if any. */
    before: null | WindowSummary;
    networkRate: null | number;
} | {
    kind: 'spike';
    status: ReliabilityStatus;
    epoch: EpochPerformance;
    epochsAgo: number;
    cleanEpochs: number;
    recent: WindowSummary;
} | {
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
export declare function reliabilityStatus(rate: number, networkRate: null | number): ReliabilityStatus;
/**
 * summarizeWindow totals missed slots over the given epochs.
 */
export declare function summarizeWindow(epochs: EpochPerformance[], networkRates: Map<number, number>): WindowSummary;
export type NetworkComparison = 'above' | 'below' | 'at';
/**
 * compareWithNetwork says whether a missed slot rate is above, below, or at
 * the network average (within 5% of it either way).
 */
export declare function compareWithNetwork(rate: number, networkRate: number): NetworkComparison;
/**
 * lastEpochMissedRate is the share of leader slots missed in the latest
 * epoch, or null without epochs. `epochs` must be in ascending order.
 */
export declare function lastEpochMissedRate(epochs: EpochPerformance[]): null | number;
/**
 * cleanStreak counts the latest epochs, in order, without a missed slot.
 */
export declare function cleanStreak(epochs: EpochPerformance[]): number;
/**
 * reliabilityVerdict describes the validator's recent reliability, over the
 * latest `recentCount` epochs: a clean streak, one rough epoch, or ongoing
 * misses. `epochs` must be in ascending epoch order.
 */
export declare function reliabilityVerdict(epochs: EpochPerformance[], networkRates: Map<number, number>, recentCount: number): null | ReliabilityVerdict;
/**
 * EpochDuration turns epoch counts into human time. msPerEpoch is 0 when the
 * epoch length isn't known yet, in which case epochs are used instead.
 */
export declare class EpochDuration {
    readonly msPerEpoch: number;
    constructor(msPerEpoch: number);
    /**
     * span describes a number of epochs as a duration, e.g. "2 days".
     */
    span(epochs: number): string;
    /**
     * ago describes how long ago an epoch was, e.g. "3d ago".
     */
    ago(epochsAgo: number): string;
}

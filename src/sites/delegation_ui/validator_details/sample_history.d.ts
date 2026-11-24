import { NodeVersionStatus } from './validator_history_file';
export interface StakePoint {
    date: Date;
    stake: number;
}
export interface EpochPerformance {
    epoch: number;
    slotsLed: number;
    slotsMissed: number;
}
export interface EpochVote {
    epoch: number;
    rate: number;
}
/**
 * EarningsPeriod is the staking rewards one validator generated over a
 * period of about a day: what reached the validator's own address
 * (commission plus rewards on its own stake) and what reached its
 * delegators, in ESP. Estimated periods come from block proposals, before
 * espressonodes started measuring reward balances.
 */
export interface EarningsPeriod {
    start: Date;
    end: Date;
    validator: number;
    delegators: number;
    estimated: boolean;
}
export interface EarningsAmounts {
    total: bigint;
    validator: bigint;
    delegators: bigint;
}
export interface EarningsWindow {
    /**
     * delegatorNetAPR is delegator rewards over delegator stake, annualized:
     * what delegators earned after commission.
     */
    delegatorNetAPR: null | number;
    /**
     * grossAPR is all rewards over all stake, annualized: before commission.
     */
    grossAPR: null | number;
}
export interface ValidatorEarnings {
    asOf: Date;
    lifetime: EarningsAmounts;
    last7Days: null | EarningsWindow;
    last30Days: null | EarningsWindow;
    /**
     * periods are in time order; estimated ones come first.
     */
    periods: EarningsPeriod[];
}
export type ActivityKind = 'delegate' | 'undelegate';
export interface ActivityEntry {
    date: Date;
    kind: ActivityKind;
    delegator: `0x${string}`;
    amount: number;
    txHash: null | `0x${string}`;
}
export interface CommissionChange {
    date: Date;
    from: null | number;
    to: number;
    txHash: null | `0x${string}`;
    block?: number;
    logIndex?: number;
}
export interface DelegationBaseline {
    delegatedAt: Date;
    commission: null | number;
    block: number;
    logIndex: number;
}
/**
 * HistoryStatus describes where the history came from: sample data, a
 * loaded history file, no file for this validator, a failed load, or no
 * history source for this network ('unavailable').
 */
export type HistoryStatus = 'sample' | 'live' | 'missing' | 'error' | 'unavailable';
/**
 * DelegatorsUnknown says why the delegators aren't known: the stake table
 * is still loading, it couldn't be loaded, or the validator isn't in the
 * active set, which is all the stake table lists.
 */
export type DelegatorsUnknown = 'loading' | 'error' | 'inactive';
/**
 * HistorySource says whether a section's data is real ('live') or sample
 * data that has to be labelled as such in the UI.
 */
export type HistorySource = 'live' | 'sample';
export interface ValidatorHistorySources {
    stake: HistorySource;
    epochs: HistorySource;
    delegators: HistorySource;
    activity: HistorySource;
    commission: HistorySource;
}
export interface ValidatorHistory {
    status: HistoryStatus;
    sources: ValidatorHistorySources;
    stake: StakePoint[];
    epochs: EpochPerformance[];
    /**
     * delegatorCount is how many wallets have stake with the validator, or
     * null when that isn't known. It is never 0 for "unknown".
     */
    delegatorCount: null | number;
    /**
     * delegatorsUnknown says why the stake table doesn't list the validator's
     * delegators, or null when it does.
     */
    delegatorsUnknown: null | DelegatorsUnknown;
    /**
     * delegatorsEpoch is the epoch of the stake table the delegators were
     * looked up in, when it has loaded.
     */
    delegatorsEpoch: null | number;
    activity: ActivityEntry[];
    commissionChanges: CommissionChange[];
    /** Absent for older exports; an empty map means no wallets have stake. */
    delegationBaselines?: ReadonlyMap<string, DelegationBaseline>;
    registeredAt: null | Date;
    /**
     * networkMissedRates is the network's average missed slot rate for each
     * epoch, when known.
     */
    networkMissedRates: Map<number, number>;
    /**
     * lastEpochVote is the share of eligible blocks the validator voted on in
     * the last completed epoch, when known.
     */
    lastEpochVote: null | EpochVote;
    /**
     * nodeVersion is the version the node is running, as measured by
     * espressonodes, when known.
     */
    nodeVersion: null | string;
    /**
     * nodeVersionStatus says whether nodeVersion is the newest release for
     * the network, when known.
     */
    nodeVersionStatus: null | NodeVersionStatus;
    /**
     * delegatorAPR is the annualized return delegators actually earned over
     * the last 30 days, after commission, as measured by espressonodes.
     */
    delegatorAPR: null | number;
    /**
     * earnings are the staking rewards the validator generated, measured by
     * espressonodes, when known.
     */
    earnings: null | ValidatorEarnings;
    /**
     * msPerEpoch is the recent length of an epoch from the history file, when
     * it has one, so time labels don't wait for the block time to be measured.
     */
    msPerEpoch: null | number;
    /**
     * txExplorerURL is the block explorer URL that transaction hashes are
     * appended to, when known.
     */
    txExplorerURL: null | string;
}
export interface SampleHistoryInput {
    address: `0x${string}`;
    stake: number;
    commission: number;
    currentEpoch: number;
    now: Date;
}
/**
 * sampleValidatorHistory produces a deterministic sample history for the
 * given validator.
 */
export declare function sampleValidatorHistory(input: SampleHistoryInput): ValidatorHistory;

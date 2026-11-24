import { Environment } from '../../../../../../../../../../../src/models/config/environment/environment';
import { ActivityEntry, CommissionChange, DelegationBaseline, EpochPerformance, EpochVote, StakePoint, ValidatorEarnings } from './sample_history';
export declare const VALIDATOR_HISTORY_REFRESH_MS: number;
/**
 * VALIDATOR_HISTORY_TIMEOUT_MS is how long a history file may take to load
 * before the request is given up on and shown as failed.
 */
export declare const VALIDATOR_HISTORY_TIMEOUT_MS = 15000;
/**
 * MIN_APR_WINDOW_DAYS is how much of the 30 day earnings window needs data
 * before its annualized rate is shown; a few days annualized is mostly noise.
 */
export declare const MIN_APR_WINDOW_DAYS = 7;
export declare const VALIDATOR_HISTORY_SCHEMA_VERSION = 1;
export interface HistoryFileEpoch {
    epoch: number;
    slots: null | number;
    proposals: null | number;
    vote_rate: null | number;
    proposal_rate: null | number;
}
export interface HistoryFileNetworkEpoch {
    epoch: number;
    active_validators: null | number;
    avg_vote_rate: null | number;
    avg_missed_rate: null | number;
}
export interface HistoryFileStakePoint {
    timestamp: string;
    block: number;
    stake: string;
}
export type HistoryFileEventType = 'delegated' | 'undelegated' | 'commission_updated' | 'registered' | 'exited';
export interface HistoryFileEvent {
    type: HistoryFileEventType;
    timestamp: string;
    block: number;
    tx_hash: `0x${string}`;
    log_index: number;
    delegator: null | `0x${string}`;
    amount: null | string;
    old_commission_bps: null | number;
    new_commission_bps: null | number;
}
export interface HistoryFileNodeVersion {
    version: string;
    updated_at: null | string;
    /**
     * latest is the newest node release for the network, and status whether
     * this node runs it. Older files don't have them.
     */
    latest?: null | string;
    status?: null | 'latest' | 'outdated';
}
export interface HistoryFileDelegationBaseline {
    delegated_at: string;
    commission_bps: null | number;
    block: number;
    log_index: number;
}
export interface HistoryFileEarningsAmounts {
    total: string;
    validator: string;
    delegators: string;
}
export interface HistoryFileEarningsWindow {
    delegator_net_apr: null | number;
    gross_apr?: null | number;
    /**
     * days_covered is how many days of the window have data. The exporter
     * always writes it with the rates; a window without it isn't trusted.
     */
    days_covered?: null | number;
}
export interface HistoryFileEarningsInterval {
    epoch_from?: number;
    epoch_to?: number;
    /**
     * start and end are null when espressonodes doesn't know when the epoch
     * boundary was; the site skips those intervals.
     */
    start: null | string;
    end: null | string;
    source: 'measured' | 'estimated';
    validator: string;
    delegators: string;
}
/**
 * HistoryFileEarnings is the part of the file's earnings the site reads.
 */
export interface HistoryFileEarnings {
    as_of?: null | string;
    lifetime?: HistoryFileEarningsAmounts;
    windows?: null | Partial<Record<'7d' | '30d', HistoryFileEarningsWindow>>;
    intervals?: HistoryFileEarningsInterval[];
}
export interface ValidatorHistoryFile {
    schema_version: number;
    network: string;
    address: `0x${string}`;
    generated_at: string;
    latest_epoch: null | number;
    epochs: HistoryFileEpoch[];
    network_epochs: HistoryFileNetworkEpoch[];
    stake_history: HistoryFileStakePoint[];
    events: HistoryFileEvent[];
    /** Latest accepted commission per staked wallet, independent of event retention. */
    delegation_baselines?: Record<string, HistoryFileDelegationBaseline>;
    /**
     * node_version is the version espressonodes reads from the node's metrics,
     * when it can. Older files don't have it.
     */
    node_version?: null | HistoryFileNodeVersion;
    /**
     * earnings are the staking rewards espressonodes measured for the
     * validator. Older files don't have it.
     */
    earnings?: null | HistoryFileEarnings;
}
/**
 * historyNetwork names the network in the history files for an environment,
 * or null when there is no history for it.
 */
export declare function historyNetwork(environment: Environment): null | string;
/**
 * txExplorerURLFor is the L1 block explorer URL for transactions on the
 * network's L1, or null when unknown.
 */
export declare function txExplorerURLFor(network: string): null | string;
/**
 * isValidatorAddress says whether text from a URL is shaped like an
 * address, so it is safe to put in a history file URL.
 */
export declare function isValidatorAddress(address: string): address is `0x${string}`;
export declare function validatorHistoryFileURL(baseURL: string, network: string, address: `0x${string}`): string;
/**
 * ValidatorHistoryFileMissing is thrown when a validator has no history
 * file, which is normal for a validator the monitor has not seen yet.
 */
export declare class ValidatorHistoryFileMissing extends Error {
}
/**
 * isValidatorHistoryFile checks the shape of everything the readers below
 * touch, so a malformed publish shows as an error rather than throwing
 * while a page renders.
 */
export declare function isValidatorHistoryFile(value: unknown): value is ValidatorHistoryFile;
/**
 * fetchValidatorHistoryFile fetches and validates the history file of a
 * validator on a network. A file that says it is for another validator or
 * network is rejected, so a mis-published file can't show someone else's
 * history. Files only change once per epoch, so responses are reused for a
 * few minutes.
 */
export declare function fetchValidatorHistoryFile(url: string, network: string, address: `0x${string}`): Promise<ValidatorHistoryFile>;
/**
 * stakePointsFromFile turns the stake after every change into one point per
 * day for the last 90 days, starting from the first change if the validator
 * is newer than that.
 */
export declare function stakePointsFromFile(file: ValidatorHistoryFile, now: Date): StakePoint[];
/**
 * epochsFromFile converts per-epoch participation into slots led and
 * missed, skipping epochs without slot data.
 */
export declare function epochsFromFile(file: ValidatorHistoryFile): EpochPerformance[];
/**
 * networkMissedRatesFromFile maps each epoch to the network's average missed
 * slot rate, where known.
 */
export declare function networkMissedRatesFromFile(file: ValidatorHistoryFile): Map<number, number>;
export declare function activityFromFile(file: ValidatorHistoryFile): ActivityEntry[];
/**
 * commissionChangesFromFile lists commission changes newest first, ending
 * with the commission set at registration when the file includes it.
 */
export declare function commissionChangesFromFile(file: ValidatorHistoryFile): CommissionChange[];
export declare function delegationBaselinesFromFile(file: ValidatorHistoryFile): undefined | ReadonlyMap<string, DelegationBaseline>;
/**
 * lastEpochVoteFromFile is the vote rate of the latest epoch that has one.
 * The files only hold completed epochs, so this is the last completed epoch.
 */
export declare function lastEpochVoteFromFile(file: ValidatorHistoryFile): null | EpochVote;
/**
 * nodeVersionFromFile is the version the node is running, as measured by
 * espressonodes, or null when it isn't known.
 */
export declare function nodeVersionFromFile(file: ValidatorHistoryFile): null | string;
/**
 * delegatorAPRFromFile is the APR delegators earned over the last 30 days,
 * after commission, or null when espressonodes hasn't measured it over
 * enough of those days to annualize.
 */
export declare function delegatorAPRFromFile(file: ValidatorHistoryFile): null | number;
/**
 * earningsFromFile converts the validator's rewards, or null when the file
 * has none.
 */
export declare function earningsFromFile(file: ValidatorHistoryFile): null | ValidatorEarnings;
/**
 * msPerEpochFromFile is the recent length of an epoch, from the epoch
 * boundary times of the latest earnings intervals, or null without them.
 */
export declare function msPerEpochFromFile(file: ValidatorHistoryFile): null | number;
/**
 * exitedAtFromFile is when the validator exited the stake table, or null if
 * it hasn't.
 */
export declare function exitedAtFromFile(file: ValidatorHistoryFile): null | Date;
export interface NodeVersionStatus {
    status: 'latest' | 'outdated';
    latest: null | string;
}
/**
 * nodeVersionStatusFromFile says whether the node runs the newest release
 * for its network, when espressonodes could tell.
 */
export declare function nodeVersionStatusFromFile(file: ValidatorHistoryFile): null | NodeVersionStatus;
export declare function registeredAtFromFile(file: ValidatorHistoryFile): null | Date;

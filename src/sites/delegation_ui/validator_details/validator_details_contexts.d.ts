import { default as React } from 'react';
import { DelegatorAPR } from './participation';
import { ValidatorHistory } from './sample_history';
import { ValidatorHistoryFile } from './validator_history_file';
/**
 * espToNumber converts an on-chain ESP amount into a floating point number of
 * whole ESP. It is only intended for charting, never for display of balances.
 */
export declare function espToNumber(value: bigint): number;
/**
 * ValidatorFacts are the values about a validator that the Delegation UI
 * already has from the staking API. Everything here is real data.
 */
export interface ValidatorFacts {
    address: `0x${string}`;
    name: null | string;
    description: null | string;
    website: null | URL;
    stake: bigint;
    stakeShare: null | number;
    commission: number;
    estimatedAPRAfterCommission: null | number;
    rank: null | number;
    isActive: boolean;
    myDelegation: null | bigint;
    myPendingUndelegation: null | bigint;
    /**
     * myUndelegationAvailable is when the pending undelegation can be
     * withdrawn, if there is one.
     */
    myUndelegationAvailable: null | Date;
}
/**
 * useValidatorFacts derives the ValidatorFacts for the validator in the
 * current ValidatorNodeContext.
 */
export declare function useValidatorFacts(): ValidatorFacts;
/**
 * ValidatorHistoryContext provides the historical series for the validator
 * in the current ValidatorNodeContext.
 */
export declare const ValidatorHistoryContext: React.Context<ValidatorHistory | null>;
/**
 * EPOCH_VALIDATORS_RETRY_MS is how long to wait before asking for the stake
 * table again after a failed request.
 */
export declare const EPOCH_VALIDATORS_RETRY_MS = 30000;
type HistoryFileState = {
    state: 'none';
} | {
    state: 'loading';
} | {
    state: 'live';
    file: ValidatorHistoryFile;
} | {
    state: 'missing';
} | {
    state: 'error';
};
/**
 * useValidatorHistoryFile loads the validator's history file, when a source
 * is configured for the current network.
 */
export declare function useValidatorHistoryFile(address: `0x${string}`): {
    network: null | string;
    file: HistoryFileState;
};
/**
 * ProvideValidatorHistory provides the ValidatorHistoryContext. It is null
 * while the history file is loading.
 *
 * Delegators are live, from the query service. Everything else comes from
 * the validator history files. Without a history source for the network the
 * history is empty and marked 'unavailable'; only where the host turns on
 * SampleValidatorHistoryContext (Storybook, local development) is it
 * replaced by deterministic sample data anchored to the validator's real
 * current values, with `sources` recording which sections are samples.
 */
export declare const ProvideValidatorHistory: React.FC<React.PropsWithChildren>;
/**
 * useDelegatorAPR is the APR to show for the current validator: what its
 * delegators earned over the last 30 days when espressonodes measured a
 * believable figure, and otherwise the estimate from the network APR and
 * the validator's commission. It is null when neither is known.
 */
export declare function useDelegatorAPR(): null | DelegatorAPR;
export {};

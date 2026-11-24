import { default as React } from 'react';
import { ValidatorHistory } from './sample_history';
/**
 * delegatorsNote explains the validator's number of delegators where it
 * isn't simply the count from the stake table: why it is unknown, or where
 * it comes from for a validator outside the active set. It is null when
 * there is nothing to add.
 */
export declare function delegatorsNote(history: ValidatorHistory): null | string;
/**
 * HistoryEmpty explains why a history section has nothing to show.
 */
export declare const HistoryEmpty: React.FC<{
    history: ValidatorHistory;
    nothingYet: string;
}>;
/**
 * HistoryLoading stands in for a history section while the validator's
 * history file is loading.
 */
export declare const HistoryLoading: React.FC<{
    height?: number;
}>;
/**
 * ValidatorActivityTable lists recent delegations and undelegations.
 */
export declare const ValidatorActivityTable: React.FC<{
    history: ValidatorHistory;
    limit?: number;
    compact?: boolean;
}>;
/**
 * CommissionHistoryTable lists the validator's commission changes.
 */
export declare const CommissionHistoryTable: React.FC<{
    history: ValidatorHistory;
}>;

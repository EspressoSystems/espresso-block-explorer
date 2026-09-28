import { DataTableState } from '../../../../../../../../../../../../../src/components/data/data_table/data_table';
import { default as React } from 'react';
export declare const enum TransactionSummaryColumn {
    hash = 0,
    rollup = 1,
    block = 2,
    time = 3,
    position = 4
}
/** Re-fetches the current page of transactions. */
export declare const RefreshTransactionSummariesContext: React.Context<() => void>;
export interface TransactionSummaryDataTableState extends DataTableState<TransactionSummaryColumn> {
    height?: number;
    offset?: number;
    /** Changing this re-fetches the current page. */
    refreshedAt?: number;
}
export interface TransactionsSummaryDataLoaderProps {
    startAtBlock?: number;
    offset?: number;
    children: React.ReactNode | React.ReactNode[];
}
/**
 * TransactionSummaryDataLoader sets up the intial state of the DataTableState
 * and kicks begins the process of retrieving the data.
 */
export declare const TransactionSummaryDataLoader: React.FC<TransactionsSummaryDataLoaderProps>;
export declare const TransactionSummaryDataFromExplorerSummary: React.FC<TransactionsSummaryDataLoaderProps>;
export interface TransactionsNavigationProps {
    className?: string;
}
export declare const TransactionsNavigation: React.FC<TransactionsNavigationProps>;

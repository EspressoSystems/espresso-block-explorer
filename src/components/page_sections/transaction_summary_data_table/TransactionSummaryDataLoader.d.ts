import { TransactionSummaryAsyncRetriever, TransactionSummaryColumn } from '../../../../../../../../../../../src/models/block_explorer/transaction_summary';
import { TaggedBase64 } from '../../../../../../../../../../../src/models/espresso/tagged_base64/TaggedBase64';
import { default as React } from 'react';
import { DataTableState } from '../../data/data_table/DataTable';

export interface TransactionSummary {
    hash: TaggedBase64;
    rollups: number[];
    block: number;
    offset: number;
    time: Date;
}
/**
 * RetrieverContext is a React Context that holds a reference to a
 * TransactionSummaryAsyncRetriever
 */
export declare const TransactionSummaryAsyncRetrieverContext: React.Context<TransactionSummaryAsyncRetriever>;
export interface TransactionSummaryDataTableState extends DataTableState<TransactionSummaryColumn> {
    height?: number;
    offset?: number;
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
export interface TransactionsNavigationProps {
    className?: string;
}
export declare const TransactionsNavigation: React.FC<TransactionsNavigationProps>;

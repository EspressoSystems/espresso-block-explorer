import React from 'react';
import { RollUpDetailAsyncRetriever } from '../../../types/data_source/rollup_detail/types';
import { TransactionSummaryColumn } from '../../../types/data_source/transaction_summary/types';
import { DataTableState } from '../../data/data_table/DataTable';
/**
 * NamespaceContext is a React Context that holds a reference to the
 * current Namespace
 */
export declare const NamespaceContext: React.Context<number>;
/**
 * RetrieverContext is a React Context that holds a reference to a
 * RollUpDetailAsyncRetriever
 */
export declare const RollUpDetailAsyncRetrieverContext: React.Context<RollUpDetailAsyncRetriever>;
export interface RollUpDetailDataTableState extends DataTableState<TransactionSummaryColumn> {
    height?: number;
    offset?: number;
}
export interface RollUpDetailsDataLoaderProps {
    startAtBlock?: number;
    offset?: number;
    children: React.ReactNode | React.ReactNode[];
}
/**
 * RollUpDetailsDataLoader uses the Retriever from the
 * RetrieverContext and kicks off requests using the state retrieved
 * by the DataTableStateContext.
 */
export declare const RollUpDetailsDataLoader: React.FC<RollUpDetailsDataLoaderProps>;

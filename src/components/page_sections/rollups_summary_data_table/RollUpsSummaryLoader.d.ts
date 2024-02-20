import React from 'react';
import { BlockSummaryColumn } from '../../../types/data_source/block_summary/types';
import { RollUpSummaryAsyncRetriever } from '../../../types/data_source/rollup_summary/types';
import { DataTableState } from '../../data/data_table/DataTable';
export interface RollUpSummary {
    namespace: number;
    transactions: number;
}
export interface RollUpsSummaryDatatTableState extends DataTableState<BlockSummaryColumn> {
}
/**
 * RetrieverContext represents the retriever to be utilized for retrieving
 * the BlockSummary data.
 */
export declare const RollUpSummaryAsyncRetrieverContext: React.Context<RollUpSummaryAsyncRetriever>;
export interface RollUpsSummaryLoaderProps {
    children: React.ReactNode | React.ReactNode[];
}
export declare const RollUpsSummaryLoader: React.FC<RollUpsSummaryLoaderProps>;

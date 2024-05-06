import { DataTableState } from '../../data/data_table/DataTable';
import { default as React } from 'react';
import { RollUpSummaryAsyncRetriever } from '../../../../../../../../../../../src/models/block_explorer/rollup_summary';
import { BlockSummaryColumn } from '../../../../../../../../../../../src/models/block_explorer/block_summary';

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

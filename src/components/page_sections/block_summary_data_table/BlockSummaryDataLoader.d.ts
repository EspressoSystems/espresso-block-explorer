import { DataTableState } from '../../data/data_table/DataTable';
import { default as React } from 'react';
import { BlockSummaryAsyncRetriever, BlockSummaryColumn } from '../../../../../../../../../../../src/models/block_explorer/block_summary';

export interface BlockSummary {
    block: number;
    proposer: ArrayBuffer;
    transactions: number;
    size: number;
    time: Date;
}
export interface BlockSummaryDataTableState extends DataTableState<BlockSummaryColumn> {
    startAtBlock?: number;
}
/**
 * RetrieverContext represents the retriever to be utilized for retrieving
 * the BlockSummary data.
 */
export declare const BlockSummaryAsyncRetrieverContext: React.Context<BlockSummaryAsyncRetriever>;
export interface BlockSummaryDataLoaderProps {
    startAtBlock?: number;
    children?: React.ReactNode | React.ReactNode[];
}
/**
 * BlockSummaryDataLoader is a component that provides the initial state of
 * the Block Summary state, and loads the data.
 * @returns
 */
export declare const BlockSummaryDataLoader: React.FC<BlockSummaryDataLoaderProps>;
export interface BlocksNavigationProps {
    className?: string;
}
export declare const BlocksNavigation: React.FC<BlocksNavigationProps>;

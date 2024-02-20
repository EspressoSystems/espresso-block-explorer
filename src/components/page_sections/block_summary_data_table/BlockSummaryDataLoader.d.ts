import React from 'react';
import { TaggedBase64 } from '../../../types/TaggedBase64';
import { BlockSummaryAsyncRetriever, BlockSummaryColumn } from '../../../types/data_source/block_summary/types';
import { DataTableState } from '../../data/data_table/DataTable';
export interface BlockSummary {
    block: number;
    proposer: TaggedBase64;
    transactions: number;
    size: number;
    time: Date;
}
export interface BlockSummaryDataTableState extends DataTableState<BlockSummaryColumn> {
    startAtBlock?: number;
}
export declare const kBlocksPerPage = 20;
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

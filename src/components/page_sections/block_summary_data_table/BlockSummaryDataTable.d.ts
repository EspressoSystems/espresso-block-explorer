import React from 'react';
import { TaggedBase64 } from '../../../types/TaggedBase64';
import { BlockSummaryAsyncRetriever } from '../../../types/data_source/block_summary/types';
export interface BlockSummary {
    block: number;
    proposer: TaggedBase64;
    transactions: number;
    size: number;
    time: Date;
}
/**
 * RetrieverContext represents the retriever to be utilized for retrieving
 * the BlockSummary data.
 */
export declare const RetrieverContext: React.Context<BlockSummaryAsyncRetriever>;
export interface BlocksSummaryProps {
    startAtBlock?: number;
    children?: React.ReactNode | React.ReactNode[];
}
/**
 * BlocksSummary is a component that provides the initial state of the Block
 * Summary state, and loads the data.
 * @returns
 */
declare const BlocksSummary: React.FC<BlocksSummaryProps>;
export default BlocksSummary;

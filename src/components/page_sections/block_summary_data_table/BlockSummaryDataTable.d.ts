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
export declare const RetrieverContext: React.Context<BlockSummaryAsyncRetriever>;
declare const BlocksSummary: React.FC;
export default BlocksSummary;

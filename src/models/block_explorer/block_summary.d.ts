import { BlockDetailEntry } from './block_detail';
import { AsyncRetriever } from '../../../../../../../../../../src/async/AsyncRetriever';

export type BlockSummaryEntry = Pick<BlockDetailEntry, 'height' | 'proposer' | 'size' | 'time' | 'transactions'>;
export declare enum BlockSummaryColumn {
    height = "height",
    proposer = "proposer",
    size = "size",
    time = "time",
    transactions = "transaction"
}
export interface BlockSummaryRequest {
    startAtBlock?: number;
    blocksPerPage?: number;
}
export interface BlockSummaryAsyncRetriever extends AsyncRetriever<BlockSummaryRequest, BlockSummaryEntry[]> {
}

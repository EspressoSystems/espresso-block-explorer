import { TransactionSummaryEntry } from './transaction_summary';
import { BlockSummaryEntry } from './block_summary';
import { BlockDetailEntry } from './block_detail';
import { AsyncRetriever } from '../../../../../../../../../../src/async/AsyncRetriever';

export interface GenesisOverviewEntry {
    readonly rollups: number;
    readonly transactions: number;
    readonly blocks: number;
}
export interface HistogramEntry {
    readonly blockTime: number[];
    readonly blockSize: number[];
    readonly blockTransactions: number[];
    readonly blockThroughput: number[];
    readonly blocks: number[];
}
export interface ExplorerSummaryEntry {
    readonly latestBlock: BlockDetailEntry;
    readonly genesisOverview: GenesisOverviewEntry;
    readonly latestBlocks: BlockSummaryEntry[];
    readonly latestTransactions: TransactionSummaryEntry[];
    readonly histograms: HistogramEntry;
}
export interface ExplorerSummaryAsyncRetriever extends AsyncRetriever<void, ExplorerSummaryEntry> {
}

import { AsyncRetriever } from '../../../../../../../../../../src/async/AsyncRetriever';
import { BlockDetailEntry } from './block_detail';
import { BlockSummaryEntry } from './block_summary';
import { TransactionSummaryEntry } from './transaction_summary';

export interface GenesisOverviewEntry {
    readonly rollups: number;
    readonly transactions: number;
    readonly blocks: number;
}
export interface HistogramEntry {
    readonly blockTime: (number | null)[];
    readonly blockSize: (number | null)[];
    readonly blockTransactions: (number | null)[];
    readonly blockThroughput: (number | null)[];
    readonly blocks: (number | null)[];
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

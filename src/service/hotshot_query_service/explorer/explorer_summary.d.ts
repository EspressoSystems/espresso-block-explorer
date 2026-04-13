import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { ExplorerBlockDetail } from './block_detail';
import { ExplorerBlockSummary } from './block_summary';
import { GenesisOverview } from './genesis_overview';
import { SummaryHistograms } from './summary_histograms';
import { ExplorerTransactionSummary } from './transaction_summary';
/**
 * ExplorerSummary is a class that represents the summary of the recent chain
 * history, as a snapshot.
 */
export declare class ExplorerSummary {
    readonly latestBlock: ExplorerBlockDetail;
    readonly genesisOverview: GenesisOverview;
    readonly latestBlocks: ExplorerBlockSummary[];
    readonly latestTransactions: ExplorerTransactionSummary[];
    readonly histograms: SummaryHistograms;
    constructor(latestBlock: ExplorerBlockDetail, genesisOverview: GenesisOverview, latestBlocks: ExplorerBlockSummary[], latestTransactions: ExplorerTransactionSummary[], histograms: SummaryHistograms);
    toJSON(): {
        latest_block: unknown;
        genesis_overview: {
            rollups: number;
            transactions: number;
            blocks: number;
        };
        latest_blocks: unknown[];
        latest_transactions: {
            hash: string;
            rollups: number[];
            height: number;
            time: string;
            offset: number;
            num_transactions: number;
        }[];
        histograms: {
            block_time: (number | null)[];
            block_size: (number | null)[];
            block_transactions: (number | null)[];
            block_heights: (number | null)[];
        };
    };
}
declare class ExplorerSummaryDecoder implements Converter<unknown, ExplorerSummary> {
    convert(input: unknown): ExplorerSummary;
}
declare class ExplorerSummaryEncoder implements Converter<ExplorerSummary> {
    convert(input: ExplorerSummary): {
        latest_block: unknown;
        genesis_overview: {
            rollups: number;
            transactions: number;
            blocks: number;
        };
        latest_blocks: unknown[];
        latest_transactions: {
            hash: string;
            rollups: number[];
            height: number;
            time: string;
            offset: number;
            num_transactions: number;
        }[];
        histograms: {
            block_time: (number | null)[];
            block_size: (number | null)[];
            block_transactions: (number | null)[];
            block_heights: (number | null)[];
        };
    };
}
declare class ExplorerSummaryCodec extends TypeCheckingCodec<ExplorerSummary, ReturnType<InstanceType<new () => ExplorerSummaryEncoder>['convert']>> {
    readonly encoder: ExplorerSummaryEncoder;
    readonly decoder: ExplorerSummaryDecoder;
}
export declare const explorerSummaryCodec: ExplorerSummaryCodec;
export {};

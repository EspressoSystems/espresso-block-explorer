import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { CappuccinoExplorerBlockDetail } from './block_detail';
import { CappuccinoExplorerBlockSummary } from './block_summary';
import { CappuccinoGenesisOverview } from './genesis_overview';
import { CappuccinoSummaryHistograms } from './summary_histograms';
import { CappuccinoExplorerTransactionSummary } from './transaction_summary';

export declare class CappuccinoExplorerSummary {
    readonly latestBlock: CappuccinoExplorerBlockDetail;
    readonly genesisOverview: CappuccinoGenesisOverview;
    readonly latestBlocks: CappuccinoExplorerBlockSummary[];
    readonly latestTransactions: CappuccinoExplorerTransactionSummary[];
    readonly histograms: CappuccinoSummaryHistograms;
    constructor(latestBlock: CappuccinoExplorerBlockDetail, genesisOverview: CappuccinoGenesisOverview, latestBlocks: CappuccinoExplorerBlockSummary[], latestTransactions: CappuccinoExplorerTransactionSummary[], histograms: CappuccinoSummaryHistograms);
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
            block_time: number[];
            block_size: number[];
            block_transactions: number[];
            block_heights: number[];
        };
    };
}
declare class CappuccinoExplorerSummaryDecoder implements Converter<unknown, CappuccinoExplorerSummary> {
    convert(input: unknown): CappuccinoExplorerSummary;
}
declare class CappuccinoExplorerSummaryEncoder implements Converter<CappuccinoExplorerSummary> {
    convert(input: CappuccinoExplorerSummary): {
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
            block_time: number[];
            block_size: number[];
            block_transactions: number[];
            block_heights: number[];
        };
    };
}
declare class CappuccinoExplorerSummaryCodec extends TypeCheckingCodec<CappuccinoExplorerSummary, ReturnType<InstanceType<new () => CappuccinoExplorerSummaryEncoder>['convert']>> {
    readonly encoder: CappuccinoExplorerSummaryEncoder;
    readonly decoder: CappuccinoExplorerSummaryDecoder;
}
export declare const cappuccinoExplorerSummaryCodec: CappuccinoExplorerSummaryCodec;
export {};

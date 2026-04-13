import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
/**
 * SummaryHistograms is a class that contains the histogram data for the
 * summary information presented on the Block Explorer.
 */
export declare class SummaryHistograms {
    readonly blockTime: (null | number)[];
    readonly blockSize: (null | number)[];
    readonly blockTransactions: (null | number)[];
    readonly blockHeights: (null | number)[];
    constructor(blockTime: (null | number)[], blockSize: (null | number)[], blockTransactions: (null | number)[], blockHeights: (null | number)[]);
    toJSON(): {
        block_time: (number | null)[];
        block_size: (number | null)[];
        block_transactions: (number | null)[];
        block_heights: (number | null)[];
    };
}
declare class SummaryHistogramsDecoder implements Converter<unknown, SummaryHistograms> {
    convert(input: unknown): SummaryHistograms;
}
declare class SummaryHistogramsEncoder implements Converter<SummaryHistograms> {
    convert(input: SummaryHistograms): {
        block_time: (number | null)[];
        block_size: (number | null)[];
        block_transactions: (number | null)[];
        block_heights: (number | null)[];
    };
}
declare class SummaryHistogramsCodec extends TypeCheckingCodec<SummaryHistograms, ReturnType<InstanceType<new () => SummaryHistogramsEncoder>['convert']>> {
    readonly encoder: SummaryHistogramsEncoder;
    readonly decoder: SummaryHistogramsDecoder;
}
export declare const summaryHistogramsCodec: SummaryHistogramsCodec;
export {};

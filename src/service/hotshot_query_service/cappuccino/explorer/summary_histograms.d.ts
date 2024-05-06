import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';

export declare class CappuccinoSummaryHistograms {
    readonly blockTime: number[];
    readonly blockSize: number[];
    readonly blockTransactions: number[];
    readonly blockHeights: number[];
    constructor(blockTime: number[], blockSize: number[], blockTransactions: number[], blockHeights: number[]);
    toJSON(): {
        block_time: number[];
        block_size: number[];
        block_transactions: number[];
        block_heights: number[];
    };
}
declare class CappuccinoSummaryHistogramsDecoder implements Converter<unknown, CappuccinoSummaryHistograms> {
    convert(input: unknown): CappuccinoSummaryHistograms;
}
declare class CappuccinoSummaryHistogramsEncoder implements Converter<CappuccinoSummaryHistograms> {
    convert(input: CappuccinoSummaryHistograms): {
        block_time: number[];
        block_size: number[];
        block_transactions: number[];
        block_heights: number[];
    };
}
declare class CappuccinoSummaryHistogramsCodec extends TypeCheckingCodec<CappuccinoSummaryHistograms, ReturnType<InstanceType<new () => CappuccinoSummaryHistogramsEncoder>['convert']>> {
    readonly encoder: CappuccinoSummaryHistogramsEncoder;
    readonly decoder: CappuccinoSummaryHistogramsDecoder;
}
export declare const cappuccinoSummaryHistogramsCodec: CappuccinoSummaryHistogramsCodec;
export {};

import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
export declare class CappuccinoSummaryHistograms {
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
declare class CappuccinoSummaryHistogramsDecoder implements Converter<unknown, CappuccinoSummaryHistograms> {
    convert(input: unknown): CappuccinoSummaryHistograms;
}
declare class CappuccinoSummaryHistogramsEncoder implements Converter<CappuccinoSummaryHistograms> {
    convert(input: CappuccinoSummaryHistograms): {
        block_time: (number | null)[];
        block_size: (number | null)[];
        block_transactions: (number | null)[];
        block_heights: (number | null)[];
    };
}
declare class CappuccinoSummaryHistogramsCodec extends TypeCheckingCodec<CappuccinoSummaryHistograms, ReturnType<InstanceType<new () => CappuccinoSummaryHistogramsEncoder>['convert']>> {
    readonly encoder: CappuccinoSummaryHistogramsEncoder;
    readonly decoder: CappuccinoSummaryHistogramsDecoder;
}
export declare const cappuccinoSummaryHistogramsCodec: CappuccinoSummaryHistogramsCodec;
export {};

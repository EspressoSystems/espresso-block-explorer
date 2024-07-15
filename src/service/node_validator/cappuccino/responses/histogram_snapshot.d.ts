import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { CappuccinoSummaryHistograms } from '../../../../../../../../../../../../src/service/hotshot_query_service/cappuccino/explorer/summary_histograms';
import { default as CappuccinoNodeValidatorResponse } from './node_validator_response';

export declare const kCappuccinoHistogramSnapshotType: "HistogramSnapshot";
export declare class CappuccinoHistogramSnapshot extends CappuccinoNodeValidatorResponse {
    readonly histograms: CappuccinoSummaryHistograms;
    get type(): "HistogramSnapshot";
    constructor(histograms: CappuccinoSummaryHistograms);
    toJSON(): {
        histograms: {
            block_time: number[];
            block_size: number[];
            block_transactions: number[];
            block_heights: number[];
        };
        type: "HistogramSnapshot";
    };
}
declare class CappuccinoHistogramSnapshotDecoder implements Converter<unknown, CappuccinoHistogramSnapshot> {
    convert(input: unknown): CappuccinoHistogramSnapshot;
}
declare class CappuccinoHistogramSnapshotEncoder implements Converter<CappuccinoHistogramSnapshot> {
    convert(input: CappuccinoHistogramSnapshot): {
        histograms: {
            block_time: number[];
            block_size: number[];
            block_transactions: number[];
            block_heights: number[];
        };
        type: "HistogramSnapshot";
    };
}
declare class CappuccinoHistogramSnapshotCodec extends TypeCheckingCodec<CappuccinoHistogramSnapshot, ReturnType<InstanceType<new () => CappuccinoHistogramSnapshotEncoder>['convert']>> {
    readonly encoder: CappuccinoHistogramSnapshotEncoder;
    readonly decoder: CappuccinoHistogramSnapshotDecoder;
}
export declare const cappuccinoHistogramSnapshotCodec: CappuccinoHistogramSnapshotCodec;
export {};

import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { CappuccinoSummaryHistograms } from '../../../../../../../../../../../../src/service/hotshot_query_service/cappuccino/explorer/summary_histograms';
import { default as CappuccinoNodeValidatorResponse } from './node_validator_response';

/**
 * Messages from the Cappuccino Node Validator take the form of:
 * { "MessageType": MessageType }
 */
/**
 * kCappuccinoHistogramSnapshotType is the type string for the
 * CappuccinoHistogramSnapshot class.
 */
export declare const kCappuccinoHistogramSnapshotType: "HistogramSnapshot";
/**
 * CappuccinoHistogramSnapshot is a response from the Cappuccino node
 * validator that contains a snapshot of the histograms in the network.
 */
export declare class CappuccinoHistogramSnapshot extends CappuccinoNodeValidatorResponse {
    readonly histograms: CappuccinoSummaryHistograms;
    constructor(histograms: CappuccinoSummaryHistograms);
    toJSON(): {
        HistogramSnapshot: {
            block_time: number[];
            block_size: number[];
            block_transactions: number[];
            block_heights: number[];
        };
    };
}
declare class CappuccinoHistogramSnapshotDecoder implements Converter<unknown, CappuccinoHistogramSnapshot> {
    convert(input: unknown): CappuccinoHistogramSnapshot;
}
declare class CappuccinoHistogramSnapshotEncoder implements Converter<CappuccinoHistogramSnapshot> {
    convert(input: CappuccinoHistogramSnapshot): {
        HistogramSnapshot: {
            block_time: number[];
            block_size: number[];
            block_transactions: number[];
            block_heights: number[];
        };
    };
}
declare class CappuccinoHistogramSnapshotCodec extends TypeCheckingCodec<CappuccinoHistogramSnapshot, ReturnType<InstanceType<new () => CappuccinoHistogramSnapshotEncoder>['convert']>> {
    readonly encoder: CappuccinoHistogramSnapshotEncoder;
    readonly decoder: CappuccinoHistogramSnapshotDecoder;
}
export declare const cappuccinoHistogramSnapshotCodec: CappuccinoHistogramSnapshotCodec;
export {};

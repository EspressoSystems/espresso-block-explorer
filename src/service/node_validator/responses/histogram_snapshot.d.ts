import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { SummaryHistograms } from '../../../../../../../../../../../src/service/hotshot_query_service/explorer/summary_histograms';
import { default as NodeValidatorResponse } from './node_validator_response';
/**
 * Messages from the Node Validator take the form of:
 * { "MessageType": MessageType }
 */
/**
 * kHistogramSnapshotType is the type string for the HistogramSnapshot class.
 */
export declare const kHistogramSnapshotType: "HistogramSnapshot";
/**
 * HistogramSnapshot is a response from the node validator that contains a
 * snapshot of the histograms in the network.
 */
export declare class HistogramSnapshot extends NodeValidatorResponse {
    readonly histograms: SummaryHistograms;
    constructor(histograms: SummaryHistograms);
    toJSON(): {
        HistogramSnapshot: {
            block_time: (number | null)[];
            block_size: (number | null)[];
            block_transactions: (number | null)[];
            block_heights: (number | null)[];
        };
    };
}
declare class HistogramSnapshotDecoder implements Converter<unknown, HistogramSnapshot> {
    convert(input: unknown): HistogramSnapshot;
}
declare class HistogramSnapshotEncoder implements Converter<HistogramSnapshot> {
    convert(input: HistogramSnapshot): {
        HistogramSnapshot: {
            block_time: (number | null)[];
            block_size: (number | null)[];
            block_transactions: (number | null)[];
            block_heights: (number | null)[];
        };
    };
}
declare class HistogramSnapshotCodec extends TypeCheckingCodec<HistogramSnapshot, ReturnType<InstanceType<new () => HistogramSnapshotEncoder>['convert']>> {
    readonly encoder: HistogramSnapshotEncoder;
    readonly decoder: HistogramSnapshotDecoder;
}
export declare const histogramSnapshotCodec: HistogramSnapshotCodec;
export {};

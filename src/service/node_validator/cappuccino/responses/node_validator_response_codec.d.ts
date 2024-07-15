import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { default as CappuccinoNodeValidatorResponse } from './node_validator_response';

declare class CappuccinoNodeValidatorResponseDecoder implements Converter<unknown, CappuccinoNodeValidatorResponse> {
    convert(input: unknown): CappuccinoNodeValidatorResponse;
}
declare class CappuccinoNodeValidatorResponseEncoder implements Converter<CappuccinoNodeValidatorResponse> {
    convert(input: CappuccinoNodeValidatorResponse): {
        histograms: {
            block_time: number[];
            block_size: number[];
            block_transactions: number[];
            block_heights: number[];
        };
        type: "HistogramSnapshot";
    } | {
        latestBlock: unknown;
        type: "LatestBlockSnapshot";
    } | {
        nodes: unknown[];
        type: "NodeIdentitySnapshot";
    };
}
declare class CappuccinoNodeValidatorResponseCodec extends TypeCheckingCodec<CappuccinoNodeValidatorResponse, ReturnType<InstanceType<new () => CappuccinoNodeValidatorResponseEncoder>['convert']>> {
    readonly encoder: CappuccinoNodeValidatorResponseEncoder;
    readonly decoder: CappuccinoNodeValidatorResponseDecoder;
}
export declare const cappuccinoNodeValidatorResponseCodec: CappuccinoNodeValidatorResponseCodec;
export {};

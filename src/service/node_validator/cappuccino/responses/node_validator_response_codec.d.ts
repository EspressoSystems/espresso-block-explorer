import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { default as CappuccinoNodeValidatorResponse } from './node_validator_response';

declare class CappuccinoNodeValidatorResponseDecoder implements Converter<unknown, CappuccinoNodeValidatorResponse> {
    convert(input: unknown): CappuccinoNodeValidatorResponse;
}
declare class CappuccinoNodeValidatorResponseEncoder implements Converter<CappuccinoNodeValidatorResponse> {
    convert(input: CappuccinoNodeValidatorResponse): {
        BlocksSnapshot: unknown[];
    } | {
        HistogramSnapshot: {
            block_time: number[];
            block_size: number[];
            block_transactions: number[];
            block_heights: number[];
        };
    } | {
        LatestBlock: unknown;
    } | {
        LatestNodeIdentity: unknown;
    } | {
        LatestVoters: {
            order: string;
            head: {
                width: number;
                index: number;
            };
            bits: number;
            data: number[];
        };
    } | {
        NodeIdentitySnapshot: unknown[];
    } | {
        VotersSnapshot: {
            order: string;
            head: {
                width: number;
                index: number;
            };
            bits: number;
            data: number[];
        }[];
    };
}
declare class CappuccinoNodeValidatorResponseCodec extends TypeCheckingCodec<CappuccinoNodeValidatorResponse, ReturnType<InstanceType<new () => CappuccinoNodeValidatorResponseEncoder>['convert']>> {
    readonly encoder: CappuccinoNodeValidatorResponseEncoder;
    readonly decoder: CappuccinoNodeValidatorResponseDecoder;
}
export declare const cappuccinoNodeValidatorResponseCodec: CappuccinoNodeValidatorResponseCodec;
export {};

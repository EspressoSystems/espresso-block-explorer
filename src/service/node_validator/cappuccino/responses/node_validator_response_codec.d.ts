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
            block_time: (number | null)[];
            block_size: (number | null)[];
            block_transactions: (number | null)[];
            block_heights: (number | null)[];
        };
    } | {
        LatestBlock: unknown;
    } | {
        LatestNodeIdentity: unknown;
    } | {
        LatestStakeTable: unknown[];
    } | {
        LatestValidator: unknown;
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
        StakeTableSnapshot: unknown[];
    } | {
        ValidatorsSnapshot: unknown[];
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

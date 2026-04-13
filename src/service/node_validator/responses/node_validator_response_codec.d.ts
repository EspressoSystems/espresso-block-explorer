import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { default as NodeValidatorResponse } from './node_validator_response';
declare class NodeValidatorResponseDecoder implements Converter<unknown, NodeValidatorResponse> {
    convert(input: unknown): NodeValidatorResponse;
}
declare class NodeValidatorResponseEncoder implements Converter<NodeValidatorResponse> {
    convert(input: NodeValidatorResponse): {
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
        LatestStakeTable: unknown[];
    } | {
        LatestVoters: {
            order: string;
            head: {
                width: number;
                index: number;
            };
            bits: number;
            data: `0x${string}`[];
        };
    } | {
        NodeIdentitySnapshot: unknown[];
    } | {
        LatestNodeIdentity: unknown;
    } | {
        LatestValidator: unknown;
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
            data: `0x${string}`[];
        }[];
    };
}
declare class NodeValidatorResponseCodec extends TypeCheckingCodec<NodeValidatorResponse, ReturnType<InstanceType<new () => NodeValidatorResponseEncoder>['convert']>> {
    readonly encoder: NodeValidatorResponseEncoder;
    readonly decoder: NodeValidatorResponseDecoder;
}
export declare const nodeValidatorResponseCodec: NodeValidatorResponseCodec;
export {};

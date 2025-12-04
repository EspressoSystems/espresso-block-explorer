import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { WebWorkerProxyResponse } from '../../../../../../../../../../../../src/models/web_worker/web_worker_proxy_response';
import { default as CappuccinoNodeValidatorResponse } from './node_validator_response';
export declare const kNodeValidatorServiceResponseType: "NodeValidatorResponse";
export declare class NodeValidatorServiceResponse extends WebWorkerProxyResponse {
    readonly response: CappuccinoNodeValidatorResponse;
    get type(): string;
    constructor(response: CappuccinoNodeValidatorResponse);
    toJSON(): {
        NodeValidatorResponse: {
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
                data: `0x${string}`[];
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
                data: `0x${string}`[];
            }[];
        };
    };
}
declare class NodeValidatorServiceResponseEncoder implements Converter<NodeValidatorServiceResponse> {
    convert(input: NodeValidatorServiceResponse): {
        NodeValidatorResponse: {
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
                data: `0x${string}`[];
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
                data: `0x${string}`[];
            }[];
        };
    };
}
declare class NodeValidatorServiceResponseDecoder implements Converter<unknown, NodeValidatorServiceResponse> {
    convert(input: unknown): NodeValidatorServiceResponse;
}
declare class NodeValidatorServiceResponseCodec extends TypeCheckingCodec<NodeValidatorServiceResponse, ReturnType<InstanceType<new () => NodeValidatorServiceResponseEncoder>['convert']>> {
    readonly encoder: NodeValidatorServiceResponseEncoder;
    readonly decoder: NodeValidatorServiceResponseDecoder;
}
export declare const nodeValidatorServiceResponseCodec: NodeValidatorServiceResponseCodec;
declare class NodeValidatorResponseToWebWorkerProxyResponseConverter implements Converter<CappuccinoNodeValidatorResponse, WebWorkerProxyResponse> {
    convert(input: CappuccinoNodeValidatorResponse): WebWorkerProxyResponse;
}
export declare const nodeValidatorResponseToWebWorkerProxyResponseConverter: NodeValidatorResponseToWebWorkerProxyResponseConverter;
export {};

import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { EspressoError } from '../../../../../../../../../../../../src/errors/EspressoError';
import { default as CappuccinoNodeValidatorResponse } from './node_validator_response';
import { default as WebWorkerLifeCycleResponse } from './web_worker_life_cycle_response';

export declare abstract class WebWorkerProxyResponse {
}
export declare const kNodeValidatorResponseType: "NodeValidatorResponse";
export declare class NodeValidatorResponse extends WebWorkerProxyResponse {
    readonly response: CappuccinoNodeValidatorResponse;
    constructor(response: CappuccinoNodeValidatorResponse);
    toJson(): {
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
    };
}
declare class NodeValidatorResponseEncoder implements Converter<NodeValidatorResponse> {
    convert(input: NodeValidatorResponse): {
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
    };
}
declare class NodeValidatorResponseDecoder implements Converter<unknown, NodeValidatorResponse> {
    convert(input: unknown): NodeValidatorResponse;
}
declare class NodeValidatorResponseCodec extends TypeCheckingCodec<NodeValidatorResponse, ReturnType<InstanceType<new () => NodeValidatorResponseEncoder>['convert']>> {
    readonly encoder: NodeValidatorResponseEncoder;
    readonly decoder: NodeValidatorResponseDecoder;
}
export declare const nodeValidatorResponseCodec: NodeValidatorResponseCodec;
export declare class LifeCycleResponse extends WebWorkerProxyResponse {
    readonly response: WebWorkerLifeCycleResponse;
    constructor(response: WebWorkerLifeCycleResponse);
    toJson(): "ConnectionClosed" | "ConnectionConnecting" | "ConnectionOpened";
}
export declare const kLifeCycleResponseType: "LifeCycleResponse";
declare class LifeCycleResponseEncoder implements Converter<LifeCycleResponse> {
    convert(input: LifeCycleResponse): {
        LifeCycleResponse: "ConnectionClosed" | "ConnectionConnecting" | "ConnectionOpened";
    };
}
declare class LifeCycleResponseDecoder implements Converter<unknown, LifeCycleResponse> {
    convert(input: unknown): LifeCycleResponse;
}
declare class LifeCycleResponseCodec extends TypeCheckingCodec<LifeCycleResponse, ReturnType<InstanceType<new () => LifeCycleResponseEncoder>['convert']>> {
    readonly encoder: LifeCycleResponseEncoder;
    readonly decoder: LifeCycleResponseDecoder;
}
export declare const lifeCycleResponseCodec: LifeCycleResponseCodec;
export declare const kErrorResponseType: "ErrorResponse";
export declare class ErrorResponse extends WebWorkerProxyResponse {
    readonly error: EspressoError;
    constructor(error: EspressoError);
    toJson(): {
        ErrorResponse: unknown;
    };
}
declare class ErrorResponseEncoder implements Converter<ErrorResponse> {
    convert(input: ErrorResponse): {
        ErrorResponse: unknown;
    };
}
declare class ErrorResponseDecoder implements Converter<unknown, ErrorResponse> {
    convert(input: unknown): ErrorResponse;
}
declare class ErrorResponseCodec extends TypeCheckingCodec<ErrorResponse, ReturnType<InstanceType<new () => ErrorResponseEncoder>['convert']>> {
    readonly encoder: ErrorResponseEncoder;
    readonly decoder: ErrorResponseDecoder;
}
export declare const errorResponseCodec: ErrorResponseCodec;
declare class NodeValidatorResponseToWebWorkerProxyResponseConverter implements Converter<CappuccinoNodeValidatorResponse, WebWorkerProxyResponse> {
    convert(input: CappuccinoNodeValidatorResponse): WebWorkerProxyResponse;
}
export declare const nodeValidatorResponseToWebWorkerProxyResponseConverter: NodeValidatorResponseToWebWorkerProxyResponseConverter;
declare class LifeCycleResponseToWebWorkerProxyResponseConverter implements Converter<WebWorkerLifeCycleResponse, WebWorkerProxyResponse> {
    convert(input: WebWorkerLifeCycleResponse): WebWorkerProxyResponse;
}
export declare const lifeCycleResponseToWebWorkerProxyResponseConverter: LifeCycleResponseToWebWorkerProxyResponseConverter;
declare class EspressoErrorResponseToWebWorkerProxyResponseConverter implements Converter<unknown, WebWorkerProxyResponse> {
    convert(input: EspressoError): WebWorkerProxyResponse;
}
export declare const espressoErrorResponseToWebWorkerProxyResponseConverter: EspressoErrorResponseToWebWorkerProxyResponseConverter;
export {};

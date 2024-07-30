import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { default as CappuccinoNodeValidatorRequest } from './node_validator_request';
import { default as WebWorkerLifeCycleRequest } from './web_worker_life_cycle_request';

export declare abstract class WebWorkerProxyRequest {
}
export declare const kLifeCycleRequestType: "LifeCycleRequest";
export declare class LifeCycleRequest extends WebWorkerProxyRequest {
    readonly request: WebWorkerLifeCycleRequest;
    constructor(request: WebWorkerLifeCycleRequest);
    toJson(): {
        LifeCycleRequest: string;
    };
}
declare class LifeCycleRequestEncoder implements Converter<LifeCycleRequest> {
    convert(input: LifeCycleRequest): {
        LifeCycleRequest: string;
    };
}
declare class LifeCycleRequestDecoder implements Converter<unknown, LifeCycleRequest> {
    convert(input: unknown): LifeCycleRequest;
}
declare class LifeCycleRequestCodec extends TypeCheckingCodec<LifeCycleRequest, ReturnType<InstanceType<new () => LifeCycleRequestEncoder>['convert']>> {
    readonly encoder: LifeCycleRequestEncoder;
    readonly decoder: LifeCycleRequestDecoder;
}
export declare const lifeCycleRequestCodec: LifeCycleRequestCodec;
export declare const kNodeValidatorRequestType: "NodeValidatorRequest";
export declare class NodeValidatorRequest extends WebWorkerProxyRequest {
    readonly request: CappuccinoNodeValidatorRequest;
    constructor(request: CappuccinoNodeValidatorRequest);
    toJson(): {
        NodeValidatorRequest: string;
    };
}
declare class NodeValidatorRequestEncoder implements Converter<NodeValidatorRequest> {
    convert(input: NodeValidatorRequest): {
        NodeValidatorRequest: string;
    };
}
declare class NodeValidatorRequestDecoder implements Converter<unknown, NodeValidatorRequest> {
    convert(input: unknown): NodeValidatorRequest;
}
declare class NodeValidatorRequestCodec extends TypeCheckingCodec<NodeValidatorRequest, ReturnType<InstanceType<new () => NodeValidatorRequestEncoder>['convert']>> {
    readonly encoder: NodeValidatorRequestEncoder;
    readonly decoder: NodeValidatorRequestDecoder;
}
export declare const nodeValidatorRequestCodec: NodeValidatorRequestCodec;
declare class LifeCycleRequestToWebWorkerProxyRequestConverter implements Converter<WebWorkerLifeCycleRequest, LifeCycleRequest> {
    convert(input: WebWorkerLifeCycleRequest): LifeCycleRequest;
}
export declare const lifeCycleRequestToWebWorkerProxyRequestConverter: LifeCycleRequestToWebWorkerProxyRequestConverter;
declare class NodeValidatorRequestToWebWorkerProxyRequestConverter implements Converter<CappuccinoNodeValidatorRequest, NodeValidatorRequest> {
    convert(input: CappuccinoNodeValidatorRequest): NodeValidatorRequest;
}
export declare const nodeValidatorRequestToWebWorkerProxyRequestConverter: NodeValidatorRequestToWebWorkerProxyRequestConverter;
export {};

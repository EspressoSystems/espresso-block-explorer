import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { WebWorkerProxyRequest } from '../../../../../../../../../../../../src/models/web_worker/web_worker_proxy_request';
import { default as CappuccinoNodeValidatorRequest } from './node_validator_request';
export declare const kNodeValidatorRequestType: "NodeValidatorRequest";
export declare class NodeValidatorServiceRequest extends WebWorkerProxyRequest {
    readonly request: CappuccinoNodeValidatorRequest;
    get type(): "NodeValidatorRequest";
    constructor(request: CappuccinoNodeValidatorRequest);
    toJSON(): {
        NodeValidatorRequest: string;
    };
}
declare class NodeValidatorServiceRequestEncoder implements Converter<NodeValidatorServiceRequest> {
    convert(input: NodeValidatorServiceRequest): {
        NodeValidatorRequest: string;
    };
}
declare class NodeValidatorServiceRequestDecoder implements Converter<unknown, NodeValidatorServiceRequest> {
    convert(input: unknown): NodeValidatorServiceRequest;
}
declare class NodeValidatorServiceRequestCodec extends TypeCheckingCodec<NodeValidatorServiceRequest, ReturnType<InstanceType<new () => NodeValidatorServiceRequestEncoder>['convert']>> {
    readonly encoder: NodeValidatorServiceRequestEncoder;
    readonly decoder: NodeValidatorServiceRequestDecoder;
}
export declare const nodeValidatorServiceRequestCodec: NodeValidatorServiceRequestCodec;
declare class NodeValidatorRequestToWebWorkerProxyRequestConverter implements Converter<CappuccinoNodeValidatorRequest, NodeValidatorServiceRequest> {
    convert(input: CappuccinoNodeValidatorRequest): NodeValidatorServiceRequest;
}
export declare const nodeValidatorRequestToWebWorkerProxyRequestConverter: NodeValidatorRequestToWebWorkerProxyRequestConverter;
export {};

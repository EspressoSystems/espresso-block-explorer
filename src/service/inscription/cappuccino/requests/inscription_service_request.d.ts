import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { WebWorkerProxyRequest } from '../../../../../../../../../../../../src/models/web_worker/web_worker_proxy_request';
import { default as CappuccinoInscriptionRequest } from './inscription_request';

export declare const kInscriptionRequestType: "Inscription";
export declare class InscriptionServiceRequest extends WebWorkerProxyRequest {
    readonly request: CappuccinoInscriptionRequest;
    get type(): string;
    constructor(Request: CappuccinoInscriptionRequest);
    toJson(): {
        Inscription: unknown;
    };
}
declare class InscriptionServiceRequestEncoder implements Converter<InscriptionServiceRequest> {
    convert(input: InscriptionServiceRequest): {
        Inscription: unknown;
    };
}
declare class InscriptionServiceRequestDecoder implements Converter<unknown, InscriptionServiceRequest> {
    convert(input: unknown): InscriptionServiceRequest;
}
declare class InscriptionServiceRequestCodec extends TypeCheckingCodec<InscriptionServiceRequest, ReturnType<InstanceType<new () => InscriptionServiceRequestEncoder>['convert']>> {
    readonly encoder: InscriptionServiceRequestEncoder;
    readonly decoder: InscriptionServiceRequestDecoder;
}
export declare const inscriptionServiceRequestCodec: InscriptionServiceRequestCodec;
declare class InscriptionRequestToWebWorkerProxyRequestConverter implements Converter<CappuccinoInscriptionRequest, WebWorkerProxyRequest> {
    convert(input: CappuccinoInscriptionRequest): WebWorkerProxyRequest;
}
export declare const inscriptionRequestToWebWorkerProxyRequestConverter: InscriptionRequestToWebWorkerProxyRequestConverter;
export {};

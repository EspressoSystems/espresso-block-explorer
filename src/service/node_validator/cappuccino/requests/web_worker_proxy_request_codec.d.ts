import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { WebWorkerProxyRequest } from './web_worker_proxy_request';

declare class WebWorkerProxyRequestEncoder implements Converter<WebWorkerProxyRequest, unknown> {
    convert(input: WebWorkerProxyRequest): unknown;
}
declare class WebWorkerProxyRequestDecoder implements Converter<unknown, WebWorkerProxyRequest> {
    convert(input: unknown): WebWorkerProxyRequest;
}
declare class WebWorkerProxyRequestCodec extends TypeCheckingCodec<WebWorkerProxyRequest, ReturnType<InstanceType<new () => WebWorkerProxyRequestEncoder>['convert']>> {
    readonly encoder: WebWorkerProxyRequestEncoder;
    readonly decoder: WebWorkerProxyRequestDecoder;
}
export declare const webWorkerProxyRequestCodec: WebWorkerProxyRequestCodec;
export {};

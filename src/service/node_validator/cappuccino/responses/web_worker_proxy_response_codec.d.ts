import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec';
import { WebWorkerProxyResponse } from './web_worker_proxy_response';

declare class WebWorkerProxyResponseEncoder implements Converter<WebWorkerProxyResponse> {
    convert(input: WebWorkerProxyResponse): unknown;
}
declare class WebWorkerProxyResponseDecoder implements Converter<unknown, WebWorkerProxyResponse> {
    convert(input: unknown): WebWorkerProxyResponse;
}
declare class WebWorkerProxyResponseCodec extends TypeCheckingCodec<WebWorkerProxyResponse, ReturnType<InstanceType<new () => WebWorkerProxyResponseEncoder>['convert']>> {
    readonly encoder: WebWorkerProxyResponseEncoder;
    readonly decoder: WebWorkerProxyResponseDecoder;
}
export declare const webWorkerProxyResponseCodec: WebWorkerProxyResponseCodec;
export {};

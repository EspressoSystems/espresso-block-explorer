import { Converter, TypeCheckingCodec } from '../../../../../../../../../../src/convert/codec';
import { default as WebSocketCommand } from './web_socket/request/web_socket_command';
import { WebWorkerProxyRequest } from './web_worker_proxy_request';

declare class WebWorkerProxyRequestEncoder implements Converter<WebWorkerProxyRequest, unknown> {
    convert(input: WebWorkerProxyRequest): {
        [x: string]: unknown;
    };
}
declare class WebWorkerProxyRequestDecoder implements Converter<unknown, WebWorkerProxyRequest> {
    convert(input: unknown): WebWorkerProxyRequest;
}
declare class WebWorkerProxyRequestCodec extends TypeCheckingCodec<WebWorkerProxyRequest, unknown> {
    readonly encoder: WebWorkerProxyRequestEncoder;
    readonly decoder: WebWorkerProxyRequestDecoder;
}
export declare function registerWebWorkerProxyRequestCodec(type: string, codec: TypeCheckingCodec<WebWorkerProxyRequest, unknown>): void;
export declare const webWorkerProxyRequestCodec: WebWorkerProxyRequestCodec;
declare class WebSocketCommandToWebWorkerProxyRequestConverter implements Converter<WebSocketCommand, WebWorkerProxyRequest> {
    convert(input: WebSocketCommand): WebWorkerProxyRequest;
}
export declare const webSocketCommandToWebWorkerProxyRequestConverter: WebSocketCommandToWebWorkerProxyRequestConverter;
export {};

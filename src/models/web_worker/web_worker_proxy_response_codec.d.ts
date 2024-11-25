import { Converter, TypeCheckingCodec } from '../../../../../../../../../../src/convert/codec';
import { EspressoError } from '../../../../../../../../../../src/errors/EspressoError';
import { ErrorResponse } from './error_response';
import { default as WebSocketStatus } from './web_socket/status/web_socket_status';
import { WebSocketResponse } from './web_socket/web_socket_response';
import { WebWorkerProxyResponse } from './web_worker_proxy_response';

declare class WebWorkerProxyResponseEncoder implements Converter<WebWorkerProxyResponse, unknown> {
    convert(input: WebWorkerProxyResponse): {
        [x: string]: unknown;
    };
}
declare class WebWorkerProxyResponseDecoder implements Converter<unknown, WebWorkerProxyResponse> {
    convert(input: unknown): WebWorkerProxyResponse;
}
declare class WebWorkerProxyResponseCodec extends TypeCheckingCodec<WebWorkerProxyResponse, unknown> {
    readonly encoder: WebWorkerProxyResponseEncoder;
    readonly decoder: WebWorkerProxyResponseDecoder;
}
export declare function registerWebWorkerProxyResponseCodec(type: string, codec: TypeCheckingCodec<WebWorkerProxyResponse, unknown>): void;
export declare const webWorkerProxyResponseCodec: WebWorkerProxyResponseCodec;
declare class EspressoErrorToWebWorkerProxyResponseConverter implements Converter<EspressoError, WebWorkerProxyResponse> {
    convert(input: EspressoError): ErrorResponse;
}
export declare const espressoErrorToWebWorkerProxyResponseConverter: EspressoErrorToWebWorkerProxyResponseConverter;
declare class WebSocketStatusToWebWorkerProxyResponseConverter implements Converter<WebSocketStatus, WebWorkerProxyResponse> {
    convert(input: WebSocketStatus): WebSocketResponse;
}
export declare const webSocketStatusToWebWorkerProxyResponseConverter: WebSocketStatusToWebWorkerProxyResponseConverter;
export {};

import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { WebWorkerProxyResponse } from '../web_worker_proxy_response';
import { default as WebSocketStatus } from './status/web_socket_status';

/**
 * WebSocketResponse represents a WebWorkerProxyResponse that conveys the
 * a message concerning a WebSocket connection.
 */
export declare class WebSocketResponse extends WebWorkerProxyResponse {
    readonly status: WebSocketStatus;
    get type(): string;
    constructor(status: WebSocketStatus);
    toJson(): {
        WebSocket: "Closed" | "Connecting" | "Opened";
    };
}
export declare const kWebSocketResponseType: "WebSocket";
declare class WebSocketResponseEncoder implements Converter<WebSocketResponse> {
    convert(input: WebSocketResponse): {
        WebSocket: "Closed" | "Connecting" | "Opened";
    };
}
declare class WebSocketResponseDecoder implements Converter<unknown, WebSocketResponse> {
    convert(input: unknown): WebSocketResponse;
}
declare class WebSocketResponseCodec extends TypeCheckingCodec<WebSocketResponse, ReturnType<InstanceType<new () => WebSocketResponseEncoder>['convert']>> {
    readonly encoder: WebSocketResponseEncoder;
    readonly decoder: WebSocketResponseDecoder;
}
export declare const webSocketResponseCodec: WebSocketResponseCodec;
export {};

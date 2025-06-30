import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { WebWorkerProxyRequest } from '../web_worker_proxy_request';
import { default as WebSocketCommand } from './request/web_socket_command';
/**
 * WebSocketRequest represents a WebWorkerProxyRequest that conveys the
 * a command to perform on the WebSocket connection.
 */
export declare class WebSocketRequest extends WebWorkerProxyRequest {
    readonly command: WebSocketCommand;
    get type(): string;
    constructor(command: WebSocketCommand);
    toJSON(): {
        WebSocket: unknown;
    };
}
export declare const kWebSocketRequestType: "WebSocket";
declare class WebSocketRequestEncoder implements Converter<WebSocketRequest> {
    convert(input: WebSocketRequest): {
        WebSocket: unknown;
    };
}
declare class WebSocketRequestDecoder implements Converter<unknown, WebSocketRequest> {
    convert(input: unknown): WebSocketRequest;
}
declare class WebSocketRequestCodec extends TypeCheckingCodec<WebSocketRequest, ReturnType<InstanceType<new () => WebSocketRequestEncoder>['convert']>> {
    readonly encoder: WebSocketRequestEncoder;
    readonly decoder: WebSocketRequestDecoder;
}
export declare const webSocketRequestCodec: WebSocketRequestCodec;
export {};

import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { default as WebSocketStatus } from './web_socket_status';
/**
 * kWebSocketStatusConnectionClosedType is the type string for the
 * WebSocketStatusConnectionClosed class.
 */
export declare const kWebSocketStatusConnectionClosedType: "Closed";
/**
 * WebSocketStatusConnectionClosed represents the status of a WebSocket
 * connection being closed.
 */
export declare class WebSocketStatusConnectionClosed extends WebSocketStatus {
    valueOf(): "Closed";
    toJSON(): "Closed";
}
declare class WebSocketStatusConnectionClosedDecoder implements Converter<unknown, WebSocketStatusConnectionClosed> {
    convert(input: unknown): WebSocketStatusConnectionClosed;
}
declare class WebSocketStatusConnectionClosedEncoder implements Converter<WebSocketStatusConnectionClosed> {
    convert(): "Closed";
}
declare class WebSocketStatusConnectionClosedCodec extends TypeCheckingCodec<WebSocketStatusConnectionClosed, ReturnType<InstanceType<new () => WebSocketStatusConnectionClosedEncoder>['convert']>> {
    readonly encoder: WebSocketStatusConnectionClosedEncoder;
    readonly decoder: WebSocketStatusConnectionClosedDecoder;
}
export declare const webSocketStatusConnectionClosedCodec: WebSocketStatusConnectionClosedCodec;
export {};

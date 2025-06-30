import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { default as WebSocketStatus } from './web_socket_status';
/**
 * kWebSocketStatusConnectionConnectingType is the type string for the
 * WebSocketStatusConnectionConnecting class.
 */
export declare const kWebSocketStatusConnectionConnectingType: "Connecting";
/**
 * WebSocketStatusConnectionConnecting represents the status of a WebSocket
 * connection being connected.
 */
export declare class WebSocketStatusConnectionConnecting extends WebSocketStatus {
    valueOf(): "Connecting";
    toJSON(): "Connecting";
}
declare class WebSocketStatusConnectionConnectingDecoder implements Converter<unknown, WebSocketStatusConnectionConnecting> {
    convert(input: unknown): WebSocketStatusConnectionConnecting;
}
declare class WebSocketStatusConnectionConnectingEncoder implements Converter<WebSocketStatusConnectionConnecting> {
    convert(): "Connecting";
}
declare class WebSocketStatusConnectionConnectingCodec extends TypeCheckingCodec<WebSocketStatusConnectionConnecting, ReturnType<InstanceType<new () => WebSocketStatusConnectionConnectingEncoder>['convert']>> {
    readonly encoder: WebSocketStatusConnectionConnectingEncoder;
    readonly decoder: WebSocketStatusConnectionConnectingDecoder;
}
export declare const webSocketStatusConnectionConnectingCodec: WebSocketStatusConnectionConnectingCodec;
export {};

import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { default as WebSocketStatus } from './web_socket_status';
declare class WebSocketStatusDecoder implements Converter<unknown, WebSocketStatus> {
    convert(input: unknown): WebSocketStatus;
}
declare class WebSocketStatusEncoder implements Converter<WebSocketStatus> {
    convert(input: WebSocketStatus): "Closed" | "Connecting" | "Opened";
}
declare class WebSocketStatusCodec extends TypeCheckingCodec<WebSocketStatus, ReturnType<InstanceType<new () => WebSocketStatusEncoder>['convert']>> {
    readonly encoder: WebSocketStatusEncoder;
    readonly decoder: WebSocketStatusDecoder;
}
export declare const webSocketStatusCodec: WebSocketStatusCodec;
export {};

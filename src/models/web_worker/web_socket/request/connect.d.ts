import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec';
import { default as WebSocketCommand } from './web_socket_command';

export declare const kWebSocketCommandConnectType: "Connect";
export declare class WebSocketCommandConnect extends WebSocketCommand {
    valueOf(): string;
    toJSON(): "Connect";
}
declare class WebSocketCommandConnectEncoder implements Converter<WebSocketCommandConnect, string> {
    convert(): "Connect";
}
declare class WebSocketCommandConnectDecoder implements Converter<unknown, WebSocketCommandConnect> {
    convert(input: unknown): WebSocketCommandConnect;
}
declare class WebSocketCommandConnectCodec extends TypeCheckingCodec<WebSocketCommandConnect, ReturnType<InstanceType<new () => WebSocketCommandConnectEncoder>['convert']>> {
    readonly encoder: WebSocketCommandConnectEncoder;
    readonly decoder: WebSocketCommandConnectDecoder;
}
export declare const webSocketCommandConnectCodec: WebSocketCommandConnectCodec;
export {};

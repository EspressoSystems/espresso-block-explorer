import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { default as WebSocketCommand } from './web_socket_command';
export declare const kWebSocketCommandCloseType: "Close";
export declare class WebSocketCommandClose extends WebSocketCommand {
    valueOf(): string;
}
declare class WebSocketCommandCloseEncoder implements Converter<WebSocketCommandClose, string> {
    convert(): "Close";
}
declare class WebSocketCommandCloseDecoder implements Converter<WebSocketCommandClose, unknown> {
    convert(input: unknown): WebSocketCommandClose;
}
declare class WebSocketCommandCloseCodec extends TypeCheckingCodec<WebSocketCommandClose, unknown> {
    readonly encoder: WebSocketCommandCloseEncoder;
    readonly decoder: WebSocketCommandCloseDecoder;
}
export declare const webSocketCommandCloseCodec: WebSocketCommandCloseCodec;
export {};

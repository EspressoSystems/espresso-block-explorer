import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { default as WebSocketCommand } from './web_socket_command';

declare class WebSocketCommandDecoder implements Converter<unknown, WebSocketCommand> {
    convert(input: unknown): WebSocketCommand;
}
declare class WebSocketCommandEncoder implements Converter<WebSocketCommand> {
    convert(input: WebSocketCommand): unknown;
}
declare class WebSocketCommandCodec extends TypeCheckingCodec<WebSocketCommand, ReturnType<InstanceType<new () => WebSocketCommandEncoder>['convert']>> {
    readonly encoder: WebSocketCommandEncoder;
    readonly decoder: WebSocketCommandDecoder;
}
export declare const webSocketCommandCodec: WebSocketCommandCodec;
export {};

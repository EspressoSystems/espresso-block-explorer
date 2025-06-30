import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec';
import { default as WebSocketCommand } from './web_socket_command';
export declare const kWebSocketCommandSetURLType: "Set-Url";
/**
 * WebSocketCommandSetURL is a command to set the URL for the WebSocket
 * connection.
 *
 * This is a useful command for development purposes, which will allow
 * the web worker to change the URL of the WebSocket connection
 * dynamically.
 */
export declare class WebSocketCommandSetURL extends WebSocketCommand {
    readonly url: string;
    constructor(url: string);
    valueOf(): string;
    toJSON(): {
        "Set-Url": string;
    };
}
declare class WebSocketCommandSetURLEncoder implements Converter<WebSocketCommandSetURL, unknown> {
    convert(input: WebSocketCommandSetURL): {
        "Set-Url": string;
    };
}
declare class WebSocketCommandSetURLDecoder implements Converter<unknown, WebSocketCommandSetURL> {
    convert(input: unknown): WebSocketCommandSetURL;
}
declare class WebSocketCommandSetURLCodec extends TypeCheckingCodec<WebSocketCommandSetURL, ReturnType<InstanceType<new () => WebSocketCommandSetURLEncoder>['convert']>> {
    readonly encoder: WebSocketCommandSetURLEncoder;
    readonly decoder: WebSocketCommandSetURLDecoder;
}
export declare const webSocketCommandSetURLCodec: WebSocketCommandSetURLCodec;
export {};

import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { default as WebSocketStatus } from './web_socket_status';

/**
 * kWebSocketStatusConnectionOpenedType is the type string for the
 * WebSocketStatusConnectionOpened class.
 */
export declare const kWebSocketStatusConnectionOpenedType: "Opened";
/**
 * CappuccinoConnectionOpened is a response from the Cappuccino node
 * validator that contains a snapshot of the histograms in the network.
 */
export declare class WebSocketStatusConnectionOpened extends WebSocketStatus {
    valueOf(): "Opened";
    toJSON(): "Opened";
}
declare class WebSocketStatusConnectionOpenedDecoder implements Converter<unknown, WebSocketStatusConnectionOpened> {
    convert(input: unknown): WebSocketStatusConnectionOpened;
}
declare class WebSocketStatusConnectionOpenedEncoder implements Converter<WebSocketStatusConnectionOpened> {
    convert(): "Opened";
}
declare class WebSocketStatusConnectionOpenedCodec extends TypeCheckingCodec<WebSocketStatusConnectionOpened, ReturnType<InstanceType<new () => WebSocketStatusConnectionOpenedEncoder>['convert']>> {
    readonly encoder: WebSocketStatusConnectionOpenedEncoder;
    readonly decoder: WebSocketStatusConnectionOpenedDecoder;
}
export declare const webSocketStatusConnectionOpenedCodec: WebSocketStatusConnectionOpenedCodec;
export {};

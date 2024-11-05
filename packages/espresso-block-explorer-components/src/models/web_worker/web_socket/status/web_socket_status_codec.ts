import { Converter, TypeCheckingCodec } from '@/convert/codec/convert';
import UnimplementedError from '@/errors/UnimplementedError';
import {
  kWebSocketStatusConnectionClosedType,
  WebSocketStatusConnectionClosed,
  webSocketStatusConnectionClosedCodec,
} from './closed';
import {
  kWebSocketStatusConnectionConnectingType,
  WebSocketStatusConnectionConnecting,
  webSocketStatusConnectionConnectingCodec,
} from './connecting';
import {
  kWebSocketStatusConnectionOpenedType,
  WebSocketStatusConnectionOpened,
  webSocketStatusConnectionOpenedCodec,
} from './opened';
import WebSocketStatus from './web_socket_status';

class WebSocketStatusDecoder implements Converter<unknown, WebSocketStatus> {
  convert(input: unknown): WebSocketStatus {
    // Non Server Based Messages
    // This is in-band, technically, not the greatest approach.
    if (input === kWebSocketStatusConnectionOpenedType) {
      return webSocketStatusConnectionOpenedCodec.decode(input);
    }
    if (input === kWebSocketStatusConnectionClosedType) {
      return webSocketStatusConnectionClosedCodec.decode(input);
    }
    if (input === kWebSocketStatusConnectionConnectingType) {
      return webSocketStatusConnectionConnectingCodec.decode(input);
    }

    throw new UnimplementedError();
  }
}

class WebSocketStatusEncoder implements Converter<WebSocketStatus> {
  convert(input: WebSocketStatus) {
    if (input instanceof WebSocketStatusConnectionOpened) {
      return webSocketStatusConnectionOpenedCodec.encode(input);
    }
    if (input instanceof WebSocketStatusConnectionClosed) {
      return webSocketStatusConnectionClosedCodec.encode(input);
    }
    if (input instanceof WebSocketStatusConnectionConnecting) {
      return webSocketStatusConnectionConnectingCodec.encode(input);
    }

    throw new UnimplementedError();
  }
}

class WebSocketStatusCodec extends TypeCheckingCodec<
  WebSocketStatus,
  ReturnType<InstanceType<new () => WebSocketStatusEncoder>['convert']>
> {
  readonly encoder = new WebSocketStatusEncoder();
  readonly decoder = new WebSocketStatusDecoder();
}

export const webSocketStatusCodec = new WebSocketStatusCodec();

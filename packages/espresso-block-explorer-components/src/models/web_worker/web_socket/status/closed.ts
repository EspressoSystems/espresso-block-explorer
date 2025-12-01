import { Converter, TypeCheckingCodec } from '@/convert/codec/convert';
import InvalidTypeError from '@/errors/InvalidTypeError';
import WebSocketStatus from './web_socket_status';

/**
 * kWebSocketStatusConnectionClosedType is the type string for the
 * WebSocketStatusConnectionClosed class.
 */
export const kWebSocketStatusConnectionClosedType = 'Closed' as const;

/**
 * WebSocketStatusConnectionClosed represents the status of a WebSocket
 * connection being closed.
 */
export class WebSocketStatusConnectionClosed extends WebSocketStatus {
  valueOf() {
    return kWebSocketStatusConnectionClosedType;
  }

  toJSON() {
    return webSocketStatusConnectionClosedCodec.encode(this);
  }
}

class WebSocketStatusConnectionClosedDecoder implements Converter<
  unknown,
  WebSocketStatusConnectionClosed
> {
  convert(input: unknown): WebSocketStatusConnectionClosed {
    if (typeof input !== 'string') {
      throw new InvalidTypeError(typeof input, 'string');
    }

    if (input !== kWebSocketStatusConnectionClosedType) {
      throw new InvalidTypeError(input, kWebSocketStatusConnectionClosedType);
    }

    return new WebSocketStatusConnectionClosed();
  }
}

class WebSocketStatusConnectionClosedEncoder implements Converter<WebSocketStatusConnectionClosed> {
  convert() {
    return kWebSocketStatusConnectionClosedType;
  }
}

class WebSocketStatusConnectionClosedCodec extends TypeCheckingCodec<
  WebSocketStatusConnectionClosed,
  ReturnType<
    InstanceType<new () => WebSocketStatusConnectionClosedEncoder>['convert']
  >
> {
  readonly encoder = new WebSocketStatusConnectionClosedEncoder();
  readonly decoder = new WebSocketStatusConnectionClosedDecoder();
}

export const webSocketStatusConnectionClosedCodec =
  new WebSocketStatusConnectionClosedCodec();

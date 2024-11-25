import { Converter, TypeCheckingCodec } from '@/convert/codec/convert';
import InvalidTypeError from '@/errors/InvalidTypeError';
import WebSocketStatus from './web_socket_status';

/**
 * kWebSocketStatusConnectionConnectingType is the type string for the
 * WebSocketStatusConnectionConnecting class.
 */
export const kWebSocketStatusConnectionConnectingType = 'Connecting' as const;

/**
 * WebSocketStatusConnectionConnecting represents the status of a WebSocket
 * connection being connected.
 */
export class WebSocketStatusConnectionConnecting extends WebSocketStatus {
  valueOf() {
    return kWebSocketStatusConnectionConnectingType;
  }

  toJSON() {
    return webSocketStatusConnectionConnectingCodec.encode(this);
  }
}

class WebSocketStatusConnectionConnectingDecoder
  implements Converter<unknown, WebSocketStatusConnectionConnecting>
{
  convert(input: unknown): WebSocketStatusConnectionConnecting {
    if (typeof input !== 'string') {
      throw new InvalidTypeError(typeof input, 'string');
    }

    if (input !== kWebSocketStatusConnectionConnectingType) {
      throw new InvalidTypeError(
        input,
        kWebSocketStatusConnectionConnectingType,
      );
    }

    return new WebSocketStatusConnectionConnecting();
  }
}

class WebSocketStatusConnectionConnectingEncoder
  implements Converter<WebSocketStatusConnectionConnecting>
{
  convert() {
    return kWebSocketStatusConnectionConnectingType;
  }
}

class WebSocketStatusConnectionConnectingCodec extends TypeCheckingCodec<
  WebSocketStatusConnectionConnecting,
  ReturnType<
    InstanceType<
      new () => WebSocketStatusConnectionConnectingEncoder
    >['convert']
  >
> {
  readonly encoder = new WebSocketStatusConnectionConnectingEncoder();
  readonly decoder = new WebSocketStatusConnectionConnectingDecoder();
}

export const webSocketStatusConnectionConnectingCodec =
  new WebSocketStatusConnectionConnectingCodec();

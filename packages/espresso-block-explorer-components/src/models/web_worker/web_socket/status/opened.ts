import { Converter, TypeCheckingCodec } from '@/convert/codec/convert';
import InvalidTypeError from '@/errors/invalid_type_error';
import WebSocketStatus from './web_socket_status';

/**
 * kWebSocketStatusConnectionOpenedType is the type string for the
 * WebSocketStatusConnectionOpened class.
 */
export const kWebSocketStatusConnectionOpenedType = 'Opened' as const;

/**
 * CappuccinoConnectionOpened is a response from the Cappuccino node
 * validator that contains a snapshot of the histograms in the network.
 */
export class WebSocketStatusConnectionOpened extends WebSocketStatus {
  valueOf() {
    return kWebSocketStatusConnectionOpenedType;
  }

  toJSON() {
    return webSocketStatusConnectionOpenedCodec.encode(this);
  }
}

class WebSocketStatusConnectionOpenedDecoder implements Converter<
  unknown,
  WebSocketStatusConnectionOpened
> {
  convert(input: unknown): WebSocketStatusConnectionOpened {
    if (typeof input !== 'string') {
      throw new InvalidTypeError(typeof input, 'string');
    }

    if (input !== kWebSocketStatusConnectionOpenedType) {
      throw new InvalidTypeError(input, kWebSocketStatusConnectionOpenedType);
    }

    return new WebSocketStatusConnectionOpened();
  }
}

class WebSocketStatusConnectionOpenedEncoder implements Converter<WebSocketStatusConnectionOpened> {
  convert() {
    return kWebSocketStatusConnectionOpenedType;
  }
}

class WebSocketStatusConnectionOpenedCodec extends TypeCheckingCodec<
  WebSocketStatusConnectionOpened,
  ReturnType<
    InstanceType<new () => WebSocketStatusConnectionOpenedEncoder>['convert']
  >
> {
  readonly encoder = new WebSocketStatusConnectionOpenedEncoder();
  readonly decoder = new WebSocketStatusConnectionOpenedDecoder();
}

export const webSocketStatusConnectionOpenedCodec =
  new WebSocketStatusConnectionOpenedCodec();

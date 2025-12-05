import { Converter, TypeCheckingCodec } from '@/convert/codec/convert';
import InvalidTypeError from '@/errors/invalid_type_error';
import WebSocketCommand from './web_socket_command';

export const kWebSocketCommandCloseType = 'Close' as const;

export class WebSocketCommandClose extends WebSocketCommand {
  valueOf(): string {
    return kWebSocketCommandCloseType;
  }
}

class WebSocketCommandCloseEncoder implements Converter<
  WebSocketCommandClose,
  string
> {
  convert() {
    return kWebSocketCommandCloseType;
  }
}

class WebSocketCommandCloseDecoder implements Converter<
  WebSocketCommandClose,
  unknown
> {
  convert(input: unknown) {
    if (typeof input !== 'string') {
      throw new InvalidTypeError(typeof input, 'string');
    }

    if (input !== kWebSocketCommandCloseType) {
      throw new InvalidTypeError(input, kWebSocketCommandCloseType);
    }

    return new WebSocketCommandClose();
  }
}

class WebSocketCommandCloseCodec extends TypeCheckingCodec<
  WebSocketCommandClose,
  unknown
> {
  readonly encoder = new WebSocketCommandCloseEncoder();
  readonly decoder = new WebSocketCommandCloseDecoder();
}

export const webSocketCommandCloseCodec = new WebSocketCommandCloseCodec();

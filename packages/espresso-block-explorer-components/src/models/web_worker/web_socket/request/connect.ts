import { Converter, TypeCheckingCodec } from '@/convert/codec';
import InvalidTypeError from '@/errors/invalid_type_error';
import WebSocketCommand from './web_socket_command';

export const kWebSocketCommandConnectType = 'Connect' as const;

export class WebSocketCommandConnect extends WebSocketCommand {
  valueOf(): string {
    return kWebSocketCommandConnectType;
  }

  toJSON() {
    return webSocketCommandConnectCodec.encode(this);
  }
}

class WebSocketCommandConnectEncoder implements Converter<
  WebSocketCommandConnect,
  string
> {
  convert() {
    return kWebSocketCommandConnectType;
  }
}

class WebSocketCommandConnectDecoder implements Converter<
  unknown,
  WebSocketCommandConnect
> {
  convert(input: unknown) {
    if (typeof input !== 'string') {
      throw new InvalidTypeError(typeof input, 'string');
    }

    if (input !== kWebSocketCommandConnectType) {
      throw new InvalidTypeError(input, kWebSocketCommandConnectType);
    }

    return new WebSocketCommandConnect();
  }
}

class WebSocketCommandConnectCodec extends TypeCheckingCodec<
  WebSocketCommandConnect,
  ReturnType<InstanceType<new () => WebSocketCommandConnectEncoder>['convert']>
> {
  readonly encoder = new WebSocketCommandConnectEncoder();
  readonly decoder = new WebSocketCommandConnectDecoder();
}

export const webSocketCommandConnectCodec = new WebSocketCommandConnectCodec();

import { Converter, TypeCheckingCodec } from '@/convert/codec/convert';
import UnimplementedError from '@/errors/UnimplementedError';
import {
  kWebSocketCommandCloseType,
  WebSocketCommandClose,
  webSocketCommandCloseCodec,
} from './close';
import {
  kWebSocketCommandConnectType,
  WebSocketCommandConnect,
  webSocketCommandConnectCodec,
} from './connect';
import {
  kWebSocketCommandSetURLType,
  WebSocketCommandSetURL,
  webSocketCommandSetURLCodec,
} from './set_url';
import WebSocketCommand from './web_socket_command';

class WebSocketCommandDecoder implements Converter<unknown, WebSocketCommand> {
  convert(input: unknown): WebSocketCommand {
    // Non Server Based Messages
    // This is in-band, technically, not the greatest approach.
    if (input === kWebSocketCommandConnectType) {
      return webSocketCommandConnectCodec.decode(input);
    }
    if (input === kWebSocketCommandCloseType) {
      return webSocketCommandCloseCodec.decode(input);
    }
    if (
      typeof input === 'object' &&
      input !== null &&
      kWebSocketCommandSetURLType in input
    ) {
      return webSocketCommandSetURLCodec.decode(input);
    }

    throw new UnimplementedError();
  }
}

class WebSocketCommandEncoder implements Converter<WebSocketCommand> {
  convert(input: WebSocketCommand) {
    if (input instanceof WebSocketCommandConnect) {
      return webSocketCommandConnectCodec.encode(input);
    }
    if (input instanceof WebSocketCommandClose) {
      return webSocketCommandCloseCodec.encode(input);
    }
    if (input instanceof WebSocketCommandSetURL) {
      return webSocketCommandSetURLCodec.encode(input);
    }

    throw new UnimplementedError();
  }
}

class WebSocketCommandCodec extends TypeCheckingCodec<
  WebSocketCommand,
  ReturnType<InstanceType<new () => WebSocketCommandEncoder>['convert']>
> {
  readonly encoder = new WebSocketCommandEncoder();
  readonly decoder = new WebSocketCommandDecoder();
}

export const webSocketCommandCodec = new WebSocketCommandCodec();

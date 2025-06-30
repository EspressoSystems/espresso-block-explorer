import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec';
import InvalidTypeError from '@/errors/InvalidTypeError';
import WebSocketCommand from './web_socket_command';

export const kWebSocketCommandSetURLType = 'Set-Url' as const;

/**
 * WebSocketCommandSetURL is a command to set the URL for the WebSocket
 * connection.
 *
 * This is a useful command for development purposes, which will allow
 * the web worker to change the URL of the WebSocket connection
 * dynamically.
 */
export class WebSocketCommandSetURL extends WebSocketCommand {
  public readonly url: string;

  constructor(url: string) {
    super();
    this.url = url;
  }

  valueOf(): string {
    return kWebSocketCommandSetURLType;
  }

  toJSON() {
    return webSocketCommandSetURLCodec.encode(this);
  }
}

class WebSocketCommandSetURLEncoder
  implements Converter<WebSocketCommandSetURL, unknown>
{
  convert(input: WebSocketCommandSetURL) {
    return { [kWebSocketCommandSetURLType]: input.url };
  }
}

class WebSocketCommandSetURLDecoder
  implements Converter<unknown, WebSocketCommandSetURL>
{
  convert(input: unknown) {
    assertRecordWithKeys(input, kWebSocketCommandSetURLType);
    const url = input[kWebSocketCommandSetURLType];

    if (typeof url !== 'string') {
      throw new InvalidTypeError(typeof url, 'string');
    }

    return new WebSocketCommandSetURL(url);
  }
}

class WebSocketCommandSetURLCodec extends TypeCheckingCodec<
  WebSocketCommandSetURL,
  ReturnType<InstanceType<new () => WebSocketCommandSetURLEncoder>['convert']>
> {
  readonly encoder = new WebSocketCommandSetURLEncoder();
  readonly decoder = new WebSocketCommandSetURLDecoder();
}

export const webSocketCommandSetURLCodec = new WebSocketCommandSetURLCodec();

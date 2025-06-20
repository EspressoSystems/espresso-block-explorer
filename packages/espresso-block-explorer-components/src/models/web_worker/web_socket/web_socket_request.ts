import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import { WebWorkerProxyRequest } from '../web_worker_proxy_request';
import WebSocketCommand from './request/web_socket_command';
import { webSocketCommandCodec } from './request/web_socket_command_codec';

/**
 * WebSocketRequest represents a WebWorkerProxyRequest that conveys the
 * a command to perform on the WebSocket connection.
 */
export class WebSocketRequest extends WebWorkerProxyRequest {
  public readonly command: WebSocketCommand;

  get type(): string {
    return kWebSocketRequestType;
  }

  constructor(command: WebSocketCommand) {
    super();
    this.command = command;
  }

  toJSON() {
    return webSocketRequestCodec.encode(this);
  }
}

export const kWebSocketRequestType = 'WebSocket' as const;

class WebSocketRequestEncoder implements Converter<WebSocketRequest> {
  convert(input: WebSocketRequest) {
    return {
      [kWebSocketRequestType]: webSocketCommandCodec.encode(input.command),
    };
  }
}

class WebSocketRequestDecoder implements Converter<unknown, WebSocketRequest> {
  convert(input: unknown): WebSocketRequest {
    assertRecordWithKeys(input, kWebSocketRequestType);

    return new WebSocketRequest(
      webSocketCommandCodec.decode(input[kWebSocketRequestType]),
    );
  }
}

class WebSocketRequestCodec extends TypeCheckingCodec<
  WebSocketRequest,
  ReturnType<InstanceType<new () => WebSocketRequestEncoder>['convert']>
> {
  readonly encoder = new WebSocketRequestEncoder();
  readonly decoder = new WebSocketRequestDecoder();
}

export const webSocketRequestCodec = new WebSocketRequestCodec();

import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import { WebWorkerProxyResponse } from '../web_worker_proxy_response';
import WebSocketStatus from './status/web_socket_status';
import { webSocketStatusCodec } from './status/web_socket_status_codec';

/**
 * WebSocketResponse represents a WebWorkerProxyResponse that conveys the
 * a message concerning a WebSocket connection.
 */
export class WebSocketResponse extends WebWorkerProxyResponse {
  public readonly status: WebSocketStatus;

  get type(): string {
    return kWebSocketResponseType;
  }

  constructor(status: WebSocketStatus) {
    super();
    this.status = status;
  }

  toJson() {
    return webSocketResponseCodec.encode(this);
  }
}

export const kWebSocketResponseType = 'WebSocket' as const;

class WebSocketResponseEncoder implements Converter<WebSocketResponse> {
  convert(input: WebSocketResponse) {
    return {
      [kWebSocketResponseType]: webSocketStatusCodec.encode(input.status),
    };
  }
}

class WebSocketResponseDecoder
  implements Converter<unknown, WebSocketResponse>
{
  convert(input: unknown): WebSocketResponse {
    assertRecordWithKeys(input, kWebSocketResponseType);

    return new WebSocketResponse(
      webSocketStatusCodec.decode(input[kWebSocketResponseType]),
    );
  }
}

class WebSocketResponseCodec extends TypeCheckingCodec<
  WebSocketResponse,
  ReturnType<InstanceType<new () => WebSocketResponseEncoder>['convert']>
> {
  readonly encoder = new WebSocketResponseEncoder();
  readonly decoder = new WebSocketResponseDecoder();
}

export const webSocketResponseCodec = new WebSocketResponseCodec();

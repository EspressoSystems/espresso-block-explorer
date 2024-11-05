import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec';
import InvalidTypeError from '@/errors/InvalidTypeError';
import UnimplementedError from '@/errors/UnimplementedError';
import { mapIterable } from '@/functional/functional';
import WebSocketCommand from './web_socket/request/web_socket_command';
import {
  kWebSocketRequestType,
  WebSocketRequest,
  webSocketRequestCodec,
} from './web_socket/web_socket_request';
import { WebWorkerProxyRequest } from './web_worker_proxy_request';

const registry = new Map<
  string,
  TypeCheckingCodec<WebWorkerProxyRequest, unknown>
>();

registry.set(kWebSocketRequestType, webSocketRequestCodec);

class WebWorkerProxyRequestEncoder
  implements Converter<WebWorkerProxyRequest, unknown>
{
  convert(input: WebWorkerProxyRequest) {
    const codec = registry.get(input.type);
    if (!codec) {
      throw new InvalidTypeError(
        input.type,
        `one of ${Array.from(
          mapIterable(registry.keys(), (entry) => `"${entry}"`),
        ).join(', ')}`,
      );
    }

    return { [input.type]: codec.encode(input) };
  }
}

class WebWorkerProxyRequestDecoder
  implements Converter<unknown, WebWorkerProxyRequest>
{
  convert(input: unknown): WebWorkerProxyRequest {
    if (typeof input !== 'object' || input === null) {
      throw new InvalidTypeError(typeof input, 'object');
    }

    const keys = Object.keys(input);
    if (keys.length !== 1) {
      throw new UnimplementedError(
        'multiple values contained within the Request object, unexpected',
      );
    }

    const [type] = keys;
    const codec = registry.get(type);

    assertRecordWithKeys(input, type);

    if (!codec) {
      throw new InvalidTypeError(
        type,
        `one of ${Array.from(
          mapIterable(registry.keys(), (entry) => `"${entry}"`),
        ).join(', ')}`,
      );
    }

    return codec.decode(input[type]);
  }
}

class WebWorkerProxyRequestCodec extends TypeCheckingCodec<
  WebWorkerProxyRequest,
  unknown
> {
  readonly encoder = new WebWorkerProxyRequestEncoder();
  readonly decoder = new WebWorkerProxyRequestDecoder();
}

export function registerWebWorkerProxyRequestCodec(
  type: string,
  codec: TypeCheckingCodec<WebWorkerProxyRequest, unknown>,
) {
  if (registry.has(type)) {
    throw new UnimplementedError();
  }

  registry.set(type, codec);
}

export const webWorkerProxyRequestCodec = new WebWorkerProxyRequestCodec();

// // WebSocketStatus to WebWorkerProxyResponse Converter
// class WebSocketStatusToWebWorkerProxyResponseConverter
//   implements Converter<WebSocketStatus, WebWorkerProxyResponse>
// {
//   convert(input: WebSocketStatus) {
//     return new WebSocketResponse(input);
//   }
// }

// export const webSocketStatusToWebWorkerProxyResponseConverter =
//   new WebSocketStatusToWebWorkerProxyResponseConverter();

// WebSocketCommand to WebWorkerProxyRequest Converter
class WebSocketCommandToWebWorkerProxyRequestConverter
  implements Converter<WebSocketCommand, WebWorkerProxyRequest>
{
  convert(input: WebSocketCommand): WebWorkerProxyRequest {
    return new WebSocketRequest(input);
  }
}

export const webSocketCommandToWebWorkerProxyRequestConverter =
  new WebSocketCommandToWebWorkerProxyRequestConverter();

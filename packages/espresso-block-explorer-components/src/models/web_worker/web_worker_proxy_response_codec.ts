import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec';
import { EspressoError } from '@/errors/EspressoError';
import InvalidTypeError from '@/errors/InvalidTypeError';
import UnimplementedError from '@/errors/UnimplementedError';
import { mapIterable } from '@/functional/functional';
import {
  ErrorResponse,
  errorResponseCodec,
  kErrorResponseType,
} from './error_response';
import WebSocketStatus from './web_socket/status/web_socket_status';
import {
  kWebSocketResponseType,
  WebSocketResponse,
  webSocketResponseCodec,
} from './web_socket/web_socket_response';
import { WebWorkerProxyResponse } from './web_worker_proxy_response';

const registry = new Map<
  string,
  TypeCheckingCodec<WebWorkerProxyResponse, unknown>
>();

registry.set(kErrorResponseType, errorResponseCodec);
registry.set(kWebSocketResponseType, webSocketResponseCodec);

class WebWorkerProxyResponseEncoder
  implements Converter<WebWorkerProxyResponse, unknown>
{
  convert(input: WebWorkerProxyResponse) {
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

class WebWorkerProxyResponseDecoder
  implements Converter<unknown, WebWorkerProxyResponse>
{
  convert(input: unknown): WebWorkerProxyResponse {
    if (typeof input !== 'object' || input === null) {
      throw new InvalidTypeError(typeof input, 'object');
    }

    const keys = Object.keys(input);
    if (keys.length !== 1) {
      throw new UnimplementedError(
        'multiple values contained within the response object, unexpected',
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

class WebWorkerProxyResponseCodec extends TypeCheckingCodec<
  WebWorkerProxyResponse,
  unknown
> {
  readonly encoder = new WebWorkerProxyResponseEncoder();
  readonly decoder = new WebWorkerProxyResponseDecoder();
}

export function registerWebWorkerProxyResponseCodec(
  type: string,
  codec: TypeCheckingCodec<WebWorkerProxyResponse, unknown>,
) {
  if (registry.has(type)) {
    // We already have this type registered.
    return;
  }

  registry.set(type, codec);
}

export const webWorkerProxyResponseCodec = new WebWorkerProxyResponseCodec();

// EspressoError to WebWorkerProxyResponse Converter
class EspressoErrorToWebWorkerProxyResponseConverter
  implements Converter<EspressoError, WebWorkerProxyResponse>
{
  convert(input: EspressoError) {
    return new ErrorResponse(input);
  }
}

export const espressoErrorToWebWorkerProxyResponseConverter =
  new EspressoErrorToWebWorkerProxyResponseConverter();

// WebSocketStatus to WebWorkerProxyResponse Converter
class WebSocketStatusToWebWorkerProxyResponseConverter
  implements Converter<WebSocketStatus, WebWorkerProxyResponse>
{
  convert(input: WebSocketStatus) {
    return new WebSocketResponse(input);
  }
}

export const webSocketStatusToWebWorkerProxyResponseConverter =
  new WebSocketStatusToWebWorkerProxyResponseConverter();

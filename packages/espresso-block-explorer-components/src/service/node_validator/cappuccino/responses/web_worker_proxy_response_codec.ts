import {
  Converter,
  isRecordWithKeys,
  TypeCheckingCodec,
} from '@/convert/codec';
import UnimplementedError from '@/errors/UnimplementedError';
import {
  ErrorResponse,
  errorResponseCodec,
  kErrorResponseType,
  kLifeCycleResponseType,
  kNodeValidatorResponseType,
  LifeCycleResponse,
  lifeCycleResponseCodec,
  NodeValidatorResponse,
  nodeValidatorResponseCodec,
  WebWorkerProxyResponse,
} from './web_worker_proxy_response';

class WebWorkerProxyResponseEncoder
  implements Converter<WebWorkerProxyResponse>
{
  convert(input: WebWorkerProxyResponse): unknown {
    if (input instanceof NodeValidatorResponse) {
      return nodeValidatorResponseCodec.encode(input);
    }

    if (input instanceof LifeCycleResponse) {
      return lifeCycleResponseCodec.encode(input);
    }

    if (input instanceof ErrorResponse) {
      return errorResponseCodec.encode(input);
    }

    throw new UnimplementedError();
  }
}

class WebWorkerProxyResponseDecoder
  implements Converter<unknown, WebWorkerProxyResponse>
{
  convert(input: unknown): WebWorkerProxyResponse {
    if (isRecordWithKeys(input, kNodeValidatorResponseType)) {
      return nodeValidatorResponseCodec.decode(input);
    }

    if (isRecordWithKeys(input, kLifeCycleResponseType)) {
      return lifeCycleResponseCodec.decode(input);
    }

    if (isRecordWithKeys(input, kErrorResponseType)) {
      return errorResponseCodec.decode(input);
    }

    throw new UnimplementedError();
  }
}

class WebWorkerProxyResponseCodec extends TypeCheckingCodec<
  WebWorkerProxyResponse,
  ReturnType<InstanceType<new () => WebWorkerProxyResponseEncoder>['convert']>
> {
  readonly encoder = new WebWorkerProxyResponseEncoder();
  readonly decoder = new WebWorkerProxyResponseDecoder();
}

export const webWorkerProxyResponseCodec = new WebWorkerProxyResponseCodec();

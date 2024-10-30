import {
  Converter,
  isRecordWithKeys,
  TypeCheckingCodec,
} from '@/convert/codec';
import UnimplementedError from '@/errors/UnimplementedError';
import {
  ErrorResponse,
  errorResponseCodec,
  InscriptionResponse,
  inscriptionResponseCodec,
  kErrorResponseType,
  kInscriptionResponseType,
  kLifeCycleResponseType,
  LifeCycleResponse,
  lifeCycleResponseCodec,
  WebWorkerProxyResponse,
} from './web_worker_proxy_response';

class WebWorkerProxyResponseEncoder
  implements Converter<WebWorkerProxyResponse>
{
  convert(input: WebWorkerProxyResponse): unknown {
    if (input instanceof InscriptionResponse) {
      return inscriptionResponseCodec.encode(input);
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
    if (isRecordWithKeys(input, kInscriptionResponseType)) {
      return inscriptionResponseCodec.decode(input);
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

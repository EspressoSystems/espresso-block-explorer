import {
  Converter,
  isRecordWithKeys,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import UnimplementedError from '@/errors/UnimplementedError';
import {
  InscriptionRequest,
  inscriptionRequestCodec,
  kInscriptionRequestType,
  kLifeCycleRequestType,
  LifeCycleRequest,
  lifeCycleRequestCodec,
  WebWorkerProxyRequest,
} from './web_worker_proxy_request';

class WebWorkerProxyRequestEncoder
  implements Converter<WebWorkerProxyRequest, unknown>
{
  convert(input: WebWorkerProxyRequest): unknown {
    if (input instanceof InscriptionRequest) {
      return inscriptionRequestCodec.encode(input);
    }

    if (input instanceof LifeCycleRequest) {
      return lifeCycleRequestCodec.encode(input);
    }

    throw new UnimplementedError();
  }
}

class WebWorkerProxyRequestDecoder
  implements Converter<unknown, WebWorkerProxyRequest>
{
  convert(input: unknown): WebWorkerProxyRequest {
    if (isRecordWithKeys(input, kInscriptionRequestType)) {
      return inscriptionRequestCodec.decode(input);
    }

    if (isRecordWithKeys(input, kLifeCycleRequestType)) {
      return lifeCycleRequestCodec.decode(input);
    }

    throw new UnimplementedError();
  }
}

class WebWorkerProxyRequestCodec extends TypeCheckingCodec<
  WebWorkerProxyRequest,
  ReturnType<InstanceType<new () => WebWorkerProxyRequestEncoder>['convert']>
> {
  readonly encoder = new WebWorkerProxyRequestEncoder();
  readonly decoder = new WebWorkerProxyRequestDecoder();
}

export const webWorkerProxyRequestCodec = new WebWorkerProxyRequestCodec();

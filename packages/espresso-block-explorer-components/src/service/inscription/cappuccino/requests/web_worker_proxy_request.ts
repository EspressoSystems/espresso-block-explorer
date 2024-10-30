import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import { default as CappuccinoInscriptionRequest } from './inscription_request';
import { cappuccinoInscriptionRequestCodec } from './inscription_request_codec';
import WebWorkerLifeCycleRequest from './web_worker_life_cycle_request';
import { webWorkerLifeCycleRequestCodec } from './web_worker_life_cycle_request_codec';

export abstract class WebWorkerProxyRequest {}

export const kLifeCycleRequestType = 'LifeCycleRequest' as const;

export class LifeCycleRequest extends WebWorkerProxyRequest {
  public readonly request: WebWorkerLifeCycleRequest;

  constructor(request: WebWorkerLifeCycleRequest) {
    super();
    this.request = request;
  }

  toJson() {
    return lifeCycleRequestCodec.encode(this);
  }
}

class LifeCycleRequestEncoder implements Converter<LifeCycleRequest> {
  convert(input: LifeCycleRequest) {
    return {
      [kLifeCycleRequestType]: webWorkerLifeCycleRequestCodec.encode(
        input.request,
      ),
    };
  }
}

class LifeCycleRequestDecoder implements Converter<unknown, LifeCycleRequest> {
  convert(input: unknown) {
    assertRecordWithKeys(input, kLifeCycleRequestType);

    return new LifeCycleRequest(
      webWorkerLifeCycleRequestCodec.decode(input[kLifeCycleRequestType]),
    );
  }
}

class LifeCycleRequestCodec extends TypeCheckingCodec<
  LifeCycleRequest,
  ReturnType<InstanceType<new () => LifeCycleRequestEncoder>['convert']>
> {
  readonly encoder = new LifeCycleRequestEncoder();
  readonly decoder = new LifeCycleRequestDecoder();
}

export const lifeCycleRequestCodec = new LifeCycleRequestCodec();

export const kInscriptionRequestType = 'InscriptionRequest' as const;

export class InscriptionRequest extends WebWorkerProxyRequest {
  public readonly request: CappuccinoInscriptionRequest;

  constructor(request: CappuccinoInscriptionRequest) {
    super();
    this.request = request;
  }

  toJson() {
    return inscriptionRequestCodec.encode(this);
  }
}

class InscriptionRequestEncoder implements Converter<InscriptionRequest> {
  convert(input: InscriptionRequest) {
    return {
      [kInscriptionRequestType]: cappuccinoInscriptionRequestCodec.encode(
        input.request,
      ),
    };
  }
}

class InscriptionRequestDecoder
  implements Converter<unknown, InscriptionRequest>
{
  convert(input: unknown) {
    assertRecordWithKeys(input, kInscriptionRequestType);

    return new InscriptionRequest(
      cappuccinoInscriptionRequestCodec.decode(input[kInscriptionRequestType]),
    );
  }
}

class InscriptionRequestCodec extends TypeCheckingCodec<
  InscriptionRequest,
  ReturnType<InstanceType<new () => InscriptionRequestEncoder>['convert']>
> {
  readonly encoder = new InscriptionRequestEncoder();
  readonly decoder = new InscriptionRequestDecoder();
}

export const inscriptionRequestCodec = new InscriptionRequestCodec();

class LifeCycleRequestToWebWorkerProxyRequestConverter
  implements Converter<WebWorkerLifeCycleRequest, LifeCycleRequest>
{
  convert(input: WebWorkerLifeCycleRequest) {
    return new LifeCycleRequest(input);
  }
}

export const lifeCycleRequestToWebWorkerProxyRequestConverter =
  new LifeCycleRequestToWebWorkerProxyRequestConverter();

class InscriptionRequestToWebWorkerProxyRequestConverter
  implements Converter<CappuccinoInscriptionRequest, InscriptionRequest>
{
  convert(input: CappuccinoInscriptionRequest) {
    return new InscriptionRequest(input);
  }
}

export const inscriptionRequestToWebWorkerProxyRequestConverter =
  new InscriptionRequestToWebWorkerProxyRequestConverter();

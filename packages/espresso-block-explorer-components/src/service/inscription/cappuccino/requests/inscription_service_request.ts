import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import { WebWorkerProxyRequest } from '@/models/web_worker/web_worker_proxy_request';
import CappuccinoInscriptionRequest from './inscription_request';
import { cappuccinoInscriptionRequestCodec } from './inscription_request_codec';

export const kInscriptionRequestType = 'Inscription' as const;

export class InscriptionServiceRequest extends WebWorkerProxyRequest {
  public readonly request: CappuccinoInscriptionRequest;

  get type(): string {
    return kInscriptionRequestType;
  }

  constructor(Request: CappuccinoInscriptionRequest) {
    super();
    this.request = Request;
  }

  toJson() {
    return inscriptionServiceRequestCodec.encode(this);
  }
}

class InscriptionServiceRequestEncoder
  implements Converter<InscriptionServiceRequest>
{
  convert(input: InscriptionServiceRequest) {
    return {
      [kInscriptionRequestType]: cappuccinoInscriptionRequestCodec.encode(
        input.request,
      ),
    };
  }
}

class InscriptionServiceRequestDecoder
  implements Converter<unknown, InscriptionServiceRequest>
{
  convert(input: unknown): InscriptionServiceRequest {
    assertRecordWithKeys(input, kInscriptionRequestType);

    const Request = input[kInscriptionRequestType];
    return new InscriptionServiceRequest(
      cappuccinoInscriptionRequestCodec.decode(Request),
    );
  }
}

class InscriptionServiceRequestCodec extends TypeCheckingCodec<
  InscriptionServiceRequest,
  ReturnType<
    InstanceType<new () => InscriptionServiceRequestEncoder>['convert']
  >
> {
  readonly encoder = new InscriptionServiceRequestEncoder();
  readonly decoder = new InscriptionServiceRequestDecoder();
}

export const inscriptionServiceRequestCodec =
  new InscriptionServiceRequestCodec();

class InscriptionRequestToWebWorkerProxyRequestConverter
  implements Converter<CappuccinoInscriptionRequest, WebWorkerProxyRequest>
{
  convert(input: CappuccinoInscriptionRequest): WebWorkerProxyRequest {
    return new InscriptionServiceRequest(input);
  }
}

export const inscriptionRequestToWebWorkerProxyRequestConverter =
  new InscriptionRequestToWebWorkerProxyRequestConverter();

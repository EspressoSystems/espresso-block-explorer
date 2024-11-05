import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import { WebWorkerProxyResponse } from '@/models/web_worker/web_worker_proxy_response';
import CappuccinoInscriptionResponse from './inscription_response';
import { cappuccinoInscriptionResponseCodec } from './inscription_response_codec';

export const kInscriptionResponseType = 'InscriptionResponse' as const;

export class InscriptionServiceResponse extends WebWorkerProxyResponse {
  public readonly response: CappuccinoInscriptionResponse;

  get type(): string {
    return kInscriptionResponseType;
  }

  constructor(response: CappuccinoInscriptionResponse) {
    super();
    this.response = response;
  }

  toJson() {
    return inscriptionServiceResponseCodec.encode(this);
  }
}

class InscriptionServiceResponseEncoder
  implements Converter<InscriptionServiceResponse>
{
  convert(input: InscriptionServiceResponse) {
    return {
      [kInscriptionResponseType]: cappuccinoInscriptionResponseCodec.encode(
        input.response,
      ),
    };
  }
}

class InscriptionServiceResponseDecoder
  implements Converter<unknown, InscriptionServiceResponse>
{
  convert(input: unknown): InscriptionServiceResponse {
    assertRecordWithKeys(input, kInscriptionResponseType);

    const response = input[kInscriptionResponseType];
    return new InscriptionServiceResponse(
      cappuccinoInscriptionResponseCodec.decode(response),
    );
  }
}

class InscriptionServiceResponseCodec extends TypeCheckingCodec<
  InscriptionServiceResponse,
  ReturnType<
    InstanceType<new () => InscriptionServiceResponseEncoder>['convert']
  >
> {
  readonly encoder = new InscriptionServiceResponseEncoder();
  readonly decoder = new InscriptionServiceResponseDecoder();
}

export const inscriptionServiceResponseCodec =
  new InscriptionServiceResponseCodec();

class InscriptionResponseToWebWorkerProxyResponseConverter
  implements Converter<CappuccinoInscriptionResponse, WebWorkerProxyResponse>
{
  convert(input: CappuccinoInscriptionResponse): WebWorkerProxyResponse {
    return new InscriptionServiceResponse(input);
  }
}

export const inscriptionResponseToWebWorkerProxyResponseConverter =
  new InscriptionResponseToWebWorkerProxyResponseConverter();

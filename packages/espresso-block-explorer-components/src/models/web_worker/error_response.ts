import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import { EspressoError } from '@/errors/EspressoError';
import { espressoErrorCodec } from '@/errors/index';
import { WebWorkerProxyResponse } from './web_worker_proxy_response';

export const kErrorResponseType = 'Error' as const;

/**
 * ErrorResponse represents a WebWorkerProxyResponse that conveys an error
 * has occurred.
 */
export class ErrorResponse extends WebWorkerProxyResponse {
  public readonly error: EspressoError;

  get type(): string {
    return kErrorResponseType;
  }

  constructor(error: EspressoError) {
    super();
    this.error = error;
  }

  toJSON() {
    return errorResponseCodec.encode(this);
  }
}

class ErrorResponseEncoder implements Converter<ErrorResponse> {
  convert(input: ErrorResponse) {
    return {
      [kErrorResponseType]: espressoErrorCodec.encode(input.error),
    };
  }
}

class ErrorResponseDecoder implements Converter<unknown, ErrorResponse> {
  convert(input: unknown): ErrorResponse {
    assertRecordWithKeys(input, kErrorResponseType);

    return new ErrorResponse(
      espressoErrorCodec.decode(input[kErrorResponseType]),
    );
  }
}

class ErrorResponseCodec extends TypeCheckingCodec<
  ErrorResponse,
  ReturnType<InstanceType<new () => ErrorResponseEncoder>['convert']>
> {
  readonly encoder = new ErrorResponseEncoder();
  readonly decoder = new ErrorResponseDecoder();
}

export const errorResponseCodec = new ErrorResponseCodec();

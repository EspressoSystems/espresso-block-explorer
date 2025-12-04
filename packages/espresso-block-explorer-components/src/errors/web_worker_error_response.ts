import {
  Converter,
  TypeCheckingCodec,
  assertErrorCode,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { stringCodec } from '@/convert/codec/string';
import BaseError, { baseErrorEncoder } from './BaseError';
import { EspressoError } from './EspressoError';
import { espressoErrorCodec, registerCodec } from './registry';

const kWebWorkerErrorResponseCode = 'WebWorkerErrorResponse';

export default class WebWorkerErrorResponse extends BaseError {
  readonly error: EspressoError;
  constructor(error: EspressoError, message: string = 'error in web worker') {
    super(message);
    this.error = error;
    Object.freeze(this);
  }

  toJSON() {
    return webWorkerErrorResponseCodec.encode(this);
  }

  get code(): string {
    return kWebWorkerErrorResponseCode;
  }
}

class WebWorkerErrorResponseDecoder implements Converter<
  unknown,
  WebWorkerErrorResponse
> {
  convert(input: unknown): WebWorkerErrorResponse {
    assertRecordWithKeys(input, 'code', 'error', 'message');
    assertErrorCode(input, kWebWorkerErrorResponseCode);
    return new WebWorkerErrorResponse(
      espressoErrorCodec.decode(input.error),
      stringCodec.decode(input.message),
    );
  }
}

class WebWorkerErrorResponseEncoder implements Converter<WebWorkerErrorResponse> {
  convert(input: WebWorkerErrorResponse): unknown {
    return {
      ...baseErrorEncoder.convert(input),
      error: espressoErrorCodec.encode(input.error),
    };
  }
}

class WebWorkerErrorResponseCodec extends TypeCheckingCodec<WebWorkerErrorResponse> {
  readonly encoder: Converter<WebWorkerErrorResponse, unknown> =
    new WebWorkerErrorResponseEncoder();
  readonly decoder: Converter<unknown, WebWorkerErrorResponse> =
    new WebWorkerErrorResponseDecoder();
}

export const webWorkerErrorResponseCodec = new WebWorkerErrorResponseCodec();

registerCodec(kWebWorkerErrorResponseCode, webWorkerErrorResponseCodec);

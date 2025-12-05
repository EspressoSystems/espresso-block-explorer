import {
  Converter,
  TypeCheckingCodec,
  assertErrorCode,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { stringCodec } from '@/convert/codec/string';
import BaseBadResponseError, {
  BaseBadResponseErrorEncoder,
} from './base_bad_response_error';
import { registerCodec } from './registry';

const kBadResponseErrorCode = 'BadResponseError';

/**
 * BadResponseError is a custom error that indicates that the result of a fetch
 * request was a Response that indicates a non-success.
 */
export default class BadResponseError extends BaseBadResponseError {
  constructor(
    status: number,
    response: null | Response,
    message: string = 'bad server response',
  ) {
    super(status, response, message);
    Object.freeze(this);
  }

  get code(): string {
    return kBadResponseErrorCode;
  }

  toJSON(): unknown {
    return badResponseErrorCodec.encode(this);
  }
}

class BadResponseErrorDecoder implements Converter<unknown, BadResponseError> {
  convert(input: unknown): BadResponseError {
    assertRecordWithKeys(input, 'code', 'message', 'status');
    assertErrorCode(input, kBadResponseErrorCode);

    return new BadResponseError(
      Number(input.status),
      null,
      stringCodec.decode(input.message),
    );
  }
}

class BadResponseErrorEncoder extends BaseBadResponseErrorEncoder {}

class BadResponseErrorCodec extends TypeCheckingCodec<BadResponseError> {
  readonly encoder: Converter<BadResponseError, unknown> =
    new BadResponseErrorEncoder();
  readonly decoder: Converter<unknown, BadResponseError> =
    new BadResponseErrorDecoder();
}

export const badResponseErrorCodec = new BadResponseErrorCodec();

registerCodec(kBadResponseErrorCode, badResponseErrorCodec);

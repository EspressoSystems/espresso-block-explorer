import {
  Converter,
  TypeCheckingCodec,
  assertErrorCode,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { stringCodec } from '@/convert/codec/string';
import BaseBadResponseError, {
  BaseBadResponseErrorEncoder,
} from './BaseBadResponseError';
import { registerCodec } from './registry';

/**
 * BadResponseServerError is a more specific BadResponse error that indicates
 * the nature of the failure was due to an error occurring on the server side.
 */
export default class BadResponseServerError extends BaseBadResponseError {
  constructor(
    status: number,
    response: null | Response,
    message: string = 'bad server response: server error',
  ) {
    super(status, response, message);
    Object.freeze(this);
  }

  get code(): string {
    return kBadResponseServerErrorCode;
  }
}

const kBadResponseServerErrorCode = 'BadResponseServerError';
class BadResponseServerErrorDecoder implements Converter<
  unknown,
  BadResponseServerError
> {
  convert(input: unknown): BadResponseServerError {
    assertRecordWithKeys(input, 'code', 'message', 'status');
    assertErrorCode(input, kBadResponseServerErrorCode);
    return new BadResponseServerError(
      Number(input.status),
      null,
      stringCodec.decode(input.message),
    );
  }
}

class BadResponseServerErrorEncoder extends BaseBadResponseErrorEncoder {}

class BadResponseServerErrorCodec extends TypeCheckingCodec<BadResponseServerError> {
  readonly encoder: Converter<BadResponseServerError, unknown> =
    new BadResponseServerErrorEncoder();
  readonly decoder: Converter<unknown, BadResponseServerError> =
    new BadResponseServerErrorDecoder();
}

export const badResponseServerErrorCodec = new BadResponseServerErrorCodec();

registerCodec(kBadResponseServerErrorCode, badResponseServerErrorCodec);

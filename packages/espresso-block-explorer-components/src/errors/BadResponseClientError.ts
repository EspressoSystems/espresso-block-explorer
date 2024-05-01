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
 * BadResponseClientError is a more specific BadResponse error that indicates
 * the nature of the failure was due to a client submission error.
 */
export default class BadResponseClientError extends BaseBadResponseError {
  constructor(
    status: number,
    response: null | Response,
    message: string = 'bad server response: client error',
  ) {
    super(status, response, message);
    Object.freeze(this);
  }

  toJSON(): unknown {
    return badResponseClientErrorCodec.encode(this);
  }
}

class BadResponseClientErrorDecoder
  implements Converter<unknown, BadResponseClientError>
{
  convert(input: unknown): BadResponseClientError {
    assertRecordWithKeys(input, 'code', 'message', 'status');
    assertErrorCode(input, BadResponseClientError.name);

    return new BadResponseClientError(
      Number(input.status),
      null,
      stringCodec.decode(input.message),
    );
  }
}

class BadResponseClientErrorEncoder extends BaseBadResponseErrorEncoder {}

class BadResponseClientErrorCodec extends TypeCheckingCodec<BadResponseClientError> {
  readonly encoder: Converter<BadResponseClientError, unknown> =
    new BadResponseClientErrorEncoder();
  readonly decoder: Converter<unknown, BadResponseClientError> =
    new BadResponseClientErrorDecoder();
}

export const badResponseClientErrorCodec = new BadResponseClientErrorCodec();

registerCodec(BadResponseClientError.name, badResponseClientErrorCodec);

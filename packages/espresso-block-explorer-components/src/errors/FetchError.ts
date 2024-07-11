import {
  Converter,
  TypeCheckingCodec,
  assertErrorCode,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { stringCodec } from '@/convert/codec/string';
import BaseError, { BaseErrorEncoder } from './BaseError';
import { registerCodec } from './registry';

/**
 * FetchError is an error that indicates that a fetch operation has failed.
 * This is notably different from an error due a Server response.  These
 * tend to indicate an error before the HTTP layer is even involved. This
 * class of error accounts for io errors, bad urls, or other user submission
 * failures that prevents the server from being reached.
 */
export default class FetchError extends BaseError {
  cause: unknown;

  constructor(
    cause: unknown,
    message: string = `fetch failed: ${String(cause)}`,
  ) {
    super(message);
    this.cause = cause;
    Object.freeze(this);
  }
}

class FetchErrorDecoder implements Converter<unknown, FetchError> {
  convert(input: unknown): FetchError {
    assertRecordWithKeys(input, 'code', 'message');
    assertErrorCode(input, FetchError.name);
    // We can't actually decode this error, as it's likely to not be a
    // BaseError.
    return new FetchError({}, stringCodec.decode(input.message));
  }
}

class FetchErrorEncoder extends BaseErrorEncoder {}

class FetchErrorCodec extends TypeCheckingCodec<FetchError> {
  readonly encoder: Converter<FetchError, unknown> = new FetchErrorEncoder();
  readonly decoder: Converter<unknown, FetchError> = new FetchErrorDecoder();
}

export const bufferFullErrorCodec = new FetchErrorCodec();

registerCodec(FetchError.name, bufferFullErrorCodec);

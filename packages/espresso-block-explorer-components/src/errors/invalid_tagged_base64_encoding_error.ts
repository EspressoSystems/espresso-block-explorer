import {
  Converter,
  TypeCheckingCodec,
  assertErrorCode,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { stringCodec } from '@/convert/codec/string';
import BaseError, { BaseErrorEncoder } from './BaseError';
import { registerCodec } from './registry';

const kInvalidTaggedBase64EncodingErrorCode =
  'InvalidTaggedBase64EncodingError';

/**
 * InvalidTaggedBase64EncodingError is an error that indicates that the
 * encountered string encoding of a supposed TaggedBase64 is invalid.
 */
export default class InvalidTaggedBase64EncodingError extends BaseError {
  constructor(message: string = 'invalid tagged base64 encoding') {
    super(message);
    Object.freeze(this);
  }

  toJSON() {
    return invalidTaggedBase64EncodingErrorCodec.encode(this);
  }

  get code(): string {
    return kInvalidTaggedBase64EncodingErrorCode;
  }
}

class InvalidTaggedBase64EncodingErrorDecoder implements Converter<
  unknown,
  InvalidTaggedBase64EncodingError
> {
  convert(input: unknown): InvalidTaggedBase64EncodingError {
    assertRecordWithKeys(input, 'code', 'message');
    assertErrorCode(input, kInvalidTaggedBase64EncodingErrorCode);
    return new InvalidTaggedBase64EncodingError(
      stringCodec.decode(input.message),
    );
  }
}

class InvalidTaggedBase64EncodingErrorEncoder extends BaseErrorEncoder {}

class InvalidTaggedBase64EncodingErrorCodec extends TypeCheckingCodec<InvalidTaggedBase64EncodingError> {
  readonly encoder: Converter<InvalidTaggedBase64EncodingError, unknown> =
    new InvalidTaggedBase64EncodingErrorEncoder();
  readonly decoder: Converter<unknown, InvalidTaggedBase64EncodingError> =
    new InvalidTaggedBase64EncodingErrorDecoder();
}

export const invalidTaggedBase64EncodingErrorCodec =
  new InvalidTaggedBase64EncodingErrorCodec();

registerCodec(
  kInvalidTaggedBase64EncodingErrorCode,
  invalidTaggedBase64EncodingErrorCodec,
);

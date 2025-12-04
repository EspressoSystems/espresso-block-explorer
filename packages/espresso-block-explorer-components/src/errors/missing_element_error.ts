import {
  Converter,
  TypeCheckingCodec,
  assertErrorCode,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { stringCodec } from '@/convert/codec/string';
import BaseError, { BaseErrorEncoder } from './BaseError';
import { registerCodec } from './registry';

const kMissingElementErrorCode = 'MissingElementError';

/**
 * MissingElementError is an error that indicates that a member of a collection
 * was not present.  This generally occurs when the collection lacks the
 * necessary number of elements.
 */
export default class MissingElementError extends BaseError {
  constructor(message: string = 'missing element') {
    super(message);
    Object.freeze(this);
  }

  get code(): string {
    return kMissingElementErrorCode;
  }
}

class MissingElementErrorDecoder implements Converter<
  unknown,
  MissingElementError
> {
  convert(input: unknown): MissingElementError {
    assertRecordWithKeys(input, 'code', 'message');
    assertErrorCode(input, kMissingElementErrorCode);
    return new MissingElementError(stringCodec.decode(input.message));
  }
}

class MissingElementErrorEncoder extends BaseErrorEncoder {}

class MissingElementErrorCodec extends TypeCheckingCodec<MissingElementError> {
  readonly encoder: Converter<MissingElementError, unknown> =
    new MissingElementErrorEncoder();
  readonly decoder: Converter<unknown, MissingElementError> =
    new MissingElementErrorDecoder();
}

export const missingElementErrorCodec = new MissingElementErrorCodec();

registerCodec(kMissingElementErrorCode, missingElementErrorCodec);

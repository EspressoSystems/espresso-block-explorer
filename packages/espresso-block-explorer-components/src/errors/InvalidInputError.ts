import {
  Converter,
  TypeCheckingCodec,
  assertErrorCode,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { stringCodec } from '@/convert/codec/string';
import BaseError, { BaseErrorEncoder } from './BaseError';
import { registerCodec } from './registry';

const kInvalidInputErrorCode = 'InvalidInputError';

export default class InvalidInputError extends BaseError {
  constructor(message = 'invalid input') {
    super(message);
    Object.freeze(this);
  }

  get code(): string {
    return kInvalidInputErrorCode;
  }
}

class InvalidInputErrorDecoder
  implements Converter<unknown, InvalidInputError>
{
  convert(input: unknown): InvalidInputError {
    assertRecordWithKeys(input, 'code', 'message');
    assertErrorCode(input, kInvalidInputErrorCode);
    return new InvalidInputError(stringCodec.decode(input.message));
  }
}

class InvalidInputErrorEncoder extends BaseErrorEncoder {}

class InvalidInputErrorCodec extends TypeCheckingCodec<InvalidInputError> {
  readonly encoder: Converter<InvalidInputError, unknown> =
    new InvalidInputErrorEncoder();
  readonly decoder: Converter<unknown, InvalidInputError> =
    new InvalidInputErrorDecoder();
}

export const invalidInputErrorCodec = new InvalidInputErrorCodec();

registerCodec(kInvalidInputErrorCode, invalidInputErrorCodec);

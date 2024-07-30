import {
  Converter,
  TypeCheckingCodec,
  assertErrorCode,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { stringCodec } from '@/convert/codec/string';
import BaseError, { BaseErrorEncoder } from './BaseError';
import { registerCodec } from './registry';

const kInvalidHexStringErrorCode = 'InvalidHexStringError';

/**
 * InvalidHexStringError is an error that indicates that the hex string provided
 * is invalid as it doesn't meet the requirements of a hex encoded string.
 */
export default class InvalidHexStringError extends BaseError {
  constructor(message: string = 'invalid hex string') {
    super(message);
    Object.freeze(this);
  }

  get code(): string {
    return kInvalidHexStringErrorCode;
  }
}

class InvalidHexStringErrorDecoder
  implements Converter<unknown, InvalidHexStringError>
{
  convert(input: unknown): InvalidHexStringError {
    assertRecordWithKeys(input, 'code', 'message');
    assertErrorCode(input, kInvalidHexStringErrorCode);
    return new InvalidHexStringError(stringCodec.decode(input.message));
  }
}

class InvalidHexStringErrorEncoder extends BaseErrorEncoder {}

class InvalidHexStringErrorCodec extends TypeCheckingCodec<InvalidHexStringError> {
  readonly encoder: Converter<InvalidHexStringError, unknown> =
    new InvalidHexStringErrorEncoder();
  readonly decoder: Converter<unknown, InvalidHexStringError> =
    new InvalidHexStringErrorDecoder();
}

export const invalidHexStringErrorCodec = new InvalidHexStringErrorCodec();

registerCodec(kInvalidHexStringErrorCode, invalidHexStringErrorCodec);

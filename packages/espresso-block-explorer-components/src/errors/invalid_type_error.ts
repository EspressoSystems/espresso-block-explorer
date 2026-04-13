import { assertInstanceOf } from '@/assert/assert';
import {
  Converter,
  TypeCheckingCodec,
  assertErrorCode,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { BaseError, baseErrorEncoder } from './base_error';
import { registerCodec } from './registry';

const kInvalidTypeErrorCode = 'InvalidTypeError';

export class InvalidTypeError extends BaseError {
  readonly have: string;
  readonly want: string;
  constructor(
    haveType: string,
    wantType: string,
    message: string = `invalid type: have "${haveType}", want "${wantType}"`,
  ) {
    super(message);
    this.have = haveType;
    this.want = wantType;
    Object.freeze(this);
  }

  toJSON() {
    return invalidTypeErrorCodec.encode(this);
  }

  get code(): string {
    return kInvalidTypeErrorCode;
  }
}

class InvalidTypeErrorDecoder implements Converter<unknown, InvalidTypeError> {
  convert(input: unknown): InvalidTypeError {
    assertRecordWithKeys(input, 'code', 'have', 'want', 'message');
    assertErrorCode(input, kInvalidTypeErrorCode);
    if (typeof input.have !== 'string') {
      throw new InvalidTypeError(typeof input.have, 'string');
    }
    if (typeof input.want !== 'string') {
      throw new InvalidTypeError(typeof input.want, 'string');
    }
    if (typeof input.message !== 'string') {
      throw new InvalidTypeError(typeof input.message, 'string');
    }

    return new InvalidTypeError(input.have, input.want, input.message);
  }
}

class InvalidTypeErrorEncoder implements Converter<InvalidTypeError> {
  convert(input: InvalidTypeError) {
    assertInstanceOf(input, InvalidTypeError);
    return {
      ...baseErrorEncoder.convert(input),
      want: input.want,
      have: input.have,
    };
  }
}

class InvalidTypeErrorCodec extends TypeCheckingCodec<InvalidTypeError> {
  readonly encoder: Converter<InvalidTypeError, unknown> =
    new InvalidTypeErrorEncoder();
  readonly decoder: Converter<unknown, InvalidTypeError> =
    new InvalidTypeErrorDecoder();
}

export const invalidTypeErrorCodec = new InvalidTypeErrorCodec();

registerCodec(kInvalidTypeErrorCode, invalidTypeErrorCodec);

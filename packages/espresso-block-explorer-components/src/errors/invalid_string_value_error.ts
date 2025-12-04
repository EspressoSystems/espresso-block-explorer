import { assertInstanceOf } from '@/assert/assert';
import {
  Converter,
  TypeCheckingCodec,
  assertErrorCode,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { stringCodec } from '@/convert/codec/string';
import BaseError, { baseErrorEncoder } from './base_error';
import { registerCodec } from './registry';

const kInvalidStringValueErrorCode = 'InvalidStringValueError';

export default class InvalidStringValueError extends BaseError {
  readonly have: string;
  readonly want: string;
  constructor(
    haveType: string,
    wantType: string,
    message: string = `invalid string value: have "${haveType}", want "${wantType}"`,
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
    return kInvalidStringValueErrorCode;
  }
}

class InvalidStringValueErrorDecoder implements Converter<
  unknown,
  InvalidStringValueError
> {
  convert(input: unknown): InvalidStringValueError {
    assertRecordWithKeys(input, 'code', 'have', 'want', 'message');
    assertErrorCode(input, kInvalidStringValueErrorCode);
    return new InvalidStringValueError(
      stringCodec.decode(input.have),
      stringCodec.decode(input.want),
      stringCodec.decode(input.message),
    );
  }
}

class InvalidStringValueErrorEncoder implements Converter<InvalidStringValueError> {
  convert(input: InvalidStringValueError) {
    assertInstanceOf(input, InvalidStringValueError);
    return {
      ...baseErrorEncoder.convert(input),
      have: stringCodec.encode(input.have),
      want: stringCodec.encode(input.want),
    };
  }
}

class InvalidStringValueErrorCodec extends TypeCheckingCodec<InvalidStringValueError> {
  readonly encoder: Converter<InvalidStringValueError, unknown> =
    new InvalidStringValueErrorEncoder();
  readonly decoder: Converter<unknown, InvalidStringValueError> =
    new InvalidStringValueErrorDecoder();
}

export const invalidTypeErrorCodec = new InvalidStringValueErrorCodec();

registerCodec(kInvalidStringValueErrorCode, invalidTypeErrorCodec);

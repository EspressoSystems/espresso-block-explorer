import { assertInstanceOf } from '@/assert/assert';
import {
  Converter,
  TypeCheckingCodec,
  assertErrorCode,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { stringCodec } from '@/convert/codec/string';
import BaseError, { baseErrorEncoder } from './BaseError';
import { registerCodec } from './registry';

export default class InvalidTypeError extends BaseError {
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
}

class InvalidTypeErrorDecoder implements Converter<unknown, InvalidTypeError> {
  convert(input: unknown): InvalidTypeError {
    assertRecordWithKeys(input, 'code', 'have', 'want', 'message');
    assertErrorCode(input, InvalidTypeError.name);
    return new InvalidTypeError(
      stringCodec.decode(input.have),
      stringCodec.decode(input.want),
      stringCodec.decode(input.message),
    );
  }
}

class InvalidTypeErrorEncoder implements Converter<InvalidTypeError> {
  convert(input: InvalidTypeError) {
    assertInstanceOf(input, InvalidTypeError);
    return {
      ...baseErrorEncoder.convert(input),
      have: stringCodec.encode(input.have),
      want: stringCodec.encode(input.want),
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

registerCodec(InvalidTypeError.name, invalidTypeErrorCodec);

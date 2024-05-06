import {
  Converter,
  TypeCheckingCodec,
  assertErrorCode,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { numberCodec } from '@/convert/codec/number';
import { stringCodec } from '@/convert/codec/string';
import BaseError, { baseErrorEncoder } from './BaseError';
import { registerCodec } from './registry';

/**
 * InvalidHexValueError is an error that indicates that the encountered value
 * isn't valid for a hex representation.
 */
export class InvalidHexValueError extends BaseError {
  readonly value: number;

  constructor(value: number, message: string = `invalid hex value "${value}"`) {
    super(message);
    this.value = value;
    Object.freeze(this);
  }

  toJSON() {
    return invalidHexValueErrorCodec.encode(this);
  }
}

class InvalidHexValueErrorDecoder
  implements Converter<unknown, InvalidHexValueError>
{
  convert(input: unknown): InvalidHexValueError {
    assertRecordWithKeys(input, 'code', 'value', 'message');
    assertErrorCode(input, InvalidHexValueError.name);
    return new InvalidHexValueError(
      numberCodec.decode(input.value),
      stringCodec.decode(input.message),
    );
  }
}

class InvalidHexValueErrorEncoder implements Converter {
  convert(input: InvalidHexValueError) {
    return {
      ...baseErrorEncoder.convert(input),
      value: numberCodec.encode(input.value),
    };
  }
}

class InvalidHexValueErrorCodec extends TypeCheckingCodec<InvalidHexValueError> {
  readonly encoder: Converter<InvalidHexValueError, unknown> =
    new InvalidHexValueErrorEncoder();
  readonly decoder: Converter<unknown, InvalidHexValueError> =
    new InvalidHexValueErrorDecoder();
}

export const invalidHexValueErrorCodec = new InvalidHexValueErrorCodec();

registerCodec(InvalidHexValueError.name, invalidHexValueErrorCodec);

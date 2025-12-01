import { assertInstanceOf } from '@/assert/assert';
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

const kInvalidBase64AlphabetLengthErrorCode =
  'InvalidBase64AlphabetLengthError';

/**
 * InvalidAlphabetLengthError is an error that indicates the the Base64 alphabet
 * provided does not meet the required criteria.
 */
export class InvalidBase64AlphabetLengthError extends BaseError {
  readonly length: number;

  constructor(
    length: number,
    message: string = `alphabet needs to be 64 characters, received ${length}`,
  ) {
    super(message);
    this.length = length;
    Object.freeze(this);
  }

  toJSON() {
    return invalidBase64AlphabetLengthErrorCodec.encode(this);
  }

  get code(): string {
    return kInvalidBase64AlphabetLengthErrorCode;
  }
}

class InvalidBase64AlphabetLengthErrorDecoder implements Converter<
  unknown,
  InvalidBase64AlphabetLengthError
> {
  convert(input: unknown): InvalidBase64AlphabetLengthError {
    assertRecordWithKeys(input, 'code', 'length', 'message');
    assertErrorCode(input, kInvalidBase64AlphabetLengthErrorCode);
    return new InvalidBase64AlphabetLengthError(
      numberCodec.decode(input.length),
      stringCodec.decode(input.message),
    );
  }
}

class InvalidBase64AlphabetLengthErrorEncoder implements Converter<InvalidBase64AlphabetLengthError> {
  convert(input: InvalidBase64AlphabetLengthError) {
    assertInstanceOf(input, InvalidBase64AlphabetLengthError);

    return {
      ...baseErrorEncoder.convert(input),
      length: numberCodec.encode(input.length),
    };
  }
}

class InvalidBase64AlphabetLengthErrorCodec extends TypeCheckingCodec<InvalidBase64AlphabetLengthError> {
  readonly encoder: Converter<InvalidBase64AlphabetLengthError, unknown> =
    new InvalidBase64AlphabetLengthErrorEncoder();
  readonly decoder: Converter<unknown, InvalidBase64AlphabetLengthError> =
    new InvalidBase64AlphabetLengthErrorDecoder();
}

export const invalidBase64AlphabetLengthErrorCodec =
  new InvalidBase64AlphabetLengthErrorCodec();

registerCodec(
  kInvalidBase64AlphabetLengthErrorCode,
  invalidBase64AlphabetLengthErrorCodec,
);

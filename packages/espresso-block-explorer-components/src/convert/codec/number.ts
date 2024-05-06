import { assertType } from '@/assert/assert';
import InvalidTypeError from '@/errors/InvalidTypeError';
import { ArrayCodec, ArrayDecoder, ArrayEncoder } from './array';
import {
  Converter,
  TypeCheckingCodec,
  isArrayMemberFunction,
  isNumber,
} from './convert';

export const isNumberArray = isArrayMemberFunction(isNumber);

/**
 * NumberDecoder is a Converter that converts a number to a number.
 * This is effectively an identity function, so what it really does
 * is act as an assertion that a number is given where a number is
 * expected.
 */
export class NumberDecoder implements Converter<unknown, number> {
  convert(input: unknown): number {
    if (!isNumber(input)) {
      throw new InvalidTypeError(typeof input, 'number');
    }

    return input;
  }
}

/**
 * NumberEncoder is a Converter that converts a number to a number.
 * This is an identity function, so no conversion actually takes
 * place.
 */
export class NumberEncoder implements Converter<number, number> {
  convert(input: number): number {
    assertType(input, 'number');

    return input;
  }
}

/**
 * NumberCodec is a Codec that encapsulates conversion from and to
 * a number.
 */
export class NumberCodec extends TypeCheckingCodec<number, number> {
  readonly encoder = new NumberEncoder();
  readonly decoder = new NumberDecoder();
}

export const numberCodec = new NumberCodec();
export const numberArrayCodec = new ArrayCodec(
  new ArrayDecoder(numberCodec),
  new ArrayEncoder(numberCodec),
);

import { assertType } from '@/assert/assert';
import InvalidTypeError from '@/errors/InvalidTypeError';
import { ArrayCodec, ArrayDecoder, ArrayEncoder } from './array';
import {
  Converter,
  TypeCheckingCodec,
  isArrayMemberFunction,
  isString,
} from './convert';
import { NullCodec, NullDecoder, NullEncoder } from './null';

export const isStringArray = isArrayMemberFunction(isString);

/**
 * StringDecoder is a Converter that converts a string to a string.
 * This is effectively an identity function, so what it really does
 * is act as an assertion that a string is given where a string is
 * expected.
 */
export class StringDecoder<S extends string = string>
  implements Converter<unknown, S>
{
  convert(input: unknown): S {
    if (!isString(input)) {
      throw new InvalidTypeError(typeof input, 'string');
    }

    return input as S;
  }
}

/**
 * StringEncoder is a Converter that converts a string to a string.
 * This is an identity function, so no conversion actually takes
 * place.
 */
export class StringEncoder<S extends string = string>
  implements Converter<S, S>
{
  convert(input: S): S {
    assertType(input, 'string');

    return input;
  }
}

/**
 * StringCodec is a Codec that encapsulates conversion from and to
 * a string.
 */
export class StringCodec<S extends string = string> extends TypeCheckingCodec<
  S,
  S
> {
  readonly encoder = new StringEncoder<S>();
  readonly decoder = new StringDecoder<S>();
}

export const stringCodec = new StringCodec();
export const stringArrayCodec = new ArrayCodec(
  new ArrayDecoder(stringCodec),
  new ArrayEncoder(stringCodec),
);
export const nullableStringCodec = new NullCodec(
  new NullDecoder(stringCodec),
  new NullEncoder(stringCodec),
);

/**
 * preferNullOverEmptyString is a function that is used to ensure that strings
 * that have no meaningful content, and where a `null` value is allowable, will
 * prefer to return `null` instead of the empty string value.
 */
export function preferNullOverEmptyString(
  input: undefined | null | string,
): null | string {
  if (!input || !input.trim()) {
    return null;
  }

  return input;
}

import { ArrayCodec, ArrayDecoder, ArrayEncoder } from './array';
import {
  Converter,
  InvalidInputError,
  TypeCheckingCodec,
  isArrayMemberFunction,
  isString,
} from './convert';

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
    if (typeof input !== 'string') {
      throw new InvalidInputError();
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

import { assertType } from '@/assert/assert';
import InvalidTypeError from '@/errors/InvalidTypeError';
import { Converter, TypeCheckingCodec, isBoolean } from './convert';

/**
 * BooleanDecoder is a Converter that converts a boolean to a boolean.
 * This is effectively an identity function, so what it really does
 * is act as an assertion that a boolean is given where a boolean is
 * expected.
 */
export class BooleanDecoder implements Converter<unknown, boolean> {
  convert(input: unknown): boolean {
    if (!isBoolean(input)) {
      throw new InvalidTypeError(typeof input, 'boolean');
    }

    return input;
  }
}

/**
 * BooleanEncoder is a Converter that converts a boolean to a boolean.
 * This is an identity function, so no conversion actually takes
 * place.
 */
export class BooleanEncoder implements Converter<boolean, boolean> {
  convert(input: boolean): boolean {
    assertType(input, 'boolean');

    return input;
  }
}

/**
 * BooleanCodec is a Codec that encapsulates conversion from and to
 * a boolean.
 */
export class BooleanCodec extends TypeCheckingCodec<boolean, boolean> {
  readonly encoder = new BooleanEncoder();
  readonly decoder = new BooleanDecoder();
}

export const booleanCodec = new BooleanCodec();

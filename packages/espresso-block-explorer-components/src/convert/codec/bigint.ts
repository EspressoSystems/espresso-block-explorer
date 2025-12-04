import { assertType } from '@/assert/assert';
import InvalidTypeError from '@/errors/InvalidTypeError';
import { ArrayCodec, ArrayDecoder, ArrayEncoder } from './array';
import {
  Converter,
  TypeCheckingCodec,
  isBigint,
  isNumber,
  isString,
} from './convert';
import { NullCodec, NullDecoder, NullEncoder } from './null';

export class BigintDecoder implements Converter<unknown, bigint> {
  convert(input: unknown): bigint {
    if (isBigint(input)) {
      return input;
    }

    if (isNumber(input)) {
      // If the input is a number, we convert it to a bigint.
      return BigInt(input);
    }

    if (!isString(input)) {
      // We have an unexpected type.
      throw new InvalidTypeError(typeof input, 'string | bigint | number');
    }

    // We're expecting a bigint, but we have a string.
    // All values encoded this way, we're assuming are of the
    // form '0x...'.
    // So we'll operate under the assumption that this is a hex string
    // and attempt convert it to a bigint.

    return BigInt(input);
  }
}

export class BigintEncoder implements Converter<bigint, `0x${string}`> {
  convert(input: bigint): `0x${string}` {
    assertType(input, 'bigint');

    return `0x${input.toString(16)}`;
  }
}

export class BigintCodec extends TypeCheckingCodec<bigint, `0x${string}`> {
  readonly encoder = new BigintEncoder();
  readonly decoder = new BigintDecoder();
}

export const bigintCodec = new BigintCodec();

export const nullableBigintCodec = new NullCodec(
  new NullDecoder(bigintCodec),
  new NullEncoder(bigintCodec),
);

export const bigintArrayCodec = new ArrayCodec(
  new ArrayDecoder(bigintCodec),
  new ArrayEncoder(bigintCodec),
);

export const nullableBigintArrayCodec = new ArrayCodec(
  new ArrayDecoder(nullableBigintCodec),
  new ArrayEncoder(nullableBigintCodec),
);

/**
 * BigInts can end up serialized occasionally, so we add a toJSON method
 * to the BigInt prototype to ensure that it doesn't cause React to crash
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(BigInt.prototype as any).toJSON = function () {
  return bigintCodec.encode(this);
};

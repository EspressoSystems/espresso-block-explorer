import { describe, expect, it } from 'vitest';
import { PseudoRandomNumberGenerator } from '../../../data_source/fake_data_source/prng';
import { numberCodec } from '../number';
import {
  UndefinedCodec,
  UndefinedDecoder,
  UndefinedEncoder,
} from '../undefined';

function appendGarbage(
  input: (number | null | undefined | string | bigint | object)[],
): void {
  input.push(null, 'foo', 1n, {});
}

describe('Undefined Codec', () => {
  const codec = new UndefinedCodec(
    new UndefinedDecoder(numberCodec),
    new UndefinedEncoder(numberCodec),
  );
  it('should allow for "undefined" as an option when encoding / decoding', () => {
    expect(codec.encode(undefined)).equals(undefined);
    expect(codec.encode(1)).equals(1);
    expect(codec.encode(-1)).equals(-1);
    expect(codec.encode(-0)).equals(-0);
    expect(codec.encode(Infinity)).equals(Infinity);
    expect(codec.encode(-Infinity)).equals(-Infinity);
    expect(codec.encode(3.14159)).equals(3.14159);
    expect(codec.encode(NaN)).toBeNaN();

    const prng = new PseudoRandomNumberGenerator();
    for (let i = 0; i < 10; i++) {
      const n = prng.nextRange(-1e256, 1e256);
      expect(codec.encode(n)).equals(n);
    }
  });

  it('should throw errors when not given a number', () => {
    const cases: (undefined | number)[] = [];

    appendGarbage(cases);

    const l = cases.length;
    for (let i = 0; i < l; i++) {
      const c = cases[i];
      expect(() => codec.decode(c)).toThrow();
    }
  });
});

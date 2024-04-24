import { PseudoRandomNumberGenerator } from '@/data_source/fake_data_source/prng';
import { describe, expect, it } from 'vitest';
import { NullCodec, NullDecoder, NullEncoder } from '../null';
import { numberCodec } from '../number';

function appendGarbage(
  input: (number | null | undefined | string | bigint | object)[],
): void {
  input.push(undefined, 'foo', 1n, {});
}

describe('Null Codec', () => {
  const codec = new NullCodec(
    new NullDecoder(numberCodec),
    new NullEncoder(numberCodec),
  );
  it('should allow for "null" as an option when encoding / decoding', () => {
    expect(codec.encode(null)).equals(null);
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
    const cases: (null | number)[] = [];

    appendGarbage(cases);

    const l = cases.length;
    for (let i = 0; i < l; i++) {
      const c = cases[i];
      expect(() => codec.decode(c)).toThrow();
    }
  });
});

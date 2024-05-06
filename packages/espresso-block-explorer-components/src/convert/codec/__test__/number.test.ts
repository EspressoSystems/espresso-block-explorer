import { PseudoRandomNumberGenerator } from '@/data_source/fake_data_source/prng';
import { describe, expect, it } from 'vitest';
import { numberCodec } from '../number';

function appendGarbage(
  input: (number | null | undefined | string | bigint | object)[],
): void {
  input.push(null, undefined, 'foo', 1n, {});
}

describe('Number Codec', () => {
  it('should yield the same result it receives', () => {
    expect(numberCodec.encode(1)).equals(1);
    expect(numberCodec.encode(-1)).equals(-1);
    expect(numberCodec.encode(-0)).equals(-0);
    expect(numberCodec.encode(Infinity)).equals(Infinity);
    expect(numberCodec.encode(-Infinity)).equals(-Infinity);
    expect(numberCodec.encode(3.14159)).equals(3.14159);
    expect(numberCodec.encode(NaN)).toBeNaN();

    const prng = new PseudoRandomNumberGenerator();
    for (let i = 0; i < 10; i++) {
      const n = prng.nextRange(-1e256, 1e256);
      expect(numberCodec.encode(n)).equals(n);
    }
  });

  it('should throw errors when not given a number', () => {
    const cases: number[] = [];

    appendGarbage(cases);

    const l = cases.length;
    for (let i = 0; i < l; i++) {
      const c = cases[i];
      expect(() => numberCodec.decode(c)).toThrow();
    }
  });
});

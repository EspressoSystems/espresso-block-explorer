import { describe, expect, it } from 'vitest';
import { ArrayCodec, ArrayDecoder, ArrayEncoder } from '../array';
import { numberCodec } from '../number';

function appendGarbage(
  input: (number[] | number | null | undefined | string | bigint | object)[],
): void {
  input.push(1, null, undefined, 'foo', 1n, {});
}

describe('Array Codec', () => {
  const codec = new ArrayCodec(
    new ArrayDecoder(numberCodec),
    new ArrayEncoder(numberCodec),
  );
  it('should allow for the encoding and decoding of an array of members', () => {
    expect(codec.encode([1, 2, 3])).deep.equals([1, 2, 3]);
    expect(codec.decode([1, 2, 3])).deep.equals([1, 2, 3]);
  });

  it('should throw errors when not given a number', () => {
    const cases: number[][] = [];

    appendGarbage(cases);

    const l = cases.length;
    for (let i = 0; i < l; i++) {
      const c = cases[i];
      expect(() => codec.decode(c)).toThrow();
    }
  });
});

import { describe, expect, it } from 'vitest';
import { booleanCodec } from '../boolean';

function appendGarbage(
  input: (boolean | number | null | undefined | string | bigint | object)[],
): void {
  input.push(1, null, undefined, 'foo', 1n, {});
}

describe('Boolean Codec', () => {
  it('should convert true to true', () => {
    expect(booleanCodec.encode(true)).equals(true);
  });

  it('should convert false to false', () => {
    expect(booleanCodec.encode(true)).equals(true);
  });

  it('should throw errors when not given a number', () => {
    const cases: boolean[] = [];

    appendGarbage(cases);

    const l = cases.length;
    for (let i = 0; i < l; i++) {
      const c = cases[i];
      expect(() => booleanCodec.decode(c)).toThrow();
    }
  });
});

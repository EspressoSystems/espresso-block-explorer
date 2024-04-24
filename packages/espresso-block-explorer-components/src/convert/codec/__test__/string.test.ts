import { PseudoRandomNumberGenerator } from '@/data_source/fake_data_source/prng';
import { describe, expect, it } from 'vitest';
import { stringCodec } from '../string';

function appendGarbage(
  input: (string | null | undefined | number | bigint | object)[],
): void {
  input.push(null, undefined, 1, 1n, {});
}

describe('String Codec', () => {
  it('should yield the same result it receives', () => {
    expect(stringCodec.encode('')).equals('');
    expect(stringCodec.encode('abcdef')).equals('abcdef');

    const prng = new PseudoRandomNumberGenerator();
    for (let j = 0; j < 10; j++) {
      const l = prng.nextRange(20, 50);
      const ab = new Uint8Array(prng.fillBytes(l));

      const s1 = String.fromCodePoint(...ab);
      expect(stringCodec.encode(s1)).equals(s1);
    }
  });

  it('should throw errors when not given a number', () => {
    const cases: string[] = [];

    appendGarbage(cases);

    const l = cases.length;
    for (let i = 0; i < l; i++) {
      const c = cases[i];
      expect(() => stringCodec.decode(c)).toThrow();
    }
  });
});

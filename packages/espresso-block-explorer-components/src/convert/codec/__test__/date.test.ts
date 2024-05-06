import { describe, expect, it } from 'vitest';
import { rfc3999DateCodec } from '../date';

function appendGarbage(
  input: (string | null | undefined | string | bigint | object)[],
): void {
  input.push(undefined, 'foo', 1n, {});
}

describe('Date Codec', () => {
  describe('RFC3999 Date Codec', () => {
    it('should be able to encode and decode valid RFC3999 Dates', () => {
      expect(rfc3999DateCodec.encode(new Date('2021-01-01T00:00:00Z'))).equals(
        '2021-01-01T00:00:00.000Z',
      );

      expect(rfc3999DateCodec.decode('2021-01-01T00:00:00Z').valueOf()).equals(
        new Date('2021-01-01T00:00:00Z').valueOf(),
      );
    });

    it('should throw errors when not given a number', () => {
      const cases: string[] = [];

      appendGarbage(cases);

      const l = cases.length;
      for (let i = 0; i < l; i++) {
        const c = cases[i];
        expect(() => rfc3999DateCodec.decode(c)).toThrow();
      }
    });
  });
});

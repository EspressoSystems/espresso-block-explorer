import { describe, expect, it } from 'vitest';
import {
  decodeSint32,
  decodeSint64,
  encodeSint32,
  encodeSint64,
} from '../signed_int';

describe('protobuf', () => {
  describe('sint', () => {
    describe('protobuf encoding examples', () => {
      it('should match the expected encoding pattern', () => {
        const pairs = [
          [0n, 0n],
          [-1n, 1n],
          [1n, 2n],
          [-2n, 3n],
          // ...
          [-500n, 999n],
          // ...
          [0x7fff_ffffn, 0xffff_fffen],
          [-0x8000_0000n, 0xffff_ffffn],
        ] as const;

        for (const [original, encoded] of pairs) {
          expect(encodeSint32(original)).toEqual(encoded);
          expect(decodeSint32(encoded)).toEqual(original);

          expect(encodeSint64(original)).toEqual(encoded);
          expect(decodeSint64(encoded)).toEqual(original);
        }
      });
    });
  });
});

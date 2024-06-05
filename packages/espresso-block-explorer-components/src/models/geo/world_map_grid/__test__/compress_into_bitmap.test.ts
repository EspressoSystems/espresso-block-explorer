import { PseudoRandomNumberGenerator } from '@/data_source/fake_data_source';
import { describe, it } from 'vitest';
import {
  compressIntoBitMap,
  expandIntoBooleanArray,
} from '../compress_into_bitmap';

describe('Compress Into BitMap', () => {
  describe('compressIntoBitMap', () => {
    it('should encode 8 trues to 0xff', () => {
      expect(
        new Uint8Array(
          compressIntoBitMap([true, true, true, true, true, true, true, true]),
        ),
      ).to.deep.equal(new Uint8Array([0b11111111]));
    });

    it('should expand to the nearest divisible number of bytes', () => {
      expect(
        new Uint8Array(
          compressIntoBitMap([true, true, true, true, true, true, true]),
        ),
      ).to.deep.equal(new Uint8Array([0b11111110]));

      expect(
        new Uint8Array(
          compressIntoBitMap([
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
          ]),
        ),
      ).to.deep.equal(new Uint8Array([0b11111111, 0b10000000]));
    });
  });

  describe('expandIntoBooleanArray', () => {
    it('should decode 0xff into 8 trues', () => {
      expect(
        expandIntoBooleanArray(new Uint8Array([0b11111111]).buffer),
      ).to.deep.equal([true, true, true, true, true, true, true, true]);
    });
  });

  describe('invertible', () => {
    it('should be invertible', () => {
      const prng = new PseudoRandomNumberGenerator(Date.now());

      const input = new Uint8Array(prng.fillBytes(64));
      expect(
        new Uint8Array(
          compressIntoBitMap(expandIntoBooleanArray(input.buffer)),
        ),
      ).to.deep.equal(input);
    });
  });
});

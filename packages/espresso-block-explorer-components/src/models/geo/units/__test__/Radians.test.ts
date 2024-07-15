import InvalidTypeError from '@/errors/InvalidTypeError';
import { describe, expect, it } from 'vitest';
import Radians, { radiansCodec } from '../Radians';

describe('Radians', () => {
  describe('numeric', () => {
    it('should represents a numeric value', () => {
      for (let i = -Math.PI / 2; i <= Math.PI / 2; i += Math.PI / 180) {
        const radians = new Radians(i);
        expect(Number(radians)).equals(i);
      }
    });
  });

  describe('toString', () => {
    it('should return a string with a "rad" suffix', () => {
      const radians = new Radians(0);
      expect(radians.toString()).equals('0 rad');
    });
  });

  describe('Codec', () => {
    it('should decode a number into Degrees successfully', () => {
      const radians = radiansCodec.decode(0);
      expect(() => radiansCodec.decode(0)).not.toThrow();
      expect(radians).toBeInstanceOf(Radians);
      expect(Number(radians)).equals(0);
    });

    it('should thrown if not given a number', () => {
      expect(() => radiansCodec.decode('0')).throws(InvalidTypeError);
    });
  });
});

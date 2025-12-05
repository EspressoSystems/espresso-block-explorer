import InvalidTypeError from '@/errors/invalid_type_error';
import { describe, expect, it } from 'vitest';
import Degrees, { degreesCodec } from '../degrees';

describe('Degrees', () => {
  describe('numeric', () => {
    it('should represents a numeric value', () => {
      for (let i = -180; i <= 180; i++) {
        const degrees = new Degrees(i);
        expect(Number(degrees)).equals(i);
      }
    });
  });

  describe('toString', () => {
    it('should return the value with a degree symbol', () => {
      const degrees = new Degrees(0);
      expect(degrees.toString()).equals('0°');
    });
  });

  describe('Codec', () => {
    it('should decode a number into Degrees successfully', () => {
      const degrees = degreesCodec.decode(0);
      expect(() => degreesCodec.decode(0)).not.toThrow();
      expect(degrees).toBeInstanceOf(Degrees);
      expect(Number(degrees)).equals(0);
    });

    it('should thrown if not given a number', () => {
      expect(() => degreesCodec.decode('0')).throws(InvalidTypeError);
    });
  });
});

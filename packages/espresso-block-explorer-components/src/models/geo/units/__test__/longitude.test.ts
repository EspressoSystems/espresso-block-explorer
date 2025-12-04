import { describe, expect, it } from 'vitest';
import Degrees from '../Degrees';
import Longitude from '../Longitude';

describe('Longitude', () => {
  describe('Degrees', () => {
    describe('numeric', () => {
      it('should represents a numeric value', () => {
        for (let i = -90; i <= 90; i++) {
          const longitude = new Longitude(new Degrees(i));
          expect(Number(longitude)).equals(i);
        }
      });
    });

    describe('toString', () => {
      it('should return the value with a "lng" suffix', () => {
        const longitude = new Longitude(new Degrees(0));
        expect(longitude.toString()).equals('0° lng');
      });
    });
  });
});

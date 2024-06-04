import { describe, expect, it } from 'vitest';
import Degrees from '../Degrees';
import Latitude from '../Latitude';

describe('Latitude', () => {
  describe('Degrees', () => {
    describe('numeric', () => {
      it('should represents a numeric value', () => {
        for (let i = -180; i <= 180; i++) {
          const latitude = new Latitude(new Degrees(i));
          expect(Number(latitude)).equals(i);
        }
      });
    });

    describe('toString', () => {
      it('should return the value with a "lat" suffix', () => {
        const latitude = new Latitude(new Degrees(0));
        expect(latitude.toString()).equals('0° lat');
      });
    });
  });
});

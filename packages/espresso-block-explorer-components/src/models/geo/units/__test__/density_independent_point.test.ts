import { describe, expect, it } from 'vitest';
import DensityIndependentPoint from '../density_independent_point';

describe('DensityIndependentPoint', () => {
  describe('numeric', () => {
    it('should represents a numeric value', () => {
      for (let i = -100; i <= 100; i++) {
        const degrees = new DensityIndependentPoint(i);
        expect(Number(degrees)).equals(i);
      }
    });
  });

  describe('toString', () => {
    it('should return a string with a "dp" suffix', () => {
      const degrees = new DensityIndependentPoint(0);
      expect(degrees.toString()).equals('0 dp');
    });
  });
});

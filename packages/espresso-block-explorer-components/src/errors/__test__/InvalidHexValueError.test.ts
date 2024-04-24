import { describe, expect, it } from 'vitest';
import { InvalidHexValueError } from '../InvalidHexValueError';

describe('InvalidHexValueError', () => {
  describe('toJSON', () => {
    it('should yield a JSON representation with the correct parts', () => {
      const err = new InvalidHexValueError(500);

      expect(err.toJSON()).deep.equals({
        name: InvalidHexValueError.name,
        message: err.message,
        value: 500,
      });
    });
  });
});

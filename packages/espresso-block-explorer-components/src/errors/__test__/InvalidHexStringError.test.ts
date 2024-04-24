import { describe, expect, it } from 'vitest';
import InvalidHexStringError from '../InvalidHexStringError';

describe('InvalidHexStringError', () => {
  describe('toJSON', () => {
    it('should yield a JSON representation with the correct parts', () => {
      const err = new InvalidHexStringError();

      expect(err.toJSON()).deep.equals({
        name: InvalidHexStringError.name,
        message: err.message,
      });
    });
  });
});

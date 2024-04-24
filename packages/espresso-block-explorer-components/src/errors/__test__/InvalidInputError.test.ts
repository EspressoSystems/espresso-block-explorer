import { describe, expect, it } from 'vitest';
import InvalidInputError from '../InvalidInputError';

describe('InvalidInputError', () => {
  describe('toJSON', () => {
    it('should yield a JSON representation with the correct parts', () => {
      const err = new InvalidInputError();

      expect(err.toJSON()).deep.equals({
        name: InvalidInputError.name,
        message: err.message,
      });
    });
  });
});

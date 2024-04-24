import { describe, expect, it } from 'vitest';
import { CompleterAlreadyCompletedError } from '../CompleterAlreadyCompletedError';

describe('CompleterAlreadyCompletedError', () => {
  describe('toJSON', () => {
    it('should yield a JSON representation with the correct parts', () => {
      const err = new CompleterAlreadyCompletedError();

      expect(err.toJSON()).deep.equals({
        name: CompleterAlreadyCompletedError.name,
        message: err.message,
      });
    });
  });
});

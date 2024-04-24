import { describe, expect, it } from 'vitest';
import NotFoundError from '../NotFoundError';

describe('NotFoundError', () => {
  describe('toJSON', () => {
    it('should yield a JSON representation with the correct parts', () => {
      const err = new NotFoundError(1);

      expect(err.toJSON()).deep.equals({
        name: NotFoundError.name,
        message: err.message,
        key: 1,
      });
    });
  });
});

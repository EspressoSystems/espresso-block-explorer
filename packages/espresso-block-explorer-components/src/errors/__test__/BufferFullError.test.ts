import { describe, expect, it } from 'vitest';
import BufferFullError from '../BufferFullError';

describe('BufferFullError', () => {
  describe('toJSON', () => {
    it('should yield a JSON representation with the correct parts', () => {
      const err = new BufferFullError();

      expect(err.toJSON()).deep.equals({
        name: BufferFullError.name,
        message: err.message,
      });
    });
  });
});

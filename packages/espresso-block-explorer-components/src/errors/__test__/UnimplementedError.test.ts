import { describe, expect, it } from 'vitest';
import UnimplementedError from '../UnimplementedError';

describe('UnimplementedError', () => {
  describe('toJSON', () => {
    it('should yield a JSON representation with the correct parts', () => {
      const err = new UnimplementedError();

      expect(err.toJSON()).deep.equals({
        name: UnimplementedError.name,
        message: err.message,
      });
    });
  });
});

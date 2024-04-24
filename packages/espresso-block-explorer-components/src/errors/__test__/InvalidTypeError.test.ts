import { describe, expect, it } from 'vitest';
import InvalidTypeError from '../InvalidTypeError';

describe('InvalidTypeError', () => {
  describe('toJSON', () => {
    it('should yield a JSON representation with the correct parts', () => {
      const err = new InvalidTypeError('string', 'object');

      expect(err.toJSON()).deep.equals({
        name: InvalidTypeError.name,
        message: err.message,
        have: 'string',
        want: 'object',
      });
    });
  });
});

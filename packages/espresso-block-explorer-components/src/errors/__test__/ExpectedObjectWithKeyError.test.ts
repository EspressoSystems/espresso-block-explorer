import { describe, expect, it } from 'vitest';
import ExpectedObjectWithKeyError from '../../convert/codec/ExpectedObjectWithKeyError';

describe('ExpectedObjectWithKeyError', () => {
  describe('toJSON', () => {
    it('should yield a JSON representation with the correct parts', () => {
      const err = new ExpectedObjectWithKeyError('object', 'foo');

      expect(err.toJSON()).deep.equals({
        code: ExpectedObjectWithKeyError.name,
        message: err.message,
        have: 'object',
        key: 'foo',
      });
    });
  });
});

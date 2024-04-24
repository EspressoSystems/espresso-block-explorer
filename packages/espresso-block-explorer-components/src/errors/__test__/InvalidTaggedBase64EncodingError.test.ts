import { describe, expect, it } from 'vitest';
import InvalidTaggedBase64EncodingError from '../InvalidTaggedBase64EncodingError';

describe('InvalidTaggedBase64EncodingError', () => {
  describe('toJSON', () => {
    it('should yield a JSON representation with the correct parts', () => {
      const err = new InvalidTaggedBase64EncodingError();

      expect(err.toJSON()).deep.equals({
        name: InvalidTaggedBase64EncodingError.name,
        message: err.message,
      });
    });
  });
});

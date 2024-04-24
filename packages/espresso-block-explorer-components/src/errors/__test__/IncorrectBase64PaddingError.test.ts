import { describe, expect, it } from 'vitest';
import { IncorrectBase64PaddingError } from '../IncorrectBase64PaddingError';

describe('IncorrectBase64PaddingError', () => {
  describe('toJSON', () => {
    it('should yield a JSON representation with the correct parts', () => {
      const err = new IncorrectBase64PaddingError();

      expect(err.toJSON()).deep.equals({
        name: IncorrectBase64PaddingError.name,
        message: err.message,
      });
    });
  });
});

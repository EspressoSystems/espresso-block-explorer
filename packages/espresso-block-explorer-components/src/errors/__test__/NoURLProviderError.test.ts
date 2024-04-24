import { describe, expect, it } from 'vitest';
import NoURLProvidedError from '../NoURLProvidedError';

describe('NoURLProviderError', () => {
  describe('toJSON', () => {
    it('should yield a JSON representation with the correct parts', () => {
      const err = new NoURLProvidedError();

      expect(err.toJSON()).deep.equals({
        name: NoURLProvidedError.name,
        message: err.message,
      });
    });
  });
});

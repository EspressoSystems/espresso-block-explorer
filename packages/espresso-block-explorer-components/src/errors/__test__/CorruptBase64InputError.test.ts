import { describe, expect, it } from 'vitest';
import { CorruptBase64InputError } from '../CorruptBase64InputError';

describe('CorruptBase64InputError', () => {
  describe('toJSON', () => {
    it('should yield a JSON representation with the correct parts', () => {
      const err = new CorruptBase64InputError(0);

      expect(err.toJSON()).deep.equals({
        name: CorruptBase64InputError.name,
        message: err.message,
        offset: 0,
      });
    });
  });
});

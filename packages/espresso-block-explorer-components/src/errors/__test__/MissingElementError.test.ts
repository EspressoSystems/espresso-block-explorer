import { describe, expect, it } from 'vitest';
import MissingElementError from '../MissingElementError';

describe('MissingElementError', () => {
  describe('toJSON', () => {
    it('should yield a JSON representation with the correct parts', () => {
      const err = new MissingElementError();

      expect(err.toJSON()).deep.equals({
        name: MissingElementError.name,
        message: err.message,
      });
    });
  });
});

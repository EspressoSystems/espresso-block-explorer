import { describe, expect, it } from 'vitest';
import { FailedAssertion } from '../FailedAssertion';

describe('FailedAssertion', () => {
  describe('toJSON', () => {
    it('should yield a JSON representation with the correct parts', () => {
      const err = new FailedAssertion();

      expect(err.toJSON()).deep.equals({
        name: FailedAssertion.name,
        message: err.message,
      });
    });
  });
});

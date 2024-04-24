import { describe, expect, it } from 'vitest';
import NoCompleterFoundForRequestID from '../NoCompleterFoundForRequestID';

describe('NoCompleterFoundForRequestID', () => {
  describe('toJSON', () => {
    it('should yield a JSON representation with the correct parts', () => {
      const err = new NoCompleterFoundForRequestID(1);

      expect(err.toJSON()).deep.equals({
        name: NoCompleterFoundForRequestID.name,
        message: err.message,
        requestID: 1,
      });
    });
  });
});

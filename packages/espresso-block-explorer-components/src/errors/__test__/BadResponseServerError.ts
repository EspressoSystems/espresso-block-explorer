import { describe, expect, it } from 'vitest';
import BadResponseServerError from '../BadResponseServerError';

describe('BadResponseServerError', () => {
  describe('toJSON', () => {
    it('should yield a JSON representation with the correct parts', () => {
      const err = new BadResponseServerError(
        new Response(undefined, {
          status: 500,
        }),
      );

      expect(err.toJSON()).deep.equals({
        name: BadResponseServerError.name,
        message: err.message,
        status: 500,
      });
    });
  });
});

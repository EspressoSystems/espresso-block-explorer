import { describe, expect, it } from 'vitest';
import BadResponseError from '../BadResponseError';

describe('BadResponseError', () => {
  describe('toJSON', () => {
    it('should yield a JSON representation with the correct parts', () => {
      const err = new BadResponseError(
        new Response(undefined, {
          status: 200,
        }),
      );

      expect(err.toJSON()).deep.equals({
        name: BadResponseError.name,
        message: err.message,
        status: 200,
      });
    });
  });
});

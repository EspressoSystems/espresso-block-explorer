import { describe, expect, it } from 'vitest';
import BadResponseClientError from '../BadResponseClientError';

describe('BadResponseClientError', () => {
  describe('toJSON', () => {
    it('should yield a JSON representation with the correct parts', () => {
      const err = new BadResponseClientError(
        new Response(undefined, {
          status: 400,
        }),
      );

      expect(err.toJSON()).to.deep.equals({
        name: BadResponseClientError.name,
        message: err.message,
        status: 400,
      });
    });
  });
});

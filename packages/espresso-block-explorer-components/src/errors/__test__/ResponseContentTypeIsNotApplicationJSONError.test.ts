import { describe, expect, it } from 'vitest';
import ResponseContentTypeIsNotApplicationJSONError from '../ResponseContentTypeIsNotApplicationJSONError';

describe('ResponseContentTypeIsNotApplicationJSONError', () => {
  describe('toJSON', () => {
    it('should yield a JSON representation with the correct parts', () => {
      const err = ResponseContentTypeIsNotApplicationJSONError.fromResponse(
        new Response(undefined, {
          status: 200,
          headers: {
            'content-type': 'text/html',
          },
        }),
      );

      expect(err.toJSON()).deep.equals({
        name: ResponseContentTypeIsNotApplicationJSONError.name,
        message: err.message,
        status: 200,
        have: 'text/html',
        want: 'application/json',
      });
    });
  });
});

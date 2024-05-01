import { describe, expect, it } from 'vitest';
import ResponseContentTypeIsNotApplicationJSONError, {
  responseContentTypeIsNotApplicationJSONErrorCodec,
} from '../ResponseContentTypeIsNotApplicationJSONError';
import { espressoErrorCodec } from '../registry';

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
        code: ResponseContentTypeIsNotApplicationJSONError.name,
        message: err.message,
        status: 200,
        have: 'text/html',
        want: 'application/json',
      });
    });
  });

  describe('responseContentTypeIsNotApplicationJSONErrorCodec', () => {
    it('should encode and decode correctly', () => {
      const want = ResponseContentTypeIsNotApplicationJSONError.fromResponse(
        new Response(undefined, {
          status: 200,
          headers: {
            'content-type': 'text/html',
          },
        }),
      );

      const encoded =
        responseContentTypeIsNotApplicationJSONErrorCodec.encode(want);
      const have =
        responseContentTypeIsNotApplicationJSONErrorCodec.decode(encoded);

      expect(have.message).toBe(want.message);
    });
  });

  describe('registry', () => {
    it('should encode and decode correctly', () => {
      const want = ResponseContentTypeIsNotApplicationJSONError.fromResponse(
        new Response(undefined, {
          status: 200,
          headers: {
            'content-type': 'text/html',
          },
        }),
      );

      const encoded = espressoErrorCodec.encode(want);
      const have = espressoErrorCodec.decode(encoded);

      expect(have).instanceOf(ResponseContentTypeIsNotApplicationJSONError);
      if (!(have instanceof ResponseContentTypeIsNotApplicationJSONError)) {
        return;
      }
      expect(have.message).toBe(want.message);
    });
  });
});

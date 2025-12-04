import { describe, expect, it } from 'vitest';
import BadResponseError, { badResponseErrorCodec } from '../bad_response_error';
import { espressoErrorCodec } from '../registry';

describe('BadResponseError', () => {
  describe('toJSON', () => {
    it('should yield a JSON representation with the correct parts', () => {
      const err = new BadResponseError(
        200,
        new Response(undefined, {
          status: 200,
        }),
      );

      expect(err.toJSON()).deep.equals({
        code: BadResponseError.name,
        message: err.message,
        status: 200,
      });
    });
  });

  describe('badResponseErrorCodec', () => {
    it('should encode and decode correctly', () => {
      const want = new BadResponseError(
        200,
        new Response(undefined, {
          status: 200,
        }),
      );

      const encoded = badResponseErrorCodec.encode(want);
      const have = badResponseErrorCodec.decode(encoded);

      expect(have.status).toBe(want.status);
      expect(have.message).toBe(want.message);
    });
  });

  describe('registry', () => {
    it('should encode and decode correctly', () => {
      const want = new BadResponseError(
        200,
        new Response(undefined, {
          status: 200,
        }),
      );

      const encoded = espressoErrorCodec.encode(want);
      const have = espressoErrorCodec.decode(encoded);

      expect(have).instanceOf(BadResponseError);
      if (!(have instanceof BadResponseError)) {
        return;
      }
      expect(have.status).toBe(want.status);
      expect(have.message).toBe(want.message);
    });
  });
});

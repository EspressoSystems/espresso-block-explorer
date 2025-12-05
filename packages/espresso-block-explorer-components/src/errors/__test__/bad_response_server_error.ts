import { describe, expect, it } from 'vitest';
import BadResponseServerError, {
  badResponseServerErrorCodec,
} from '../bad_response_server_error';
import { espressoErrorCodec } from '../registry';

describe('BadResponseServerError', () => {
  describe('toJSON', () => {
    it('should yield a JSON representation with the correct parts', () => {
      const err = new BadResponseServerError(
        500,
        new Response(undefined, {
          status: 500,
        }),
      );

      expect(err.toJSON()).deep.equals({
        code: BadResponseServerError.name,
        message: err.message,
        status: 500,
      });
    });
  });

  describe('badResponseServerErrorCodec', () => {
    it('should encode and decode correctly', () => {
      const want = new BadResponseServerError(
        500,
        new Response(undefined, {
          status: 500,
        }),
      );

      const encoded = badResponseServerErrorCodec.encode(want);
      const have = badResponseServerErrorCodec.decode(encoded);

      expect(have.status).toBe(want.status);
      expect(have.message).toBe(want.message);
    });
  });

  describe('registry', () => {
    it('should encode and decode correctly', () => {
      const want = new BadResponseServerError(
        500,
        new Response(undefined, {
          status: 500,
        }),
      );

      const encoded = espressoErrorCodec.encode(want);
      const have = espressoErrorCodec.decode(encoded);

      expect(have).instanceOf(BadResponseServerError);
      if (!(have instanceof BadResponseServerError)) {
        return;
      }
      expect(have.status).toBe(want.status);
      expect(have.message).toBe(want.message);
    });
  });
});

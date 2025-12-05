import { describe, expect, it } from 'vitest';
import BadResponseClientError, {
  badResponseClientErrorCodec,
} from '../bad_response_client_error';
import { espressoErrorCodec } from '../registry';

describe('BadResponseClientError', () => {
  describe('toJSON', () => {
    it('should yield a JSON representation with the correct parts', () => {
      const err = new BadResponseClientError(
        400,
        new Response(undefined, {
          status: 400,
        }),
      );

      expect(err.toJSON()).to.deep.equals({
        code: BadResponseClientError.name,
        message: err.message,
        status: 400,
      });
    });
  });

  describe('badResponseClientErrorCodec', () => {
    it('should encode and decode correctly', () => {
      const want = new BadResponseClientError(
        400,
        new Response(undefined, {
          status: 400,
        }),
      );

      const encoded = badResponseClientErrorCodec.encode(want);
      const have = badResponseClientErrorCodec.decode(encoded);

      expect(have.status).toBe(want.status);
      expect(have.message).toBe(want.message);
    });
  });

  describe('registry', () => {
    it('should encode and decode correctly', () => {
      const want = new BadResponseClientError(
        400,
        new Response(undefined, {
          status: 400,
        }),
      );

      const encoded = espressoErrorCodec.encode(want);
      const have = espressoErrorCodec.decode(encoded);

      expect(have).instanceOf(BadResponseClientError);
      if (!(have instanceof BadResponseClientError)) {
        return;
      }
      expect(have.status).toBe(want.status);
      expect(have.message).toBe(want.message);
    });
  });
});

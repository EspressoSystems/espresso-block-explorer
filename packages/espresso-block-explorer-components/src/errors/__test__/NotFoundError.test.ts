import { describe, expect, it } from 'vitest';
import NotFoundError, { notFoundKeyUnknownErrorCodec } from '../NotFoundError';
import { espressoErrorCodec } from '../registry';

describe('NotFoundError', () => {
  describe('notFoundKeyUnknownErrorCodec', () => {
    it('should encode and decode correctly', () => {
      const want = new NotFoundError(2);

      const encoded = notFoundKeyUnknownErrorCodec.encode(want);
      const have = notFoundKeyUnknownErrorCodec.decode(encoded);

      expect(have.message).toBe(want.message);
    });
  });

  describe('registry', () => {
    it('should encode and decode correctly', () => {
      const want = new NotFoundError(3);

      const encoded = espressoErrorCodec.encode(want);
      const have = espressoErrorCodec.decode(encoded);

      expect(have).instanceOf(NotFoundError);
      if (!(have instanceof NotFoundError)) {
        return;
      }
      expect(have.message).toBe(want.message);
    });
  });
});

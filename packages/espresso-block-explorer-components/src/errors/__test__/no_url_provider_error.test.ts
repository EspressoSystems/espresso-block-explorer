import { describe, expect, it } from 'vitest';
import NoURLProvidedError, {
  noURLProvidedErrorCodec,
} from '../NoURLProvidedError';
import { espressoErrorCodec } from '../registry';

describe('NoURLProviderError', () => {
  describe('toJSON', () => {
    it('should yield a JSON representation with the correct parts', () => {
      const err = new NoURLProvidedError();

      expect(err.toJSON()).deep.equals({
        code: NoURLProvidedError.name,
        message: err.message,
      });
    });
  });

  describe('noURLProvidedErrorCodec', () => {
    it('should encode and decode correctly', () => {
      const want = new NoURLProvidedError();

      const encoded = noURLProvidedErrorCodec.encode(want);
      const have = noURLProvidedErrorCodec.decode(encoded);

      expect(have.message).toBe(want.message);
    });
  });

  describe('registry', () => {
    it('should encode and decode correctly', () => {
      const want = new NoURLProvidedError();

      const encoded = espressoErrorCodec.encode(want);
      const have = espressoErrorCodec.decode(encoded);

      expect(have).instanceOf(NoURLProvidedError);
      if (!(have instanceof NoURLProvidedError)) {
        return;
      }
      expect(have.message).toBe(want.message);
    });
  });
});

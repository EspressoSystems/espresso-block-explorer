import { describe, expect, it } from 'vitest';
import {
  IncorrectBase64PaddingError,
  incorrectBase64PaddingErrorCodec,
} from '../IncorrectBase64PaddingError';
import { espressoErrorCodec } from '../registry';

describe('IncorrectBase64PaddingError', () => {
  describe('toJSON', () => {
    it('should yield a JSON representation with the correct parts', () => {
      const err = new IncorrectBase64PaddingError();

      expect(err.toJSON()).deep.equals({
        code: IncorrectBase64PaddingError.name,
        message: err.message,
      });
    });
  });

  describe('incorrectBase64PaddingErrorCodec', () => {
    it('should encode and decode correctly', () => {
      const want = new IncorrectBase64PaddingError();

      const encoded = incorrectBase64PaddingErrorCodec.encode(want);
      const have = incorrectBase64PaddingErrorCodec.decode(encoded);

      expect(have.message).toBe(want.message);
    });
  });

  describe('registry', () => {
    it('should encode and decode correctly', () => {
      const want = new IncorrectBase64PaddingError();

      const encoded = espressoErrorCodec.encode(want);
      const have = espressoErrorCodec.decode(encoded);

      expect(have).instanceOf(IncorrectBase64PaddingError);
      if (!(have instanceof IncorrectBase64PaddingError)) {
        return;
      }
      expect(have.message).toBe(want.message);
    });
  });
});

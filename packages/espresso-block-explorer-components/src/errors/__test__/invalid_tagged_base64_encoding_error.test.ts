import { describe, expect, it } from 'vitest';
import InvalidTaggedBase64EncodingError, {
  invalidTaggedBase64EncodingErrorCodec,
} from '../invalid_tagged_base64_encoding_error';
import { espressoErrorCodec } from '../registry';

describe('InvalidTaggedBase64EncodingError', () => {
  describe('toJSON', () => {
    it('should yield a JSON representation with the correct parts', () => {
      const err = new InvalidTaggedBase64EncodingError();

      expect(err.toJSON()).deep.equals({
        code: InvalidTaggedBase64EncodingError.name,
        message: err.message,
      });
    });
  });

  describe('invalidTaggedBase64EncodingErrorCodec', () => {
    it('should encode and decode correctly', () => {
      const want = new InvalidTaggedBase64EncodingError();

      const encoded = invalidTaggedBase64EncodingErrorCodec.encode(want);
      const have = invalidTaggedBase64EncodingErrorCodec.decode(encoded);

      expect(have.message).toBe(want.message);
    });
  });

  describe('registry', () => {
    it('should encode and decode correctly', () => {
      const want = new InvalidTaggedBase64EncodingError();

      const encoded = espressoErrorCodec.encode(want);
      const have = espressoErrorCodec.decode(encoded);

      expect(have).instanceOf(InvalidTaggedBase64EncodingError);
      if (!(have instanceof InvalidTaggedBase64EncodingError)) {
        return;
      }
      expect(have.message).toBe(want.message);
    });
  });
});

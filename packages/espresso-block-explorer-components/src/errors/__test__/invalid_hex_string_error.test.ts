import { describe, expect, it } from 'vitest';
import InvalidHexStringError, {
  invalidHexStringErrorCodec,
} from '../invalid_hex_string_error';
import { espressoErrorCodec } from '../registry';

describe('InvalidHexStringError', () => {
  describe('toJSON', () => {
    it('should yield a JSON representation with the correct parts', () => {
      const err = new InvalidHexStringError();

      expect(err.toJSON()).deep.equals({
        code: InvalidHexStringError.name,
        message: err.message,
      });
    });
  });

  describe('invalidHexStringErrorCodec', () => {
    it('should encode and decode correctly', () => {
      const want = new InvalidHexStringError();

      const encoded = invalidHexStringErrorCodec.encode(want);
      const have = invalidHexStringErrorCodec.decode(encoded);

      expect(have.message).toBe(want.message);
    });
  });

  describe('registry', () => {
    it('should encode and decode correctly', () => {
      const want = new InvalidHexStringError();

      const encoded = espressoErrorCodec.encode(want);
      const have = espressoErrorCodec.decode(encoded);

      expect(have).instanceOf(InvalidHexStringError);
      if (!(have instanceof InvalidHexStringError)) {
        return;
      }
      expect(have.message).toBe(want.message);
    });
  });
});

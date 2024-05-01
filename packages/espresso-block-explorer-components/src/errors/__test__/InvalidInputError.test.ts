import { describe, expect, it } from 'vitest';
import InvalidInputError, {
  invalidInputErrorCodec,
} from '../InvalidInputError';
import { espressoErrorCodec } from '../registry';

describe('InvalidInputError', () => {
  describe('toJSON', () => {
    it('should yield a JSON representation with the correct parts', () => {
      const err = new InvalidInputError();

      expect(err.toJSON()).deep.equals({
        code: InvalidInputError.name,
        message: err.message,
      });
    });
  });

  describe('invalidHexValueErrorCodec', () => {
    it('should encode and decode correctly', () => {
      const want = new InvalidInputError();

      const encoded = invalidInputErrorCodec.encode(want);
      const have = invalidInputErrorCodec.decode(encoded);

      expect(have.message).toBe(want.message);
    });
  });

  describe('registry', () => {
    it('should encode and decode correctly', () => {
      const want = new InvalidInputError();

      const encoded = espressoErrorCodec.encode(want);
      const have = espressoErrorCodec.decode(encoded);

      expect(have).instanceOf(InvalidInputError);
      if (!(have instanceof InvalidInputError)) {
        return;
      }
      expect(have.message).toBe(want.message);
    });
  });
});

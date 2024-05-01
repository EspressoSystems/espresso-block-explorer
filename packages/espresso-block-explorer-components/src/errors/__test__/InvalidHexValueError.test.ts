import { describe, expect, it } from 'vitest';
import {
  InvalidHexValueError,
  invalidHexValueErrorCodec,
} from '../InvalidHexValueError';
import { espressoErrorCodec } from '../registry';

describe('InvalidHexValueError', () => {
  describe('toJSON', () => {
    it('should yield a JSON representation with the correct parts', () => {
      const err = new InvalidHexValueError(500);

      expect(err.toJSON()).deep.equals({
        code: InvalidHexValueError.name,
        message: err.message,
        value: 500,
      });
    });
  });

  describe('invalidHexValueErrorCodec', () => {
    it('should encode and decode correctly', () => {
      const want = new InvalidHexValueError(400);

      const encoded = invalidHexValueErrorCodec.encode(want);
      const have = invalidHexValueErrorCodec.decode(encoded);

      expect(have.message).toBe(want.message);
    });
  });

  describe('registry', () => {
    it('should encode and decode correctly', () => {
      const want = new InvalidHexValueError(300);

      const encoded = espressoErrorCodec.encode(want);
      const have = espressoErrorCodec.decode(encoded);

      expect(have).instanceOf(InvalidHexValueError);
      if (!(have instanceof InvalidHexValueError)) {
        return;
      }
      expect(have.message).toBe(want.message);
    });
  });
});

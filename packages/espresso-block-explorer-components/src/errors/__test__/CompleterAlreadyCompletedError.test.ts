import { describe, expect, it } from 'vitest';
import {
  CompleterAlreadyCompletedError,
  completerAlreadyCompletedErrorCodec,
} from '../CompleterAlreadyCompletedError';
import { espressoErrorCodec } from '../registry';

describe('CompleterAlreadyCompletedError', () => {
  describe('toJSON', () => {
    it('should yield a JSON representation with the correct parts', () => {
      const err = new CompleterAlreadyCompletedError();

      expect(err.toJSON()).deep.equals({
        code: CompleterAlreadyCompletedError.name,
        message: err.message,
      });
    });
  });

  describe('completerAlreadyCompletedErrorCodec', () => {
    it('should encode and decode correctly', () => {
      const want = new CompleterAlreadyCompletedError();

      const encoded = completerAlreadyCompletedErrorCodec.encode(want);
      const have = completerAlreadyCompletedErrorCodec.decode(encoded);

      expect(have.message).toBe(want.message);
    });
  });

  describe('registry', () => {
    it('should encode and decode correctly', () => {
      const want = new CompleterAlreadyCompletedError();

      const encoded = espressoErrorCodec.encode(want);
      const have = espressoErrorCodec.decode(encoded);

      expect(have).instanceOf(CompleterAlreadyCompletedError);
      if (!(have instanceof CompleterAlreadyCompletedError)) {
        return;
      }
      expect(have.message).toBe(want.message);
    });
  });
});

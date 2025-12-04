import { describe, expect, it } from 'vitest';
import {
  InvalidBase64AlphabetLengthError,
  invalidBase64AlphabetLengthErrorCodec,
} from '../InvalidBase64LengthError';
import { espressoErrorCodec } from '../registry';

describe('InvalidBase64LengthError', () => {
  describe('toJSON', () => {
    it('should yield a JSON representation with the correct parts', () => {
      const err = new InvalidBase64AlphabetLengthError(2);

      expect(err.toJSON()).deep.equals({
        code: InvalidBase64AlphabetLengthError.name,
        message: err.message,
        length: 2,
      });
    });
  });

  describe('invalidBase64AlphabetLengthErrorCodec', () => {
    it('should encode and decode correctly', () => {
      const want = new InvalidBase64AlphabetLengthError(1);

      const encoded = invalidBase64AlphabetLengthErrorCodec.encode(want);
      const have = invalidBase64AlphabetLengthErrorCodec.decode(encoded);

      expect(have.message).toBe(want.message);
      expect(have.length).toBe(want.length);
    });
  });

  describe('registry', () => {
    it('should encode and decode correctly', () => {
      const want = new InvalidBase64AlphabetLengthError(4);

      const encoded = espressoErrorCodec.encode(want);
      const have = espressoErrorCodec.decode(encoded);

      expect(have).instanceOf(InvalidBase64AlphabetLengthError);
      if (!(have instanceof InvalidBase64AlphabetLengthError)) {
        return;
      }
      expect(have.message).toBe(want.message);
      expect(have.length).toBe(want.length);
    });
  });
});

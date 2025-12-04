import { describe, expect, it } from 'vitest';
import NoCompleterFoundForRequestID, {
  noCompleterFoundForRequestIDCodec,
} from '../NoCompleterFoundForRequestID';
import { espressoErrorCodec } from '../registry';

describe('NoCompleterFoundForRequestID', () => {
  describe('toJSON', () => {
    it('should yield a JSON representation with the correct parts', () => {
      const err = new NoCompleterFoundForRequestID(1);

      expect(err.toJSON()).deep.equals({
        code: NoCompleterFoundForRequestID.name,
        message: err.message,
        requestID: 1,
      });
    });
  });

  describe('noCompleterFoundForRequestIDCodec', () => {
    it('should encode and decode correctly', () => {
      const want = new NoCompleterFoundForRequestID(2);

      const encoded = noCompleterFoundForRequestIDCodec.encode(want);
      const have = noCompleterFoundForRequestIDCodec.decode(encoded);

      expect(have.message).toBe(want.message);
      expect(have.requestID).toBe(want.requestID);
    });
  });

  describe('registry', () => {
    it('should encode and decode correctly', () => {
      const want = new NoCompleterFoundForRequestID(3);

      const encoded = espressoErrorCodec.encode(want);
      const have = espressoErrorCodec.decode(encoded);

      expect(have).instanceOf(NoCompleterFoundForRequestID);
      if (!(have instanceof NoCompleterFoundForRequestID)) {
        return;
      }
      expect(have.message).toBe(want.message);
      expect(have.requestID).toBe(want.requestID);
    });
  });
});

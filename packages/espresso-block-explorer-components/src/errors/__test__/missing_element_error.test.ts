import { describe, expect, it } from 'vitest';
import MissingElementError, {
  missingElementErrorCodec,
} from '../missing_element_error';
import { espressoErrorCodec } from '../registry';

describe('MissingElementError', () => {
  describe('toJSON', () => {
    it('should yield a JSON representation with the correct parts', () => {
      const err = new MissingElementError();

      expect(err.toJSON()).deep.equals({
        code: MissingElementError.name,
        message: err.message,
      });
    });
  });

  describe('missingElementErrorCodec', () => {
    it('should encode and decode correctly', () => {
      const want = new MissingElementError();

      const encoded = missingElementErrorCodec.encode(want);
      const have = missingElementErrorCodec.decode(encoded);

      expect(have.message).toBe(want.message);
    });
  });

  describe('registry', () => {
    it('should encode and decode correctly', () => {
      const want = new MissingElementError();

      const encoded = espressoErrorCodec.encode(want);
      const have = espressoErrorCodec.decode(encoded);

      expect(have).instanceOf(MissingElementError);
      if (!(have instanceof MissingElementError)) {
        return;
      }
      expect(have.message).toBe(want.message);
    });
  });
});

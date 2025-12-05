import { describe, expect, it } from 'vitest';
import {
  CorruptBase64InputError,
  corruptBase64InputErrorCodec,
} from '../corrupt_base64_input_error';
import { espressoErrorCodec } from '../registry';

describe('CorruptBase64InputError', () => {
  describe('toJSON', () => {
    it('should yield a JSON representation with the correct parts', () => {
      const err = new CorruptBase64InputError(0);

      expect(err.toJSON()).deep.equals({
        code: CorruptBase64InputError.name,
        message: err.message,
        offset: 0,
      });
    });
  });

  describe('corruptBase64InputErrorCodec', () => {
    it('should encode and decode correctly', () => {
      const want = new CorruptBase64InputError(1);

      const encoded = corruptBase64InputErrorCodec.encode(want);
      const have = corruptBase64InputErrorCodec.decode(encoded);

      expect(have.message).toBe(want.message);
      expect(have.offset).toBe(want.offset);
    });
  });

  describe('registry', () => {
    it('should encode and decode correctly', () => {
      const want = new CorruptBase64InputError(2);

      const encoded = espressoErrorCodec.encode(want);
      const have = espressoErrorCodec.decode(encoded);

      expect(have).instanceOf(CorruptBase64InputError);
      if (!(have instanceof CorruptBase64InputError)) {
        return;
      }
      expect(have.message).toBe(want.message);
      expect(have.offset).toBe(want.offset);
    });
  });
});

import { describe, expect, it } from 'vitest';
import BufferFullError, { bufferFullErrorCodec } from '../BufferFullError';
import { espressoErrorCodec } from '../registry';

describe('BufferFullError', () => {
  describe('toJSON', () => {
    it('should yield a JSON representation with the correct parts', () => {
      const err = new BufferFullError();

      expect(err.toJSON()).deep.equals({
        code: BufferFullError.name,
        message: err.message,
      });
    });
  });

  describe('bufferFullErrorCodec', () => {
    it('should encode and decode correctly', () => {
      const want = new BufferFullError();

      const encoded = bufferFullErrorCodec.encode(want);
      const have = bufferFullErrorCodec.decode(encoded);

      expect(have.message).toBe(want.message);
    });
  });

  describe('registry', () => {
    it('should encode and decode correctly', () => {
      const want = new BufferFullError();

      const encoded = espressoErrorCodec.encode(want);
      const have = espressoErrorCodec.decode(encoded);

      expect(have).instanceOf(BufferFullError);
      if (!(have instanceof BufferFullError)) {
        return;
      }
      expect(have.message).toBe(want.message);
    });
  });
});

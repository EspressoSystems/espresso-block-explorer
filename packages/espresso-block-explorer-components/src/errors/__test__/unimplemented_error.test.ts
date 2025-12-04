import { describe, expect, it } from 'vitest';
import UnimplementedError, { unimplementedCodec } from '../unimplemented_error';
import { espressoErrorCodec } from '../registry';

describe('UnimplementedError', () => {
  describe('toJSON', () => {
    it('should yield a JSON representation with the correct parts', () => {
      const err = new UnimplementedError();

      expect(err.toJSON()).deep.equals({
        code: UnimplementedError.name,
        message: err.message,
      });
    });
  });

  describe('unimplementedCodec', () => {
    it('should encode and decode correctly', () => {
      const want = new UnimplementedError();

      const encoded = unimplementedCodec.encode(want);
      const have = unimplementedCodec.decode(encoded);

      expect(have.message).toBe(want.message);
    });
  });

  describe('registry', () => {
    it('should encode and decode correctly', () => {
      const want = new UnimplementedError();

      const encoded = espressoErrorCodec.encode(want);
      const have = espressoErrorCodec.decode(encoded);

      expect(have).instanceOf(UnimplementedError);
      if (!(have instanceof UnimplementedError)) {
        return;
      }
      expect(have.message).toBe(want.message);
    });
  });
});

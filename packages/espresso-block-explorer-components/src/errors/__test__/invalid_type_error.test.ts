import { describe, expect, it } from 'vitest';
import InvalidTypeError, { invalidTypeErrorCodec } from '../invalid_type_error';
import { espressoErrorCodec } from '../registry';

describe('InvalidTypeError', () => {
  describe('toJSON', () => {
    it('should yield a JSON representation with the correct parts', () => {
      const err = new InvalidTypeError('string', 'object');

      expect(err.toJSON()).deep.equals({
        code: InvalidTypeError.name,
        message: err.message,
        have: 'string',
        want: 'object',
      });
    });
  });

  describe('invalidTypeErrorCodec', () => {
    it('should encode and decode correctly', () => {
      const want = new InvalidTypeError('string', 'object');

      const encoded = invalidTypeErrorCodec.encode(want);
      const have = invalidTypeErrorCodec.decode(encoded);

      expect(have.message).toBe(want.message);
      expect(have.have).toBe(want.have);
      expect(have.want).toBe(want.want);
    });
  });

  describe('registry', () => {
    it('should encode and decode correctly', () => {
      const want = new InvalidTypeError('string', 'object');

      const encoded = espressoErrorCodec.encode(want);
      const have = espressoErrorCodec.decode(encoded);

      expect(have).instanceOf(InvalidTypeError);
      if (!(have instanceof InvalidTypeError)) {
        return;
      }
      expect(have.message).toBe(want.message);
      expect(have.have).toBe(want.have);
      expect(have.want).toBe(want.want);
    });
  });
});

import { describe, expect, it } from 'vitest';
import InvalidStringValueError, {
  invalidTypeErrorCodec,
} from '../InvalidStringValueError';
import { espressoErrorCodec } from '../registry';

describe('InvalidStringValueError', () => {
  describe('toJSON', () => {
    it('should yield a JSON representation with the correct parts', () => {
      const err = new InvalidStringValueError('foo', 'bar');

      expect(err.toJSON()).deep.equals({
        code: InvalidStringValueError.name,
        message: err.message,
        have: err.have,
        want: err.want,
      });
    });
  });

  describe('invalidTypeErrorCodec', () => {
    it('should encode and decode correctly', () => {
      const want = new InvalidStringValueError('foo', 'bar');

      const encoded = invalidTypeErrorCodec.encode(want);
      const have = invalidTypeErrorCodec.decode(encoded);

      expect(have.message).toBe(want.message);
      if (!(have instanceof InvalidStringValueError)) {
        return;
      }
      expect(have.have).toBe(want.have);
      expect(have.want).toBe(want.want);
    });
  });

  describe('registry', () => {
    it('should encode and decode correctly', () => {
      const want = new InvalidStringValueError('foo', 'bar');

      const encoded = espressoErrorCodec.encode(want);
      const have = espressoErrorCodec.decode(encoded);

      expect(have).instanceOf(InvalidStringValueError);
      if (!(have instanceof InvalidStringValueError)) {
        return;
      }
      expect(have.message).toBe(want.message);
      expect(have.have).toBe(want.have);
      expect(have.want).toBe(want.want);
    });
  });
});

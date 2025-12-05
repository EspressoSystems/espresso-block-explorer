import { describe, expect, it } from 'vitest';
import NoCodecFoundError from '../no_codec_found_error';

describe('NoCodecFoundError', () => {
  describe('toJSON', () => {
    it('should yield a JSON representation with the correct parts', () => {
      const err = new NoCodecFoundError('foo');

      expect(err.toJSON()).deep.equals({
        code: NoCodecFoundError.name,
        message: err.message,
        codec: err.codec,
      });
    });
  });
});

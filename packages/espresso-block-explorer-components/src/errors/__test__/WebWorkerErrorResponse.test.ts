import { describe, expect, it } from 'vitest';
import UnimplementedError from '../UnimplementedError';
import WebWorkerErrorResponse, {
  webWorkerErrorResponseCodec,
} from '../WebWorkerErrorResponse';
import { espressoErrorCodec } from '../registry';

describe('UnimplementedError', () => {
  describe('toJSON', () => {
    it('should yield a JSON representation with the correct parts', () => {
      const err0 = new UnimplementedError();
      const err = new WebWorkerErrorResponse(err0);

      expect(err.toJSON()).deep.equals({
        code: WebWorkerErrorResponse.name,
        message: err.message,
        error: {
          code: UnimplementedError.name,
          message: err0.message,
        },
      });
    });
  });

  describe('webWorkerErrorResponseCodec', () => {
    it('should encode and decode correctly', () => {
      const err0 = new UnimplementedError();
      const want = new WebWorkerErrorResponse(err0);

      const encoded = webWorkerErrorResponseCodec.encode(want);
      const have = webWorkerErrorResponseCodec.decode(encoded);

      expect(have.message).toBe(want.message);
      if (!(have instanceof UnimplementedError)) {
        return;
      }
      expect(have.error).instanceOf(UnimplementedError);
    });
  });

  describe('registry', () => {
    it('should encode and decode correctly', () => {
      const err0 = new UnimplementedError();
      const want = new WebWorkerErrorResponse(err0);

      const encoded = espressoErrorCodec.encode(want);
      const have = espressoErrorCodec.decode(encoded);

      expect(have).instanceOf(WebWorkerErrorResponse);
      if (!(have instanceof WebWorkerErrorResponse)) {
        return;
      }
      expect(have.message).toBe(want.message);
      expect(have.error).instanceOf(UnimplementedError);
    });
  });
});

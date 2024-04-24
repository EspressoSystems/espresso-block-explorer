import { describe, expect, it } from 'vitest';
import UnimplementedError from '../UnimplementedError';
import WebWorkerErrorResponse from '../WebWorkerErrorResponse';

describe('UnimplementedError', () => {
  describe('toJSON', () => {
    it('should yield a JSON representation with the correct parts', () => {
      const err0 = new UnimplementedError();
      const err = new WebWorkerErrorResponse(err0);

      expect(err.toJSON()).deep.equals({
        name: WebWorkerErrorResponse.name,
        message: err.message,
        error: err0,
      });
    });
  });
});

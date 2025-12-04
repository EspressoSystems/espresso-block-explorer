import { CompleterAlreadyCompletedError } from '@/errors/CompleterAlreadyCompletedError';
import { describe, expect, it } from 'vitest';
import { createCompleter } from '../Completer';

describe('Completer', () => {
  describe('basic behavior', () => {
    it('should resolve with the given value', async () => {
      const completer = createCompleter<number>();

      completer.complete(1);
      expect(completer.promise).toBeInstanceOf(Promise);
      await expect(completer.promise).resolves.toBe(1);
    });

    it('should resolve with the value of the given promise', async () => {
      const completer = createCompleter<number>();

      completer.complete(Promise.resolve(1));
      expect(completer.promise).toBeInstanceOf(Promise);
      await expect(completer.promise).resolves.toBe(1);
    });

    it('should reject with the error of the given promise', async () => {
      const completer = createCompleter<number>();

      completer.complete(Promise.reject(1));
      expect(completer.promise).toBeInstanceOf(Promise);
      await expect(completer.promise).rejects.toBe(1);
    });

    it('should reject with the given value', async () => {
      const completer = createCompleter<number>();
      completer.completeError(1);
      expect(completer.promise).toBeInstanceOf(Promise);
      await expect(completer.promise).rejects.toBe(1);
    });
  });

  describe('misuse', () => {
    it('should throw an error if complete called after complete', async () => {
      const completer = createCompleter<number>();
      completer.complete(1);
      await expect(completer.promise).resolves.toBe(1);

      expect(() => completer.complete(2)).toThrow();

      try {
        completer.complete(2);
      } catch (err) {
        expect(err).toBeInstanceOf(CompleterAlreadyCompletedError);
        if (!(err instanceof CompleterAlreadyCompletedError)) {
          return;
        }
        expect(JSON.parse(JSON.stringify(err))).to.deep.equal({
          code: 'CompleterAlreadyCompletedError',
          message: err.message,
        });
      }
    });

    it('should throw an error if completeError called after complete', async () => {
      const completer = createCompleter<number>();
      completer.complete(1);

      await expect(() => completer.completeError(2)).toThrow();
    });

    it('should throw an error if complete called after completeError', async () => {
      const completer = createCompleter<number>();
      completer.completeError(1);
      await expect(completer.promise).rejects.toBe(1);

      expect(() => completer.complete(2)).toThrow();
    });

    it('should throw an error if completeError called after completeError', async () => {
      const completer = createCompleter<number>();
      completer.completeError(1);
      await expect(completer.promise).rejects.toBe(1);

      expect(() => completer.completeError(2)).toThrow();
    });
  });
});

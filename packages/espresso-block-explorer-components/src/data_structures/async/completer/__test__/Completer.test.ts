import { describe, expect, it } from 'vitest';
import { CompleterAlreadyCompletedError } from '../../../../errors/CompleterAlreadyCompletedError';
import { createCompleter } from '../Completer';

describe('Completer', () => {
  describe('basic behavior', () => {
    it('should resolve with the given value', () => {
      const completer = createCompleter<number>();

      completer.complete(1);
      expect(completer.promise).toBeInstanceOf(Promise);
      expect(completer.promise).resolves.toBe(1);
    });

    it('should resolve with the value of the given promise', () => {
      const completer = createCompleter<number>();

      completer.complete(Promise.resolve(1));
      expect(completer.promise).toBeInstanceOf(Promise);
      expect(completer.promise).resolves.toBe(1);
    });

    it('should reject with the error of the given promise', () => {
      const completer = createCompleter<number>();

      completer.complete(Promise.reject(1));
      expect(completer.promise).toBeInstanceOf(Promise);
      expect(completer.promise).rejects.toBe(1);
    });

    it('should reject with the given value', () => {
      const completer = createCompleter<number>();
      completer.completeError(1);
      expect(completer.promise).toBeInstanceOf(Promise);
      expect(completer.promise).rejects.toBe(1);
    });
  });

  describe('misuse', () => {
    it('should throw an error if complete called after complete', () => {
      const completer = createCompleter<number>();
      completer.complete(1);
      expect(completer.promise).resolves.toBe(1);

      expect(() => completer.complete(2)).toThrow();

      try {
        completer.complete(2);
      } catch (err) {
        expect(err).toBeInstanceOf(CompleterAlreadyCompletedError);
        expect(JSON.parse(JSON.stringify(err))).to.deep.equal({
          name: 'CompleterAlreadyCompletedError',
          message: err.message,
        });
      }
    });

    it('should throw an error if completeError called after complete', () => {
      const completer = createCompleter<number>();
      completer.complete(1);

      expect(() => completer.completeError(2)).toThrow();
    });

    it('should throw an error if complete called after completeError', () => {
      const completer = createCompleter<number>();
      completer.completeError(1);
      expect(completer.promise).rejects.toBe(1);

      expect(() => completer.complete(2)).toThrow();
    });

    it('should throw an error if completeError called after completeError', () => {
      const completer = createCompleter<number>();
      completer.completeError(1);
      expect(completer.promise).rejects.toBe(1);

      expect(() => completer.completeError(2)).toThrow();
    });
  });
});

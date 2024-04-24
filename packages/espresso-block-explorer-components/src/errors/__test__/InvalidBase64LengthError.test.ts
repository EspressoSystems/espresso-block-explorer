import { describe, expect, it } from 'vitest';
import { InvalidBase64AlphabetLengthError } from '../InvalidBase64LengthError';

describe('InvalidBase64LengthError', () => {
  describe('toJSON', () => {
    it('should yield a JSON representation with the correct parts', () => {
      const err = new InvalidBase64AlphabetLengthError(2);

      expect(err.toJSON()).deep.equals({
        name: InvalidBase64AlphabetLengthError.name,
        message: err.message,
        length: 2,
      });
    });
  });
});

import { describe, expect } from 'vitest';
import { TextEditingValue } from '../types';

describe('TextEditingValue', () => {
  describe('constructor test', () => {
    it('should create an instance without throwing', () => {
      expect(() => new TextEditingValue('')).not.toThrow();
      expect(() =>
        new TextEditingValue('').copyWith({ text: 'hello' }),
      ).not.toThrow();
    });
  });
});

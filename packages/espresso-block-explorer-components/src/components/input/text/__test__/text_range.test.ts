import { describe, expect, it } from 'vitest';
import { TextRange } from '../types';

describe('TextRange', () => {
  describe('empty range tests', () => {
    const empty = TextRange.empty;
    it('should have the expected properties', () => {
      expect(empty.isValid).toBe(false);
      expect(empty.isCollapsed).toBe(true);
      expect(empty.isNormalized).toBe(true);
      expect(empty.start).toBe(-1);
      expect(empty.end).toBe(-1);

      expect(() => empty.textAfter('hello')).not.toThrow();
      expect(() => empty.textBefore('hello')).not.toThrow();
      expect(() => empty.textWithin('hello')).not.toThrow();
    });
  });

  describe('collapsed range tests', () => {
    const collapsed = TextRange.collapsed(2);
    it('should have the expected properties', () => {
      expect(collapsed.isValid).toBe(true);
      expect(collapsed.isCollapsed).toBe(true);
      expect(collapsed.isNormalized).toBe(true);
      expect(collapsed.start).toBe(2);
      expect(collapsed.end).toBe(2);

      expect(collapsed.textAfter('hello')).toBe('llo');
      expect(collapsed.textBefore('hello')).toBe('he');
      expect(collapsed.textWithin('hello')).toBe('');
    });
  });

  describe('normal range tests', () => {
    const normal = new TextRange(1, 4);
    it('should have the expected properties', () => {
      expect(normal.isValid).toBe(true);
      expect(normal.isCollapsed).toBe(false);
      expect(normal.isNormalized).toBe(true);
      expect(normal.start).toBe(1);
      expect(normal.end).toBe(4);

      expect(normal.textAfter('hello')).toBe('o');
      expect(normal.textBefore('hello')).toBe('h');
      expect(normal.textWithin('hello')).toBe('ell');
    });
  });
});

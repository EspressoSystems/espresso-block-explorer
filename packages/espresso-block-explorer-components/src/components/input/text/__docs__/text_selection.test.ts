import { describe, expect, it } from 'vitest';
import { TextSelection } from '../types';

describe('TextSelection', () => {
  describe('empty range tests', () => {
    const empty = TextSelection.empty;
    it('should have the expected properties', () => {
      expect(empty.isValid).toBe(false);
      expect(empty.isCollapsed).toBe(true);
      expect(empty.isNormalized).toBe(true);
      expect(empty.start).toBe(-1);
      expect(empty.end).toBe(-1);

      expect(() => empty.textAfter('hello')).toThrow();
      expect(() => empty.textBefore('hello')).toThrow();
      expect(() => empty.textWithin('hello')).toThrow();
    });
  });

  describe('collapsed range tests', () => {
    const collapsed = TextSelection.collapsed(2);
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
    const normal = new TextSelection(1, 4);
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

  describe('expandTo', () => {
    it("shouldn't change if the position is already within the selection", () => {
      const sel1 = new TextSelection(2, 5);
      const expanded = sel1.expandTo(3);
      expect(expanded).equals(sel1);
    });

    it('should expand the start if the position is before the selection', () => {
      const sel1 = new TextSelection(2, 5);
      const expanded = sel1.expandTo(1);
      expect(expanded.start).toBe(1);
      expect(expanded.end).toBe(5);
    });

    it('should expand the end if the position is after the selection', () => {
      const sel1 = new TextSelection(2, 5);
      const expanded = sel1.expandTo(6);
      expect(expanded.start).toBe(2);
      expect(expanded.end).toBe(6);
    });

    it('should work correctly if the selection is collapsed', () => {
      const sel1 = TextSelection.collapsed(3);
      const expanded = sel1.expandTo(5);
      expect(expanded.start).toBe(3);
      expect(expanded.end).toBe(5);
    });

    it('should update the extent if the boolean flag is set', () => {
      const sel1 = new TextSelection(2, 5);
      const expanded = sel1.expandTo(1, true);
      expect(expanded.start).toBe(2);
      expect(expanded.end).toBe(1);

      const sel2 = new TextSelection(2, 5);
      const expanded2 = sel2.expandTo(4, true);
      expect(expanded2.start).toBe(2);
      expect(expanded2.end).toBe(4);
    });
  });
});

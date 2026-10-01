import { describe, expect, it } from 'vitest';
import { LogScalingMapping, roundToNiceValue } from '../log_scaling';

describe('roundToNiceValue', () => {
  it('rounds to the closest of 1, 2 or 5 times a power of ten', () => {
    expect(roundToNiceValue(10.59)).toBe(10);
    expect(roundToNiceValue(4.55)).toBe(5);
    expect(roundToNiceValue(1.48)).toBe(2);
    expect(roundToNiceValue(0.34)).toBe(0.5);
    expect(roundToNiceValue(95.6)).toBe(100);
    expect(roundToNiceValue(6530)).toBe(5000);
  });

  it('rounds down when asked to', () => {
    expect(roundToNiceValue(14_940_000, true)).toBe(10_000_000);
    expect(roundToNiceValue(4.55, true)).toBe(2);
  });

  it('turns zero and negative numbers into 0', () => {
    expect(roundToNiceValue(0)).toBe(0);
    expect(roundToNiceValue(-3)).toBe(0);
  });
});

describe('LogScalingMapping.evenlySpacedGuideLines', () => {
  it.each([10.59, 582_620, 14_940_000])(
    'gives distinct round values from 0, none above the maximum (%d)',
    (max) => {
      const lines = new LogScalingMapping(
        0,
        max,
        0,
        100,
      ).evenlySpacedGuideLines(4);
      expect(lines[0]).toBe(0);
      expect(new Set(lines).size).toBe(lines.length);
      for (const line of lines) {
        expect(line).toBeLessThanOrEqual(max);
        expect(roundToNiceValue(line)).toBe(line);
      }
    },
  );
});

import { describe, expect, it } from 'vitest';
import {
  STAKE_AXIS_CHANGE_MARGINS,
  STAKE_AXIS_MARGIN,
  STAKE_AXIS_MIN_MARGIN,
  stakeAxisDomain,
} from '../charts';

/** How much of the chart's height the change in view takes up. */
function changeShareOfAxis(values: number[]): number {
  const [low, high] = stakeAxisDomain(values);
  return (Math.max(...values) - Math.min(...values)) / (high - low);
}

describe('stakeAxisDomain', () => {
  it('puts a steady stake in the middle of a few percent either side', () => {
    const [low, high] = stakeAxisDomain([1_000_000, 1_000_000, 1_000_000]);
    expect(low).toBeCloseTo(1_000_000 * (1 - STAKE_AXIS_MARGIN));
    expect(high).toBeCloseTo(1_000_000 * (1 + STAKE_AXIS_MARGIN));
  });

  it('narrows the margin to twice a small change, so the change still shows', () => {
    // A 0.5% undelegation: a 1% margin either side.
    const [low, high] = stakeAxisDomain([1_000_000, 995_000]);
    const margin = 0.005 * STAKE_AXIS_CHANGE_MARGINS;
    expect(low).toBeCloseTo(995_000 * (1 - margin));
    expect(high).toBeCloseTo(1_000_000 * (1 + margin));
    expect(changeShareOfAxis([1_000_000, 995_000])).toBeCloseTo(0.2, 1);
  });

  it('shows a tiny change as a small step, neither a cliff nor a level line', () => {
    // 85M with a 22K dip: 0.03% of the stake, below the smallest margin.
    const values = [85_016_000, 84_994_000, 85_000_000];
    const [low, high] = stakeAxisDomain(values);
    expect(low).toBeCloseTo(84_994_000 * (1 - STAKE_AXIS_MIN_MARGIN));
    expect(high).toBeCloseTo(85_016_000 * (1 + STAKE_AXIS_MIN_MARGIN));

    const share = changeShareOfAxis(values);
    expect(share).toBeGreaterThan(0.05);
    expect(share).toBeLessThan(0.25);
  });

  it('does not blow a change of a few ESP up to fill the chart', () => {
    expect(changeShareOfAxis([85_000_000, 85_000_010])).toBeLessThan(0.001);
  });

  it('reaches a few percent past both the stake before and after a large delegation', () => {
    const before = 1_000_000;
    const after = 1_500_000;
    const [low, high] = stakeAxisDomain([before, before, after, after]);
    expect(low).toBeCloseTo(before * (1 - STAKE_AXIS_MARGIN));
    expect(high).toBeCloseTo(after * (1 + STAKE_AXIS_MARGIN));
  });

  it('reaches a few percent past both the stake before and after a large undelegation', () => {
    const [low, high] = stakeAxisDomain([2_000_000, 400_000]);
    expect(low).toBeCloseTo(400_000 * (1 - STAKE_AXIS_MARGIN));
    expect(high).toBeCloseTo(2_000_000 * (1 + STAKE_AXIS_MARGIN));
  });

  it('only counts the changes in view', () => {
    // The same stake today, with and without an old change in the range.
    const [, withChange] = stakeAxisDomain([900_000, 1_000_000, 1_000_000]);
    const [, steady] = stakeAxisDomain([1_000_000, 1_000_000]);
    const [, small] = stakeAxisDomain([999_000, 1_000_000]);
    expect(withChange).toBeCloseTo(steady);
    expect(small).toBeLessThan(steady);
  });

  it('never goes below zero', () => {
    expect(stakeAxisDomain([500, 0])[0]).toBe(0);
    expect(stakeAxisDomain([0, 0])).toEqual([0, 1]);
  });
});

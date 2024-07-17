import { describe, expect, it } from 'vitest';
import { iota } from '../..';
import { filterIterable } from '../filter';

describe('filterIterable', () => {
  it('should contain the element sequence expected', () => {
    expect(
      Array.from(filterIterable(iota(10), (n) => (n & 0x01) === 0)),
    ).deep.equal([0, 2, 4, 6, 8]);
    expect(
      Array.from(filterIterable(iota(10), (n) => (n & 0x01) === 1)),
    ).deep.equal([1, 3, 5, 7, 9]);
    expect(Array.from(filterIterable(iota(10), () => false))).deep.equal([]);
  });
});

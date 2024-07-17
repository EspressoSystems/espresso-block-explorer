import { describe, expect, it } from 'vitest';
import { iota } from '../..';
import { mapIterable } from '../map';

describe('mapIterable', () => {
  it('should contain the element sequence expected', () => {
    expect(Array.from(mapIterable(iota(10), (n) => n * n))).deep.equal([
      0, 1, 4, 9, 16, 25, 36, 49, 64, 81,
    ]);
  });
});

import { iota } from '@/functional/functional';
import { describe, expect } from 'vitest';
import { takeIterable, takeIterator } from '../take';

describe('takeIterable', () => {
  it('should contain the element sequence expected', () => {
    expect(Array.from(takeIterable(iota(10), 3))).deep.equal([0, 1, 2]);
    expect(Array.from(takeIterable(iota(3), 10))).deep.equal([0, 1, 2]);
  });

  it('should allow use of underlying iterable after take completes, and should only drop the necessary elements', () => {
    const generator = iota(10);
    const iterator = generator[Symbol.iterator]();
    const taken = takeIterator(iterator, 3);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (let next = taken.next(); !next.done; next = taken.next()) {
      // do nothing
    }

    expect(iterator.next().value).equals(3);
  });
});

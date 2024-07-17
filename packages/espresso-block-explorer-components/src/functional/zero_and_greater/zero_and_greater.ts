import { assert } from '@/assert/assert';

/**
 * ZeroAndGreaterIterable is an Iterable that emits a sequence of integers
 * starting at 0, and incrementing by 1 every iteration. In theory this would
 * be an infinite sequence, but in practice it will be bounded by the maximum
 * number that can be represented in Javascript.
 */
class ZeroAndGreaterIterable implements Iterable<number> {
  [Symbol.iterator](): Iterator<number> {
    return new ZeroAndGreaterIterator();
  }
}

/**
 * ZeroAndGreaterIterator is an Iterator that emits a sequence of integers
 * starting at 0, and incrementing by 1 every iteration. In theory this would
 * be an infinite sequence, but in practice it will be bounded by the maximum
 * number that can be represented in Javascript.
 */
class ZeroAndGreaterIterator implements Iterator<number> {
  private current: number;

  constructor() {
    this.current = 0;
  }

  next(): IteratorResult<number> {
    const current = this.current;
    this.current++;

    assert(
      current !== this.current,
      'increment of current failed for zero and greater iterator',
    );

    return { done: false, value: current };
  }
}

/**
 * zeroAndGreater returns an Iterable of a sequencer of integers starting at 0,
 * and increasing by 1 for each subsequent iteration.  In theory this would be
 * an infinite sequence, but in practice it will be bounded by the maximum
 * number that can be represented in Javascript.
 *
 * @note the maximum value that should be returnable by this function would be
 *       Number.MAX_SAFE_INTEGER, which is 9007199254740992.
 */
export function zeroAndGreater(): Iterable<number> {
  return new ZeroAndGreaterIterable();
}

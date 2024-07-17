/**
 * DropIterator is an iterator implementation of the functional drop function.
 * It skips the first N elements of an iterator, before returning the rest. The
 * N elements are given by the count parameter in the constructor.
 */
class DropIterator<T> implements Iterator<T> {
  private readonly iterator: Iterator<T>;
  private readonly count: number;
  private allDropped: boolean;

  constructor(iterator: Iterator<T>, count: number) {
    this.iterator = iterator;
    this.count = count;
    this.allDropped = false;
  }

  next(): IteratorResult<T> {
    if (!this.allDropped) {
      const count = this.count;
      for (let i = 0; i < count; i++) {
        // It doesn't matter if we inspect this result or not, as the end
        // result would be the same either way.
        this.iterator.next();
      }
      this.allDropped = true;
    }

    return this.iterator.next();
  }
}

/**
 * DropIterable is an iterable implementation of the functional drop function.
 * It skips the first N elements of an iterable, before returning the rest. The
 * N elements are given by the count parameter in the constructor.
 */
class DropIterable<T> implements Iterable<T> {
  private readonly iterable: Iterable<T>;
  private readonly count: number;

  constructor(iterable: Iterable<T>, count: number) {
    this.iterable = iterable;
    this.count = count;
  }

  [Symbol.iterator](): Iterator<T> {
    return new DropIterator(this.iterable[Symbol.iterator](), this.count);
  }
}

/**
 * dropIterator is a drop function, but operating on Javascript iterators.
 */
export function dropIterator<T>(
  iterator: Iterator<T>,
  count: number,
): Iterator<T> {
  return new DropIterator(iterator, count);
}

/**
 * dropIterable is a convenience function for invoking dropIterator with
 * an Iterable instead.
 */
export function dropIterable<T>(
  iterable: Iterable<T>,
  count: number,
): Iterable<T> {
  return new DropIterable(iterable, count);
}

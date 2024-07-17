/**
 * TakeIterator is an Iterator that wraps another Iterator and only returns
 * the first N elements, where N is specified by the count in the constructor.
 */
class TakeIterator<T> implements Iterator<T> {
  private iterator: Iterator<T>;
  private count: number;
  private current: number;

  constructor(iterator: Iterator<T>, count: number) {
    this.iterator = iterator;
    this.count = count;
    this.current = 0;
  }

  next(): IteratorResult<T> {
    if (this.current >= this.count) {
      return { done: true, value: undefined };
    }

    this.current++;
    return this.iterator.next();
  }
}

/**
 * TakeIterable is an Iterable that wraps another Iterable and only returns
 * the first N elements, where N is specified by the count in the constructor.
 */
class TakeIterable<T> implements Iterable<T> {
  private iterable: Iterable<T>;
  private count: number;

  constructor(iterable: Iterable<T>, count: number) {
    this.iterable = iterable;
    this.count = count;
  }

  [Symbol.iterator](): Iterator<T> {
    return new TakeIterator(this.iterable[Symbol.iterator](), this.count);
  }
}

/**
 * takeIterator is a take function, but operating on Javascript iterators.
 */
export function takeIterator<T>(
  iterator: Iterator<T>,
  count: number,
): Iterator<T> {
  return new TakeIterator(iterator, count);
}

/**
 * takeIterable is a convenience function for invoking takeIterator with
 * an Iterable instead.
 */
export function takeIterable<T>(
  iterable: Iterable<T>,
  count: number,
): Iterable<T> {
  return new TakeIterable(iterable, count);
}

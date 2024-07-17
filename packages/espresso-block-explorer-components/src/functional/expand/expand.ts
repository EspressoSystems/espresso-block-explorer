class ExpandIterator<T, U> implements Iterator<U> {
  private readonly it: Iterator<T>;
  private readonly expander: (value: T) => Iterable<U>;
  private current: Iterator<U> | null;

  constructor(it: Iterator<T>, expander: (value: T) => Iterable<U>) {
    this.it = it;
    this.expander = expander;
    this.current = null;
  }

  next(): IteratorResult<U> {
    if (this.current === null) {
      const next = this.it.next();
      if (next.done) {
        return { done: true, value: undefined };
      }
      this.current = this.expander(next.value)[Symbol.iterator]();
    }

    const currentNext = this.current.next();
    if (currentNext.done) {
      this.current = null;
      return this.next();
    }

    return currentNext;
  }
}

class ExpandIterable<T, U> implements Iterable<U> {
  private readonly iterable: Iterable<T>;
  private readonly expander: (value: T) => Iterable<U>;

  constructor(iterable: Iterable<T>, expander: (value: T) => Iterable<U>) {
    this.iterable = iterable;
    this.expander = expander;
  }

  [Symbol.iterator](): Iterator<U> {
    return new ExpandIterator(this.iterable[Symbol.iterator](), this.expander);
  }
}

/**
 * expandIterator is a flatMap function, but operating on Javascript iterators.
 */
export function expandIterator<T, U>(
  iterator: Iterator<T>,
  expander: (value: T) => Iterable<U>,
) {
  return new ExpandIterator(iterator, expander);
}

/**
 * expandIterable is a convenience function for invoking expandIterator with
 * an Iterable instead.
 */
export function expandIterable<T, U>(
  iterable: Iterable<T>,
  expander: (value: T) => Iterable<U>,
): Iterable<U> {
  return new ExpandIterable(iterable, expander);
}

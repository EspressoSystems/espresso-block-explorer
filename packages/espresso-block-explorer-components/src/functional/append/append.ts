/**
 * AppendIterator is an Iterator that concatenates multiple iterables into a
 * single iterator.
 */
class AppendIterator<T> implements Iterator<T> {
  private readonly iterables: Iterator<Iterable<T>>;
  private iterator: Iterator<T> | null = null;

  constructor(iterables: Iterator<Iterable<T>>) {
    this.iterables = iterables;
  }

  static fromIterables<T>(iterables: Iterable<Iterable<T>>): Iterator<T> {
    return new AppendIterator(iterables[Symbol.iterator]());
  }

  next(): IteratorResult<T> {
    if (this.iterator !== null) {
      const value = this.iterator.next();
      if (!value.done) {
        return { done: false, value: value.value };
      }
      this.iterator = null;
    }

    const value = this.iterables.next();
    if (value.done) {
      return { done: true, value: undefined };
    }

    return this.next();
  }
}

/**
 * AppendIterable is an Iterable that concatenates multiple iterables into a
 * single iterable.
 */
class AppendIterable<T> implements Iterable<T> {
  private readonly iterables: Iterable<Iterable<T>>;

  constructor(iterables: Iterable<Iterable<T>>) {
    this.iterables = iterables;
  }

  [Symbol.iterator](): Iterator<T> {
    return AppendIterator.fromIterables(this.iterables);
  }
}

/**
 * appendIterators takes an iterator of iterables and returns an iterator
 *  that iterates over all the elements of the iterables in sequence.
 */
export function appendIterators<T>(
  iterables: Iterator<Iterable<T>>,
): Iterator<T> {
  return new AppendIterator(iterables);
}

/**
 * appendIterables takes an iterable of iterables and returns an iterable
 * that iterates over all the elements of the iterables in sequence.
 */
export function appendIterables<T>(
  iterables: Iterable<Iterable<T>>,
): Iterable<T> {
  return new AppendIterable(iterables);
}

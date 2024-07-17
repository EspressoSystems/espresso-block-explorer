/**
 * MapIterator is an Iterator that applies a transformation function to each
 * element of the input iterator.
 *
 * We opted to use a class implementation instead of a function based
 * implementation as it provides benefits in terms of type inference, and
 * prevents extended scopes from being created.
 *
 * Additionally, benchmarks have shown that a separate class implementation for
 * the Iterator and Iterable is faster than combined, or syntactic sugar
 * implementations.
 */
class MapIterator<T, U> implements Iterator<U> {
  private readonly iterator: Iterator<T>;
  private readonly transformer: (t: T) => U;

  constructor(iterator: Iterator<T>, transformer: (t: T) => U) {
    this.iterator = iterator;
    this.transformer = transformer;
  }

  static fromIterable<T, U>(
    iterable: Iterable<T>,
    transformer: (t: T) => U,
  ): Iterator<U> {
    return new MapIterator(iterable[Symbol.iterator](), transformer);
  }

  next(): IteratorResult<U> {
    const value = this.iterator.next();
    if (value.done) {
      return { done: true, value: undefined };
    }

    return { done: false, value: this.transformer(value.value) };
  }
}

/**
 * MapIterable is an Iterable that implements the functional map pattern on
 * Iterables.
 *
 * We opted to use a class implementation instead of a function based
 * implementation as it provides benefits in terms of type inference, and
 * prevents extended scopes from being created.
 *
 * Additionally, benchmarks have shown that a separate class implementation for
 * the Iterator and Iterable is faster than combined, or syntactic sugar
 * implementations.
 */
class MapIterable<T, U> implements Iterable<U> {
  private readonly iterable: Iterable<T>;
  private readonly transformer: (t: T) => U;

  constructor(iterable: Iterable<T>, transformer: (t: T) => U) {
    this.iterable = iterable;
    this.transformer = transformer;
  }

  [Symbol.iterator](): Iterator<U> {
    return MapIterator.fromIterable(this.iterable, this.transformer);
  }
}

/**
 * mapIterator is a map function, but operating on Javascript iterators.
 */
export function mapIterator<T, U>(
  iterator: Iterator<T>,
  transformer: (t: T) => U,
): Iterator<U> {
  return new MapIterator(iterator, transformer);
}

/**
 * mapIterable is a convenience function for invoking mapIterator with an
 * Iterable instead.
 */
export function mapIterable<T, U>(
  iterable: Iterable<T>,
  transformer: (t: T) => U,
): Iterable<U> {
  return new MapIterable(iterable, transformer);
}

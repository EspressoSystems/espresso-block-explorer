/**
 * FilterIterator is an Iterator that implements the functional filter pattern
 * on Iterators.
 *
 * We opted to use a class implementation instead of a function based
 * implementation as it provides benefits in terms of type inference, and
 * prevents extended scopes from being created.
 *
 * Additionally, benchmarks have shown that a separate class implementation for
 * the Iterator and Iterable is faster than combined, or syntactic sugar
 * implementations.
 */
class FilterIterator<T, S extends T> implements Iterator<S> {
  private iterator: Iterator<T>;
  private predicate: (t: T) => t is S;

  constructor(iterator: Iterator<T>, predicate: (t: T) => t is S) {
    this.iterator = iterator;
    this.predicate = predicate;
  }

  static fromIterable<T, S extends T>(
    iterable: Iterable<T>,
    predicate: (t: T) => t is S,
  ): Iterator<S> {
    return new FilterIterator(iterable[Symbol.iterator](), predicate);
  }

  next(): IteratorResult<S> {
    for (
      let next = this.iterator.next();
      !next.done;
      next = this.iterator.next()
    ) {
      if (this.predicate(next.value)) {
        return { done: false, value: next.value };
      }
    }

    return { done: true, value: undefined as never };
  }
}

/**
 * FilterIterable is an Iterable that implements the functional filter pattern
 * on Iterables.
 *
 * We opted to use a class implementation instead of a function based
 * implementation as it provides benefits in terms of type inference, and
 * prevents extended scopes from being created.
 *
 * Additionally, benchmarks have shown that a separate class implementation for
 * the Iterator and Iterable is faster than combined, or syntactic sugar
 * implementations.
 */
class FilterIterable<T, S extends T> implements Iterable<S> {
  private iterable: Iterable<T>;
  private predicate: (t: T) => t is S;

  constructor(iterable: Iterable<T>, predicate: (t: T) => t is S) {
    this.iterable = iterable;
    this.predicate = predicate;
  }

  [Symbol.iterator]() {
    return FilterIterator.fromIterable(this.iterable, this.predicate);
  }
}

/**
 * filterIterator is a filter function, but operating on Javascript iterators.
 */
export function filterIterator<T, S extends T>(
  iterator: Iterator<T>,
  predicate: (value: T) => value is S,
): Iterator<S>;
export function filterIterator<T>(
  iterator: Iterator<T>,
  predicate: (value: T) => unknown,
): Iterator<T>;
export function filterIterator<T>(
  iterator: Iterator<T>,
  predicate: (value: T) => unknown,
): Iterator<T> {
  return new FilterIterator(iterator, predicate as (value: T) => value is T);
}

/**
 * filterIterable is a convenience function for invoking filterIterator
 * with an Iterable instead.
 */
export function filterIterable<T, S extends T>(
  iterable: Iterable<T>,
  predicate: (value: T) => value is S,
): Iterable<S>;
export function filterIterable<T>(
  iterable: Iterable<T>,
  predicate: (value: T) => unknown,
): Iterable<T>;
export function filterIterable<T>(
  iterable: Iterable<T>,
  predicate: (value: T) => unknown,
): Iterable<T> {
  return new FilterIterable(iterable, predicate as (value: T) => value is T);
}

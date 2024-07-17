/**
 * firstWhereIterator is a find function, but operating on Javascript iterators.
 */
export function firstWhereIterator<T, S extends T>(
  iterator: Iterator<T>,
  predicate: (value: T) => value is S,
): undefined | S;
export function firstWhereIterator<T>(
  iterator: Iterator<T>,
  predicate: (value: T) => unknown,
): undefined | T;
export function firstWhereIterator<T>(
  iterator: Iterator<T>,
  predicate: (value: T) => unknown,
) {
  for (let next = iterator.next(); !next.done; next = iterator.next()) {
    if (predicate(next.value)) {
      return next.value;
    }
  }

  return undefined;
}

/**
 * firstWhereIterable is a convenience function for invoking firstWhereIterator
 * with an Iterable instead.
 */
export function firstWhereIterable<T, S extends T>(
  iterable: Iterable<T>,
  predicate: (value: T) => value is S,
): undefined | S;
export function firstWhereIterable<T>(
  iterable: Iterable<T>,
  predicate: (value: T) => unknown,
): undefined | T;
export function firstWhereIterable<T>(
  iterable: Iterable<T>,
  predicate: (value: T) => unknown,
): undefined | T {
  return firstWhereIterator(iterable[Symbol.iterator](), predicate);
}

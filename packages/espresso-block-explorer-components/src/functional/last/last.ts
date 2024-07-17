import MissingElementError from '@/errors/MissingElementError';

/**
 * lastIterator returns the last element of the given Iterator
 * If no element is found, this throws an error.
 */
export function lastIterator<T>(iterator: Iterator<T>): T {
  let last: undefined | T = undefined;
  for (let next = iterator.next(); !next.done; next = iterator.next()) {
    last = next.value;
  }

  if (last === undefined) {
    throw new MissingElementError();
  }

  return last;
}

/**
 * lastIterable is a convenience function for invoking lastIterator with
 * an Iterable instead.
 */
export function lastIterable<T>(iterable: Iterable<T>): T {
  return lastIterator(iterable[Symbol.iterator]());
}

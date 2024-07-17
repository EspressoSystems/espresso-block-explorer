import MissingElementError from '@/errors/MissingElementError';

/**
 * first returns the first element of the given Iterator
 * If no element is found, this throws an error.
 *
 * @throws an error when no element is returned from the iterator.
 */
export function firstIterator<T>(iterator: Iterator<T>): T {
  const next = iterator.next();
  if (next.done) {
    throw new MissingElementError();
  }

  return next.value;
}

/**
 * firstIterable is a convenience function for invoking firstIterator with
 * an Iterable instead.
 */
export function firstIterable<T>(iterable: Iterable<T>): T {
  return firstIterator(iterable[Symbol.iterator]());
}

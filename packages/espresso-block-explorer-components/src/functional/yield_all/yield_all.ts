/**
 * YieldAll is a simple class that wraps an Iterator and makes it
 * Iterable.
 */
class YieldAll<T> implements Iterable<T> {
  private it: Iterator<T>;

  constructor(it: Iterator<T>) {
    this.it = it;
  }

  [Symbol.iterator](): Iterator<T> {
    return this.it;
  }
}

/**
 * yieldAll is a convenience function for converting an Iterator into
 * an Iterable.
 */
export function yieldAll<T>(iterator: Iterator<T>): Iterable<T> {
  return new YieldAll(iterator);
}

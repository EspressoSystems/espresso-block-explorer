/**
 * Filter is an iterator that filters out elements that do not match a
 * predicate.
 */
class Filter<T, S extends T> implements AsyncIterableIterator<S> {
  private readonly iterator: Iterator<T> | AsyncIterator<T>;
  private readonly predicate: (t: T) => t is S;

  constructor(
    iterator: Iterator<T> | AsyncIterator<T>,
    predicate: (t: T) => t is S,
  ) {
    this.iterator = iterator;
    this.predicate = predicate;
  }

  [Symbol.asyncIterator](): AsyncIterableIterator<S> {
    return this;
  }

  async next(): Promise<IteratorResult<S>> {
    for (
      let next = await this.iterator.next();
      !next.done;
      next = await this.iterator.next()
    ) {
      if (this.predicate(next.value)) {
        return { done: false, value: next.value };
      }
    }

    return { done: true, value: undefined as never };
  }
}

/**
 * filterAsyncIterator is a filter function, but operating on Javascript
 * AsyncIterators.
 */
export function filterAsyncIterator<T, S extends T>(
  iterator: AsyncIterator<T>,
  predicate: (value: T) => value is S,
): AsyncIterator<S>;
export function filterAsyncIterator<T>(
  iterator: AsyncIterator<T>,
  predicate: (value: T) => boolean,
): AsyncIterator<T>;
export function filterAsyncIterator<T>(
  iterator: AsyncIterator<T>,
  predicate: (value: T) => unknown,
): AsyncIterator<T>;
export function filterAsyncIterator<T>(
  iterator: AsyncIterator<T>,
  predicate: (value: T) => unknown,
): AsyncIterator<T> {
  return new Filter(iterator, predicate as (value: T) => value is T);
}

/**
 * filterAsyncIterable is a convenience function for invoking
 * filterAsyncIterator with an AsyncIterable instead.
 */
export function filterAsyncIterable<T, S extends T>(
  iterable: AsyncIterable<T>,
  predicate: (value: T) => value is S,
): AsyncIterable<T>;
export function filterAsyncIterable<T>(
  iterable: AsyncIterable<T>,
  predicate: (value: T) => boolean,
): AsyncIterable<T>;
export function filterAsyncIterable<T>(
  iterable: AsyncIterable<T>,
  predicate: (value: T) => unknown,
): AsyncIterable<T>;
export function filterAsyncIterable<T>(
  iterable: AsyncIterable<T>,
  predicate: (t: T) => unknown,
): AsyncIterable<T> {
  return new Filter(
    iterable[Symbol.asyncIterator](),
    predicate as (value: T) => value is T,
  );
}

/**
 * Map is a simple iterator that applies a transformation function to each
 * element of the input iterator.
 */
class Map<T, U> implements AsyncIterableIterator<U> {
  private readonly iterator: Iterator<T> | AsyncIterator<T>;
  private readonly transformer: (t: T) => U | Promise<U>;

  constructor(
    iterator: Iterator<T> | AsyncIterator<T>,
    transformer: (t: T) => U | Promise<U>,
  ) {
    this.iterator = iterator;
    this.transformer = transformer;
  }

  [Symbol.asyncIterator](): AsyncIterableIterator<U> {
    return this;
  }

  async next(): Promise<IteratorResult<U>> {
    const value = await this.iterator.next();
    if (value.done) {
      return { done: true, value: undefined };
    }

    return { done: false, value: await this.transformer(value.value) };
  }
}

/**
 * mapAsyncIterator is a map function, but operating on Javascript
 * AsyncIterators.
 */
export function mapAsyncIterator<T, U>(
  iterator: AsyncIterator<T>,
  transformer: (t: T) => U | Promise<U>,
): AsyncIterator<U> {
  return new Map(iterator, transformer);
}

/**
 * mapAsyncIterable is a convenience function for invoking mapAsyncIterator with
 * an AsyncIterable instead.
 */
export function mapAsyncIterable<T, U>(
  iterable: AsyncIterable<T>,
  transformer: (t: T) => U | Promise<U>,
): AsyncIterable<U> {
  return new Map(iterable[Symbol.asyncIterator](), transformer);
}

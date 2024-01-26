import { iota } from './functional';
import LinkedList, { iterateLinkedList, pushLinkedList } from './linked_list';

/**
 * yieldAllAsync is a convenience function for converting an AsyncIterator
 * into an AsyncGenerator.
 */
export async function* yieldAllAsync<T>(
  it: AsyncIterator<T>,
): AsyncGenerator<T> {
  for (let next = await it.next(); !next.done; next = await it.next()) {
    yield next.value;
  }
}

/**
 * filterAsyncIterator is a filter function, but operating on Javascript
 * AsyncIterators.
 */
export function filterAsyncIterator<T, S extends T>(
  iterator: AsyncIterator<T>,
  predicate: (value: T) => value is S,
): AsyncGenerator<S>;
export function filterAsyncIterator<T>(
  iterator: AsyncIterator<T>,
  predicate: (value: T) => unknown,
): AsyncGenerator<T>;
export async function* filterAsyncIterator<T>(
  iterator: AsyncIterator<T>,
  predicate: (value: T) => unknown,
): AsyncGenerator<T> {
  for (
    let next = await iterator.next();
    !next.done;
    next = await iterator.next()
  ) {
    if (predicate(next.value)) {
      yield next.value;
    }
  }
}

/**
 * filterAsyncIterable is a convenience function for invoking
 * filterAsyncIterator with an AsyncIterable instead.
 */
export function filterAsyncIterable<T, S extends T>(
  iterable: AsyncIterable<T>,
  predicate: (value: T) => value is S,
): AsyncGenerator<T>;
export function filterAsyncIterable<T>(
  iterable: AsyncIterable<T>,
  predicate: (value: T) => unknown,
): AsyncGenerator<T>;
export function filterAsyncIterable<T>(
  iterable: AsyncIterable<T>,
  predicate: (t: T) => unknown,
): AsyncGenerator<T> {
  return filterAsyncIterator(iterable[Symbol.asyncIterator](), predicate);
}

/**
 * mapAsyncIterator is a map function, but operating on Javascript
 * AsyncIterators.
 */
export async function* mapAsyncIterator<T, U>(
  iterator: AsyncIterator<T>,
  transformer: (t: T) => Promise<U>,
): AsyncGenerator<U> {
  for (
    let next = await iterator.next();
    !next.done;
    next = await iterator.next()
  ) {
    yield await transformer(next.value);
  }
}

/**
 * mapAsyncIterable is a convenience function for invoking mapAsyncIterator with
 * an AsyncIterable instead.
 */
export function mapAsyncIterable<T, U>(
  iterable: AsyncIterable<T>,
  transformer: (t: T) => Promise<U>,
): AsyncGenerator<U> {
  return mapAsyncIterator(iterable[Symbol.asyncIterator](), transformer);
}

/**
 * takeAsyncIterator is a take function, but operating on Javascript
 * AsyncIterators.
 */
export async function* takeAsyncIterator<T>(
  iterator: AsyncIterator<T>,
  count: number,
): AsyncGenerator<T> {
  for (let i = 0; i < count; i++) {
    const next = await iterator.next();
    if (next.done) {
      return;
    }
    yield next.value;
  }
}

/**
 * takeAsyncIterable is a convenience function for invoking takeAsyncIterator
 * with an AsyncIterable instead.
 */
export function takeAsyncIterable<T>(
  iterable: AsyncIterable<T>,
  count: number,
): AsyncGenerator<T> {
  return takeAsyncIterator(iterable[Symbol.asyncIterator](), count);
}

/**
 * dropAsyncIterator is a drop function, but operating on Javascript
 * AsyncIterators.
 */
export async function* dropAsyncIterator<T>(
  iterator: AsyncIterator<T>,
  count: number,
): AsyncGenerator<T> {
  for (let i = 0; i < count; i++) {
    const next = await iterator.next();
    if (next.done) {
      return;
    }

    // Skip this value
  }

  yield* yieldAllAsync(iterator);
}

/**
 * dropAsyncIterable is a convenience function for invoking dropAsyncIterator
 * with an AsyncIterable instead.
 */
export function dropAsyncIterable<T>(
  iterable: AsyncIterable<T>,
  count: number,
): AsyncGenerator<T> {
  return dropAsyncIterator(iterable[Symbol.asyncIterator](), count);
}

/**
 * firstAsyncIterator returns the first element emitted from an AsyncIterator.
 * If no element is found, this throws an error.
 *
 * @throws an error when no element is returned from the AsyncIterator.
 */
export async function firstAsyncIterator<T>(
  iterator: AsyncIterator<T>,
): Promise<T> {
  const next = await iterator.next();
  if (next.done) {
    throw new TypeError('missing element');
  }

  return next.value;
}

/**
 * firstWhereAsyncIterator is a find function, but operating on Javascript
 * AsyncIterators.
 */
export async function firstWhereAsyncIterator<T, S extends T>(
  iterator: AsyncIterator<T>,
  predicate: (value: T) => value is S,
): Promise<undefined | S>;
export async function firstWhereAsyncIterator<T>(
  iterator: AsyncIterator<T>,
  predicate: (value: T) => unknown,
): Promise<undefined | T>;
export async function firstWhereAsyncIterator<T>(
  iterator: AsyncIterator<T>,
  predicate: (value: T) => unknown,
): Promise<undefined | T> {
  for (
    let next = await iterator.next();
    !next.done;
    next = await iterator.next()
  ) {
    if (predicate(next.value)) {
      return next.value;
    }
  }

  return undefined;
}

/**
 * firstWhereAsyncIterable is a convenience function for invoking
 * firstWhereAsyncIterator with an AsyncIterable instead.
 * @param iterable
 * @param predicate
 */
export async function firstWhereAsyncIterable<T, S extends T>(
  iterable: AsyncIterable<T>,
  predicate: (value: T) => value is S,
): Promise<undefined | S>;
export async function firstWhereAsyncIterable<T>(
  iterable: AsyncIterable<T>,
  predicate: (value: T) => unknown,
): Promise<undefined | T>;
export async function firstWhereAsyncIterable<T>(
  iterable: AsyncIterable<T>,
  predicate: (value: T) => unknown,
): Promise<undefined | T> {
  return firstWhereAsyncIterator(iterable[Symbol.asyncIterator](), predicate);
}

/**
 * expandAsyncIterator is a flatMap function, but operating on Javascript
 * AsyncIterators.
 */
export async function* expandAsyncIterator<T, U>(
  iterator: AsyncIterator<T>,
  expander: (t: T) => AsyncIterable<U>,
) {
  for (
    let next = await iterator.next();
    !next.done;
    next = await iterator.next()
  ) {
    yield* expander(next.value);
  }
}

/**
 * expandAsyncIterable is a convenience function for invoking
 * expandAsyncIterator with an AsyncIterable instead.
 */
export function expandAsyncIterable<T, U>(
  it: AsyncIterable<T>,
  fn: (t: T) => AsyncIterable<U>,
) {
  return expandAsyncIterator(it[Symbol.asyncIterator](), fn);
}

/**
 * iotaAsync represents a sequence of integers that adhere to the sequence
 * {0, 1, ..., n-2, n-1}.
 * Each entry is resolved asynchronously.
 *
 * @param count the number to bound the ending of the sequence.
 */
export async function* iotaAsync(count: number): AsyncGenerator<number> {
  yield* iota(count);
}

/**
 * foldRAsyncIterator is a foldR function that can be applied to an
 * AsyncIterator.
 */
export async function foldRAsyncIterator<T, U>(
  combiner: (acc: U, element: T) => Promise<U>,
  seed: Promise<U>,
  list: AsyncIterator<T>,
): Promise<U> {
  const it = list;
  let result = seed;
  for (let next = await it.next(); !next.done; next = await it.next()) {
    result = combiner(await result, next.value);
  }

  return result;
}

export async function* reverseAsyncIterator<T>(
  iterator: AsyncIterator<T>,
): AsyncGenerator<T> {
  // Iterative method instead of recursive... FILO
  let stack: null | LinkedList<T> = null;

  for (
    let next = await iterator.next();
    !next.done;
    next = await iterator.next()
  ) {
    stack = pushLinkedList(stack, next.value);
  }

  yield* iterateLinkedList(stack);
}

export function reverseAsyncIterable<T>(
  iterable: AsyncIterable<T>,
): AsyncGenerator<T> {
  return reverseAsyncIterator(iterable[Symbol.asyncIterator]());
}

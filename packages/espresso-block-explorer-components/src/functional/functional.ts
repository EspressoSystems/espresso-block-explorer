/**
 * Javascript is filled with many inefficiencies in how it's base Array class
 * processes many functions.  As a general rule, the map, filter, and reduce
 * functions tend to duplicate data structures behind the scenes in order to
 * facilitate the contract.  In addition, these functions tend to eagerly
 * evaluate this iteration as quickly as possible with no ability to pause
 * or slow down this processing.
 *
 * If these operations are changed together:
 *
 * ```javascript
 *  arr
 *    .filter(someFilter1)
 *    .filter(someFilter2)
 *    .map(someTransformer1)
 *    .map(someTransformer2)
 * ```
 *
 * then these operations all iterate over the the entire remaining array every
 * time.  This can have performance impacts on complex chained Array operations.
 * These functions are also **only** available to Arrays, and nothing else
 * within the Javascript library.
 *
 * This package aims to prioritize these considerations for Iterators, Iterables
 * and Generators.  This will also for maximum flexibility and allows these
 * functions to apply to many more Javascript types.
 */

import LinkedList, {
  iterateLinkedList,
  pushLinkedList,
} from '../data_structures/linked_list/LinkedList';
import MissingElementError from '../errors/MissingElementError';

/**
 * yieldAll is a convenience function for converting an Iterator into
 * a generator.
 */
export function* yieldAll<T>(it: Iterator<T>): Generator<T> {
  for (let next = it.next(); !next.done; next = it.next()) {
    yield next.value;
  }
}

/**
 * filterIterator is a filter function, but operating on Javascript iterators.
 */
export function filterIterator<T, S extends T>(
  iterator: Iterator<T>,
  predicate: (value: T) => value is S,
): Generator<S>;
export function filterIterator<T>(
  iterator: Iterator<T>,
  predicate: (value: T) => unknown,
): Generator<T>;
export function* filterIterator<T>(
  iterator: Iterator<T>,
  predicate: (value: T) => unknown,
) {
  for (let next = iterator.next(); !next.done; next = iterator.next()) {
    if (predicate(next.value)) {
      yield next.value;
    }
  }
}

/**
 * filterIterable is a convenience function for invoking filterIterator
 * with an Iterable instead.
 */
export function filterIterable<T, S extends T>(
  iterable: Iterable<T>,
  predicate: (value: T) => value is S,
): Generator<S>;
export function filterIterable<T>(
  iterable: Iterable<T>,
  predicate: (value: T) => unknown,
): Generator<T>;
export function filterIterable<T>(
  iterable: Iterable<T>,
  predicate: (value: T) => unknown,
): Generator<T> {
  return filterIterator<T>(iterable[Symbol.iterator](), predicate);
}

/**
 * mapIterator is a map function, but operating on Javascript iterators.
 */
export function* mapIterator<T, U>(
  iterator: Iterator<T>,
  transformer: (t: T) => U,
): Generator<U> {
  for (let next = iterator.next(); !next.done; next = iterator.next()) {
    yield transformer(next.value);
  }
}

/**
 * mapIterable is a convenience function for invoking mapIterator with an
 * Iterable instead.
 */
export function mapIterable<T, U>(
  iterable: Iterable<T>,
  transformer: (t: T) => U,
): Generator<U> {
  return mapIterator(iterable[Symbol.iterator](), transformer);
}

/**
 * takeIterator is a take function, but operating on Javascript iterators.
 */
export function* takeIterator<T>(
  iterator: Iterator<T>,
  count: number,
): Generator<T> {
  for (
    let i = 0, next = iterator.next();
    i < count && !next.done;
    i++, next = iterator.next()
  ) {
    yield next.value;
  }
}

/**
 * takeIterable is a convenience function for invoking takeIterator with
 * an Iterable instead.
 */
export function takeIterable<T>(
  iterable: Iterable<T>,
  count: number,
): Generator<T> {
  return takeIterator(iterable[Symbol.iterator](), count);
}

/**
 * dropIterator is a drop function, but operating on Javascript iterators.
 */
export function* dropIterator<T>(
  iterator: Iterator<T>,
  count: number,
): Generator<T> {
  for (let i = 0; i < count; i++) {
    const next = iterator.next();
    if (next.done) {
      return;
    }

    // Skip this value
  }

  yield* yieldAll(iterator);
}

/**
 * dropIterable is a convenience function for invoking dropIterator with
 * an Iterable instead.
 */
export function dropIterable<T>(
  iterable: Iterable<T>,
  count: number,
): Generator<T> {
  return dropIterator(iterable[Symbol.iterator](), count);
}

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

/**
 * expandIterator is a flatMap function, but operating on Javascript iterators.
 */
export function* expandIterator<T, U>(
  iterator: Iterator<T>,
  expander: (value: T) => Iterable<U>,
) {
  for (let next = iterator.next(); !next.done; next = iterator.next()) {
    yield* expander(next.value);
  }
}

/**
 * expandIterable is a convenience function for invoking expandIterator with
 * an Iterable instead.
 */
export function expandIterable<T, U>(
  iterable: Iterable<T>,
  expander: (value: T) => Iterable<U>,
) {
  return expandIterator(iterable[Symbol.iterator](), expander);
}

/**
 * defaultCompare is a **slow** compare.  It assumes nothing about the types
 * being compare, other than they are orderable.
 */
function defaultCompare<T = unknown>(a: T, b: T): number {
  if (a < b) {
    return -1;
  }

  if (a > b) {
    return 1;
  }

  return 0;
}

/**
 * compareIterators is able to compare Iterators of the same type.
 * It consumes both Iterators in order to achieve this. You are able to
 * pass a custom comparison function, otherwise it will use a defaultCompare
 * function that utilizes conditional branches.
 */
export function compareIterators<T>(
  itA: Iterator<T>,
  itB: Iterator<T>,
  compare: (a: T, b: T) => number = defaultCompare<T>,
): number {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const nextA = itA.next();
    const nextB = itB.next();

    if (nextA.done || nextB.done) {
      return Number(nextA.done) - Number(nextB.done);
    }

    const cmp = compare(nextA.value, nextB.value);
    if (cmp !== 0) {
      return cmp;
    }
  }
}

/**
 * compareIterables is a convenience function for calling comparIterators,
 * but given Iterables instead of Iterators.
 */
export function compareIterables<T>(
  itA: Iterable<T>,
  itB: Iterable<T>,
  compare: (a: T, b: T) => number = defaultCompare<T>,
): number {
  return compareIterators(
    itA[Symbol.iterator](),
    itB[Symbol.iterator](),
    compare,
  );
}

/**
 * compareNumber is able to compare numbers without a condition branch
 */
export function compareNumber(a: number, b: number) {
  return a - b;
}

/**
 * compareArrayBuffer is a compare function for ArrayBuffers.
 */
export function compareArrayBuffer(a: ArrayBuffer, b: ArrayBuffer): number {
  return compareIterables(new Uint8Array(a), new Uint8Array(b), compareNumber);
}

/**
 * compareNumberArray is a compare function for number arrays.
 */
export function compareNumberArray(a: number[], b: number[]): number {
  return compareIterables(a, b, compareNumber);
}

/**
 * zeroAndGreater emits a sequence of integers starting at 0, and incrementing
 * by 1 every iteration.
 */
export function* zeroAndGreater(): Generator<number> {
  let i = 0;
  while (true) {
    yield i++;
  }
}

/**
 * inf represents a potentially infinite sequence of positive integers
 */
export function inf(): Generator<number> {
  return dropIterable(zeroAndGreater(), 1);
}

/**
 * iota represents a sequence of integers that adhere to the sequence
 * {0, 1, ..., n-2, n-1}
 * @param count the number to bound the ending of the sequence.
 */
export function iota(count: number) {
  return takeIterable(zeroAndGreater(), Math.ceil(count));
}

export function* reverseIterator<T>(iterator: Iterator<T>): Generator<T> {
  // Iterative method instead of recursive... FILO
  let stack: null | LinkedList<T> = null;

  for (let next = iterator.next(); !next.done; next = iterator.next()) {
    stack = pushLinkedList(stack, next.value);
  }

  yield* iterateLinkedList(stack);
}

export function reverseIterable<T>(iterable: Iterable<T>): Generator<T> {
  return reverseIterator(iterable[Symbol.iterator]());
}

/**
 * foldRIterator is a foldR function that can be applied to an
 * AsyncIterator.
 */
export function foldRIterator<T, U>(
  combiner: (acc: U, element: T) => U,
  seed: U,
  list: Iterator<T>,
): U {
  const it = list;
  let result = seed;
  for (let next = it.next(); !next.done; next = it.next()) {
    result = combiner(result, next.value);
  }

  return result;
}

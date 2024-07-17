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

export * from './append/append';
export * from './drop/drop';
export * from './expand/expand';
export * from './filter/filter';
export * from './first/first';
export * from './first_where/first_where';
export * from './fold/fold';
export * from './inf/inf';
export * from './iota/iota';
export * from './last/last';
export * from './map/map';
export * from './reverse/reverse';
export * from './take/take';
export * from './yield_all/yield_all';
export * from './zero_and_greater/zero_and_greater';
export * from './zip_with/zip_with';

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

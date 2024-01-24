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
/**
 * yieldAll is a convenience function for converting an Iterator into
 * a generator.
 */
export declare function yieldAll<T>(it: Iterator<T>): Generator<T>;
/**
 * filterIterator is a filter function, but operating on Javascript iterators.
 */
export declare function filterIterator<T, S extends T>(iterator: Iterator<T>, predicate: (value: T) => value is S): Generator<S>;
export declare function filterIterator<T>(iterator: Iterator<T>, predicate: (value: T) => unknown): Generator<T>;
/**
 * filterIterable is a convenience function for invoking filterIterator
 * with an Iterable instead.
 */
export declare function filterIterable<T, S extends T>(iterable: Iterable<T>, predicate: (value: T) => value is S): Generator<S>;
export declare function filterIterable<T>(iterable: Iterable<T>, predicate: (value: T) => unknown): Generator<T>;
/**
 * mapIterator is a map function, but operating on Javascript iterators.
 */
export declare function mapIterator<T, U>(iterator: Iterator<T>, transformer: (t: T) => U): Generator<U>;
/**
 * mapIterable is a convenience function for invoking mapIterator with an
 * Iterable instead.
 */
export declare function mapIterable<T, U>(iterable: Iterable<T>, transformer: (t: T) => U): Generator<U>;
/**
 * takeIterator is a take function, but operating on Javascript iterators.
 */
export declare function takeIterator<T>(iterator: Iterator<T>, count: number): Generator<T>;
/**
 * takeIterable is a convenience function for invoking takeIterator with
 * an Iterable instead.
 */
export declare function takeIterable<T>(iterable: Iterable<T>, count: number): Generator<T>;
/**
 * dropIterator is a drop function, but operating on Javascript iterators.
 */
export declare function dropIterator<T>(iterator: Iterator<T>, count: number): Generator<T>;
/**
 * dropIterable is a convenience function for invoking dropIterator with
 * an Iterable instead.
 */
export declare function dropIterable<T>(iterable: Iterable<T>, count: number): Generator<T>;
/**
 * first returns the first element of the given Iterator
 * If no element is found, this throws an error.
 *
 * @throws an error when no element is returned from the iterator.
 */
export declare function firstIterator<T>(iterator: Iterator<T>): T;
/**
 * firstWhereIterator is a find function, but operating on Javascript iterators.
 */
export declare function firstWhereIterator<T, S extends T>(iterator: Iterator<T>, predicate: (value: T) => value is S): undefined | S;
export declare function firstWhereIterator<T>(iterator: Iterator<T>, predicate: (value: T) => unknown): undefined | T;
/**
 * firstWhereIterable is a convenience function for invoking firstWhereIterator
 * with an Iterable instead.
 */
export declare function firstWhereIterable<T, S extends T>(iterable: Iterable<T>, predicate: (value: T) => value is S): undefined | S;
export declare function firstWhereIterable<T>(iterable: Iterable<T>, predicate: (value: T) => unknown): undefined | T;
/**
 * expandIterator is a flatMap function, but operating on Javascript iterators.
 */
export declare function expandIterator<T, U>(iterator: Iterator<T>, expander: (value: T) => Iterable<U>): Generator<U, void, undefined>;
/**
 * expandIterable is a convenience function for invoking expandIterator with
 * an Iterable instead.
 */
export declare function expandIterable<T, U>(iterable: Iterable<T>, expander: (value: T) => Iterable<U>): Generator<U, void, undefined>;
/**
 * compareIterators is able to compare Iterators of the same type.
 * It consumes both Iterators in order to achieve this. You are able to
 * pass a custom comparison function, otherwise it will use a defaultCompare
 * function that utilizes conditional branches.
 */
export declare function compareIterators<T>(itA: Iterator<T>, itB: Iterator<T>, compare?: (a: T, b: T) => number): number;
/**
 * compareIterables is a convenience function for calling comparIterators,
 * but given Iterables instead of Iterators.
 */
export declare function compareIterables<T>(itA: Iterable<T>, itB: Iterable<T>, compare?: (a: T, b: T) => number): number;
/**
 * compareNumber is able to compare numbers without a condition branch
 */
export declare function compareNumber(a: number, b: number): number;
/**
 * compareArrayBuffer is a compare function for ArrayBuffers.
 */
export declare function compareArrayBuffer(a: ArrayBuffer, b: ArrayBuffer): number;
/**
 * compareNumberArray is a compare function for number arrays.
 */
export declare function compareNumberArray(a: number[], b: number[]): number;
/**
 * zeroAndGreater emits a sequence of integers starting at 0, and incrementing
 * by 1 every iteration.
 */
export declare function zeroAndGreater(): Generator<number>;
/**
 * inf represents a potentially infinite sequence of positive integers
 */
export declare function inf(): Generator<number>;
/**
 * iota represents a sequence of integers that adhere to the sequence
 * {0, 1, ..., n-2, n-1}
 * @param count the number to bound the ending of the sequence.
 */
export declare function iota(count: number): Generator<number, any, unknown>;

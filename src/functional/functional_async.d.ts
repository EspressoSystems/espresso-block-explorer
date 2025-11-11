export declare function convertIteratorToAsyncIterator<T>(iterator: Iterator<T>): AsyncGenerator<T>;
export declare function convertIterableToAsyncIterable<T>(iterable: Iterable<T>): AsyncGenerator<T>;
/**
 * yieldAllAsync is a convenience function for converting an AsyncIterator
 * into an AsyncGenerator.
 */
export declare function yieldAllAsync<T>(it: AsyncIterator<T>): AsyncGenerator<T>;
/**
 * filterAsyncIterator is a filter function, but operating on Javascript
 * AsyncIterators.
 */
export declare function filterAsyncIterator<T, S extends T>(iterator: AsyncIterator<T>, predicate: (value: T) => value is S): AsyncGenerator<S>;
export declare function filterAsyncIterator<T>(iterator: AsyncIterator<T>, predicate: (value: T) => unknown): AsyncGenerator<T>;
/**
 * filterAsyncIterable is a convenience function for invoking
 * filterAsyncIterator with an AsyncIterable instead.
 */
export declare function filterAsyncIterable<T, S extends T>(iterable: AsyncIterable<T>, predicate: (value: T) => value is S): AsyncGenerator<T>;
export declare function filterAsyncIterable<T>(iterable: AsyncIterable<T>, predicate: (value: T) => unknown): AsyncGenerator<T>;
/**
 * mapAsyncIterator is a map function, but operating on Javascript
 * AsyncIterators.
 */
export declare function mapAsyncIterator<T, U>(iterator: AsyncIterator<T>, transformer: (t: T) => Promise<U>): AsyncGenerator<U>;
/**
 * mapAsyncIterable is a convenience function for invoking mapAsyncIterator with
 * an AsyncIterable instead.
 */
export declare function mapAsyncIterable<T, U>(iterable: AsyncIterable<T>, transformer: (t: T) => Promise<U>): AsyncGenerator<U>;
/**
 * takeAsyncIterator is a take function, but operating on Javascript
 * AsyncIterators.
 */
export declare function takeAsyncIterator<T>(iterator: AsyncIterator<T>, count: number): AsyncGenerator<T>;
/**
 * takeAsyncIterable is a convenience function for invoking takeAsyncIterator
 * with an AsyncIterable instead.
 */
export declare function takeAsyncIterable<T>(iterable: AsyncIterable<T>, count: number): AsyncGenerator<T>;
export declare function takeWhileAsyncIterator<T>(iterator: AsyncIterator<T>, predicate: (value: T) => boolean): AsyncGenerator<T>;
export declare function takeWhileAsyncIterable<T>(iterable: AsyncIterable<T>, predicate: (value: T) => boolean): AsyncGenerator<T>;
/**
 * dropAsyncIterator is a drop function, but operating on Javascript
 * AsyncIterators.
 */
export declare function dropAsyncIterator<T>(iterator: AsyncIterator<T>, count: number): AsyncGenerator<T>;
/**
 * dropAsyncIterable is a convenience function for invoking dropAsyncIterator
 * with an AsyncIterable instead.
 */
export declare function dropAsyncIterable<T>(iterable: AsyncIterable<T>, count: number): AsyncGenerator<T>;
export declare function dropWhileAsyncIterator<T>(iterator: AsyncIterator<T>, predicate: (value: T) => boolean): AsyncGenerator<T>;
export declare function dropWhileAsyncIterable<T>(iterable: AsyncIterable<T>, predicate: (value: T) => boolean): AsyncGenerator<T>;
/**
 * firstAsyncIterator returns the first element emitted from an AsyncIterator.
 * If no element is found, this throws an error.
 *
 * @throws an error when no element is returned from the AsyncIterator.
 */
export declare function firstAsyncIterator<T>(iterator: AsyncIterator<T>): Promise<T>;
/**
 * firstAsyncIterable is a convenience function for invoking firstAsyncIterator
 */
export declare function firstAsyncIterable<T>(iterable: AsyncIterable<T>): Promise<T>;
/**
 * firstWhereAsyncIterator is a find function, but operating on Javascript
 * AsyncIterators.
 */
export declare function firstWhereAsyncIterator<T, S extends T>(iterator: AsyncIterator<T>, predicate: (value: T) => value is S): Promise<undefined | S>;
export declare function firstWhereAsyncIterator<T>(iterator: AsyncIterator<T>, predicate: (value: T) => unknown): Promise<undefined | T>;
/**
 * firstWhereAsyncIterable is a convenience function for invoking
 * firstWhereAsyncIterator with an AsyncIterable instead.
 * @param iterable
 * @param predicate
 */
export declare function firstWhereAsyncIterable<T, S extends T>(iterable: AsyncIterable<T>, predicate: (value: T) => value is S): Promise<undefined | S>;
export declare function firstWhereAsyncIterable<T>(iterable: AsyncIterable<T>, predicate: (value: T) => unknown): Promise<undefined | T>;
/**
 * lastAsyncIterator returns the last element emitted from an AsyncIterator.
 * If no element is found, this throws an error.
 *
 * @throws an error when no element is returned from the AsyncIterator.
 */
export declare function lastAsyncIterator<T>(iterator: AsyncIterator<T>): Promise<T>;
export declare function lastAsyncIterable<T>(iterable: AsyncIterable<T>): Promise<T>;
/**
 * expandAsyncIterator is a flatMap function, but operating on Javascript
 * AsyncIterators.
 */
export declare function expandAsyncIterator<T, U>(iterator: AsyncIterator<T>, expander: (t: T) => AsyncIterable<U>): AsyncGenerator<Awaited<U>, void, any>;
/**
 * expandAsyncIterable is a convenience function for invoking
 * expandAsyncIterator with an AsyncIterable instead.
 */
export declare function expandAsyncIterable<T, U>(it: AsyncIterable<T>, fn: (t: T) => AsyncIterable<U>): AsyncGenerator<Awaited<U>, void, any>;
/**
 * iotaAsync represents a sequence of integers that adhere to the sequence
 * {0, 1, ..., n-2, n-1}.
 * Each entry is resolved asynchronously.
 *
 * @param count the number to bound the ending of the sequence.
 */
export declare function iotaAsync(count: number): AsyncGenerator<number>;
/**
 * foldRAsyncIterator is a foldR function that can be applied to an
 * AsyncIterator.
 */
export declare function foldRAsyncIterator<T, U>(combiner: (acc: U, element: T) => Promise<U>, seed: Promise<U>, list: AsyncIterator<T>): Promise<U>;
export declare function reverseAsyncIterator<T>(iterator: AsyncIterator<T>): AsyncGenerator<T>;
export declare function reverseAsyncIterable<T>(iterable: AsyncIterable<T>): AsyncGenerator<T>;
export declare function collectAsyncIterator<T>(iterator: AsyncIterator<T>): Promise<T[]>;
export declare function collectAsyncIterable<T>(iterable: AsyncIterable<T>): Promise<T[]>;
/**
 * unimplementedAsyncIterable is an async iterable that just throws an
 * unimplemented error.
 */
export declare function unimplementedAsyncIterable<T>(): AsyncGenerator<T>;
/**
 * emptyAsyncIterable is an async iterable that is empty, so it yields
 * nothing.
 */
export declare function emptyAsyncIterable<T>(): AsyncGenerator<T>;
/**
 * timerAsyncIterable is an async iterable that yields at the given
 * interval in milliseconds.
 */
export declare function timerAsyncIterable(intervalMs: number, emitImmediate?: boolean): AsyncGenerator<Date>;
/**
 * neverAsyncIterable is an async iterable that never yields any values
 * and never completes.
 */
export declare function neverAsyncIterable(): AsyncGenerator<never>;

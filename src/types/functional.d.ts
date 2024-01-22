/**
 * filterIterator is a filter function, but operating on Javascript iterators.
 */
export declare function filterIterator<T>(it: Iterator<T>, fn: (t: T) => boolean): Generator<T>;
/**
 * filterIterable is a convenience function for invoking filterIterator
 * with an Iterable instead.
 */
export declare function filterIterable<T>(it: Iterable<T>, fn: (t: T) => boolean): Generator<T>;
/**
 * mapIterator is a map function, but operating on Javascript iterators.
 */
export declare function mapIterator<T, U>(it: Iterator<T>, fn: (t: T) => U): Generator<U>;
export declare function asyncMapIterator<T, U>(it: AsyncIterator<T>, fn: (t: T) => Promise<U>): AsyncGenerator<U>;
export declare function asyncMapIterable<T, U>(iterable: AsyncIterable<T>, fn: (t: T) => Promise<U>): AsyncGenerator<U>;
/**
 * mapIterable is a convenience function for invoking mapIterator with an
 * Iterable instead.
 */
export declare function mapIterable<T, U>(it: Iterable<T>, fn: (t: T) => U): Generator<U>;
/**
 * takeIterator is a take function, but operating on Javascript iterators.
 */
export declare function takeIterator<T>(it: Iterator<T>, n: number): Generator<T>;
/**
 * takeIterable is a convenience function for invoking takeIterator with
 * an Iterable instead.
 */
export declare function takeIterable<T>(it: Iterable<T>, n: number): Generator<T>;
/**
 * dropIterator is a drop function, but operating on Javascript iterators.
 */
export declare function dropIterator<T>(it: Iterator<T>, n: number): Generator<T>;
/**
 * dropIterable is a convenience function for invoking dropIterator with
 * an Iterable instead.
 */
export declare function dropIterable<T>(it: Iterable<T>, n: number): Generator<T>;
/**
 * firstWhereIterator is a find function, but operating on Javascript iterators.
 */
export declare function firstWhereIterator<T>(it: Iterator<T>, fn: (t: T) => boolean): undefined | T;
/**
 * firstWhereIterable is a convenience function for invoking firstWhereIterator
 * with an Iterable instead.
 */
export declare function firstWhereIterable<T>(it: Iterable<T>, fn: (t: T) => boolean): undefined | T;
export declare function asyncFirstWhereIterator<T>(it: AsyncIterator<T>, fn: (t: T) => boolean): Promise<undefined | T>;
export declare function asyncFirstWhereIterable<T>(it: AsyncIterable<T>, fn: (t: T) => boolean): Promise<undefined | T>;
/**
 * expandIterator is a flatMap function, but operating on Javascript iterators.
 */
export declare function expandIterator<T, U>(it: Iterator<T>, fn: (t: T) => Iterable<U>): Generator<U, void, undefined>;
/**
 * expandIterable is a convenience function for invoking expandIterator with
 * an Iterable instead.
 */
export declare function expandIterable<T, U>(it: Iterable<T>, fn: (t: T) => Iterable<U>): Generator<U, void, undefined>;
export declare function expandAsyncIterator<T, U>(it: AsyncIterator<T>, fn: (t: T) => AsyncIterable<U>): AsyncGenerator<Awaited<U>, void, undefined>;
export declare function expandAsyncIterable<T, U>(it: AsyncIterable<T>, fn: (t: T) => AsyncIterable<U>): AsyncGenerator<Awaited<U>, void, undefined>;
/**
 * compareArrayBuffer is a compare function for ArrayBuffers.
 */
export declare function compareArrayBuffer(a: ArrayBuffer, b: ArrayBuffer): number;
/**
 * compareNumberArray is a compare function for number arrays.
 */
export declare function compareNumberArray(a: number[], b: number[]): number;

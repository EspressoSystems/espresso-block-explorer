export enum CircularBufferPutResult {
  success,
  full,
  failed,
}

/**
 * CircularBuffer is a simple buffer with a fixed size that allows for quick
 * FIFO reads and writes.
 *
 * We don't define the behavior for when the buffer is full.  It is equally
 * valid to ignore new writes, or to overwrite the oldest value.
 */
export interface CircularBuffer<T> extends Iterable<T> {
  // put attempts to insert the given value into the CircularBuffer.
  put(value: T): CircularBufferPutResult;

  // get attempts to retrieve the oldest value from the CircularBuffer.
  get(): T | undefined | null;

  get length(): number;

  get maxSize(): number;
}

/**
 * CircularBufferDetermineNextIndexBehavior is a behavior that can be used
 * to determine the next index given an index for a CircularBuffer.
 *
 * We define this so that we are able to replace this behavior if needed.
 */
export interface CircularBufferDetermineNextIndexBehavior {
  nextIndex(index: number): number;
}

/**
 * CircularBufferGetFromEmptyBehavior is a behavior that can be used to make
 * decisions about what to do when a call to `get` is made on a
 * `CircularBuffer`, yet the `CircularBuffer` is empty.
 *
 * This allows the behavior to be changed by replacing only this logic.
 */
export interface CircularBufferGetFromEmptyBehavior<T> {
  getFromEmpty(buffer: CircularBuffer<T>): null | undefined;
}

/**
 * CircularBufferPutIntoFullBehavior is a behavior that can be used to make
 * decisions about what to do when a call to `put` is made on a
 * `CircularBuffer` that is full.
 */
export interface CircularBufferPutIntoFullBehavior<T> {
  putToFull(buffer: CircularBuffer<T>, value: T): CircularBufferPutResult;
}

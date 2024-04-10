import { assert } from '../../assert/assert';

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
  get(): T | undefined;

  get length(): number;

  get maxSize(): number;
}

/**
 * CircularBufferDetermineNextIndexBehavior is a behavior that can be used
 * to determine the next index given an index for a CircularBuffer.
 *
 * We define this so that we are able to replace this behavior if needed.
 */
interface CircularBufferDetermineNextIndexBehavior {
  nextIndex(index: number): number;
}

/**
 * SlowNextIndexBehavior is a simple implementation of the
 * CircularBufferDetermineNextIndexBehavior interface which uses the modulo
 * operator to calculate the next index given a previous index.
 */
class SlowNextIndexBehavior
  implements CircularBufferDetermineNextIndexBehavior
{
  private maxSize: number;

  constructor(maxSize: number) {
    assert(!Number.isNaN(maxSize), 'maxSize must not be NaN');
    assert(Number.isInteger(maxSize), 'maxSize must be an integer');
    assert(maxSize > 0, 'maxSize must be greater than 0');
    this.maxSize = maxSize;
  }

  nextIndex(index: number): number {
    assert(index >= 0, 'index must be greater than or equal to 0');
    return (index + 1) % this.maxSize;
  }
}

/**
 * PowerOfTwoBehavior is an optimized implementation of the
 * CircularBufferDetermineNextIndexBehavior interface when the size of the
 * buffer is a power of two.
 */
class PowerOfTwoBehavior implements CircularBufferDetermineNextIndexBehavior {
  private preComputedSizeMinus1: number;

  constructor(maxSize: number) {
    assert(!Number.isNaN(maxSize), 'maxSize must not be NaN');
    assert(Number.isInteger(maxSize), 'maxSize must be an integer');
    assert(maxSize > 0, 'maxSize must be greater than 0');
    assert(isPowerOfTwo(maxSize), 'maxSize must be a power of two');
    this.preComputedSizeMinus1 = maxSize - 1;
  }

  nextIndex(index: number): number {
    assert(index >= 0, 'index must be greater than or equal to 0');
    return (index + 1) & this.preComputedSizeMinus1;
  }
}

/**
 * CircularBufferGetFromEmptyBehavior is a behavior that can be used to make
 * decisions about what to do when a call to `get` is made on a
 * `CircularBuffer`, yet the `CircularBuffer` is empty.
 *
 * This allows the behavior to be changed by replacing only this logic.
 */
export interface CircularBufferGetFromEmptyBehavior<T> {
  getFromEmpty(buffer: CircularBuffer<T>): undefined;
}

/**
 * ReturnUndefinedOnEmptyBehavior is an implementation of
 * CircularBufferGetFromEmptyBehavior that favors returning `undefined` when
 * an attempt to `get` from an `empty` `CircularBuffer` is made.
 *
 * This seems like a reasonable default behavior.
 */
class ReturnUndefinedOnEmptyBehavior
  implements CircularBufferGetFromEmptyBehavior<unknown>
{
  getFromEmpty(): undefined {
    return undefined;
  }
}

/**
 * ThrowMissingElementOnEmptyBehavior is an implementation of
 * CircularBufferGetFromEmptyBehavior that favors throwing an error when an
 * attempt to `get` from an `empty` `CircularBuffer` is made.
 *
 * This is an alternative to the default behavior.
 */
class ThrowMissingElementOnEmptyBehavior
  implements CircularBufferGetFromEmptyBehavior<unknown>
{
  getFromEmpty(): never {
    throw new Error('Missing element');
  }
}

/**
 * CircularBufferGetFromEmptyBehaviors a collection of the behaviors that
 * can be utilized with the `CircularBuffer`.
 */
export const CircularBufferGetFromEmptyBehaviors: Record<
  'returnUndefined' | 'throwMissingElement',
  CircularBufferGetFromEmptyBehavior<unknown>
> = {
  returnUndefined: new ReturnUndefinedOnEmptyBehavior(),
  throwMissingElement: new ThrowMissingElementOnEmptyBehavior(),
};

/**
 * CircularBufferPutIntoFullBehavior is a behavior that can be used to make
 * decisions about what to do when a call to `put` is made on a
 * `CircularBuffer` that is full.
 */
export interface CircularBufferPutIntoFullBehavior<T> {
  putToFull(buffer: CircularBuffer<T>, value: T): CircularBufferPutResult;
}

/**
 * OverwriteOldestOnFullBehavior is an implementation of
 * CircularBufferPutIntoFullBehavior that favors overwriting the oldest value
 * when a `put` is made on a `full` `CircularBuffer`.
 *
 * This seems like a reasonable default behavior.
 */
class OverwriteOldestOnFullBehavior<T>
  implements CircularBufferPutIntoFullBehavior<T>
{
  putToFull(buffer: CircularBuffer<T>, value: T): CircularBufferPutResult {
    buffer.get();
    return buffer.put(value);
  }
}

/**
 * ReturnFullOnFullBehavior is an implementation of
 * CircularBufferPutIntoFullBehavior that favors returning `full` when a `put`
 * is made on a `full` `CircularBuffer`.
 *
 * This is an alternative to the default behavior, that is also reasonable.
 */
class ReturnFullOnFullBehavior
  implements CircularBufferPutIntoFullBehavior<unknown>
{
  putToFull(): CircularBufferPutResult {
    return CircularBufferPutResult.full;
  }
}

/**
 * ThrowOnFullBehavior is an implementation of
 * CircularBufferPutIntoFullBehavior that favors throwing an error when a `put`
 * is made on a `full` `CircularBuffer`.
 *
 * This is an alternative to the default behavior.
 */
class ThrowOnFullBehavior
  implements CircularBufferPutIntoFullBehavior<unknown>
{
  putToFull(): never {
    throw new Error('buffer full');
  }
}

/**
 * CircularBufferPutIntoFullBehaviors a collection of the behaviors that
 * can be utilized with the `CircularBuffer`.
 */
export const CircularBufferPutIntoFullBehaviors: Record<
  'overwriteOldest' | 'returnFull' | 'throw',
  CircularBufferPutIntoFullBehavior<unknown>
> = {
  overwriteOldest: new OverwriteOldestOnFullBehavior(),
  returnFull: new ReturnFullOnFullBehavior(),
  throw: new ThrowOnFullBehavior(),
};

/**
 * RingBufferBase is a base implementation of a RingBuffer with no assumptions
 * made about the size of the ring buffer itself.
 *
 * As such, when calculating the next index, it will use the modulo operator
 * which can be slow.  If you know that the size of the ring buffer is a power
 * of 2, then the nextIndex can be computed much more quickly.
 */
class RingBufferBase<T> implements CircularBuffer<T> {
  private readIndex: number = 0;
  private writeIndex: number = 0;
  private buffer: T[];
  private nextIndex: CircularBufferDetermineNextIndexBehavior;
  private getOnEmpty: CircularBufferGetFromEmptyBehavior<T | unknown>;
  private putOnFull: CircularBufferPutIntoFullBehavior<T | unknown>;

  constructor(
    maxSize: number,
    getOnEmptyBehavior: CircularBufferGetFromEmptyBehavior<T | unknown>,
    putOnFullBehavior: CircularBufferPutIntoFullBehavior<T | unknown>,
  ) {
    assert(!Number.isNaN(maxSize), 'maxSize must not be NaN');
    this.buffer = new Array(maxSize);

    // Indexing
    if (isPowerOfTwo(maxSize)) {
      this.nextIndex = new PowerOfTwoBehavior(maxSize);
    } else {
      this.nextIndex = new SlowNextIndexBehavior(maxSize);
    }

    this.getOnEmpty = getOnEmptyBehavior;
    this.putOnFull = putOnFullBehavior;
  }

  get maxSize(): number {
    return this.buffer.length;
  }

  get length(): number {
    if (this.writeIndex < this.readIndex) {
      return this.writeIndex + this.maxSize - this.readIndex;
    }

    return this.writeIndex - this.readIndex;
  }

  put(value: T): CircularBufferPutResult {
    const nextIndex = this.nextIndex.nextIndex(this.writeIndex);
    if (nextIndex === this.readIndex) {
      return this.putOnFull.putToFull(this, value);
    }

    this.buffer[this.writeIndex] = value;
    this.writeIndex = nextIndex;
    return CircularBufferPutResult.success;
  }

  get(): T | undefined {
    if (this.readIndex === this.writeIndex) {
      return this.getOnEmpty.getFromEmpty(this);
    }

    const value = this.buffer[this.readIndex];
    this.readIndex = this.nextIndex.nextIndex(this.readIndex);
    return value;
  }

  [Symbol.iterator](): Iterator<T> {
    return {
      next: () => {
        const value = this.get();
        if (value === undefined) {
          return { value: undefined, done: true };
        }

        return { value, done: false };
      },
    };
  }
}

/**
 * isPowerOfTwo is a function that checks if the given value is a power of two
 * or not.
 */
function isPowerOfTwo(value: number): boolean {
  return (value & (value - 1)) === 0;
}

/**
 * createCircularBuffer will create a new Circular with the given maximum size.
 * if the size is omitted the default of 32 will be used instead.
 * @returns {CircularBuffer<T>} the new CircularBuffer with the given size.
 */
export function createCircularBuffer<T>(
  size: number = 32,
  getOnEmptyBehavior: CircularBufferGetFromEmptyBehavior<
    T | unknown
  > = CircularBufferGetFromEmptyBehaviors.returnUndefined,
  putOnFullBehavior: CircularBufferPutIntoFullBehavior<
    T | unknown
  > = CircularBufferPutIntoFullBehaviors.overwriteOldest,
): CircularBuffer<T> {
  return new RingBufferBase(size, getOnEmptyBehavior, putOnFullBehavior);
}

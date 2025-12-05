import { assert } from '../../assert/assert';
import { CircularBufferGetFromEmptyBehaviors } from './get_empty';
import {
  PowerOfTwoBehavior,
  SlowNextIndexBehavior,
  isPowerOfTwo,
} from './next_index';
import { CircularBufferPutIntoFullBehaviors } from './put_full';
import {
  CircularBuffer,
  CircularBufferDetermineNextIndexBehavior,
  CircularBufferGetFromEmptyBehavior,
  CircularBufferPutIntoFullBehavior,
  CircularBufferPutResult,
} from './types';

export {
  CircularBufferGetFromEmptyBehaviors,
  CircularBufferPutIntoFullBehaviors,
  CircularBufferPutResult,
};
export type {
  CircularBuffer,
  CircularBufferGetFromEmptyBehavior,
  CircularBufferPutIntoFullBehavior,
};

/**
 * determineNextIndexFunction is a helper function for determining which
 * next index strategy to utilize.
 */
function determineNextIndexFunction(
  maxSize: number,
): CircularBufferDetermineNextIndexBehavior {
  if (isPowerOfTwo(maxSize)) {
    return new PowerOfTwoBehavior(maxSize);
  }

  return new SlowNextIndexBehavior(maxSize);
}

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
    this.nextIndex = determineNextIndexFunction(maxSize);
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

  get(): T | undefined | null {
    if (this.readIndex === this.writeIndex) {
      return this.getOnEmpty.getFromEmpty(this);
    }

    const value = this.buffer[this.readIndex];
    this.readIndex = this.nextIndex.nextIndex(this.readIndex);
    return value;
  }

  [Symbol.iterator](): Iterator<T> {
    return new RingBufferMutableIterator(this);
  }

  immutableIterable(): Iterable<T> {
    return {
      [Symbol.iterator]: () => this.immutableIterator(),
    };
  }

  immutableIterator(): Iterator<T> {
    return new RingBufferImmutableIterator(
      this.readIndex,
      this.writeIndex,
      this.buffer,
      this.nextIndex,
    );
  }
}

/**
 * RingBufferMutableIterator is an iterator that will iterate over the
 * RingBufferBase in a mutable fashion.  It will consume the buffer as it
 * iterates over it.
 */
class RingBufferMutableIterator<T> implements Iterator<T> {
  private readonly buffer: RingBufferBase<T>;
  constructor(buffer: RingBufferBase<T>) {
    this.buffer = buffer;
  }

  next(): IteratorResult<T> {
    const value = this.buffer.get();
    if (value === undefined || value === null) {
      return { value: undefined, done: true };
    }

    return { value, done: false };
  }
}

/**
 * RingBufferImmutableIterator is an iterator that will iterate over the
 * contents of the RingBufferBase in an immutable fashion.
 */
class RingBufferImmutableIterator<T> implements Iterator<T> {
  private readIndex: number;
  private writeIndex: number;
  private readonly buffer: T[];
  private nextIndex: CircularBufferDetermineNextIndexBehavior;

  constructor(
    readIndex: number,
    writeIndex: number,
    buffer: T[],
    nextIndex: CircularBufferDetermineNextIndexBehavior,
  ) {
    this.readIndex = readIndex;
    this.writeIndex = writeIndex;
    this.buffer = buffer;
    this.nextIndex = nextIndex;
  }

  next(): IteratorResult<T> {
    if (this.readIndex === this.writeIndex) {
      return { value: undefined, done: true };
    }

    const value = this.buffer[this.readIndex];
    this.readIndex = this.nextIndex.nextIndex(this.readIndex);
    return { value, done: false };
  }
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

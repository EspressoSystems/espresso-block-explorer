import { assert } from '../../assert/assert';
import {
  CircularBuffer,
  CircularBufferDetermineNextIndexBehavior,
  CircularBufferGetFromEmptyBehavior,
  CircularBufferPutIntoFullBehavior,
  CircularBufferPutResult,
} from './types';

export { CircularBufferPutResult };
export type {
  CircularBuffer,
  CircularBufferGetFromEmptyBehavior,
  CircularBufferPutIntoFullBehavior,
};

/**
 * SlowNextIndexBehavior is a simple implementation of the
 * CircularBufferDetermineNextIndexBehavior interface which uses the modulo
 * operator to calculate the next index given a previous index.
 */
export class SlowNextIndexBehavior implements CircularBufferDetermineNextIndexBehavior {
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
export class PowerOfTwoBehavior implements CircularBufferDetermineNextIndexBehavior {
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
 * isPowerOfTwo is a function that checks if the given value is a power of two
 * or not.
 */
export function isPowerOfTwo(value: number): boolean {
  return (value & (value - 1)) === 0;
}

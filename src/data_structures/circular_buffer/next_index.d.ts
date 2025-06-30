import { CircularBuffer, CircularBufferDetermineNextIndexBehavior, CircularBufferGetFromEmptyBehavior, CircularBufferPutIntoFullBehavior, CircularBufferPutResult } from './types';
export { CircularBufferPutResult };
export type { CircularBuffer, CircularBufferGetFromEmptyBehavior, CircularBufferPutIntoFullBehavior, };
/**
 * SlowNextIndexBehavior is a simple implementation of the
 * CircularBufferDetermineNextIndexBehavior interface which uses the modulo
 * operator to calculate the next index given a previous index.
 */
export declare class SlowNextIndexBehavior implements CircularBufferDetermineNextIndexBehavior {
    private maxSize;
    constructor(maxSize: number);
    nextIndex(index: number): number;
}
/**
 * PowerOfTwoBehavior is an optimized implementation of the
 * CircularBufferDetermineNextIndexBehavior interface when the size of the
 * buffer is a power of two.
 */
export declare class PowerOfTwoBehavior implements CircularBufferDetermineNextIndexBehavior {
    private preComputedSizeMinus1;
    constructor(maxSize: number);
    nextIndex(index: number): number;
}
/**
 * isPowerOfTwo is a function that checks if the given value is a power of two
 * or not.
 */
export declare function isPowerOfTwo(value: number): boolean;

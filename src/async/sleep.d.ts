/**
 * sleep for a given number of milliseconds. This works with the setTimeout
 * function, and as such it means that the maximum number of milliseconds
 * that can be slept for is strictly limited by the maximum value of a 32-bit
 * signed integer.
 */
export declare function sleep(ms: number): Promise<void>;

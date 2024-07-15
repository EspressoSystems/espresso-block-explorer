import { CircularBufferGetFromEmptyBehaviors } from './get_empty';
import { CircularBufferPutIntoFullBehaviors } from './put_full';
import { CircularBuffer, CircularBufferGetFromEmptyBehavior, CircularBufferPutIntoFullBehavior, CircularBufferPutResult } from './types';

export { CircularBufferGetFromEmptyBehaviors, CircularBufferPutIntoFullBehaviors, CircularBufferPutResult, };
export type { CircularBuffer, CircularBufferGetFromEmptyBehavior, CircularBufferPutIntoFullBehavior, };
/**
 * createCircularBuffer will create a new Circular with the given maximum size.
 * if the size is omitted the default of 32 will be used instead.
 * @returns {CircularBuffer<T>} the new CircularBuffer with the given size.
 */
export declare function createCircularBuffer<T>(size?: number, getOnEmptyBehavior?: CircularBufferGetFromEmptyBehavior<T | unknown>, putOnFullBehavior?: CircularBufferPutIntoFullBehavior<T | unknown>): CircularBuffer<T>;

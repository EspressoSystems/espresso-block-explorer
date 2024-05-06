import { CircularBuffer, CircularBufferGetFromEmptyBehavior, CircularBufferPutIntoFullBehavior, CircularBufferPutResult } from './types';

export { CircularBufferPutResult };
export type { CircularBuffer, CircularBufferGetFromEmptyBehavior, CircularBufferPutIntoFullBehavior, };
/**
 * CircularBufferGetFromEmptyBehaviors a collection of the behaviors that
 * can be utilized with the `CircularBuffer`.
 */
export declare const CircularBufferGetFromEmptyBehaviors: Record<'returnNull' | 'returnUndefined' | 'throwMissingElement', CircularBufferGetFromEmptyBehavior<unknown>>;

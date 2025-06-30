import { CircularBufferGetFromEmptyBehaviors } from './get_empty';
import { CircularBuffer, CircularBufferGetFromEmptyBehavior, CircularBufferPutIntoFullBehavior, CircularBufferPutResult } from './types';
export { CircularBufferGetFromEmptyBehaviors, CircularBufferPutResult };
export type { CircularBuffer, CircularBufferGetFromEmptyBehavior, CircularBufferPutIntoFullBehavior, };
/**
 * CircularBufferPutIntoFullBehaviors a collection of the behaviors that
 * can be utilized with the `CircularBuffer`.
 */
export declare const CircularBufferPutIntoFullBehaviors: Record<'overwriteOldest' | 'returnFull' | 'throw', CircularBufferPutIntoFullBehavior<unknown>>;

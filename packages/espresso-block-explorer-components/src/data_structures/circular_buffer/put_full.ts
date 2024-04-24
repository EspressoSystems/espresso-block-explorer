import BufferFullError from '../../errors/BufferFullError';
import { CircularBufferGetFromEmptyBehaviors } from './get_empty';
import {
  CircularBuffer,
  CircularBufferGetFromEmptyBehavior,
  CircularBufferPutIntoFullBehavior,
  CircularBufferPutResult,
} from './types';

export { CircularBufferGetFromEmptyBehaviors, CircularBufferPutResult };
export type {
  CircularBuffer,
  CircularBufferGetFromEmptyBehavior,
  CircularBufferPutIntoFullBehavior,
};

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
    throw new BufferFullError();
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

import { MissingElementError } from '../../errors';
import {
  CircularBuffer,
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
 * ReturnUndefinedOnEmptyBehavior is an implementation of
 * CircularBufferGetFromEmptyBehavior that favors returning `undefined` when
 * an attempt to `get` from an `empty` `CircularBuffer` is made.
 *
 * This seems like a reasonable default behavior.
 */
class ReturnUndefinedOnEmptyBehavior implements CircularBufferGetFromEmptyBehavior<unknown> {
  getFromEmpty(): undefined {}
}

/**
 * ReturnNullOnEmptyBehavior is an implementation of
 * CircularBufferGetFromEmptyBehavior that favors returning `undefined` when
 * an attempt to `get` from an `empty` `CircularBuffer` is made.
 *
 * This seems like a reasonable default behavior.
 */
class ReturnNullOnEmptyBehavior implements CircularBufferGetFromEmptyBehavior<unknown> {
  getFromEmpty(): null {
    return null;
  }
}

/**
 * ThrowMissingElementOnEmptyBehavior is an implementation of
 * CircularBufferGetFromEmptyBehavior that favors throwing an error when an
 * attempt to `get` from an `empty` `CircularBuffer` is made.
 *
 * This is an alternative to the default behavior.
 */
class ThrowMissingElementOnEmptyBehavior implements CircularBufferGetFromEmptyBehavior<unknown> {
  getFromEmpty(): never {
    throw new MissingElementError();
  }
}

/**
 * CircularBufferGetFromEmptyBehaviors a collection of the behaviors that
 * can be utilized with the `CircularBuffer`.
 */
export const CircularBufferGetFromEmptyBehaviors: Record<
  'returnNull' | 'returnUndefined' | 'throwMissingElement',
  CircularBufferGetFromEmptyBehavior<unknown>
> = {
  returnNull: new ReturnNullOnEmptyBehavior(),
  returnUndefined: new ReturnUndefinedOnEmptyBehavior(),
  throwMissingElement: new ThrowMissingElementOnEmptyBehavior(),
};

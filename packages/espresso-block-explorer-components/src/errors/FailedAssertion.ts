import BaseError from './BaseError';

/**
 * FailedAssertion is an error that indicates that an assertion failed. This
 * error is meant to be thrown when a condition that should be true is not.
 * This error is a utility error that assists in pin-pointing failed assumptions
 * in the code.  With a debugger attached to the process, it will pause
 * execution when thrown for inspection.
 */
export class FailedAssertion extends BaseError {
  constructor(message: string = 'assertion failed') {
    super(message);
    // eslint-disable-next-line no-debugger
    debugger;
  }
}

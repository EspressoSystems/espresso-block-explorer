import BaseError from './BaseError';

/**
 * Unimplemented is an error that indicates the logic for this code has not
 * yet been implemented.  It is meant to be a placeholder error.
 */
export default class UnimplementedError extends BaseError {
  constructor(message: string = 'unimplemented') {
    super(message);
    Object.freeze(this);
    // eslint-disable-next-line no-debugger
    debugger;
  }
}

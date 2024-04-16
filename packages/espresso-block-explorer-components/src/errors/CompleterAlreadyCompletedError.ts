import BaseError from './BaseError';

/**
 * CompleterAlreadyCompletedError is an error that is thrown when a completer
 * has already been completed, and is attempted to be completed again.
 */
export class CompleterAlreadyCompletedError extends BaseError {
  constructor(message: string = 'completer has already been completed') {
    super(message);
  }
}

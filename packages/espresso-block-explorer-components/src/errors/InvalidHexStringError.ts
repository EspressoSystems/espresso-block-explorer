import BaseError from './BaseError';

/**
 * InvalidHexStringError is an error that indicates that the hex string provided
 * is invalid as it doesn't meet the requirements of a hex encoded string.
 */
export default class InvalidHexStringError extends BaseError {
  constructor(message: string = 'invalid hex string') {
    super(message);
    Object.freeze(this);
  }
}

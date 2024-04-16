import BaseError from './BaseError';

/**
 * IncorrectBase64PaddingError is an error that indicates that the padding
 * provided is not correct.
 */
export class IncorrectBase64PaddingError extends BaseError {
  constructor(message: string = 'incorrect padding') {
    super(message);
    Object.freeze(this);
  }
}

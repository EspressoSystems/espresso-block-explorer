import BaseError from './BaseError';

/**
 * MissingElementError is an error that indicates that a member of a collection
 * was not present.  This generally occurs when the collection lacks the
 * necessary number of elements.
 */
export default class MissingElementError extends BaseError {
  constructor(message: string = 'missing element') {
    super(message);
    Object.freeze(this);
  }
}

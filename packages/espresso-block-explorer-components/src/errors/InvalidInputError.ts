import BaseError from './BaseError';

export default class InvalidInputError extends BaseError {
  constructor(message = 'invalid input') {
    super(message);
  }
}

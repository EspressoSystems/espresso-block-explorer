import BaseError from './BaseError';

export default class NoURLProvidedError extends BaseError {
  constructor(message: string = 'no url provided') {
    super(message);
  }
}

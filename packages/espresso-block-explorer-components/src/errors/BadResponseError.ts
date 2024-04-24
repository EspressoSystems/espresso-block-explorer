import BaseError from './BaseError';

/**
 * BadResponseError is a custom error that indicates that the result of a fetch
 * request was a Response that indicates a non-success.
 */
export default class BadResponseError extends BaseError {
  readonly response: Response;

  constructor(response: Response, message: string = 'bad server response') {
    super(message);
    this.response = response;
  }

  toJSON() {
    return {
      ...super.toJSON(),
      status: this.response.status,
    };
  }
}

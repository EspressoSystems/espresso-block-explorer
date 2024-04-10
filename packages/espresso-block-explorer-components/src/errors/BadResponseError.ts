/**
 * BadResponseError is a custom error that indicates that the result of a fetch
 * request was a Response that indicates a non-success.
 */
export default class BadResponseError extends Error {
  readonly response: Response;

  constructor(response: Response, message: string = 'bad server response') {
    super(message);
    this.response = response;
    Object.freeze(this);
  }

  toJSON() {
    return {
      name: BadResponseError.name,
      status: this.response.status,
      message: this.message,
    };
  }
}

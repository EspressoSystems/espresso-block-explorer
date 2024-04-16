import BadResponseError from './BadResponseError';

/**
 * BadResponseClientError is a more specific BadResponse error that indicates
 * the nature of the failure was due to a client submission error.
 */
export default class ResponseContentTypeIsNotApplicationJSONError extends BadResponseError {
  get haveHeaderType(): string {
    return this.response.headers.get('content-type') ?? 'undefined';
  }

  constructor(
    response: Response,
    message: string = 'response content type is not application/json',
  ) {
    super(response, message);
  }

  toJSON() {
    return {
      ...super.toJSON(),
      have: this.haveHeaderType,
      want: 'application/json',
    };
  }
}

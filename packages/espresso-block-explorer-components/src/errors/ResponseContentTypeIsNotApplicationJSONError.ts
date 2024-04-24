import BadResponseError from './BadResponseError';

/**
 * BadResponseClientError is a more specific BadResponse error that indicates
 * the nature of the failure was due to a client submission error.
 */
export default class ResponseContentTypeIsNotApplicationJSONError extends BadResponseError {
  private haveHeaderType: string;

  constructor(
    haveHeaderType: string,
    response: Response,
    message: string = 'response content type is not application/json',
  ) {
    super(response, message);
    this.haveHeaderType = haveHeaderType;
  }

  static fromResponse(
    response: Response,
    message?: string,
  ): ResponseContentTypeIsNotApplicationJSONError {
    return new ResponseContentTypeIsNotApplicationJSONError(
      response.headers.get('content-type') ?? 'undefined',
      response,
      message,
    );
  }

  toJSON() {
    return {
      ...super.toJSON(),
      have: this.haveHeaderType,
      want: 'application/json',
    };
  }
}

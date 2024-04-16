import BadResponseError from './BadResponseError';

/**
 * BadResponseServerError is a more specific BadResponse error that indicates
 * the nature of the failure was due to an error occurring on the server side.
 */
export default class BadResponseClientError extends BadResponseError {
  constructor(
    response: Response,
    message: string = 'bad sever response: client error',
  ) {
    super(response, message);
  }
}

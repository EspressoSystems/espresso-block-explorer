import { Converter } from '@/convert/codec/convert';
import BadResponseClientError from '@/errors/BadResponseClientError';
import BadResponseError from '@/errors/BadResponseError';
import BadResponseServerError from '@/errors/BadResponseServerError';
import BaseError from '@/errors/BaseError';
import ResponseContentTypeIsNotApplicationJSONError from '@/errors/ResponseContentTypeIsNotApplicationJSONError';

/**
 * validateAndExpandResponse is a function that takes a [Converter] and returns
 * a response that should be decoded and inflated by the given [Converter].
 *
 * Before attempting to decode the response, checks are performed to ensure that
 * the response is valid, and if the returned content-type is in face JSON.
 */
export function validateAndExpandResponse<A, E>(
  successConverter: Converter<unknown, A>,
  errorConverter?: Converter<unknown, E> | undefined,
) {
  return async (response: Response): Promise<A> => {
    await validateResponseIsOk(response, errorConverter);
    validateResponseIsJSON(response);
    return successConverter.convert(await response.json());
  };
}

/**
 * validateResponseIsOk checks if the response is 'ok', and if not will throw
 * an error.
 *
 * If the status code reflects a client class of error [400, 499], then a
 * BadResponseClientError will be thrown.
 *
 * If the status code reflects a server class of error [500, 599], then a
 * BadResponseServerError will be thrown.
 *
 * Otherwise, a BadResponseError will be thrown.
 *
 * All errors thrown at this point will be a subclass of BadResponseError, and
 * will contains the response object that caused the error.
 */
export async function validateResponseIsOk<E>(
  response: Response,
  errorConverter?: undefined | Converter<unknown, E>,
): Promise<void> {
  if (response.ok) {
    // Everything is just fine
    return;
  }

  if (response.status >= 500 && response.status < 600) {
    try {
      validateResponseIsJSON(response);

      if (errorConverter !== undefined) {
        const json = await response.json();
        const decoded = errorConverter.convert(json);
        throw decoded;
      }
    } catch (error) {
      // This indicates that the response is not JSON, and we don't really know
      // what it is.
      if (error instanceof BaseError) {
        // Check to ensure that this is an error we understand, and if it is
        // forward it up
        throw error;
      }

      console.error(
        'encountered an error attempting to decode a server error from the server',
        error,
      );
    }

    throw new BadResponseServerError(response.status, response);
  }

  if (response.status >= 400 && response.status < 500) {
    try {
      validateResponseIsJSON(response);

      if (errorConverter !== undefined) {
        const json = await response.json();
        const decoded = errorConverter.convert(json);
        throw decoded;
      }
    } catch (error) {
      // This indicates that the response is not JSON, and we don't really know
      if (error instanceof BaseError) {
        // Check to ensure that this is an error we understand, and if it is
        // forward it up
        throw error;
      }

      console.error(
        'encountered an error attempting to decode a client error from the server',
        error,
      );
    }

    throw new BadResponseClientError(response.status, response);
  }

  throw new BadResponseError(response.status, response);
}

/**
 * validateResponseIsJSON checks if the response has a 'Content-Type' header
 * starting with 'application/json', and if not will throw a
 * ResponseContentTypeIsNotApplicationJSONError.
 *
 * All errors thrown at this point will be a subclass of BadResponseError, and
 * will contains the response object that caused the error.
 */
export function validateResponseIsJSON(response: Response): void {
  const contentType = response.headers.get('content-type');

  if (!contentType || !contentType.startsWith('application/json')) {
    throw ResponseContentTypeIsNotApplicationJSONError.fromResponse(
      response,
      contentType || 'undefined',
    );
  }
}

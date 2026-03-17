import BadResponseClientError from '@/errors/bad_response_client_error';
import BadResponseError from '@/errors/bad_response_error';
import BadResponseServerError from '@/errors/bad_response_server_error';
import BaseError from '@/errors/base_error';
import FetchError from '@/errors/fetch_error';

/**
 * extendedFetch is a wrapper around the fetch function that throws an error
 * when the response isn't ok.
 */
export const extendedFetch: typeof fetch = async (
  input: unknown,
  init?: unknown,
) => {
  try {
    const response = await fetch(
      input as RequestInfo | URL,
      init as RequestInit,
    );

    if (response.status >= 500 && response.status < 600) {
      throw new BadResponseServerError(response.status, response);
    }

    if (response.status >= 400 && response.status < 500) {
      throw new BadResponseClientError(response.status, response);
    }

    if (!response.ok) {
      throw new BadResponseError(response.status, response);
    }

    return response;
  } catch (error) {
    if (error instanceof BaseError) {
      throw error;
    }

    throw new FetchError(error);
  }
};

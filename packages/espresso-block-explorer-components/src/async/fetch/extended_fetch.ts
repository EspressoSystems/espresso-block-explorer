import { BadResponseClientError } from '@/errors/bad_response_client_error';
import { BadResponseError } from '@/errors/bad_response_error';
import { BadResponseServerError } from '@/errors/bad_response_server_error';
import { BaseError } from '@/errors/base_error';
import { FetchError } from '@/errors/fetch_error';

/**
 * createExtendedFetch is a function that creates a wrapper around the fetch
 * function which throws errors when the response is not `ok`.  It will also
 * wrap any error encountered while calling the given `fetchFn` with a
 * `FetchError`, for easier detection (should it not be a better class of
 * error already)
 */
export const createExtendedFetch = (
  fetchFn: typeof fetch = fetch,
): typeof fetch => {
  return async (
    input: Parameters<typeof fetch>[0],
    init?: Parameters<typeof fetch>[1],
  ) => {
    try {
      const response = await fetchFn(input, init);

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
};

import { Converter } from '../../convert/codec/convert';
import BadResponseClientError from '../../errors/BadResponseClientError';
import BadResponseError from '../../errors/BadResponseError';
import BadResponseServerError from '../../errors/BadResponseServerError';

export function validateAndExpandResponse<A>(converter: Converter<unknown, A>) {
  return async (response: Response): Promise<A> => {
    validateResponseIsOk(response);
    validateResponseIsJSON(response);
    return converter.convert(await response.json());
  };
}

export function validateResponseIsOk(response: Response): void {
  if (!response.ok) {
    if (response.status >= 500) {
      throw new BadResponseServerError(response);
    }

    if (response.status >= 400) {
      throw new BadResponseClientError(response);
    }

    throw new BadResponseError(response);
  }
}

export function validateResponseIsJSON(response: Response): void {
  const contentType = response.headers.get('content-type');

  if (!contentType || !contentType.startsWith('application/json')) {
    // Throw an Error here indicating that the server is not returning
    // json
  }
}

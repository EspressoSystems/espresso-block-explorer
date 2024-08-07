import { Converter } from '../../../../../../../../../../src/convert/codec/convert';

/**
 * validateAndExpandResponse is a function that takes a [Converter] and returns
 * a response that should be decoded and inflated by the given [Converter].
 *
 * Before attempting to decode the response, checks are performed to ensure that
 * the response is valid, and if the returned content-type is in face JSON.
 */
export declare function validateAndExpandResponse<A, E>(successConverter: Converter<unknown, A>, errorConverter?: Converter<unknown, E> | undefined): (response: Response) => Promise<A>;
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
export declare function validateResponseIsOk<E>(response: Response, errorConverter?: undefined | Converter<unknown, E>): Promise<void>;
/**
 * validateResponseIsJSON checks if the response has a 'Content-Type' header
 * starting with 'application/json', and if not will throw a
 * ResponseContentTypeIsNotApplicationJSONError.
 *
 * All errors thrown at this point will be a subclass of BadResponseError, and
 * will contains the response object that caused the error.
 */
export declare function validateResponseIsJSON(response: Response): void;

import { Converter, TypeCheckingCodec } from '../../../../../../../../../src/convert/codec/convert';
import { default as BaseError } from './BaseError';
/**
 * FetchError is an error that indicates that a fetch operation has failed.
 * This is notably different from an error due a Server response.  These
 * tend to indicate an error before the HTTP layer is even involved. This
 * class of error accounts for io errors, bad urls, or other user submission
 * failures that prevents the server from being reached.
 */
export default class FetchError extends BaseError {
    cause: unknown;
    constructor(cause: unknown, message?: string);
    get code(): string;
}
declare class FetchErrorCodec extends TypeCheckingCodec<FetchError> {
    readonly encoder: Converter<FetchError, unknown>;
    readonly decoder: Converter<unknown, FetchError>;
}
export declare const bufferFullErrorCodec: FetchErrorCodec;
export {};

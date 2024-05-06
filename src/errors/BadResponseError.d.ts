import { default as BaseBadResponseError } from './BaseBadResponseError';
import { Converter, TypeCheckingCodec } from '../../../../../../../../../src/convert/codec/convert';

/**
 * BadResponseError is a custom error that indicates that the result of a fetch
 * request was a Response that indicates a non-success.
 */
export default class BadResponseError extends BaseBadResponseError {
    constructor(status: number, response: null | Response, message?: string);
    toJSON(): unknown;
}
declare class BadResponseErrorCodec extends TypeCheckingCodec<BadResponseError> {
    readonly encoder: Converter<BadResponseError, unknown>;
    readonly decoder: Converter<unknown, BadResponseError>;
}
export declare const badResponseErrorCodec: BadResponseErrorCodec;
export {};

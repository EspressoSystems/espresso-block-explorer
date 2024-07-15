import { Converter, TypeCheckingCodec } from '../../../../../../../../../src/convert/codec/convert';
import { default as BaseBadResponseError } from './BaseBadResponseError';

/**
 * BadResponseServerError is a more specific BadResponse error that indicates
 * the nature of the failure was due to an error occurring on the server side.
 */
export default class BadResponseServerError extends BaseBadResponseError {
    constructor(status: number, response: null | Response, message?: string);
}
declare class BadResponseServerErrorCodec extends TypeCheckingCodec<BadResponseServerError> {
    readonly encoder: Converter<BadResponseServerError, unknown>;
    readonly decoder: Converter<unknown, BadResponseServerError>;
}
export declare const badResponseServerErrorCodec: BadResponseServerErrorCodec;
export {};

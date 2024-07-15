import { Converter, TypeCheckingCodec } from '../../../../../../../../../src/convert/codec/convert';
import { default as BaseBadResponseError } from './BaseBadResponseError';

/**
 * BadResponseClientError is a more specific BadResponse error that indicates
 * the nature of the failure was due to a client submission error.
 */
export default class BadResponseClientError extends BaseBadResponseError {
    constructor(status: number, response: null | Response, message?: string);
    toJSON(): unknown;
}
declare class BadResponseClientErrorCodec extends TypeCheckingCodec<BadResponseClientError> {
    readonly encoder: Converter<BadResponseClientError, unknown>;
    readonly decoder: Converter<unknown, BadResponseClientError>;
}
export declare const badResponseClientErrorCodec: BadResponseClientErrorCodec;
export {};

import { Converter, TypeCheckingCodec } from '../../../../../../../../../src/convert/codec/convert';
import { default as BaseBadResponseError } from './BaseBadResponseError';

/**
 * BadResponseClientError is a more specific BadResponse error that indicates
 * the nature of the failure was due to a client submission error.
 */
export default class ResponseContentTypeIsNotApplicationJSONError extends BaseBadResponseError {
    readonly haveHeaderType: string;
    constructor(haveHeaderType: string, status: number, response: null | Response, message?: string);
    static fromResponse(response: Response, message?: string): ResponseContentTypeIsNotApplicationJSONError;
    toJSON(): unknown;
    get code(): string;
}
declare class ResponseContentTypeIsNotApplicationJSONErrorCodec extends TypeCheckingCodec<ResponseContentTypeIsNotApplicationJSONError> {
    readonly encoder: Converter<ResponseContentTypeIsNotApplicationJSONError, unknown>;
    readonly decoder: Converter<unknown, ResponseContentTypeIsNotApplicationJSONError>;
}
export declare const responseContentTypeIsNotApplicationJSONErrorCodec: ResponseContentTypeIsNotApplicationJSONErrorCodec;
export {};

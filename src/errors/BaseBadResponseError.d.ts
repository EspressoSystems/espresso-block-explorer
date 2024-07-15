import { Converter } from '../../../../../../../../../src/convert/codec/convert';
import { default as BaseError } from './BaseError';

/**
 * BaseBadResponseError is this base error of all failures due to handling the
 * Response from a `fetch` request.
 *  */
export default abstract class BaseBadResponseError extends BaseError {
    readonly response: null | Response;
    readonly status: number;
    constructor(status: number, response: null | Response, message: string);
    toJSON(): unknown;
}
export declare class BaseBadResponseErrorEncoder implements Converter<BaseBadResponseError> {
    convert(input: BaseBadResponseError): {
        readonly status: number;
        readonly code: string;
        readonly message: string;
    };
}
export declare const baseBadResponseErrorEncoder: BaseBadResponseErrorEncoder;

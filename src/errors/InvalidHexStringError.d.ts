import { Converter, TypeCheckingCodec } from '../../../../../../../../../src/convert/codec/convert';
import { default as BaseError } from './BaseError';

/**
 * InvalidHexStringError is an error that indicates that the hex string provided
 * is invalid as it doesn't meet the requirements of a hex encoded string.
 */
export default class InvalidHexStringError extends BaseError {
    constructor(message?: string);
    get code(): string;
}
declare class InvalidHexStringErrorCodec extends TypeCheckingCodec<InvalidHexStringError> {
    readonly encoder: Converter<InvalidHexStringError, unknown>;
    readonly decoder: Converter<unknown, InvalidHexStringError>;
}
export declare const invalidHexStringErrorCodec: InvalidHexStringErrorCodec;
export {};

import { default as BaseError } from './BaseError';
import { Converter, TypeCheckingCodec } from '../../../../../../../../../src/convert/codec/convert';

/**
 * InvalidHexValueError is an error that indicates that the encountered value
 * isn't valid for a hex representation.
 */
export declare class InvalidHexValueError extends BaseError {
    readonly value: number;
    constructor(value: number, message?: string);
    toJSON(): unknown;
}
declare class InvalidHexValueErrorCodec extends TypeCheckingCodec<InvalidHexValueError> {
    readonly encoder: Converter<InvalidHexValueError, unknown>;
    readonly decoder: Converter<unknown, InvalidHexValueError>;
}
export declare const invalidHexValueErrorCodec: InvalidHexValueErrorCodec;
export {};

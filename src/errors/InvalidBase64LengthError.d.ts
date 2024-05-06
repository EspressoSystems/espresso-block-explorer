import { default as BaseError } from './BaseError';
import { Converter, TypeCheckingCodec } from '../../../../../../../../../src/convert/codec/convert';

/**
 * InvalidAlphabetLengthError is an error that indicates the the Base64 alphabet
 * provided does not meet the required criteria.
 */
export declare class InvalidBase64AlphabetLengthError extends BaseError {
    readonly length: number;
    constructor(length: number, message?: string);
    toJSON(): unknown;
}
declare class InvalidBase64AlphabetLengthErrorCodec extends TypeCheckingCodec<InvalidBase64AlphabetLengthError> {
    readonly encoder: Converter<InvalidBase64AlphabetLengthError, unknown>;
    readonly decoder: Converter<unknown, InvalidBase64AlphabetLengthError>;
}
export declare const invalidBase64AlphabetLengthErrorCodec: InvalidBase64AlphabetLengthErrorCodec;
export {};

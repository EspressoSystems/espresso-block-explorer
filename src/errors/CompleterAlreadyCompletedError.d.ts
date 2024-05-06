import { default as BaseError } from './BaseError';
import { Converter, TypeCheckingCodec } from '../../../../../../../../../src/convert/codec/convert';

/**
 * CompleterAlreadyCompletedError is an error that is thrown when a completer
 * has already been completed, and is attempted to be completed again.
 */
export declare class CompleterAlreadyCompletedError extends BaseError {
    constructor(message?: string);
}
declare class CompleterAlreadyCompletedErrorCodec extends TypeCheckingCodec<CompleterAlreadyCompletedError> {
    readonly encoder: Converter<CompleterAlreadyCompletedError, unknown>;
    readonly decoder: Converter<unknown, CompleterAlreadyCompletedError>;
}
export declare const completerAlreadyCompletedErrorCodec: CompleterAlreadyCompletedErrorCodec;
export {};

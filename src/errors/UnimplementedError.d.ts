import { Converter, TypeCheckingCodec } from '../../../../../../../../../src/convert/codec/convert';
import { default as BaseError } from './BaseError';

/**
 * Unimplemented is an error that indicates the logic for this code has not
 * yet been implemented.  It is meant to be a placeholder error.
 */
export default class UnimplementedError extends BaseError {
    constructor(message?: string);
    get code(): string;
}
declare class UnimplementedErrorCodec extends TypeCheckingCodec<UnimplementedError> {
    readonly encoder: Converter<UnimplementedError, unknown>;
    readonly decoder: Converter<unknown, UnimplementedError>;
}
export declare const unimplementedCodec: UnimplementedErrorCodec;
export {};

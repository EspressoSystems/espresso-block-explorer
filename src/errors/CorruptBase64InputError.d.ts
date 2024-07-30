import { Converter, TypeCheckingCodec } from '../../../../../../../../../src/convert/codec/convert';
import { default as BaseError } from './BaseError';

/**
 * CorruptBase64InputError is an error that indicates that the input provided
 * at the given offset is invalid.
 */
export declare class CorruptBase64InputError extends BaseError {
    readonly offset: number;
    constructor(offset: number, message?: string);
    get code(): string;
    toJSON(): unknown;
}
declare class CorruptBase64InputErrorCodec extends TypeCheckingCodec<CorruptBase64InputError> {
    readonly encoder: Converter<CorruptBase64InputError, unknown>;
    readonly decoder: Converter<unknown, CorruptBase64InputError>;
}
export declare const corruptBase64InputErrorCodec: CorruptBase64InputErrorCodec;
export {};

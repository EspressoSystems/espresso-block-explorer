import { Converter, TypeCheckingCodec } from '../../../../../../../../../src/convert/codec/convert';
import { BaseError } from './base_error';
export declare class InvalidInputError extends BaseError {
    constructor(message?: string);
    get code(): string;
}
declare class InvalidInputErrorCodec extends TypeCheckingCodec<InvalidInputError> {
    readonly encoder: Converter<InvalidInputError, unknown>;
    readonly decoder: Converter<unknown, InvalidInputError>;
}
export declare const invalidInputErrorCodec: InvalidInputErrorCodec;
export {};

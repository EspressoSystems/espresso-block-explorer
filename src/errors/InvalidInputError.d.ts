import { default as BaseError } from './BaseError';
import { Converter, TypeCheckingCodec } from '../../../../../../../../../src/convert/codec/convert';

export default class InvalidInputError extends BaseError {
    constructor(message?: string);
}
declare class InvalidInputErrorCodec extends TypeCheckingCodec<InvalidInputError> {
    readonly encoder: Converter<InvalidInputError, unknown>;
    readonly decoder: Converter<unknown, InvalidInputError>;
}
export declare const invalidInputErrorCodec: InvalidInputErrorCodec;
export {};

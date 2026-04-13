import { Converter, TypeCheckingCodec } from '../../../../../../../../../src/convert/codec/convert';
import { BaseError } from './base_error';
export declare class NoURLProvidedError extends BaseError {
    constructor(message?: string);
    get code(): string;
}
declare class NoURLProvidedErrorCodec extends TypeCheckingCodec<NoURLProvidedError> {
    readonly encoder: Converter<NoURLProvidedError, unknown>;
    readonly decoder: Converter<unknown, NoURLProvidedError>;
}
export declare const noURLProvidedErrorCodec: NoURLProvidedErrorCodec;
export {};

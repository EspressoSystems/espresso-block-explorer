import { Converter, TypeCheckingCodec } from '../../../../../../../../../src/convert/codec/convert';
import { default as BaseError } from './base_error';
export default class NoURLProvidedError extends BaseError {
    constructor(message?: string);
    get code(): string;
}
declare class NoURLProvidedErrorCodec extends TypeCheckingCodec<NoURLProvidedError> {
    readonly encoder: Converter<NoURLProvidedError, unknown>;
    readonly decoder: Converter<unknown, NoURLProvidedError>;
}
export declare const noURLProvidedErrorCodec: NoURLProvidedErrorCodec;
export {};

import { Converter, TypeCheckingCodec } from '../../../../../../../../../src/convert/codec/convert';
import { default as BaseError } from './BaseError';

export default class NoURLProvidedError extends BaseError {
    constructor(message?: string);
}
declare class NoURLProvidedErrorCodec extends TypeCheckingCodec<NoURLProvidedError> {
    readonly encoder: Converter<NoURLProvidedError, unknown>;
    readonly decoder: Converter<unknown, NoURLProvidedError>;
}
export declare const noURLProvidedErrorCodec: NoURLProvidedErrorCodec;
export {};

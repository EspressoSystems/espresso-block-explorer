import { Converter, TypeCheckingCodec } from '../../../../../../../../../src/convert/codec/convert';
import { default as BaseError } from './base_error';
/**
 * IncorrectBase64PaddingError is an error that indicates that the padding
 * provided is not correct.
 */
export declare class IncorrectBase64PaddingError extends BaseError {
    constructor(message?: string);
    get code(): string;
}
declare class IncorrectBase64PaddingErrorCodec extends TypeCheckingCodec<IncorrectBase64PaddingError> {
    readonly encoder: Converter<IncorrectBase64PaddingError, unknown>;
    readonly decoder: Converter<unknown, IncorrectBase64PaddingError>;
}
export declare const incorrectBase64PaddingErrorCodec: IncorrectBase64PaddingErrorCodec;
export {};

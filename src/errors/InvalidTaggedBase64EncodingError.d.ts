import { Converter, TypeCheckingCodec } from '../../../../../../../../../src/convert/codec/convert';
import { default as BaseError } from './BaseError';

/**
 * InvalidTaggedBase64EncodingError is an error that indicates that the
 * encountered string encoding of a supposed TaggedBase64 is invalid.
 */
export default class InvalidTaggedBase64EncodingError extends BaseError {
    constructor(message?: string);
    toJSON(): unknown;
    get code(): string;
}
declare class InvalidTaggedBase64EncodingErrorCodec extends TypeCheckingCodec<InvalidTaggedBase64EncodingError> {
    readonly encoder: Converter<InvalidTaggedBase64EncodingError, unknown>;
    readonly decoder: Converter<unknown, InvalidTaggedBase64EncodingError>;
}
export declare const invalidTaggedBase64EncodingErrorCodec: InvalidTaggedBase64EncodingErrorCodec;
export {};

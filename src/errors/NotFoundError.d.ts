import { default as BaseError } from './BaseError';
import { Codec, Converter, TypeCheckingCodec } from '../../../../../../../../../src/convert/codec/convert';

/**
 * NotFoundError is an error that indicates that the resource for the specified
 * key was unable to be found.
 */
export default class NotFoundError<Key = unknown> extends BaseError {
    readonly key: Key;
    constructor(key: Key, message?: string);
}
export declare class NotFoundErrorDecoder<Key> implements Converter<unknown, NotFoundError<Key>> {
    private readonly codec;
    constructor(codec: Codec<Key>);
    convert(input: unknown): NotFoundError<Key>;
}
export declare class NotFoundErrorEncoder<Key, Encoded = unknown> implements Converter<NotFoundError<Key>> {
    private readonly codec;
    constructor(codec: Codec<Key, Encoded, unknown>);
    convert(input: NotFoundError<Key>): {
        readonly key: Encoded;
        readonly code: string;
        readonly message: string;
    };
}
export declare class NotFoundErrorCodec<Key, Encoded = unknown> extends TypeCheckingCodec<NotFoundError<Key>> {
    readonly encoder: Converter<NotFoundError<Key>, Encoded>;
    readonly decoder: Converter<unknown, NotFoundError<Key>>;
    constructor(encoder: Converter<NotFoundError<Key>, Encoded>, decoder: Converter<unknown, NotFoundError<Key>>);
}
export declare const notFoundKeyStringErrorCodec: NotFoundErrorCodec<string, {
    readonly key: string;
    readonly code: string;
    readonly message: string;
}>;
export declare const notFoundKeyUnknownErrorCodec: NotFoundErrorCodec<unknown, {
    readonly key: unknown;
    readonly code: string;
    readonly message: string;
}>;

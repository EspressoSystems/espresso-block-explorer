import { Codec, Converter } from './convert';
/**
 * InvalidTaggedBase64EncodingError is an error that indicates that the
 * encountered string encoding of a supposed TaggedBase64 is invalid.
 */
export declare class InvalidTaggedBase64EncodingError extends Error {
    constructor(message?: string);
    toJSON(): {
        name: string;
        message: string;
    };
}
/**
 * TaggedBase64 is an implementation of the server side type of TaggedBase64.
 * It separates the tag portion from the data portion so that they can be
 * handled / assessed independently.
 */
export declare class TaggedBase64 {
    readonly tag: string;
    readonly data: ArrayBuffer;
    constructor(tag: string, data: ArrayBuffer);
    static fromString(input: string): TaggedBase64;
    static inflate(value: unknown): TaggedBase64;
    toString(): string;
    valueOf(): string;
    toJSON(): string;
}
export declare function isTaggedBase64(a: unknown): a is TaggedBase64;
export declare class TaggedBase64Decoder implements Converter<unknown, TaggedBase64> {
    convert(input: unknown): TaggedBase64;
}
export declare class TaggedBase64Encoder implements Converter<TaggedBase64, string> {
    convert(input: TaggedBase64): string;
}
export declare class TaggedBase64Codec extends Codec<TaggedBase64, unknown> {
    encoder: Converter<TaggedBase64, unknown>;
    decoder: Converter<unknown, TaggedBase64>;
}
export declare const taggedBase64Codec: TaggedBase64Codec;

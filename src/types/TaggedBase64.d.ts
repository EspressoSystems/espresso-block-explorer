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

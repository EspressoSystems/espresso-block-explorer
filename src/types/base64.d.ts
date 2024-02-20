export declare function convertStringToArrayBuffer(s: string): Uint8Array;
export declare function convertArrayBufferToString(ab: ArrayBuffer): string;
export declare function charCodesFromString(s: string): Generator<number, void, undefined>;
export declare const noPadding = -1;
export declare const stdPadding: number;
/**
 * InvalidAlphabetLengthError is an error that indicates the the Base64 alphabet
 * provided does not meet the required criteria.
 */
export declare class InvalidBase64AlphabetLengthError extends Error {
    readonly length: number;
    constructor(length: number, message?: string);
    toJSON(): {
        name: string;
        length: number;
        message: string;
    };
}
/**
 * CorruptBase64InputError is an error that indicates that the input provided
 * at the given offset is invalid.
 */
export declare class CorruptBase64InputError extends Error {
    readonly offset: number;
    constructor(offset: number, message?: string);
    toJSON(): {
        name: string;
        offset: number;
        message: string;
    };
}
/**
 * IncorrectPaddingError is an error that indicates that the padding provided
 * is not correct.
 */
export declare class IncorrectPaddingError extends Error {
    constructor(message?: string);
}
/**
 * Encoding represents a Base64 Encoding type. This class allows for the
 * creation of new Base64 Encodings with different alphabets of non standard
 * ordering.
 */
export declare class Encoding {
    private encodeMap;
    private decodeMap;
    private padChar;
    private strict;
    constructor(encodeMap: number[], decodeMap: number[], padChar?: number, strict?: boolean);
    static withAlphabet(alphabet: string): Encoding;
    withPadding(padChar: number): Encoding;
    encode(input: ArrayBuffer): ArrayBuffer;
    decode(input: ArrayBuffer): ArrayBuffer;
    decodeString(s: string): ArrayBuffer;
    encodeToString(src: ArrayBuffer): string;
}
export declare const stdEncoding: Encoding;
export declare const rawStdEncoding: Encoding;
export declare const urlEncoding: Encoding;
export declare const rawURLEncoding: Encoding;

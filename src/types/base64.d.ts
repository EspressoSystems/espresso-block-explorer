export declare function convertStringToArrayBuffer(s: string): Uint8Array;
export declare function convertArrayBufferToString(ab: ArrayBuffer): string;
export declare function charCodesFromString(s: string): Generator<number, void, undefined>;
export declare const noPadding = -1;
export declare const stdPadding: number;
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

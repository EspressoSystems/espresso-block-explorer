/**
 * InvalidHexStringError is an error that indicates that the hex string provided
 * is invalid as it doesn't meet the requirements of a hex encoded string.
 */
export declare class InvalidHexStringError extends Error {
    constructor(message?: string);
    toJSON(): {
        name: string;
        message: string;
    };
}
/**
 * InvalidHexValueError is an error that indicates that the encountered value
 * isn't valid for a hex representation.
 */
export declare class InvalidHexValueError extends Error {
    readonly value: number;
    constructor(value: number, message?: string);
    toJSON(): {
        name: string;
        value: number;
        message: string;
    };
}
/**
 * parseHexString is a helper function for decoding a hex string with
 * an optional '0x' prefix;
 */
export declare function parseHexString(input: string): ArrayBuffer;
/**
 * encodeNumberIteratorToHexits will transform the Iterator of numbers into
 * its hex representation.
 */
export declare function encodeNumberIteratorToHexits(iterator: Iterator<number>): Generator<string>;
/**
 * encodeNumberIterableToHexits will transform the Iterable of numbers into
 * its hex representation.
 */
export declare function encodeNumberIterableToHexits(iterable: Iterable<number>): Generator<string>;

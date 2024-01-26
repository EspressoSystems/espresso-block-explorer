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

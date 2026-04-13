/**
 * Varints are core to Protobuf encoding and efficiency. Specific data types
 * are encoded as varints throughout the protocol, and are important to
 * correctly encoding and decoding protobuf messages.
 */
type DecodeResult = {
    number: bigint;
    bytesRead: number;
};
/**
 * decodeVarInt decodes a varint from the given `bytes` starting at the given
 * offset.
 *
 * Varints are encoded utilizing a variable number of bytes.  The idea is to
 * minimize the number of bytes needed to decode the varint.
 * The maximum supported size is capable of encoding an unsigned uint64.
 */
export declare function decodeVarInt(bytes: DataView, offset?: number): DecodeResult;
/**
 * encodeVarInt encodes a given bigint into a varint, returning the encoded
 * value as a newly allowcated Uint8Array.
 *
 * NOTE: this allocates an array as well, that will scale as needed.
 */
export declare function encodeVarInt(input: bigint): Uint8Array;
export {};

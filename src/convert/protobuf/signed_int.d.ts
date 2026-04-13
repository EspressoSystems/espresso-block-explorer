/**
 * sints in protobuf are encoded such that values that are closer to 0 are
 * encoded with smaller bit values (when considered from Big Endian) encoding.
 *
 * This allows them to be encoded with varint encoding to minimize the amount
 * of bytes required to encode integers.
 *
 * The resulting signed integers are encoded in an alternating pattern that
 * follows this example sequence:
 * - 0x00: 0n
 * - 0x01: -1n
 * - 0x02: 1n
 * - 0x03: -2n
 * - 0x04: 2n
 *
 * This pattern holds over the entire space of signed integers.
 *
 * Signed integers are supported utilizing this alternating (zig-zag) encoding
 * style for both signed int 32, and signed int 64.
 */
/**
 * encodeSint32 encodes a BigInt as a signed 32 bit integer into an unsigned
 * 32 bit big integer with zig-zag encoding.
 */
export declare function encodeSint32(number: bigint): bigint;
/**
 * encodeSint64 encodes a BigInt as a signed 64 bit integer into an unsigned
 * 64 bit big integer with zig-zag encoding.
 */
export declare function encodeSint64(number: bigint): bigint;
/**
 * decodeSint32 decodes a BigInt from an unsigned 32 bit big integer with
 * zig-zag into a signed 32 bit integer.
 */
export declare function decodeSint32(number: bigint): bigint;
/**
 * decodeSint64 decodes a BigInt from an unsigned 64 bit big integer with
 * zig-zag into a signed 64 bit integer.
 */
export declare function decodeSint64(number: bigint): bigint;

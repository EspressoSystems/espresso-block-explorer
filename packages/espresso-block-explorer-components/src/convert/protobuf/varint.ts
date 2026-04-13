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
 * MAX_VARINT_BYTES represents the maximum number of bytes that can be read
 * to decode a varint.
 *
 * Since a varint is only specified to encode a uint64 at its highest
 * precision, this means that the maximum number of bytes that can be encoded
 * can be deteremined to be this value: ceil(64 / 7).
 */
const MAX_VARINT_BYTES = 10;

/**
 * decodeVarInt decodes a varint from the given `bytes` starting at the given
 * offset.
 *
 * Varints are encoded utilizing a variable number of bytes.  The idea is to
 * minimize the number of bytes needed to decode the varint.
 * The maximum supported size is capable of encoding an unsigned uint64.
 */
export function decodeVarInt(
  bytes: DataView,
  offset: number = 0,
): DecodeResult {
  let acc = 0n;

  for (
    let i = 0, index = offset + i;
    index < bytes.byteLength && index < MAX_VARINT_BYTES;
    i = i + 1, index = offset + i
  ) {
    const byte = bytes.getUint8(index);
    const usefilBits = byte & 0x7f;

    acc = acc | (BigInt(usefilBits) << (7n * BigInt(i)));

    if ((byte & 0x80) === 0x00) {
      // No more bytes to read
      return {
        number: acc,
        bytesRead: i + 1,
      };
    }
  }

  throw new Error('decode varint failed, ran out of bytes');
}

/**
 * encodeVarInt encodes a given bigint into a varint, returning the encoded
 * value as a newly allowcated Uint8Array.
 *
 * NOTE: this allocates an array as well, that will scale as needed.
 */
export function encodeVarInt(input: bigint): Uint8Array {
  if (input < 0 || typeof input !== 'bigint') {
    throw new Error('varint needs to be a postiive bigint');
  }

  let acc = input;
  const byteList: number[] = [];
  while (acc > 0) {
    const bitsToEncode = Number(acc & 0x7fn);
    acc >>= 7n;

    const continuation = acc > 0 ? 0x80 : 0x00;
    const byteToEncode = continuation | bitsToEncode;

    byteList.push(byteToEncode);
  }

  return new Uint8Array(byteList);
}

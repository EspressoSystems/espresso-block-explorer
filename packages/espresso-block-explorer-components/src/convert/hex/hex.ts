import InvalidHexStringError from '../../errors/InvalidHexStringError';
import { InvalidHexValueError } from '../../errors/InvalidHexValueError';
import { mapIterator } from '../../functional/functional';
import { charCodesFromString } from '../base64/base64';

/**
 * parseHexString is a helper function for decoding a hex string with
 * an optional '0x' prefix;
 */
export function parseHexString(input: string): ArrayBuffer {
  if (input.startsWith('0x')) {
    return parseHexString(input.substring(2));
  }

  if ((input.length & 0x01) !== 0) {
    throw new InvalidHexStringError();
  }

  const ab = new ArrayBuffer(input.length / 2);
  decodeHex(charCodesFromString(input), ab);
  return ab;
}

/**
 * decodeHex decodes an Iterator of paris of hexits into a given ArrayBuffer
 * expected to be half the size of the incoming iterator.
 */
function decodeHex(it: Iterator<number>, ab: ArrayBuffer): void {
  const dv = new DataView(ab);
  let o = 0;

  while (o < ab.byteLength) {
    const b0Next = it.next();
    const b1Next = it.next();

    if (b0Next.done || b1Next.done) {
      // This shouldn't occur as we have a multiple of 2 check above
      throw new InvalidHexStringError();
    }

    const b0 = decodeHexit(b0Next.value);
    const b1 = decodeHexit(b1Next.value);

    const value = (b0 << 4) | b1;
    dv.setUint8(o, value);
    o++;
  }
}

/**
 * decodeHexit is a function for decoding a hexit character in the range of
 * 0-9, a-f, or A-F.
 */
function decodeHexit(o: number) {
  if (o >= 0x30 && o <= 0x39) {
    return o - 0x30;
  }

  if (o >= 0x61 && o <= 0x66) {
    // lower case a-f
    return o - 0x61 + 10;
  }

  if (o >= 0x41 && o <= 0x46) {
    // upper case a-f
    return o - 0x41 + 10;
  }

  throw new InvalidHexValueError(o);
}

/**
 * encodeHexit is a simple function for encoding a single byte to a 0 padded
 * hex representation.
 */
function encodeHexit(byte: number) {
  return byte.toString(16).padStart(2, '0');
}

/**
 * encodeNumberIteratorToHexits will transform the Iterator of numbers into
 * its hex representation.
 */
export function* encodeNumberIteratorToHexits(
  iterator: Iterator<number>,
): Generator<string> {
  yield* mapIterator(iterator, encodeHexit);
}

/**
 * encodeNumberIterableToHexits will transform the Iterable of numbers into
 * its hex representation.
 */
export function encodeNumberIterableToHexits(
  iterable: Iterable<number>,
): Generator<string> {
  return encodeNumberIteratorToHexits(iterable[Symbol.iterator]());
}

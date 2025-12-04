import { assertInstanceOf } from '@/assert/assert';
import { createKeccakHash } from '@/crypto/keccak/family';
import InvalidTypeError from '@/errors/invalid_type_error';
import UnimplementedError from '@/errors/unimplemented_error';
import {
  expandIterable,
  iota,
  mapIterable,
  zipWithIterable,
} from '@/functional/functional';
import { encodeNumberIterableToHexits } from '../hex/hex';
import { Converter } from './convert';
import { uint8ArrayToArrayBufferCodec } from './uint8_array';

const CHAR_CODE_ZERO = '0'.charCodeAt(0);
const CHAR_CODE_NINE = '9'.charCodeAt(0);
const CHAR_CODE_A = 'a'.charCodeAt(0);
const CHAR_CODE_F = 'f'.charCodeAt(0);

export class EIP55Encoder implements Converter<ArrayBuffer, string> {
  convert(input: ArrayBuffer): string {
    assertInstanceOf(input, ArrayBuffer);

    if (input.byteLength !== 20) {
      // If the input is not a 20-byte address, we cannot apply EIP-55 encoding.
      throw new InvalidTypeError(typeof input, '20-byte ArrayBuffer');
    }

    // EIP-55 encoding requires the address to be in hexadecimal format.
    const rawHexStringParts = expandIterable(
      encodeNumberIterableToHexits(new Uint8Array(input)),
      (hexPair) => hexPair.split(''),
    );
    const rawHexString = [...rawHexStringParts];
    const hasher = createKeccakHash('keccak256');
    const encoder = new TextEncoder();
    hasher.update(
      uint8ArrayToArrayBufferCodec.encode(
        encoder.encode(rawHexString.join('')),
      ),
    );
    const hashedAddress = new Uint8Array(hasher.digest());

    const checksumChars = mapIterable(
      zipWithIterable(
        iota(input.byteLength * 2),
        rawHexString,
        (index, nibbleChar) => [index, nibbleChar] as const,
      ),
      ([index, char]) => {
        const charCode = char.charCodeAt(0);
        if (charCode >= CHAR_CODE_ZERO && charCode <= CHAR_CODE_NINE) {
          // If the character is a digit, keep it as is.
          return char;
        }

        if (charCode >= CHAR_CODE_A && charCode <= CHAR_CODE_F) {
          const hexIndex = Math.floor(index / 2);
          const nibbleOffset = index & 0x01;
          const hexDigit = hashedAddress[hexIndex];
          const nibble = nibbleOffset === 0 ? hexDigit >> 4 : hexDigit & 0x0f;

          if (nibble > 7) {
            // If the character is a lowercase letter, convert it to uppercase.
            return char.toUpperCase();
          }

          // Keep the char as is.
          return char;
        }

        // This is an error edge case.  But we also shouldn't reach this location.
        throw new UnimplementedError();
      },
    );

    // try to avoid this array allocation if possible.
    return ['0x', ...checksumChars].join('');
  }
}

export const eip55Encoder = new EIP55Encoder();

import { InvalidTypeError } from '@/errors/invalid_type_error';
import { cloneArrayBuffer } from '../util/array_buffer';
import { rawStdBase64ArrayBufferCodec } from './array_buffer_base64';
import { hexArrayBufferCodec } from './array_buffer_hex';
import { Converter, isNumber, TypeCheckingCodec } from './convert';
import { NullCodec, NullDecoder, NullEncoder } from './null';

/**
 * ArrayBufferDecoder is a flexible decder that attempts to decode a variety
 * of different serialization representations for an ArrayBuffer.
 */
export class ArrayBufferDecoder implements Converter<unknown, ArrayBuffer> {
  convert(input: unknown): ArrayBuffer {
    if (input instanceof Array && input.every(isNumber)) {
      // Let's be very liberal with what we're able to decode.
      // If we're given an array of numbers, then we can create an ArrayBuffer
      // with their contents, as if they were an ArrayBuffer itself.
      return cloneArrayBuffer(input);
    }

    if (typeof input === 'string' && input.startsWith('0x')) {
      // Assume that this is a hex string
      return hexArrayBufferCodec.decode(input);
    }

    if (typeof input === 'string') {
      // Assume that this a Base64 encoded string
      return rawStdBase64ArrayBufferCodec.decode(input);
    }

    throw new InvalidTypeError(typeof input, 'string');
  }
}

/**
 * ArrayBufferEncoder encodes an ArrayBuffer into a hex string, prefixed with
 * '0x'.
 */
export class ArrayBufferEncoder implements Converter<
  ArrayBuffer,
  `0x${string}`
> {
  convert(input: ArrayBuffer): `0x${string}` {
    return hexArrayBufferCodec.encode(input);
  }
}

export class ArrayBufferCodec extends TypeCheckingCodec<
  ArrayBuffer,
  `0x${string}`
> {
  readonly encoder: Converter<ArrayBuffer, `0x${string}`> =
    new ArrayBufferEncoder();
  readonly decoder: Converter<unknown, ArrayBuffer> = new ArrayBufferDecoder();
}

/**
 * arrayBufferCodec is a codec for ArrayBuffers that encodes them as hex
 * strings.
 */
export const arrayBufferCodec = new ArrayBufferCodec();

/**
 * nullableArrayBufferCodec is an extension of the regular `ArrayBufferCodec`
 * and allows for `null` to be serialized in place of the `ArraytBuffer`.
 */
export const nullableArrayBufferCodec = new NullCodec(
  new NullDecoder(arrayBufferCodec),
  new NullEncoder(arrayBufferCodec),
);

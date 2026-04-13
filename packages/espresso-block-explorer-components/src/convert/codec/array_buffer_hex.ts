import { InvalidTypeError } from '@/errors/invalid_type_error';
import { encodeNumberIterableToHexits, parseHexString } from '../hex/hex';
import { ArrayCodec, ArrayDecoder, ArrayEncoder } from './array';
import { Converter, TypeCheckingCodec } from './convert';
import { NullCodec, NullDecoder, NullEncoder } from './null';

export class HexArrayBufferDecoder implements Converter<unknown, ArrayBuffer> {
  convert(input: unknown): ArrayBuffer {
    if (typeof input !== 'string') {
      throw new InvalidTypeError(typeof input, 'string');
    }

    return parseHexString(input);
  }
}

export class HexArrayBufferEncoder implements Converter<
  ArrayBuffer,
  `0x${string}`
> {
  convert(input: ArrayBuffer): `0x${string}` {
    // try to avoid this array allocation if possible.
    return `0x${Array.from(
      encodeNumberIterableToHexits(new Uint8Array(input)),
    ).join('')}`;
  }
}

export class HexArrayBufferCodec extends TypeCheckingCodec<
  ArrayBuffer,
  `0x${string}`
> {
  encoder = new HexArrayBufferEncoder();
  decoder = new HexArrayBufferDecoder();
}

export const hexArrayBufferCodec = new HexArrayBufferCodec();
export const nullableHexArrayBufferCodec = new NullCodec(
  new NullDecoder(hexArrayBufferCodec),
  new NullEncoder(hexArrayBufferCodec),
);
export const hexArrayBufferArrayCodec = new ArrayCodec(
  new ArrayDecoder(hexArrayBufferCodec),
  new ArrayEncoder(hexArrayBufferCodec),
);

class BackwardsCompatibleHexArrayBufferDecoder implements Converter<
  unknown,
  ArrayBuffer[]
> {
  convert(input: unknown): ArrayBuffer[] {
    if (input instanceof Array) {
      // This is the new format.
      return hexArrayBufferArrayCodec.decode(input);
    }

    // Fall back to the old format, and wrap it in an Array
    return [hexArrayBufferCodec.decode(input)];
  }
}

class BackwardsCompatibleHexArrayBufferEncoder implements Converter<
  ArrayBuffer[],
  unknown
> {
  convert(input: ArrayBuffer[]): unknown {
    return hexArrayBufferArrayCodec.encode(input);
  }
}

class BackwardsCompatibleHexArrayBufferCodec extends TypeCheckingCodec<
  ArrayBuffer[],
  unknown
> {
  readonly encoder = new BackwardsCompatibleHexArrayBufferEncoder();
  readonly decoder = new BackwardsCompatibleHexArrayBufferDecoder();
}

export const backwardsCompatibleHexArrayBufferCodec =
  new BackwardsCompatibleHexArrayBufferCodec();

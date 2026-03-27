import { ensureArrayBuffer } from '../util/array_buffer';
import { arrayBufferCodec } from './array_buffer';
import { Converter, TypeCheckingCodec } from './convert';
import { NullCodec, NullDecoder, NullEncoder } from './null';

export class Uint8ArrayToArrayBufferConverter implements Converter<
  Uint8Array,
  ArrayBuffer
> {
  convert(input: Uint8Array): ArrayBuffer {
    return ensureArrayBuffer(input);
  }
}

export class ArrayBufferToUint8ArrayConverter implements Converter<
  ArrayBuffer,
  Uint8Array
> {
  convert(input: ArrayBuffer): Uint8Array {
    return new Uint8Array(input);
  }
}

export class Uint8ArrayToArrayBufferCodec extends TypeCheckingCodec<
  Uint8Array,
  ArrayBuffer
> {
  readonly encoder = new Uint8ArrayToArrayBufferConverter();
  readonly decoder = new ArrayBufferToUint8ArrayConverter();
}

export const uint8ArrayToArrayBufferCodec = new Uint8ArrayToArrayBufferCodec();

export class Uint8ArrayDecoder implements Converter<unknown, Uint8Array> {
  convert(input: unknown): Uint8Array {
    return new Uint8Array(arrayBufferCodec.decode(input));
  }
}

export class Uint8ArrayEncoder implements Converter<Uint8Array, `0x${string}`> {
  convert(input: Uint8Array): `0x${string}` {
    return arrayBufferCodec.encode(ensureArrayBuffer(input));
  }
}

export class Uint8ArrayCodec extends TypeCheckingCodec<
  Uint8Array,
  `0x${string}`
> {
  readonly decoder: Converter<unknown, Uint8Array> = new Uint8ArrayDecoder();
  readonly encoder: Converter<Uint8Array, `0x${string}`> =
    new Uint8ArrayEncoder();
}

export const uint8ArrayCodec = new Uint8ArrayCodec();

export const nullableUint8ArrayCodec = new NullCodec(
  new NullDecoder(uint8ArrayCodec),
  new NullEncoder(uint8ArrayCodec),
);

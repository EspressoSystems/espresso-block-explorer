import { Converter, TypeCheckingCodec } from './convert';
export class Uint8ArrayToArrayBufferConverter
  implements Converter<Uint8Array, ArrayBuffer>
{
  convert(input: Uint8Array): ArrayBuffer {
    const buffer = new ArrayBuffer(input.byteLength);
    const view = new Uint8Array(buffer);
    view.set(input);
    return buffer;
  }
}

export class ArrayBufferToUint8ArrayConverter
  implements Converter<ArrayBuffer, Uint8Array>
{
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

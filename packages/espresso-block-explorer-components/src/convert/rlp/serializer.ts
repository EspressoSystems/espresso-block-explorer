import UnimplementedError from '@/errors/unimplemented_error';
import {
  BufferedDataView,
  createBufferedDataView,
} from '../data_view/buffered_data_view';
import { Endianess } from '../data_view/endianess';

/**
 * RLPSerializer represents a generalized Serializer for Bincode.
 */
export interface RLPSerializer {
  serializeInt8(value: number): void;
  serializeInt16(value: number): void;
  serializeInt32(value: number): void;
  serializeInt64(value: bigint): void;
  serializeUint8(value: number): void;
  serializeUint16(value: number): void;
  serializeUint32(value: number): void;
  serializeUint64(value: bigint): void;
  serializeBytes(value: Uint8Array): void;

  serializeInt128(value: bigint): void;
  serializeUint128(value: bigint): void;

  serializeUnknown(input: unknown): void;
  serializeList(input: unknown[]): void;

  toBytes(): Uint8Array;
}

/**
 * RLPSerializerBase is a base class for RLPSerializer.
 */
export abstract class RLPSerializerBase implements RLPSerializer {
  abstract serializeUint8(input: number): void;
  abstract serializeUint16(input: number): void;
  abstract serializeUint32(input: number): void;
  abstract serializeUint64(input: bigint): void;
  abstract serializeInt8(input: number): void;
  abstract serializeInt16(input: number): void;
  abstract serializeInt32(input: number): void;
  abstract serializeInt64(input: bigint): void;
  abstract serializeBytes(input: Uint8Array): void;

  abstract serializeInt128(input: bigint): void;
  abstract serializeUint128(input: bigint): void;

  abstract serializeUnknown(input: unknown): void;
  abstract serializeList(input: unknown[]): void;

  abstract toBytes(): Uint8Array;
}

function isUint8Array(input: unknown): input is Uint8Array {
  if (input instanceof Uint8Array) {
    return true;
  }

  if (typeof input !== 'object' || input === null) {
    return false;
  }

  if (String(input.constructor.name) === 'Uint8Array') {
    return true;
  }

  return false;
}

function isArrayBuffer(input: unknown): input is ArrayBuffer {
  if (input instanceof ArrayBuffer) {
    return true;
  }

  if (typeof input !== 'object' || input === null) {
    return false;
  }

  if (String(input.constructor.name) === 'ArrayBuffer') {
    return true;
  }

  return false;
}

/**
 * RLPSerializerImpl is an implementation of RLPSerializer utilizing a
 * BufferedDataView.
 */
class RLPSerializerImpl extends RLPSerializerBase {
  private readonly bufferedDataView: BufferedDataView;

  constructor(bufferedDataView: BufferedDataView) {
    super();
    this.bufferedDataView = bufferedDataView;
  }

  simplifyPositiveIntegerEncoding(data: Uint8Array): Uint8Array {
    let start = 0;
    while (start < data.length && data[start] === 0) {
      start++;
    }

    return data.slice(start);
  }

  serializePositiveInteger(data: Uint8Array) {
    // Serialize as a byte string
    this.serializeByteString(this.simplifyPositiveIntegerEncoding(data));
  }

  serializeByteString(data: Uint8Array) {
    // For a single byte whose value is in the [0x00, 0x7f] (decimal [0, 127])
    // range, that byte is its own RLP encoding.
    if (data.length === 1 && data[0] <= 0x7f) {
      this.bufferedDataView.setUint8(data[0]);
      return;
    }

    // Otherwise, if a string is 0-55 bytes long, the RLP encoding consists of
    // a single byte with value 0x80 (dec. 128) plus the length of the string
    // followed by the string. The range of the first byte is thus
    // [0x80, 0xb7] (dec. [128, 183]).
    if (data.length <= 55) {
      this.bufferedDataView.setUint8(0x80 + data.length);
      this.bufferedDataView.setBytes(data);
      return;
    }

    // If a string is more than 55 bytes long, the RLP encoding consists of a
    // single byte with value 0xb7 (dec. 183) plus the length in bytes of the
    // length of the string in binary form, followed by the length of the
    // string, followed by the string. For example, a 1024 byte long string
    // would be encoded as \xb9\x04\x00 (dec. 185, 4, 0) followed by the
    // string. Here, 0xb9 (183 + 2 = 185) as the first byte, followed by the
    // 2 bytes 0x0400 (dec. 1024) that denote the length of the actual string.
    // The range of the first byte is thus [0xb8, 0xbf] (dec. [184, 191]).
    const lengthBytes = new Uint8Array(4);
    const dv = new DataView(lengthBytes.buffer);
    dv.setUint32(0, data.length, false); // Big-endian encoding
    const lengthBytesSimplified =
      this.simplifyPositiveIntegerEncoding(lengthBytes);
    this.bufferedDataView.setUint8(0xb7 + lengthBytesSimplified.length);
    this.bufferedDataView.setBytes(data);

    // If a string is 2^64 bytes long, or longer, it may not be encoded.
  }

  serializeUint8(input: number) {
    return this.serializePositiveInteger(new Uint8Array([input]));
  }

  serializeUint16(input: number) {
    const buffer = new Uint8Array(2);
    const dv = new DataView(buffer.buffer);
    // Encode as big endian
    dv.setUint16(0, input);
    return this.serializePositiveInteger(buffer);
  }

  serializeUint32(input: number) {
    const buffer = new Uint8Array(4);
    const dv = new DataView(buffer.buffer);
    // Encode as big endian
    dv.setUint32(0, input);
    return this.serializePositiveInteger(buffer);
  }

  serializeUint64(input: bigint) {
    const buffer = new Uint8Array(8);
    const dv = new DataView(buffer.buffer);
    // Encode as big endian
    dv.setBigUint64(0, input);
    return this.serializePositiveInteger(buffer);
  }

  serializeInt8(input: number) {
    if (input >= 0) {
      return this.serializeUint8(input);
    }

    const buffer = new Uint8Array(1);
    const dv = new DataView(buffer.buffer);
    dv.setInt8(0, input);
    return this.serializeByteString(buffer);
  }

  serializeInt16(input: number) {
    if (input >= 0) {
      return this.serializeUint16(input);
    }

    const buffer = new Uint8Array(2);
    const dv = new DataView(buffer.buffer);
    dv.setInt16(0, input);
    return this.serializeByteString(buffer);
  }

  serializeInt32(input: number) {
    if (input >= 0) {
      return this.serializeUint32(input);
    }

    const buffer = new Uint8Array(4);
    const dv = new DataView(buffer.buffer);
    dv.setInt32(0, input);
    return this.serializeByteString(buffer);
  }

  serializeInt64(input: bigint) {
    if (input >= 0n) {
      return this.serializeUint64(input);
    }

    const buffer = new Uint8Array(8);
    const dv = new DataView(buffer.buffer);
    dv.setBigInt64(0, input);
    return this.serializeByteString(buffer);
  }

  serializeBytes(input: Uint8Array) {
    return this.serializeByteString(input);
  }

  serializeInt128(input: bigint): void {
    if (input >= 0n) {
      return this.serializeUint128(input);
    }

    const buffer = new Uint8Array(16);
    const dv = createBufferedDataView(buffer.buffer, Endianess.big);
    dv.setInt128(input);
    return this.serializeByteString(buffer);
  }

  serializeUint128(input: bigint): void {
    const buffer = new Uint8Array(16);
    const dv = createBufferedDataView(buffer.buffer, Endianess.big);
    // Encode as big endian
    dv.setUint128(input);
    return this.serializePositiveInteger(buffer);
  }

  serializeUnknown(input: unknown): void {
    // Inspect the type of the input and serialize accordingly.
    switch (typeof input) {
      case 'number':
        if (Number.isInteger(input)) {
          this.serializeInt64(BigInt(input));
          return;
        }

        throw new UnimplementedError();

      case 'bigint':
        this.serializeInt64(input);
        return;

      case 'object':
        break;

      default:
        throw new TypeError(
          `Unsupported type for serialization: ${typeof input}`,
        );
    }

    // We have an object. Unless it's an array, we won't know how to serialize
    // it.

    if (Array.isArray(input)) {
      this.serializeList(input);
      return;
    }

    if (isUint8Array(input)) {
      this.serializeBytes(input);
      return;
    }

    if (isArrayBuffer(input)) {
      this.serializeBytes(new Uint8Array(input));
      return;
    }

    if (input === null) {
      // RLP does not have a representation for null, so we will serialize it as
      // an empty byte string.
      this.serializeByteString(new Uint8Array(0));
      return;
    }

    // If we reach here, we have an object that is not an array or a Uint8Array.
    // We will throw an error as we do not know how to serialize it.
    throw new TypeError(
      `Unsupported object type for serialization: ${input.constructor.name}`,
    );
  }

  serializeList(input: unknown[]): void {
    // We are recursive for lists.  We need to know how our entries serialize
    // before we can determine how the whole list is serialize itself.
    const buffer = createBufferedDataView(
      new ArrayBuffer(3 * 1024),
      Endianess.big,
    );
    const itemEncoder = createRLPSerializer(buffer);

    // First we RLP encode each entry in the list.
    const encodedValues = input.map((item) => {
      itemEncoder.serializeUnknown(item);
      const result = itemEncoder.toBytes();
      buffer.reset();
      return result;
    });

    const totalEncodedByteLength = encodedValues.reduce(
      (acc, item) => acc + item.length,
      0,
    );

    // If the total payload of a list (i.e. the combined length of all its
    // items being RLP encoded) is 0-55 bytes long, the RLP encoding consists
    // of a single byte with value 0xc0 plus the length of the payload followed
    // by the concatenation of the RLP encodings of the items. The range of the
    // first byte is thus [0xc0, 0xf7] (dec. [192, 247]).

    if (totalEncodedByteLength <= 55) {
      this.bufferedDataView.setUint8(0xc0 + totalEncodedByteLength);
      for (const encodedValue of encodedValues) {
        this.bufferedDataView.setBytes(encodedValue);
      }
      return;
    }

    // If the total payload of a list is more than 55 bytes long, the RLP
    // encoding consists of a single byte with value 0xf7 plus the length in
    // bytes of the length of the payload in binary form, followed by the
    // length of the payload, followed by the concatenation of the RLP
    // encodings of the items. The range of the first byte is thus
    // [0xf8, 0xff] (dec. [248, 255]).

    const simplifiedLengthData = new Uint8Array(4);
    const simplifiedLengthDataView = new DataView(simplifiedLengthData.buffer);
    simplifiedLengthDataView.setUint32(0, totalEncodedByteLength);
    const simplifiedLength =
      this.simplifyPositiveIntegerEncoding(simplifiedLengthData);

    this.bufferedDataView.setUint8(0xf7 + simplifiedLength.length);
    this.bufferedDataView.setBytes(simplifiedLength);
    for (const encodedValue of encodedValues) {
      this.bufferedDataView.setBytes(encodedValue);
    }
  }

  toBytes(): Uint8Array {
    const length = this.bufferedDataView.readBytes;
    const bytes = new Uint8Array(length);
    bytes.set(new Uint8Array(this.bufferedDataView.arrayBuffer, 0, length));
    return bytes;
  }
}

/**
 * createRLPSerializer is a function that returns an instance of a class
 * implements RLPSerializer utilizing the provided BufferedDataView.
 * @param bufferedDataView The BufferedDataView to utilize for serialization.
 * @returns RLPSerializer
 */
export function createRLPSerializer(
  bufferedDataView: BufferedDataView,
): RLPSerializer {
  return new RLPSerializerImpl(bufferedDataView);
}

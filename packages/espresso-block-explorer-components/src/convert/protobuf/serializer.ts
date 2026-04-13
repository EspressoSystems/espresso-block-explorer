import {
  BufferedDataView,
  createBufferedDataView,
} from '../data_view/buffered_data_view';
import { Endianess } from '../data_view/endianess';
import { encodeSint32, encodeSint64 } from './signed_int';
import { WireType } from './types';
import { encodeVarInt } from './varint';

/**
 * ProtobufSerializer represents a generalized Serializer for Protobuf.
 */
export interface ProtobufSerializer {
  serializeVarIntInt8(tag: number, value: number): void;
  serializeVarIntInt16(tag: number, value: number): void;
  serializeVarIntInt32(tag: number, value: number): void;
  serializeVarIntBigInt64(tag: number, value: bigint): void;
  serializeVarIntUint8(tag: number, value: number): void;
  serializeVarIntUint16(tag: number, value: number): void;
  serializeVarIntUint32(tag: number, value: number): void;
  serializevarIntBigUint64(tag: number, value: bigint): void;

  serializeFixedInt32(tag: number, value: number): void;
  serializeFixedBigInt64(tag: number, value: bigint): void;
  serializeFixedUint32(tag: number, value: number): void;
  serializeFixedBigUint64(tag: number, value: bigint): void;

  serializeFloat32(tag: number, value: number): void;
  serializeFloat64(tag: number, value: number): void;

  serializeLenString(tag: number, value: string): void;
  serializeLenBytes(tag: number, value: Uint8Array): void;

  // sub message encoding, provided for convenience, but it's essentially
  // the same thing.

  serializeSubMessage(
    tag: number,
    value: (serializer: ProtobufSerializer) => void,
  ): void;

  toBytes(): Uint8Array;
}

/**
 * ProtobufSerializerBase is a base class for ProtobufSerializer.
 */
export abstract class ProtobufSerializerBase implements ProtobufSerializer {
  abstract serializeVarIntInt8(tag: number, value: number): void;
  abstract serializeVarIntInt16(tag: number, value: number): void;
  abstract serializeVarIntInt32(tag: number, value: number): void;
  abstract serializeVarIntBigInt64(tag: number, value: bigint): void;
  abstract serializeVarIntUint8(tag: number, value: number): void;
  abstract serializeVarIntUint16(tag: number, value: number): void;
  abstract serializeVarIntUint32(tag: number, value: number): void;
  abstract serializevarIntBigUint64(tag: number, value: bigint): void;

  abstract serializeFixedInt32(tag: number, value: number): void;
  abstract serializeFixedBigInt64(tag: number, value: bigint): void;
  abstract serializeFixedUint32(tag: number, value: number): void;
  abstract serializeFixedBigUint64(tag: number, value: bigint): void;

  abstract serializeFloat32(tag: number, value: number): void;
  abstract serializeFloat64(tag: number, value: number): void;

  abstract serializeLenString(tag: number, value: string): void;
  abstract serializeLenBytes(tag: number, value: Uint8Array): void;

  abstract serializeSubMessage(
    tag: number,
    value: (serializer: ProtobufSerializer) => void,
  ): void;

  abstract toBytes(): Uint8Array;
}

/**
 * ProtobufSerializerImpl is an implementation of ProtobufSerializer utilizing a
 * BufferedDataView.
 */
class ProtobufSerializerImpl extends ProtobufSerializerBase {
  constructor(private readonly bufferedDataView: BufferedDataView) {
    super();
  }

  private tagLengthEncode(tag: number, type: WireType, bytes: Uint8Array) {
    const tagAndTypeRaw = (BigInt(tag) << 3n) | BigInt(type);
    const tagAndTypeEncoded = encodeVarInt(tagAndTypeRaw);
    this.bufferedDataView.setBytes(tagAndTypeEncoded);
    this.bufferedDataView.setBytes(bytes);
  }

  // Signed Integer Encoding

  serializeVarIntInt8(tag: number, value: number): void {
    this.tagLengthEncode(
      tag,
      WireType.varint,
      encodeVarInt(encodeSint32(BigInt(value))),
    );
  }
  serializeVarIntInt16(tag: number, value: number): void {
    this.tagLengthEncode(
      tag,
      WireType.varint,
      encodeVarInt(encodeSint32(BigInt(value))),
    );
  }
  serializeVarIntInt32(tag: number, value: number): void {
    this.tagLengthEncode(
      tag,
      WireType.varint,
      encodeVarInt(encodeSint32(BigInt(value))),
    );
  }
  serializeVarIntBigInt64(tag: number, value: bigint): void {
    this.tagLengthEncode(
      tag,
      WireType.varint,
      encodeVarInt(encodeSint64(BigInt(value))),
    );
  }

  // Unsigned Integer Encoding

  serializeVarIntUint8(tag: number, value: number): void {
    this.tagLengthEncode(tag, WireType.varint, encodeVarInt(BigInt(value)));
  }
  serializeVarIntUint16(tag: number, value: number): void {
    this.tagLengthEncode(tag, WireType.varint, encodeVarInt(BigInt(value)));
  }
  serializeVarIntUint32(tag: number, value: number): void {
    this.tagLengthEncode(tag, WireType.varint, encodeVarInt(BigInt(value)));
  }
  serializevarIntBigUint64(tag: number, value: bigint): void {
    this.tagLengthEncode(tag, WireType.varint, encodeVarInt(BigInt(value)));
  }

  serializeFixedInt32(tag: number, value: number): void {
    const ab = new ArrayBuffer(4);
    const dv = new DataView(ab);
    dv.setInt32(0, value, true);
    const buffer = new Uint8Array(ab);
    this.tagLengthEncode(tag, WireType.i32, buffer);
  }
  serializeFixedBigInt64(tag: number, value: bigint): void {
    const ab = new ArrayBuffer(8);
    const dv = new DataView(ab);
    dv.setBigInt64(0, value, true);
    const buffer = new Uint8Array(ab);
    this.tagLengthEncode(tag, WireType.i64, buffer);
  }
  serializeFixedUint32(tag: number, value: number): void {
    const ab = new ArrayBuffer(4);
    const dv = new DataView(ab);
    dv.setUint32(0, value, true);
    const buffer = new Uint8Array(ab);
    this.tagLengthEncode(tag, WireType.i32, buffer);
  }
  serializeFixedBigUint64(tag: number, value: bigint): void {
    const ab = new ArrayBuffer(8);
    const dv = new DataView(ab);
    dv.setBigUint64(0, value, true);
    const buffer = new Uint8Array(ab);
    this.tagLengthEncode(tag, WireType.i64, buffer);
  }

  serializeFloat32(tag: number, value: number): void {
    const ab = new ArrayBuffer(4);
    const dv = new DataView(ab);
    dv.setFloat32(0, value, true);
    const buffer = new Uint8Array(ab);
    this.tagLengthEncode(tag, WireType.i32, buffer);
  }
  serializeFloat64(tag: number, value: number): void {
    const ab = new ArrayBuffer(8);
    const dv = new DataView(ab);
    dv.setFloat64(0, value, true);
    const buffer = new Uint8Array(ab);
    this.tagLengthEncode(tag, WireType.i64, buffer);
  }

  private tagLengthEncodeWithLength(
    tag: number,
    type: WireType,
    length: number,
    bytes: Uint8Array,
  ) {
    const tagAndTypeRaw = (BigInt(tag) << 3n) | BigInt(type);
    const tagAndTypeEncoded = encodeVarInt(tagAndTypeRaw);
    const lengthEncoded = encodeVarInt(BigInt(length));
    this.bufferedDataView.setBytes(tagAndTypeEncoded);
    this.bufferedDataView.setBytes(lengthEncoded);
    this.bufferedDataView.setBytes(bytes);
  }

  serializeLenString(tag: number, value: string): void {
    const encodedUtf8 = new TextEncoder().encode(value);
    this.serializeLenBytes(tag, encodedUtf8);
  }

  serializeLenBytes(tag: number, value: Uint8Array): void {
    this.tagLengthEncodeWithLength(tag, WireType.len, value.byteLength, value);
  }

  serializeSubMessage(
    tag: number,
    value: (serializer: ProtobufSerializer) => void,
  ): void {
    // Create a new
    const temp = new ProtobufSerializerImpl(
      createBufferedDataView(new ArrayBuffer(1024 * 32), Endianess.little),
    );
    value(temp);
    const bytes = temp.toBytes();

    this.tagLengthEncodeWithLength(tag, WireType.len, bytes.byteLength, bytes);
  }

  toBytes(): Uint8Array {
    const length = this.bufferedDataView.readBytes;
    const bytes = new Uint8Array(length);
    bytes.set(new Uint8Array(this.bufferedDataView.arrayBuffer, 0, length));
    return bytes;
  }
}

/**
 * createProtobufSerializer is a function that returns an instance of a class
 * implements ProtobufSerializer utilizing the provided BufferedDataView.
 */
export function createProtobufSerializer(
  bufferedDataView: BufferedDataView,
): ProtobufSerializer {
  return new ProtobufSerializerImpl(bufferedDataView);
}

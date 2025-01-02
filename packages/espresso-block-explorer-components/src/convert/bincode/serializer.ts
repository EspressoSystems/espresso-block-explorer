import { BufferedDataView } from '../data_view/buffered_data_view';
import { Serializer } from '../serialization/serializer';

/**
 * BincodeSerializer represents a generalized Serializer for Bincode.
 */
export interface BincodeSerializer extends Serializer {
  toBytes(): Uint8Array;
}

/**
 * BincodeSerializerBase is a base class for BincodeSerializer.
 */
export abstract class BincodeSerializerBase implements BincodeSerializer {
  abstract serializeBoolean(input: boolean): void;
  abstract serializeUint8(input: number): void;
  abstract serializeUint16(input: number): void;
  abstract serializeUint32(input: number): void;
  abstract serializeUint64(input: bigint): void;
  abstract serializeInt8(input: number): void;
  abstract serializeInt16(input: number): void;
  abstract serializeInt32(input: number): void;
  abstract serializeInt64(input: bigint): void;
  abstract serializeFloat32(input: number): void;
  abstract serializeFloat64(input: number): void;

  abstract serializeStringUTF8(input: string): void;
  abstract serializeBytes(input: Uint8Array): void;
  abstract serializeChar(input: string): void;
  abstract serializeInt128(input: bigint): void;
  abstract serializeUint128(input: bigint): void;

  abstract toBytes(): Uint8Array;
}

/**
 * BincodeSerializerImpl is an implementation of BincodeSerializer utilizing a
 * BufferedDataView.
 */
class BincodeSerializerImpl extends BincodeSerializerBase {
  private readonly bufferedDataView: BufferedDataView;

  constructor(bufferedDataView: BufferedDataView) {
    super();
    this.bufferedDataView = bufferedDataView;
  }

  serializeBoolean(input: boolean) {
    return this.serializeUint8(input ? 1 : 0);
  }

  serializeUint8(input: number) {
    return this.bufferedDataView.setUint8(input);
  }

  serializeUint16(input: number) {
    return this.bufferedDataView.setUint16(input);
  }

  serializeUint32(input: number) {
    return this.bufferedDataView.setUint32(input);
  }

  serializeUint64(input: bigint) {
    return this.bufferedDataView.setUint64(input);
  }

  serializeInt8(input: number) {
    return this.bufferedDataView.setInt8(input);
  }

  serializeInt16(input: number) {
    return this.bufferedDataView.setInt16(input);
  }

  serializeInt32(input: number) {
    return this.bufferedDataView.setInt32(input);
  }

  serializeInt64(input: bigint) {
    return this.bufferedDataView.setInt64(input);
  }

  serializeFloat32(input: number) {
    return this.bufferedDataView.setFloat32(input);
  }

  serializeFloat64(input: number) {
    return this.bufferedDataView.setFloat64(input);
  }

  serializeStringUTF8(input: string) {
    const textEncoder = new TextEncoder();
    const bytes = textEncoder.encode(input);
    this.serializeUint64(BigInt(bytes.length));
    this.bufferedDataView.setBytes(bytes);
  }

  serializeBytes(input: Uint8Array) {
    const length = input.byteLength;
    this.serializeUint64(BigInt(length));
    return this.bufferedDataView.setBytes(input);
  }

  serializeChar(input: string): void {
    this.serializeUint8(input.charCodeAt(0));
  }

  serializeInt128(input: bigint): void {
    this.bufferedDataView.setInt128(input);
  }

  serializeUint128(input: bigint): void {
    this.bufferedDataView.setUint128(input);
  }

  toBytes(): Uint8Array {
    const length = this.bufferedDataView.readBytes;
    const bytes = new Uint8Array(length);
    bytes.set(new Uint8Array(this.bufferedDataView.arrayBuffer, 0, length));
    return bytes;
  }
}

/**
 * createBincodeSerializer is a function that returns an instance of a class
 * implements BincodeSerializer utilizing the provided BufferedDataView.
 * @param bufferedDataView The BufferedDataView to utilize for serialization.
 * @returns BincodeSerializer
 */
export function createBincodeSerializer(
  bufferedDataView: BufferedDataView,
): BincodeSerializer {
  return new BincodeSerializerImpl(bufferedDataView);
}

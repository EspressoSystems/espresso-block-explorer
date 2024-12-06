import { BufferedDataView } from '../data_view/buffered_data_view';
import { Deserializer } from '../serialization/deserializer';

/**
 * BincodeDeserializer represents a generalized Deserializer for Bincode.
 */
export interface BincodeDeserializer extends Deserializer {}

/**
 * BincodeDeserializerBase is a base class for BincodeDeserializer.
 */
export abstract class BincodeDeserializerBase implements BincodeDeserializer {
  abstract deserializeBoolean(): boolean;
  abstract deserializeInt8(): number;
  abstract deserializeInt16(): number;
  abstract deserializeInt32(): number;
  abstract deserializeInt64(): bigint;
  abstract deserializeUint8(): number;
  abstract deserializeUint16(): number;
  abstract deserializeUint32(): number;
  abstract deserializeUint64(): bigint;
  abstract deserializeFloat32(): number;
  abstract deserializeFloat64(): number;

  abstract deserializeStringUTF8(): string;
  abstract deserializeBytes(): Uint8Array;
  abstract deserializeChar(): string;
  abstract deserializeInt128(): bigint;
  abstract deserializeUint128(): bigint;
}

/**
 * BincodeDeserializerImpl is an implementation of BincodeDeserializer
 * utilizing a BufferedDataView.
 */
class BincodeDeserializerImpl
  extends BincodeDeserializerBase
  implements BincodeDeserializer
{
  private readonly bufferedDataView: BufferedDataView;

  constructor(bufferedDataView: BufferedDataView) {
    super();
    this.bufferedDataView = bufferedDataView;
  }

  deserializeBoolean(): boolean {
    return this.bufferedDataView.getBoolean();
  }

  deserializeInt8(): number {
    return this.bufferedDataView.getInt8();
  }

  deserializeInt16(): number {
    return this.bufferedDataView.getInt16();
  }

  deserializeInt32(): number {
    return this.bufferedDataView.getInt32();
  }

  deserializeInt64(): bigint {
    return this.bufferedDataView.getInt64();
  }

  deserializeUint8(): number {
    return this.bufferedDataView.getUint8();
  }

  deserializeUint16(): number {
    return this.bufferedDataView.getUint16();
  }

  deserializeUint32(): number {
    return this.bufferedDataView.getUint32();
  }

  deserializeUint64(): bigint {
    return this.bufferedDataView.getUint64();
  }

  deserializeFloat32(): number {
    return this.bufferedDataView.getFloat32();
  }

  deserializeFloat64(): number {
    return this.bufferedDataView.getFloat64();
  }

  deserializeStringUTF8(): string {
    const length = Number(this.deserializeUint64());
    const bytes = this.bufferedDataView.getBytes(length);
    return new TextDecoder().decode(bytes);
  }

  deserializeBytes(): Uint8Array {
    const length = Number(this.deserializeUint64());
    return this.bufferedDataView.getBytes(length);
  }

  deserializeChar(): string {
    return String.fromCharCode(this.deserializeUint8());
  }

  deserializeInt128(): bigint {
    return this.bufferedDataView.getInt128();
  }

  deserializeUint128(): bigint {
    return this.bufferedDataView.getUint128();
  }
}

/**
 * createBincodeDeserializer creates an instance of a class that implements
 * BincodeDeserializer given the BufferedDataView.
 *
 * @param {BufferedDataView} bufferedDataView The BufferedDataView to use for
 * deserialization.
 * @returns {BincodeDeserializer} a Bincode deserializer for deserializing
 * the bincode data format.
 */
export function createBincodeDeserializer(
  bufferedDataView: BufferedDataView,
): BincodeDeserializer {
  return new BincodeDeserializerImpl(bufferedDataView);
}

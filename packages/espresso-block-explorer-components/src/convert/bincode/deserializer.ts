import { BufferedDataView } from '../data_view/buffered_data_view';

/**
 * BincodeDeserializer represents a generalized Deserializer for Bincode.
 */
export interface BincodeDeserializer {
  deserializeUint8(): number;
  deserializeUint16(): number;
  deserializeUint32(): number;
  deserializeUint64(): bigint;
  deserializeInt8(): number;
  deserializeInt16(): number;
  deserializeInt32(): number;
  deserializeInt64(): bigint;
  deserializeFloat32(): number;
  deserializeFloat64(): number;

  deserializeStringUTF8(): string;
  deserializeBytes(): Uint8Array;
}

export abstract class BincodeDeserializerBase implements BincodeDeserializer {
  abstract deserializeUint8(): number;
  abstract deserializeUint16(): number;
  abstract deserializeUint32(): number;
  abstract deserializeUint64(): bigint;
  abstract deserializeInt8(): number;
  abstract deserializeInt16(): number;
  abstract deserializeInt32(): number;
  abstract deserializeInt64(): bigint;
  abstract deserializeFloat32(): number;
  abstract deserializeFloat64(): number;

  abstract deserializeStringUTF8(): string;
  abstract deserializeBytes(): Uint8Array;
}

class BincodeDeserializerImpl
  extends BincodeDeserializerBase
  implements BincodeDeserializer
{
  private readonly bufferedDataView: BufferedDataView;

  constructor(bufferedDataView: BufferedDataView) {
    super();
    this.bufferedDataView = bufferedDataView;
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
}

export function createBincodeDeserializer(
  bufferedDataView: BufferedDataView,
): BincodeDeserializer {
  return new BincodeDeserializerImpl(bufferedDataView);
}

import InvalidTypeError from '@/errors/invalid_type_error';
import UnimplementedError from '@/errors/unimplemented_error';
import { BufferedDataView } from '../data_view/buffered_data_view';
import { Deserializer } from '../serialization/deserializer';

/**
 * RLPDeserializer represents a generalized Deserializer for Bincode.
 */
export interface RLPDeserializer extends Deserializer {
  deserializeUnknown(): number | Uint8Array;
  // deserializeList(): unknown[];
}

/**
 * RLPDeserializerBase is a base class for RLPDeserializer.
 */
export abstract class RLPDeserializerBase implements RLPDeserializer {
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

  abstract deserializeUnknown(): number | Uint8Array;
}

/**
 * RLPDeserializerImpl is an implementation of RLPDeserializer
 * utilizing a BufferedDataView.
 */
class RLPDeserializerImpl
  extends RLPDeserializerBase
  implements RLPDeserializer
{
  private readonly bufferedDataView: BufferedDataView;

  constructor(bufferedDataView: BufferedDataView) {
    super();
    this.bufferedDataView = bufferedDataView;
  }

  deserializeBoolean(): boolean {
    const result = this.deserializeUnknown();
    if (result instanceof Uint8Array) {
      const number = this.deserializePositiveNumber(result);
      return number !== 0n;
    }

    if (typeof result !== 'number') {
      throw new InvalidTypeError(typeof result, 'number');
    }

    return result !== 0;
  }

  deserializeInt8(): number {
    const result = this.deserializeUnknown();
    if (typeof result !== 'number') {
      throw new InvalidTypeError(typeof result, 'number');
    }

    if (result < -128 || result > 127) {
      throw new InvalidTypeError(
        typeof result,
        'number',
        'number not in range of -128 to 127',
      );
    }

    return result;
  }

  deserializeInt16(): number {
    const result = this.deserializeUnknown();
    if (typeof result === 'number') {
      throw new InvalidTypeError(typeof result, 'Uint8Array');
    }

    throw new UnimplementedError();
  }

  deserializeInt32(): number {
    const result = this.deserializeUnknown();
    if (typeof result === 'number') {
      throw new InvalidTypeError(typeof result, 'Uint8Array');
    }

    throw new UnimplementedError();
  }

  deserializeInt64(): bigint {
    const result = this.deserializeUnknown();
    if (typeof result === 'number') {
      throw new InvalidTypeError(typeof result, 'Uint8Array');
    }

    throw new UnimplementedError();
  }

  /**
   * performBoundsCheck checks if the value is within the specified bounds.
   *
   * @param {bigint | number} value The value to check.
   * @param {bigint | number} min The minimum value (inclusive).
   * @param {bigint | number} max The maximum value (inclusive).
   * @throws {InvalidTypeError} If the value is out of bounds.
   */
  performBoundsCheck(value: bigint, min: bigint, max: bigint): void;
  performBoundsCheck(value: number, min: number, max: number): void;
  performBoundsCheck(
    value: bigint | number,
    min: bigint | number,
    max: bigint | number,
  ): void {
    if (value < min || value > max) {
      throw new InvalidTypeError(
        typeof value,
        'Uint8Array',
        `number must be in range of ${min} to ${max}`,
      );
    }
  }

  deserializeUint8(): number {
    const result = this.deserializeUnknown();
    if (typeof result === 'number') {
      this.performBoundsCheck(result, 0, 0xff);
      return result;
    }

    const num = this.deserializePositiveNumber(result);
    this.performBoundsCheck(num, 0n, 0xffn);
    return Number(num);
  }

  deserializeUint16(): number {
    const result = this.deserializeUnknown();
    if (typeof result === 'number') {
      this.performBoundsCheck(result, 0, 0xffff);
      return result;
    }

    const num = this.deserializePositiveNumber(result);
    this.performBoundsCheck(num, 0n, 0xffffn);
    return Number(num);
  }

  deserializeUint32(): number {
    const result = this.deserializeUnknown();
    if (typeof result === 'number') {
      this.performBoundsCheck(result, 0, 0xffffffff);
      return result;
    }

    const num = this.deserializePositiveNumber(result);
    this.performBoundsCheck(num, 0n, 0xffffffffn);
    return Number(num);
  }

  deserializeUint64(): bigint {
    const result = this.deserializeUnknown();
    if (typeof result === 'number') {
      // NOTE: This is a bit of a hack, as Uint64 should not be represented
      // as a number, but we are doing this to maintain compatibility with
      // existing code that expects a number.
      //
      // This bounds check doesn't cover the full range of Uint64, but instead
      // covers the range representable by a double floating point number (f64)
      this.performBoundsCheck(result, 0, 0xfffffffffffff);
      return BigInt(result);
    }

    const num = this.deserializePositiveNumber(result);
    this.performBoundsCheck(num, 0n, 0xffffffffffffffffn);
    return num;
  }

  deserializeFloat32(): number {
    const result = this.deserializeUnknown();
    if (typeof result === 'number') {
      throw new InvalidTypeError(typeof result, 'Uint8Array');
    }
    throw new UnimplementedError();
  }

  deserializeFloat64(): number {
    const result = this.deserializeUnknown();
    if (typeof result === 'number') {
      throw new InvalidTypeError(typeof result, 'Uint8Array');
    }
    throw new UnimplementedError();
  }

  deserializeStringUTF8(): string {
    const result = this.deserializeUnknown();
    if (!(result instanceof Uint8Array) && typeof result !== 'number') {
      throw new InvalidTypeError(
        typeof result,
        'Uint8Array',
        'expected a Uint8Array for UTF-8 string deserialization',
      );
    }

    if (typeof result === 'number') {
      const bytes = this.bufferedDataView.getBytes(Number(length));
      return new TextDecoder('utf-8').decode(bytes);
    }

    return new TextDecoder('utf-8').decode(result);
  }

  deserializeBytes(): Uint8Array {
    const result = this.deserializeUnknown();
    if (!(result instanceof Uint8Array) && typeof result !== 'number') {
      throw new InvalidTypeError(
        typeof result,
        'Uint8Array',
        'expected a Uint8Array for bytes deserialization',
      );
    }

    if (typeof result === 'number') {
      // We read the length byte first?
      return this.bufferedDataView.getBytes(Number(length));
    }

    return new Uint8Array(result);
  }

  deserializeChar(): string {
    return String.fromCharCode(this.deserializeUint8());
  }

  deserializeInt128(): bigint {
    throw new UnimplementedError();
    // return this.bufferedDataView.getInt128();
  }

  deserializeUint128(): bigint {
    const result = this.deserializeUnknown();
    if (typeof result === 'number') {
      return BigInt(result);
    }

    if (result instanceof Uint8Array) {
      return this.deserializePositiveNumber(result);
    }

    if (typeof result !== 'bigint') {
      throw new InvalidTypeError(typeof result, 'bigint');
    }

    return result;
  }

  deserializePositiveNumber(incoming: Uint8Array): bigint {
    // This will be a Big-Endian encoded number whose leading zeroes are
    // truncated.
    //
    // We expect the length of the encoding not to exceed 8 bytes.
    const buffer = new Uint8Array(8);
    const dv = new DataView(buffer.buffer);
    const lengthDifference = buffer.length - incoming.length;

    // copy the incoming buffer into our new buffer filling it to the end
    // leaving leading zeroes where it does not overlap.
    for (let i = 0; i < incoming.length; i++) {
      dv.setUint8(i + lengthDifference, incoming[i]);
    }

    return dv.getBigUint64(0, false);
  }

  deserializeUnknown(): number | Uint8Array {
    const byte = this.bufferedDataView.getUint8();
    if (byte >= 0x00 && byte <= 0x7f) {
      // Single byte integer
      return byte;
    }

    if (byte >= 0x80 && byte <= 0xb7) {
      // String or bytes
      const length = byte - 0x80;
      return this.bufferedDataView.getBytes(length);
    }

    if (byte >= 0xb8 && byte <= 0xbf) {
      // String or bytes with length prefix
      const lengthSize = byte - 0xb7;
      // lengthBytes will bit a big endian encoded length, whose leading zeros
      // are truncated.
      const lengthBytes = this.bufferedDataView.getBytes(lengthSize);
      const length = this.deserializePositiveNumber(lengthBytes);
      return this.bufferedDataView.getBytes(Number(length));
    }

    if (byte >= 0xc0 && byte <= 0xf7) {
      // List with length prefix
      const length = byte - 0xc0;

      // This is the sub list of the entry
      const bytes = this.bufferedDataView.getBytes(length);
      // We don't quite know how to process this yet, so we'll return it as is.

      return bytes;
    }

    // If we reach here, it is a list with length prefix
    const lengthSize = byte - 0xf7;
    const lengthBytes = this.bufferedDataView.getBytes(lengthSize);
    const length = this.deserializePositiveNumber(lengthBytes);

    // This is the sub list of the entry
    const bytes = this.bufferedDataView.getBytes(Number(length));
    // We don't quite know how to process this yet, so we'll return it as is.

    return bytes;
  }
}

/**
 * createRLPDeserializer creates an instance of a class that implements
 * RLPDeserializer given the BufferedDataView.
 *
 * @param {BufferedDataView} bufferedDataView The BufferedDataView to use for
 * deserialization.
 * @returns {RLPDeserializer} a Bincode deserializer for deserializing
 * the bincode data format.
 */
export function createRLPDeserializer(
  bufferedDataView: BufferedDataView,
): RLPDeserializer {
  return new RLPDeserializerImpl(bufferedDataView);
}

import { assert, assertInstanceOf, assertType } from '@/assert/assert';
import { WireType } from './types';
import { decodeVarInt } from './varint';

/**
 * ProtobufDeserializer represents a generalized Serializer for Protobuf.
 */
export interface ProtobufDeserializer {
  deserializeVarIntInt8(tag: number): number;
  deserializeVarIntInt16(tag: number): number;
  deserializeVarIntInt32(tag: number): number;
  deserializeVarIntBigInt64(tag: number): bigint;
  deserializeVarIntUint8(tag: number): number;
  deserializeVarIntUint16(tag: number): number;
  deserializeVarIntUint32(tag: number): number;
  deserializevarIntBigUint64(tag: number): bigint;

  deserializeFixedInt32(tag: number): number;
  deserializeFixedBigInt64(tag: number): bigint;
  deserializeFixedUint32(tag: number): number;
  deserializeFixedBigUint64(tag: number): bigint;

  deserializeFloat32(tag: number): number;
  deserializeFloat64(tag: number): number;

  deserializeLenString(tag: number): string;
  deserializeLenBytes(tag: number): Uint8Array;

  // sub message encoding, provided for convenience, but it's essentially
  // the same thing.

  deserializeSubMessage(tag: number): ProtobufDeserializer;
}

/**
 * ProtobufDeserializerBase is a base class for ProtobufDeserializer.
 */
export abstract class ProtobufDeserializerBase implements ProtobufDeserializer {
  abstract deserializeVarIntInt8(tag: number): number;
  abstract deserializeVarIntInt16(tag: number): number;
  abstract deserializeVarIntInt32(tag: number): number;
  abstract deserializeVarIntBigInt64(tag: number): bigint;
  abstract deserializeVarIntUint8(tag: number): number;
  abstract deserializeVarIntUint16(tag: number): number;
  abstract deserializeVarIntUint32(tag: number): number;
  abstract deserializevarIntBigUint64(tag: number): bigint;

  abstract deserializeFixedInt32(tag: number): number;
  abstract deserializeFixedBigInt64(tag: number): bigint;
  abstract deserializeFixedUint32(tag: number): number;
  abstract deserializeFixedBigUint64(tag: number): bigint;

  abstract deserializeFloat32(tag: number): number;
  abstract deserializeFloat64(tag: number): number;

  abstract deserializeLenString(tag: number): string;
  abstract deserializeLenBytes(tag: number): Uint8Array;

  abstract deserializeSubMessage(tag: number): ProtobufDeserializer;
}

interface ProtobufDeserializeAtom<
  Type extends WireType,
  Data,
  Tag extends number = number,
> {
  tag: Tag;
  type: Type;
  data: Data;
}

type ProtobufDeserializeEntry =
  | ProtobufDeserializeAtom<WireType.varint, bigint>
  | ProtobufDeserializeAtom<WireType.i32, Uint8Array>
  | ProtobufDeserializeAtom<WireType.i64, Uint8Array>
  | ProtobufDeserializeAtom<WireType.len, Uint8Array>
  | ProtobufDeserializeAtom<WireType.sgroup, undefined>
  | ProtobufDeserializeAtom<WireType.egroup, undefined>;

class ProtobufDeserializerIterable implements Iterable<ProtobufDeserializeEntry> {
  constructor(private readonly bytes: Uint8Array) {}

  [Symbol.iterator]() {
    return new ProtobufDeserializerIterator(this.bytes);
  }
}

class ProtobufDeserializerIterator implements Iterator<ProtobufDeserializeEntry> {
  private offset: number = 0;

  constructor(private readonly bytes: Uint8Array) {}

  next(): IteratorResult<ProtobufDeserializeEntry> {
    if (this.offset >= this.bytes.byteLength) {
      return { done: true, value: undefined };
    }

    const dv = new DataView(this.bytes.buffer, this.bytes.byteOffset);

    // get the next varint, to determine the tag, and wire type.
    const tagResult = decodeVarInt(dv, this.offset);
    this.offset += tagResult.bytesRead;

    const wireType = Number(tagResult.number & 0x07n) as WireType;
    const tagNumber = Number(tagResult.number >> 3n);

    switch (wireType) {
      case WireType.varint: {
        const valueResult = decodeVarInt(dv, this.offset);
        this.offset += valueResult.bytesRead;

        return {
          done: false,
          value: { tag: tagNumber, type: wireType, data: valueResult.number },
        };
      }

      case WireType.sgroup:
      /* falls through */
      case WireType.egroup:
        return {
          done: false,
          value: { tag: tagNumber, type: wireType, data: undefined },
        };

      case WireType.i32: {
        const data = this.bytes.subarray(this.offset, this.offset + 4);
        this.offset += 4;

        return {
          done: false,
          value: { tag: tagNumber, type: wireType, data },
        };
      }

      case WireType.i64: {
        const data = this.bytes.subarray(this.offset, this.offset + 8);
        this.offset += 8;

        return {
          done: false,
          value: { tag: tagNumber, type: wireType, data },
        };
      }

      case WireType.len: {
        // We need to read the length of the data next.
        const lenResult = decodeVarInt(
          new DataView(this.bytes.buffer, this.bytes.byteOffset),
          this.offset,
        );
        this.offset += lenResult.bytesRead;
        const len = Number(lenResult.number);
        if (this.offset + len > this.bytes.byteLength) {
          // This will cause us to overflow our buffer.
          throw new Error(
            `expected ${len} of bytes to be available, only see ${this.bytes.byteLength - this.offset} available`,
          );
        }
        const data = this.bytes.subarray(this.offset, this.offset + len);
        this.offset += len;

        return {
          done: false,
          value: { tag: tagNumber, type: wireType, data },
        };
      }

      default:
        throw new Error(`Unsupported wire type: ${wireType}`);
    }
  }
}

/**
 * ProtobufDeserializerImpl is an implementation of ProtobufDeserializer
 * utilizing a ProtobufDeserializerIterable to perform deserialization.  It
 * will read through the given iterable and store the entries in a map for
 * easy retrieval / lookup.  As a result, it preovides the ability to
 * perform random access deserialization as needed.
 *
 */
class ProtobufDeserializerImpl extends ProtobufDeserializerBase {
  private entries: Map<number, ProtobufDeserializeEntry[]> = new Map();
  constructor(iterable: ProtobufDeserializerIterable) {
    super();

    // perform deserialization results
    for (const entry of iterable) {
      this.entries.set(entry.tag, [
        ...(this.entries.get(entry.tag) ?? []),
        entry,
      ]);
    }
  }

  private retrieveEntriesForTagNumber(tag: number): ProtobufDeserializeEntry[] {
    const raw = this.entries.get(tag);
    if (!raw) {
      throw new Error(`Tag ${tag} not found`);
    }

    return raw;
  }

  private retrieveLastEntryForTagNumber(tag: number): ProtobufDeserializeEntry {
    const entries = this.retrieveEntriesForTagNumber(tag);
    return entries[entries.length - 1];
  }

  private retrieveLastVarIntForTagNumber<Tag extends number = number>(
    tag: Tag,
  ): ProtobufDeserializeAtom<WireType.varint, bigint, Tag> {
    const entry = this.retrieveLastEntryForTagNumber(tag);
    assert(
      entry.type === WireType.varint,
      `expected varint wire type for tag ${tag}, got ${entry.type}`,
    );
    assertType(entry.data, 'bigint');
    assert(entry.tag === tag);

    return entry as ProtobufDeserializeAtom<WireType.varint, bigint, Tag>;
  }

  // Signed Integer Encoding

  deserializeVarIntInt8(tag: number): number {
    const entry = this.retrieveLastVarIntForTagNumber(tag);
    return Number(BigInt.asIntN(8, entry.data));
  }
  deserializeVarIntInt16(tag: number): number {
    const entry = this.retrieveLastVarIntForTagNumber(tag);
    return Number(BigInt.asIntN(16, entry.data));
  }
  deserializeVarIntInt32(tag: number): number {
    const entry = this.retrieveLastVarIntForTagNumber(tag);
    return Number(BigInt.asIntN(32, entry.data));
  }
  deserializeVarIntBigInt64(tag: number): bigint {
    const entry = this.retrieveLastVarIntForTagNumber(tag);
    return BigInt.asIntN(64, entry.data);
  }

  // Unsigned Integer Encoding

  deserializeVarIntUint8(tag: number): number {
    const entry = this.retrieveLastVarIntForTagNumber(tag);
    return Number(BigInt.asUintN(8, entry.data));
  }
  deserializeVarIntUint16(tag: number): number {
    const entry = this.retrieveLastVarIntForTagNumber(tag);
    return Number(BigInt.asUintN(16, entry.data));
  }
  deserializeVarIntUint32(tag: number): number {
    const entry = this.retrieveLastVarIntForTagNumber(tag);
    return Number(BigInt.asUintN(32, entry.data));
  }
  deserializevarIntBigUint64(tag: number): bigint {
    const entry = this.retrieveLastVarIntForTagNumber(tag);
    return BigInt.asUintN(64, entry.data);
  }

  private retrieveLastI32ForTagNumber<Tag extends number = number>(
    tag: Tag,
  ): ProtobufDeserializeAtom<WireType.i32, Uint8Array, Tag> {
    const entry = this.retrieveLastEntryForTagNumber(tag);
    assert(
      entry.type === WireType.i32,
      `expected varint wire type for tag ${tag}, got ${entry.type}`,
    );
    assertInstanceOf(entry.data, Uint8Array);
    assert(entry.tag === tag);

    return entry as ProtobufDeserializeAtom<WireType.i32, Uint8Array, Tag>;
  }

  private retrieveLastI64ForTagNumber<Tag extends number = number>(
    tag: Tag,
  ): ProtobufDeserializeAtom<WireType.i64, Uint8Array, Tag> {
    const entry = this.retrieveLastEntryForTagNumber(tag);
    assert(
      entry.type === WireType.i64,
      `expected varint wire type for tag ${tag}, got ${entry.type}`,
    );
    assertInstanceOf(entry.data, Uint8Array);
    assert(entry.tag === tag);

    return entry as ProtobufDeserializeAtom<WireType.i64, Uint8Array, Tag>;
  }

  deserializeFixedInt32(tag: number): number {
    const entry = this.retrieveLastI32ForTagNumber(tag);
    const dv = new DataView(entry.data.buffer, entry.data.byteOffset);
    return dv.getInt32(0, true);
  }
  deserializeFixedBigInt64(tag: number): bigint {
    const entry = this.retrieveLastI64ForTagNumber(tag);
    const dv = new DataView(entry.data.buffer, entry.data.byteOffset);
    return dv.getBigInt64(0, true);
  }
  deserializeFixedUint32(tag: number): number {
    const entry = this.retrieveLastI32ForTagNumber(tag);
    const dv = new DataView(entry.data.buffer, entry.data.byteOffset);
    return dv.getUint32(0, true);
  }
  deserializeFixedBigUint64(tag: number): bigint {
    const entry = this.retrieveLastI64ForTagNumber(tag);
    const dv = new DataView(entry.data.buffer, entry.data.byteOffset);
    return dv.getBigUint64(0, true);
  }

  deserializeFloat32(tag: number): number {
    const entry = this.retrieveLastI32ForTagNumber(tag);
    const dv = new DataView(entry.data.buffer, entry.data.byteOffset);
    return dv.getFloat32(0, true);
  }
  deserializeFloat64(tag: number): number {
    const entry = this.retrieveLastI64ForTagNumber(tag);
    const dv = new DataView(entry.data.buffer, entry.data.byteOffset);
    return dv.getFloat64(0, true);
  }

  private retrieveLastLenForTagNumber<Tag extends number = number>(
    tag: Tag,
  ): ProtobufDeserializeAtom<WireType.len, Uint8Array, Tag> {
    const entry = this.retrieveLastEntryForTagNumber(tag);
    assert(
      entry.type === WireType.len,
      `expected varint wire type for tag ${tag}, got ${entry.type}`,
    );
    assertInstanceOf(entry.data, Uint8Array);
    assert(entry.tag === tag);

    return entry as ProtobufDeserializeAtom<WireType.len, Uint8Array, Tag>;
  }

  deserializeLenString(tag: number): string {
    const entry = this.retrieveLastLenForTagNumber(tag);
    const decoder = new TextDecoder();
    return decoder.decode(entry.data);
  }

  deserializeLenBytes(tag: number): Uint8Array {
    const entry = this.retrieveLastLenForTagNumber(tag);
    return entry.data;
  }

  deserializeSubMessage(tag: number): ProtobufDeserializer {
    const bytes = this.deserializeLenBytes(tag);
    return new ProtobufDeserializerImpl(
      new ProtobufDeserializerIterable(bytes),
    );
  }
}

/**
 * createProtobufDeserializer is a function that returns an instance of a class
 * implements ProtobufDeserializer utilizing the provided Uint8Array.
 */
export function createProtobufDeserializer(
  bytes: Uint8Array,
): ProtobufDeserializer {
  return new ProtobufDeserializerImpl(new ProtobufDeserializerIterable(bytes));
}

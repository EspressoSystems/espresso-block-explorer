import { Endianess } from './endianess';

/**
 * BufferedDataView is a wrapper around DataView that automatically keeps
 * track of the current byte offset, and advances it after every get call.
 *
 * Additionally, it is supplied the Endianess ahead of time, so that it can
 * automatically handle the endianess of the data.
 */
export interface BufferedDataView {
  get endianess(): Endianess;
  get readBytes(): number;
  get dataView(): DataView;
  get arrayBuffer(): ArrayBuffer;

  reset(offset?: number): void;

  changeEndianess(endianess: Endianess): void;

  getUint8(): number;
  getUint16(): number;
  getUint32(): number;
  getUint64(): bigint;
  getInt8(): number;
  getInt16(): number;
  getInt32(): number;
  getInt64(): bigint;
  getFloat32(): number;
  getFloat64(): number;

  getBytes(length: number): Uint8Array;

  setUint8(input: number): void;
  setUint16(input: number): void;
  setUint32(input: number): void;
  setUint64(input: bigint): void;
  setInt8(input: number): void;
  setInt16(input: number): void;
  setInt32(input: number): void;
  setInt64(input: bigint): void;
  setFloat32(input: number): void;
  setFloat64(input: number): void;

  setBytes(input: Uint8Array): void;
}

/**
 * BufferedDataViewBase is the base class for BufferedDataView.  It doesn't
 * have any constructor, or implementation details, and is used for type
 * checking.
 */
export abstract class BufferedDataViewBase implements BufferedDataView {
  abstract get endianess(): Endianess;
  abstract get readBytes(): number;
  abstract get dataView(): DataView;
  abstract get arrayBuffer(): ArrayBuffer;
  abstract reset(offset?: number): void;
  abstract changeEndianess(endianess: Endianess): void;
  abstract getUint16(): number;
  abstract getUint8(): number;
  abstract getUint32(): number;
  abstract getUint64(): bigint;
  abstract getInt8(): number;
  abstract getInt16(): number;
  abstract getInt32(): number;
  abstract getInt64(): bigint;
  abstract getFloat32(): number;
  abstract getFloat64(): number;

  abstract getBytes(length: number): Uint8Array;

  abstract setUint8(input: number): void;
  abstract setUint16(input: number): void;
  abstract setUint32(input: number): void;
  abstract setUint64(input: bigint): void;
  abstract setInt8(input: number): void;
  abstract setInt16(input: number): void;
  abstract setInt32(input: number): void;
  abstract setInt64(input: bigint): void;
  abstract setFloat32(input: number): void;
  abstract setFloat64(input: number): void;

  abstract setBytes(input: Uint8Array): void;
}

class BufferedDataViewImpl extends BufferedDataViewBase {
  readonly dataView: DataView;
  private currentEndianess: Endianess;
  private offset: number;

  get readBytes(): number {
    return this.offset;
  }

  get endianess(): Endianess {
    return this.currentEndianess;
  }

  get arrayBuffer(): ArrayBuffer {
    return this.dataView.buffer;
  }

  constructor(
    buffer: ArrayBuffer,
    endianess: Endianess,
    startingOffset: number = 0,
  ) {
    super();
    this.dataView = new DataView(buffer);
    this.currentEndianess = endianess;
    this.offset = startingOffset;
  }

  reset(offset: number = 0): void {
    this.offset = offset;
  }

  changeEndianess(endianess: Endianess): void {
    this.currentEndianess = endianess;
  }

  getUint8(): number {
    try {
      return this.dataView.getUint8(this.offset);
    } finally {
      this.offset += 1;
    }
  }

  getUint16(): number {
    try {
      return this.dataView.getUint16(
        this.offset,
        this.currentEndianess.isLittleEndian,
      );
    } finally {
      this.offset += 2;
    }
  }

  getUint32(): number {
    try {
      return this.dataView.getUint32(
        this.offset,
        this.currentEndianess.isLittleEndian,
      );
    } finally {
      this.offset += 4;
    }
  }

  getUint64(): bigint {
    try {
      return this.dataView.getBigUint64(
        this.offset,
        this.currentEndianess.isLittleEndian,
      );
    } finally {
      this.offset += 8;
    }
  }

  getInt8(): number {
    try {
      return this.dataView.getInt8(this.offset);
    } finally {
      this.offset += 1;
    }
  }

  getInt16(): number {
    try {
      return this.dataView.getInt16(
        this.offset,
        this.currentEndianess.isLittleEndian,
      );
    } finally {
      this.offset += 2;
    }
  }

  getInt32(): number {
    try {
      return this.dataView.getInt32(
        this.offset,
        this.currentEndianess.isLittleEndian,
      );
    } finally {
      this.offset += 4;
    }
  }

  getInt64(): bigint {
    try {
      return this.dataView.getBigInt64(
        this.offset,
        this.currentEndianess.isLittleEndian,
      );
    } finally {
      this.offset += 8;
    }
  }

  getFloat32(): number {
    try {
      return this.dataView.getFloat32(
        this.offset,
        this.currentEndianess.isLittleEndian,
      );
    } finally {
      this.offset += 4;
    }
  }

  getFloat64(): number {
    try {
      return this.dataView.getFloat64(
        this.offset,
        this.currentEndianess.isLittleEndian,
      );
    } finally {
      this.offset += 8;
    }
  }

  getBytes(length: number): Uint8Array {
    try {
      const bytes = new Uint8Array(length);
      bytes.set(new Uint8Array(this.dataView.buffer, this.offset, length));
      return bytes;
    } finally {
      this.offset += length;
    }
  }

  setUint8(input: number): void {
    try {
      this.dataView.setUint8(this.offset, input);
    } finally {
      this.offset += 1;
    }
  }

  setUint16(input: number): void {
    try {
      this.dataView.setUint16(
        this.offset,
        input,
        this.currentEndianess.isLittleEndian,
      );
    } finally {
      this.offset += 2;
    }
  }

  setUint32(input: number): void {
    try {
      this.dataView.setUint32(
        this.offset,
        input,
        this.currentEndianess.isLittleEndian,
      );
    } finally {
      this.offset += 4;
    }
  }

  setUint64(input: bigint): void {
    try {
      this.dataView.setBigUint64(
        this.offset,
        input,
        this.currentEndianess.isLittleEndian,
      );
    } finally {
      this.offset += 8;
    }
  }

  setInt8(input: number): void {
    try {
      this.dataView.setInt8(this.offset, input);
    } finally {
      this.offset += 1;
    }
  }

  setInt16(input: number): void {
    try {
      this.dataView.setInt16(
        this.offset,
        input,
        this.currentEndianess.isLittleEndian,
      );
    } finally {
      this.offset += 2;
    }
  }

  setInt32(input: number): void {
    try {
      this.dataView.setInt32(
        this.offset,
        input,
        this.currentEndianess.isLittleEndian,
      );
    } finally {
      this.offset += 4;
    }
  }

  setInt64(input: bigint): void {
    try {
      this.dataView.setBigInt64(
        this.offset,
        input,
        this.currentEndianess.isLittleEndian,
      );
    } finally {
      this.offset += 8;
    }
  }

  setFloat32(input: number): void {
    try {
      this.dataView.setFloat32(
        this.offset,
        input,
        this.currentEndianess.isLittleEndian,
      );
    } finally {
      this.offset += 4;
    }
  }

  setFloat64(input: number): void {
    try {
      this.dataView.setFloat64(
        this.offset,
        input,
        this.currentEndianess.isLittleEndian,
      );
    } finally {
      this.offset += 8;
    }
  }

  setBytes(input: Uint8Array): void {
    try {
      new Uint8Array(this.dataView.buffer, this.offset, input.length).set(
        input,
      );
    } finally {
      this.offset += input.length;
    }
  }
}

/**
 * createBufferedDataView is a factory function for creating a new
 * BufferedDataView.
 */
export function createBufferedDataView(
  buffer: ArrayBuffer,
  endianess: Endianess,
  startingOffset: number = 0,
): BufferedDataView {
  return new BufferedDataViewImpl(buffer, endianess, startingOffset);
}

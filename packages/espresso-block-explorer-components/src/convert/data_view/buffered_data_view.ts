import UnimplementedError from '@/errors/unimplemented_error';
import { uint8ArrayToArrayBufferCodec } from '../codec/uint8_array';
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

  getBoolean(): boolean;
  getUint8(): number;
  getUint16(): number;
  getUint32(): number;
  getBigUint64(): bigint;
  getInt8(): number;
  getInt16(): number;
  getInt32(): number;
  getBigInt64(): bigint;
  getFloat32(): number;
  getFloat64(): number;
  getBigInt128(): bigint;
  getBigUint128(): bigint;
  getBigInt256(): bigint;
  getBigUint256(): bigint;
  getBigInt512(): bigint;
  getBigUint512(): bigint;

  getBytes(length: number): Uint8Array;

  setBoolean(input: boolean): void;
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
  setBigInt128(input: bigint): void;
  setBigUint128(input: bigint): void;
  setBigInt256(input: bigint): void;
  setBigUint256(input: bigint): void;
  setBigInt512(input: bigint): void;
  setBigUint512(input: bigint): void;

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
  abstract getBoolean(): boolean;
  abstract getInt8(): number;
  abstract getInt16(): number;
  abstract getInt32(): number;
  abstract getBigInt64(): bigint;
  abstract getUint8(): number;
  abstract getUint16(): number;
  abstract getUint32(): number;
  abstract getBigUint64(): bigint;
  abstract getFloat32(): number;
  abstract getFloat64(): number;
  abstract getBigInt128(): bigint;
  abstract getBigUint128(): bigint;
  abstract getBigInt256(): bigint;
  abstract getBigUint256(): bigint;
  abstract getBigInt512(): bigint;
  abstract getBigUint512(): bigint;

  abstract getBytes(length: number): Uint8Array;

  abstract setBoolean(input: boolean): void;
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
  abstract setBigInt128(input: bigint): void;
  abstract setBigUint128(input: bigint): void;
  abstract setBigInt256(input: bigint): void;
  abstract setBigUint256(input: bigint): void;
  abstract setBigInt512(input: bigint): void;
  abstract setBigUint512(input: bigint): void;

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
    return uint8ArrayToArrayBufferCodec.encode(
      new Uint8Array(this.dataView.buffer),
    );
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

  getBoolean(): boolean {
    try {
      return this.dataView.getUint8(this.offset) !== 0;
    } finally {
      this.offset += 1;
    }
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

  getBigUint64(): bigint {
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

  getBigInt64(): bigint {
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

  private createIndexFunction(numBytes: number, fromEnd: boolean) {
    if (!fromEnd) {
      return (offset: number, index: number) => {
        return offset + index;
      };
    }

    return (offset: number, index: number) => {
      return offset + numBytes - 1 - index;
    };
  }

  private createEncodeIndexFunction(numBytes: number, endianess: Endianess) {
    return this.createIndexFunction(numBytes, !endianess.isLittleEndian);
  }

  private createDecodeIndexFunction(numBytes: number, endianess: Endianess) {
    return this.createIndexFunction(numBytes, endianess.isLittleEndian);
  }

  private getBigUintN(bits: number): bigint {
    const numBytes = bits / 8;
    if (!Number.isInteger(numBytes) || numBytes <= 0) {
      throw new UnimplementedError();
    }

    try {
      let local = 0n;
      const offsetFn = this.createDecodeIndexFunction(
        numBytes,
        this.currentEndianess,
      );

      for (let i = 0; i < numBytes; i++) {
        const value = BigInt.asUintN(
          8,
          BigInt(this.dataView.getUint8(offsetFn(this.offset, i))),
        );
        local = (local << 8n) | value;
      }

      return BigInt.asUintN(bits, local);
    } finally {
      this.offset += numBytes;
    }
  }

  private getBigIntN(bits: number): bigint {
    return BigInt.asIntN(bits, this.getBigUintN(bits));
  }

  getBigInt128(): bigint {
    return this.getBigIntN(128);
  }

  getBigUint128(): bigint {
    return this.getBigUintN(128);
  }

  getBigInt256(): bigint {
    return this.getBigIntN(256);
  }

  getBigUint256(): bigint {
    return this.getBigUintN(256);
  }

  getBigInt512(): bigint {
    return this.getBigIntN(512);
  }

  getBigUint512(): bigint {
    return this.getBigUintN(512);
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

  setBoolean(input: boolean): void {
    try {
      this.dataView.setUint8(this.offset, input ? 1 : 0);
    } finally {
      this.offset += 1;
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

  private setBigIntN(input: bigint, bits: number) {
    const trunc = BigInt.asIntN(bits, input);
    return this.setBigUintN(trunc, bits);
  }

  private setBigUintN(input: bigint, bits: number) {
    const numBytes = bits / 8;
    if (!Number.isInteger(numBytes)) {
      throw new UnimplementedError();
    }

    try {
      const trunc = BigInt.asUintN(bits, input);
      let local = trunc;
      const offsetFn = this.createEncodeIndexFunction(
        numBytes,
        this.currentEndianess,
      );

      for (let i = 0; i < numBytes; i++) {
        const value = local & 0xffn;
        local >>= 8n;
        this.dataView.setUint8(offsetFn(this.offset, i), Number(value));
      }
    } finally {
      this.offset += numBytes;
    }
  }

  setBigInt128(input: bigint): void {
    this.setBigIntN(input, 128);
  }

  setBigUint128(input: bigint): void {
    this.setBigUintN(input, 128);
  }

  setBigInt256(input: bigint): void {
    this.setBigIntN(input, 256);
  }

  setBigUint256(input: bigint): void {
    this.setBigUintN(input, 256);
  }

  setBigInt512(input: bigint): void {
    this.setBigIntN(input, 512);
  }

  setBigUint512(input: bigint): void {
    this.setBigUintN(input, 512);
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

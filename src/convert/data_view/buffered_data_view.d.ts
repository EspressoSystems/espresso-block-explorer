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
    getUint64(): bigint;
    getInt8(): number;
    getInt16(): number;
    getInt32(): number;
    getInt64(): bigint;
    getFloat32(): number;
    getFloat64(): number;
    getInt128(): bigint;
    getUint128(): bigint;
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
    setInt128(input: bigint): void;
    setUint128(input: bigint): void;
    setBytes(input: Uint8Array): void;
}
/**
 * BufferedDataViewBase is the base class for BufferedDataView.  It doesn't
 * have any constructor, or implementation details, and is used for type
 * checking.
 */
export declare abstract class BufferedDataViewBase implements BufferedDataView {
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
    abstract getInt64(): bigint;
    abstract getUint8(): number;
    abstract getUint16(): number;
    abstract getUint32(): number;
    abstract getUint64(): bigint;
    abstract getFloat32(): number;
    abstract getFloat64(): number;
    abstract getInt128(): bigint;
    abstract getUint128(): bigint;
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
    abstract setInt128(input: bigint): void;
    abstract setUint128(input: bigint): void;
    abstract setBytes(input: Uint8Array): void;
}
/**
 * createBufferedDataView is a factory function for creating a new
 * BufferedDataView.
 */
export declare function createBufferedDataView(buffer: ArrayBuffer, endianess: Endianess, startingOffset?: number): BufferedDataView;

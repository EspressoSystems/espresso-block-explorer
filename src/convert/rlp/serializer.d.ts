import { BufferedDataView } from '../data_view/buffered_data_view';
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
export declare abstract class RLPSerializerBase implements RLPSerializer {
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
/**
 * createRLPSerializer is a function that returns an instance of a class
 * implements RLPSerializer utilizing the provided BufferedDataView.
 * @param bufferedDataView The BufferedDataView to utilize for serialization.
 * @returns RLPSerializer
 */
export declare function createRLPSerializer(bufferedDataView: BufferedDataView): RLPSerializer;

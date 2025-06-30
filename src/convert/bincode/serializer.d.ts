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
export declare abstract class BincodeSerializerBase implements BincodeSerializer {
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
 * createBincodeSerializer is a function that returns an instance of a class
 * implements BincodeSerializer utilizing the provided BufferedDataView.
 * @param bufferedDataView The BufferedDataView to utilize for serialization.
 * @returns BincodeSerializer
 */
export declare function createBincodeSerializer(bufferedDataView: BufferedDataView): BincodeSerializer;

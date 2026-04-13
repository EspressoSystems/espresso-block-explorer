import { BufferedDataView } from '../data_view/buffered_data_view';
/**
 * ProtobufSerializer represents a generalized Serializer for Protobuf.
 */
export interface ProtobufSerializer {
    serializeVarIntInt8(tag: number, value: number): void;
    serializeVarIntInt16(tag: number, value: number): void;
    serializeVarIntInt32(tag: number, value: number): void;
    serializeVarIntBigInt64(tag: number, value: bigint): void;
    serializeVarIntUint8(tag: number, value: number): void;
    serializeVarIntUint16(tag: number, value: number): void;
    serializeVarIntUint32(tag: number, value: number): void;
    serializevarIntBigUint64(tag: number, value: bigint): void;
    serializeFixedInt32(tag: number, value: number): void;
    serializeFixedBigInt64(tag: number, value: bigint): void;
    serializeFixedUint32(tag: number, value: number): void;
    serializeFixedBigUint64(tag: number, value: bigint): void;
    serializeFloat32(tag: number, value: number): void;
    serializeFloat64(tag: number, value: number): void;
    serializeLenString(tag: number, value: string): void;
    serializeLenBytes(tag: number, value: Uint8Array): void;
    serializeSubMessage(tag: number, value: (serializer: ProtobufSerializer) => void): void;
    toBytes(): Uint8Array;
}
/**
 * ProtobufSerializerBase is a base class for ProtobufSerializer.
 */
export declare abstract class ProtobufSerializerBase implements ProtobufSerializer {
    abstract serializeVarIntInt8(tag: number, value: number): void;
    abstract serializeVarIntInt16(tag: number, value: number): void;
    abstract serializeVarIntInt32(tag: number, value: number): void;
    abstract serializeVarIntBigInt64(tag: number, value: bigint): void;
    abstract serializeVarIntUint8(tag: number, value: number): void;
    abstract serializeVarIntUint16(tag: number, value: number): void;
    abstract serializeVarIntUint32(tag: number, value: number): void;
    abstract serializevarIntBigUint64(tag: number, value: bigint): void;
    abstract serializeFixedInt32(tag: number, value: number): void;
    abstract serializeFixedBigInt64(tag: number, value: bigint): void;
    abstract serializeFixedUint32(tag: number, value: number): void;
    abstract serializeFixedBigUint64(tag: number, value: bigint): void;
    abstract serializeFloat32(tag: number, value: number): void;
    abstract serializeFloat64(tag: number, value: number): void;
    abstract serializeLenString(tag: number, value: string): void;
    abstract serializeLenBytes(tag: number, value: Uint8Array): void;
    abstract serializeSubMessage(tag: number, value: (serializer: ProtobufSerializer) => void): void;
    abstract toBytes(): Uint8Array;
}
/**
 * createProtobufSerializer is a function that returns an instance of a class
 * implements ProtobufSerializer utilizing the provided BufferedDataView.
 */
export declare function createProtobufSerializer(bufferedDataView: BufferedDataView): ProtobufSerializer;

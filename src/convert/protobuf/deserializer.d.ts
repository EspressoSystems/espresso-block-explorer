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
    deserializeSubMessage(tag: number): ProtobufDeserializer;
}
/**
 * ProtobufDeserializerBase is a base class for ProtobufDeserializer.
 */
export declare abstract class ProtobufDeserializerBase implements ProtobufDeserializer {
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
/**
 * createProtobufDeserializer is a function that returns an instance of a class
 * implements ProtobufDeserializer utilizing the provided Uint8Array.
 */
export declare function createProtobufDeserializer(bytes: Uint8Array): ProtobufDeserializer;

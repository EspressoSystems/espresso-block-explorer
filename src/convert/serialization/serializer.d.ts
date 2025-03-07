/**
 * Serializer is responsible for serializing data into a specific format.
 * This is a generalized interface that can represent most serialization
 * formats.
 */
export interface Serializer {
    serializeBoolean(value: boolean): void;
    serializeInt8(value: number): void;
    serializeInt16(value: number): void;
    serializeInt32(value: number): void;
    serializeInt64(value: bigint): void;
    serializeUint8(value: number): void;
    serializeUint16(value: number): void;
    serializeUint32(value: number): void;
    serializeUint64(value: bigint): void;
    serializeFloat32(value: number): void;
    serializeFloat64(value: number): void;
    serializeChar(value: string): void;
    serializeStringUTF8(value: string): void;
    serializeBytes(value: Uint8Array): void;
    serializeInt128(value: bigint): void;
    serializeUint128(value: bigint): void;
}

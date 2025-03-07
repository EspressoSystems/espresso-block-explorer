/**
 * Deserializer is responsible for deserializing data from a specific format
 * into different primitives.  This is a generalized interface that can be
 * used to deserialize most serialization formats.
 */
export interface Deserializer {
    deserializeBoolean(): boolean;
    deserializeInt8(): number;
    deserializeInt16(): number;
    deserializeInt32(): number;
    deserializeInt64(): bigint;
    deserializeUint8(): number;
    deserializeUint16(): number;
    deserializeUint32(): number;
    deserializeUint64(): bigint;
    deserializeFloat32(): number;
    deserializeFloat64(): number;
    deserializeChar(): string;
    deserializeStringUTF8(): string;
    deserializeBytes(): Uint8Array;
    deserializeInt128(): bigint;
    deserializeUint128(): bigint;
}

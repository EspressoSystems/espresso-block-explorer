import { BufferedDataView } from '../data_view/buffered_data_view';
import { Deserializer } from '../serialization/deserializer';

/**
 * BincodeDeserializer represents a generalized Deserializer for Bincode.
 */
export interface BincodeDeserializer extends Deserializer {
}
/**
 * BincodeDeserializerBase is a base class for BincodeDeserializer.
 */
export declare abstract class BincodeDeserializerBase implements BincodeDeserializer {
    abstract deserializeBoolean(): boolean;
    abstract deserializeInt8(): number;
    abstract deserializeInt16(): number;
    abstract deserializeInt32(): number;
    abstract deserializeInt64(): bigint;
    abstract deserializeUint8(): number;
    abstract deserializeUint16(): number;
    abstract deserializeUint32(): number;
    abstract deserializeUint64(): bigint;
    abstract deserializeFloat32(): number;
    abstract deserializeFloat64(): number;
    abstract deserializeStringUTF8(): string;
    abstract deserializeBytes(): Uint8Array;
    abstract deserializeChar(): string;
    abstract deserializeInt128(): bigint;
    abstract deserializeUint128(): bigint;
}
/**
 * createBincodeDeserializer creates an instance of a class that implements
 * BincodeDeserializer given the BufferedDataView.
 *
 * @param {BufferedDataView} bufferedDataView The BufferedDataView to use for
 * deserialization.
 * @returns {BincodeDeserializer} a Bincode deserializer for deserializing
 * the bincode data format.
 */
export declare function createBincodeDeserializer(bufferedDataView: BufferedDataView): BincodeDeserializer;

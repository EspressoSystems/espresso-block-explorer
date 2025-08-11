import { BufferedDataView } from '../data_view/buffered_data_view';
import { Deserializer } from '../serialization/deserializer';
/**
 * RLPDeserializer represents a generalized Deserializer for Bincode.
 */
export interface RLPDeserializer extends Deserializer {
    deserializeUnknown(): number | Uint8Array;
}
/**
 * RLPDeserializerBase is a base class for RLPDeserializer.
 */
export declare abstract class RLPDeserializerBase implements RLPDeserializer {
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
    abstract deserializeUnknown(): number | Uint8Array;
}
/**
 * createRLPDeserializer creates an instance of a class that implements
 * RLPDeserializer given the BufferedDataView.
 *
 * @param {BufferedDataView} bufferedDataView The BufferedDataView to use for
 * deserialization.
 * @returns {RLPDeserializer} a Bincode deserializer for deserializing
 * the bincode data format.
 */
export declare function createRLPDeserializer(bufferedDataView: BufferedDataView): RLPDeserializer;

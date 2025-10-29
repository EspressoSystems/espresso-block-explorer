import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { L1BlockInfo } from '../l1_block/l1_block_info';
import { ValidatorSetEntry } from './validator_set_entry';
/**
 * FullValidatorSetSnapshot represents a full snapshot of the validator set at a
 * specific L1 block.
 *
 * This type definition is informed by the type specification as defined
 * in the Espresso L1 Validator Service API documentation.
 * https://www.notion.so/espressosys/Delegation-UI-Service-Specification-2942431b68e980968c28cc5099a4e8f2?source=copy_link#2962431b68e980e28c9de93a4a08437f
 */
export declare class FullValidatorSetSnapshot {
    readonly l1Block: L1BlockInfo;
    readonly nodes: ValidatorSetEntry[];
    constructor(l1Block: L1BlockInfo, nodes?: ValidatorSetEntry[]);
    toJSON(): unknown;
}
/**
 * FullValidatorSetSnapshotJSONDecoder decodes FullValidatorSetSnapshot objects
 * from a JSON object.
 */
declare class FullValidatorSetSnapshotJSONDecoder implements Converter<unknown, FullValidatorSetSnapshot> {
    convert(input: unknown): FullValidatorSetSnapshot;
}
/**
 * FullValidatorSetSnapshotJSONEncoder encodes FullValidatorSetSnapshot objects
 * to a JSON object.
 */
declare class FullValidatorSetSnapshotJSONEncoder implements Converter<FullValidatorSetSnapshot, unknown> {
    convert(input: FullValidatorSetSnapshot): unknown;
}
/**
 * FullValidatorSetSnapshotJSONCodec is a codec that encodes and decodes
 * FullValidatorSetSnapshot objects to and from JSON.
 */
declare class FullValidatorSetSnapshotJSONCodec extends TypeCheckingCodec<FullValidatorSetSnapshot, unknown> {
    readonly encoder: FullValidatorSetSnapshotJSONEncoder;
    readonly decoder: FullValidatorSetSnapshotJSONDecoder;
}
/**
 * fullValidatorSetSnapshotJSONCodec is a codec that encodes and decodes
 * FullValidatorSetSnapshot objects to and from JSON.
 */
export declare const fullValidatorSetSnapshotJSONCodec: FullValidatorSetSnapshotJSONCodec;
export {};

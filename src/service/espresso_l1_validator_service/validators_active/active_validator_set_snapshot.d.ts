import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec';
import { CurrentEpochValidatorSetEntry } from './current_epoch_validator_set_entry';
import { EpochAndBlock } from './epoch_and_block';
/**
 * ActiveValidatorSetSnapshot represents a snapshot of the active validator
 * set at a specific Espresso block.
 *
 * This type definition is informed by the type specification as defined
 * in the Espresso L1 Validator Service API documentation.
 * https://www.notion.so/espressosys/Delegation-UI-Service-Specification-2942431b68e980968c28cc5099a4e8f2?source=copy_link#2962431b68e980418520dfbb5433ee3a
 */
export declare class ActiveValidatorSetSnapshot {
    readonly espressoBlock: EpochAndBlock;
    readonly nodes: CurrentEpochValidatorSetEntry[];
    constructor(espressoBlock: EpochAndBlock, validators: CurrentEpochValidatorSetEntry[]);
    toJSON(): unknown;
}
/**
 * ActiveValidatorSetSnapshotJSONDecoder decodes ActiveValidatorSetSnapshot
 * objects from a JSON object.
 */
declare class ActiveValidatorSetSnapshotJSONDecoder implements Converter<unknown, ActiveValidatorSetSnapshot> {
    convert(input: unknown): ActiveValidatorSetSnapshot;
}
/**
 * ActiveValidatorSetSnapshotJSONEncoder encodes ActiveValidatorSetSnapshot
 * objects to a JSON object.
 */
declare class ActiveValidatorSetSnapshotJSONEncoder implements Converter<ActiveValidatorSetSnapshot, unknown> {
    convert(input: ActiveValidatorSetSnapshot): unknown;
}
/**
 * ActiveValidatorSetSnapshotJSONCodec is a codec that encodes and decodes
 * ActiveValidatorSetSnapshot objects to and from JSON.
 */
declare class ActiveValidatorSetSnapshotJSONCodec extends TypeCheckingCodec<ActiveValidatorSetSnapshot, unknown> {
    readonly encoder: ActiveValidatorSetSnapshotJSONEncoder;
    readonly decoder: ActiveValidatorSetSnapshotJSONDecoder;
}
/**
 * activeValidatorSetSnapshotJSONCodec is a codec that encodes and decodes
 * ActiveValidatorSetSnapshot objects to and from JSON.
 */
export declare const activeValidatorSetSnapshotJSONCodec: ActiveValidatorSetSnapshotJSONCodec;
export {};

import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec';
import { ActiveNodeSetEntry } from '../common/active_node_set_entry';
import { EpochAndBlock } from '../common/epoch_and_block';
import { Ratio } from '../common/ratio';
/**
 * ActiveNodeSetSnapshot represents a snapshot of the active Node
 * set at a specific Espresso block.
 *
 * This type definition is informed by the type specification as defined
 * in the Espresso L1 Validator Service API documentation.
 * https://www.notion.so/espressosys/Delegation-UI-Service-Specification-2942431b68e980968c28cc5099a4e8f2?source=copy_link#2962431b68e980418520dfbb5433ee3a
 * Defined in rust here:
 * https://github.com/EspressoSystems/staking-ui-service/blob/1118a4c6a953c5270e3bd001d281dc2a8b032a27/src/types/global.rs#L45-L56
 */
export declare class ActiveNodeSetSnapshot {
    readonly espressoBlock: EpochAndBlock;
    readonly apr: Ratio;
    readonly nodes: ActiveNodeSetEntry[];
    constructor(espressoBlock: EpochAndBlock, apr: Ratio, nodes: ActiveNodeSetEntry[]);
    toJSON(): unknown;
}
/**
 * ActiveNodeSetSnapshotJSONDecoder decodes ActiveNodeSetSnapshot
 * objects from a JSON object.
 */
declare class ActiveNodeSetSnapshotJSONDecoder implements Converter<unknown, ActiveNodeSetSnapshot> {
    convert(input: unknown): ActiveNodeSetSnapshot;
}
/**
 * ActiveNodeSetSnapshotJSONEncoder encodes ActiveNodeSetSnapshot
 * objects to a JSON object.
 */
declare class ActiveNodeSetSnapshotJSONEncoder implements Converter<ActiveNodeSetSnapshot, unknown> {
    convert(input: ActiveNodeSetSnapshot): unknown;
}
/**
 * ActiveNodeSetSnapshotJSONCodec is a codec that encodes and decodes
 * ActiveNodeSetSnapshot objects to and from JSON.
 */
declare class ActiveNodeSetSnapshotJSONCodec extends TypeCheckingCodec<ActiveNodeSetSnapshot, unknown> {
    readonly encoder: ActiveNodeSetSnapshotJSONEncoder;
    readonly decoder: ActiveNodeSetSnapshotJSONDecoder;
}
/**
 * activeNodeSetSnapshotJSONCodec is a codec that encodes and decodes
 * ActiveNodeSetSnapshot objects to and from JSON.
 */
export declare const activeNodeSetSnapshotJSONCodec: ActiveNodeSetSnapshotJSONCodec;
export {};

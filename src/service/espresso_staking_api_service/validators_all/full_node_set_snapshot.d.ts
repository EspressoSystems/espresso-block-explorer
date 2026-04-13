import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { L1BlockInfo } from '../common/l1_block_info';
import { NodeSetEntry } from '../common/node_set_entry';
/**
 * FullValidatorSetSnapshot represents a full snapshot of the validator set at a
 * specific L1 block.
 *
 * This type definition is informed by the type specification as defined
 * in the Espresso L1 Validator Service API documentation.
 * https://www.notion.so/espressosys/Delegation-UI-Service-Specification-2942431b68e980968c28cc5099a4e8f2?source=copy_link#2962431b68e980e28c9de93a4a08437f
 * Define in rust here:
 * https://github.com/EspressoSystems/staking-ui-service/blob/8eb960a9a02d7806fddedfd44090608015d3b6b3/src/types/global.rs#L10-L16
 */
export declare class FullNodeSetSnapshot {
    readonly l1Block: L1BlockInfo;
    readonly nodes: NodeSetEntry[];
    constructor(l1Block: L1BlockInfo, nodes?: NodeSetEntry[]);
    toJSON(): unknown;
}
/**
 * FullNodeSetSnapshotJSONDecoder decodes FullNodeSetSnapshot objects
 * from a JSON object.
 */
declare class FullNodeSetSnapshotJSONDecoder implements Converter<unknown, FullNodeSetSnapshot> {
    convert(input: unknown): FullNodeSetSnapshot;
}
/**
 * FullNodeSetSnapshotJSONEncoder encodes FullNodeSetSnapshot objects
 * to a JSON object.
 */
declare class FullNodeSetSnapshotJSONEncoder implements Converter<FullNodeSetSnapshot, unknown> {
    convert(input: FullNodeSetSnapshot): unknown;
}
/**
 * FullNodeSetSnapshotJSONCodec is a codec that encodes and decodes
 * FullNodeSetSnapshot objects to and from JSON.
 */
declare class FullNodeSetSnapshotJSONCodec extends TypeCheckingCodec<FullNodeSetSnapshot, unknown> {
    readonly encoder: FullNodeSetSnapshotJSONEncoder;
    readonly decoder: FullNodeSetSnapshotJSONDecoder;
}
/**
 * fullNodeSetSnapshotJSONCodec is a codec that encodes and decodes
 * FullNodeSetSnapshot objects to and from JSON.
 */
export declare const fullNodeSetSnapshotJSONCodec: FullNodeSetSnapshotJSONCodec;
export {};

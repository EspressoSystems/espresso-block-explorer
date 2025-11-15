import { ArrayCodec } from '../../../../../../../../../../../src/convert/codec';
import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { TaggedBase64 } from '../../../../../../../../../../../src/models/espresso';
import { Ratio } from './ratio';
/**
 * NodeSetEntry represents a single entry in the node set.
 *
 * This type definition is informed by the type specification as defined
 * in the Espresso L1 Validator Service API documentation.
 * https://www.notion.so/espressosys/Delegation-UI-Service-Specification-2942431b68e980968c28cc5099a4e8f2?source=copy_link#2942431b68e980e3b356cf32d1531d95
 * Defined in rust here:
 * https://github.com/EspressoSystems/staking-ui-service/blob/8eb960a9a02d7806fddedfd44090608015d3b6b3/src/types/common.rs#L26-L38
 */
export declare class NodeSetEntry {
    readonly address: ArrayBuffer;
    readonly stakingKey: TaggedBase64;
    readonly stake: bigint;
    readonly commission: Ratio;
    readonly addressText: `0x${string}`;
    constructor(address: ArrayBuffer, stakingKey: TaggedBase64, stake: bigint, commission: Ratio);
    toJSON(): unknown;
}
/**
 * NodeSetEntryJSONDecoder decodes NodeSetEntry objects from a JSON
 * object.
 */
declare class NodeSetEntryJSONDecoder implements Converter<unknown, NodeSetEntry> {
    convert(input: unknown): NodeSetEntry;
}
/**
 * NodeSetEntryJSONEncoder encodes NodeSetEntry objects to a JSON
 * object.
 */
declare class NodeSetEntryJSONEncoder implements Converter<NodeSetEntry, unknown> {
    convert(input: NodeSetEntry): unknown;
}
/**
 * NodeSetEntryJSONCodec is a codec that encodes and decodes
 * NodeSetEntry objects to and from JSON.
 */
declare class NodeSetEntryJSONCodec extends TypeCheckingCodec<NodeSetEntry, unknown> {
    readonly encoder: NodeSetEntryJSONEncoder;
    readonly decoder: NodeSetEntryJSONDecoder;
}
/**
 * nodeSetEntryJSONCodec is a codec that encodes and decodes
 * NodeSetEntry objects to and from JSON.
 */
export declare const nodeSetEntryJSONCodec: NodeSetEntryJSONCodec;
/**
 * nodeSetEntryArrayJSONCodec is a codec that encodes and decodes
 * arrays of NodeSetEntry objects to and from JSON.
 */
export declare const nodeSetEntryArrayJSONCodec: ArrayCodec<NodeSetEntry, unknown>;
export {};

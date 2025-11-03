import { ArrayCodec } from '../../../../../../../../../../../src/convert/codec';
import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { Ratio } from './ratio';
/**
 * ActiveNodeSetEntry represents a single entry in the active node set.
 *
 * The ActiveNodeSetEntrytype is defined by the Espresso L1 Validator Service
 * API.
 * https://www.notion.so/espressosys/Delegation-UI-Service-Specification-2942431b68e980968c28cc5099a4e8f2?source=copy_link#2942431b68e980b699c5ed84c82199bf
 * Defined in rust here:
 * https://github.com/EspressoSystems/staking-ui-service/blob/8eb960a9a02d7806fddedfd44090608015d3b6b3/src/types/common.rs#L94-L103
 */
export declare class ActiveNodeSetEntry {
    readonly address: ArrayBuffer;
    readonly voterParticipation: Ratio;
    readonly leaderParticipation: Ratio;
    constructor(address: ArrayBuffer, voterParticipation: Ratio, leaderParticipation: Ratio);
    toJSON(): unknown;
}
/**
 * ActiveNodeSetEntryJSONDecoder decodes ActiveNodeSetEntry objects from a JSON
 * object.
 */
declare class ActiveNodeSetEntryJSONDecoder implements Converter<unknown, ActiveNodeSetEntry> {
    convert(input: unknown): ActiveNodeSetEntry;
}
/**
 * ActiveNodeSetEntryJSONEncoder encodes ActiveNodeSetEntry objects to a JSON
 * object.
 */
declare class ActiveNodeSetEntryJSONEncoder implements Converter<ActiveNodeSetEntry, unknown> {
    convert(input: ActiveNodeSetEntry): unknown;
}
/**
 * NodeSetEntryJSONCodec is a codec that encodes and decodes
 * NodeSetEntry objects to and from JSON.
 */
declare class ActiveNodeSetEntryJSONCodec extends TypeCheckingCodec<ActiveNodeSetEntry, unknown> {
    readonly encoder: ActiveNodeSetEntryJSONEncoder;
    readonly decoder: ActiveNodeSetEntryJSONDecoder;
}
/**
 * activeNodeSetEntryJSONCodec is a codec that encodes and decodes
 * NodeSetEntry objects to and from JSON.
 */
export declare const activeNodeSetEntryJSONCodec: ActiveNodeSetEntryJSONCodec;
/**
 * activeNodeSetEntryArrayJSONCodec is a codec that encodes and decodes
 * arrays of NodeSetEntry objects to and from JSON.
 */
export declare const activeNodeSetEntryArrayJSONCodec: ArrayCodec<ActiveNodeSetEntry, unknown>;
export {};

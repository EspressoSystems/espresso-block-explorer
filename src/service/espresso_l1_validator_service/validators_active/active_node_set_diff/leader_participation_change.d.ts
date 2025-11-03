import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { ParticipationChange } from '../../common/participation_change';
import { ActiveNodeSetDiff } from './active_node_set_diff';
/**
 * LeaderParticipationChange represents a change in leader participation
 * percentage for a validator.
 *
 * This type definition is informed by the type specification as defined
 * in the Espresso L1 Validator Service API documentation.
 * https://www.notion.so/espressosys/Delegation-UI-Service-Specification-2942431b68e980968c28cc5099a4e8f2?source=copy_link#2962431b68e9804d9c99ea7b6a2c87ca
 * Defined in rust here:
 * https://github.com/EspressoSystems/staking-ui-service/blob/8eb960a9a02d7806fddedfd44090608015d3b6b3/src/types/global.rs#L65
 */
export declare class LeaderParticipationChange extends ActiveNodeSetDiff {
    readonly participationChanges: ParticipationChange[];
    constructor(participationChanges: ParticipationChange[]);
    toJSON(): unknown;
}
/**
 * LeaderParticipationChangeJSONDecoder decodes LeaderParticipationChange
 * objects from a JSON object.
 */
declare class LeaderParticipationChangeJSONDecoder implements Converter<unknown, LeaderParticipationChange> {
    convert(input: unknown): LeaderParticipationChange;
}
/**
 * LeaderParticipationChangeJSONEncoder encodes LeaderParticipationChange
 * objects to a JSON object.
 */
declare class LeaderParticipationChangeJSONEncoder implements Converter<LeaderParticipationChange, unknown> {
    convert(input: LeaderParticipationChange): unknown;
}
/**
 * LeaderParticipationChangeJSONCodec is a codec that encodes and decodes
 * LeaderParticipationChange objects to and from JSON.
 */
declare class LeaderParticipationChangeJSONCodec extends TypeCheckingCodec<LeaderParticipationChange, unknown> {
    readonly encoder: LeaderParticipationChangeJSONEncoder;
    readonly decoder: LeaderParticipationChangeJSONDecoder;
}
/**
 * LeaderParticipationChangeKey is the key used to identify the
 * LeaderParticipationChange object in the validator set diff JSON
 * representation.
 */
export declare const LeaderParticipationChangeKey = "LeaderParticipationChange";
/**
 * leaderParticipationChangeJSONCodec is a codec that encodes and decodes
 * LeaderParticipationChange objects to and from JSON.
 */
export declare const leaderParticipationChangeJSONCodec: LeaderParticipationChangeJSONCodec;
export {};

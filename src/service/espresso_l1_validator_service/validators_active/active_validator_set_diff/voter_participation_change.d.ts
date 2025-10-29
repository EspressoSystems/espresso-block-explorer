import { TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { ParticipationChange } from '../participation_change';
import { ActiveValidatorSetDiff } from './active_validator_set_diff';
/**
 * VoterParticipationChange represents a change in voter participation
 * percentage for a validator.
 *
 * This type definition is informed by the type specification as defined
 * in the Espresso L1 Validator Service API documentation.
 * https://www.notion.so/espressosys/Delegation-UI-Service-Specification-2942431b68e980968c28cc5099a4e8f2?source=copy_link#2962431b68e9804d9c99ea7b6a2c87ca
 */
export declare class VoterParticipationChange extends ActiveValidatorSetDiff {
    readonly participationChange: ParticipationChange;
    constructor(participationChange: ParticipationChange);
    toJSON(): unknown;
}
/**
 * VoterParticipationChangeJSONDecoder decodes VoterParticipationChange
 * objects from a JSON object.
 */
declare class VoterParticipationChangeJSONDecoder {
    convert(input: unknown): VoterParticipationChange;
}
/**
 * VoterParticipationChangeJSONEncoder encodes VoterParticipationChange
 * objects to a JSON object.
 */
declare class VoterParticipationChangeJSONEncoder {
    convert(input: VoterParticipationChange): unknown;
}
/**
 * VoterParticipationChangeJSONCodec is a codec that encodes and decodes
 * VoterParticipationChange objects to and from JSON.
 */
declare class VoterParticipationChangeJSONCodec extends TypeCheckingCodec<VoterParticipationChange, unknown> {
    readonly encoder: VoterParticipationChangeJSONEncoder;
    readonly decoder: VoterParticipationChangeJSONDecoder;
}
/**
 * VoterParticipationChangeKey is the key used to identify the
 * VoterParticipationChange object in the validator set diff JSON
 * representation.
 */
export declare const VoterParticipationChangeKey = "VoterParticipationChange";
/**
 * voterParticipationChangeJSONCodec is a codec that encodes and decodes
 * VoterParticipationChange objects to and from JSON.
 */
export declare const voterParticipationChangeJSONCodec: VoterParticipationChangeJSONCodec;
export {};

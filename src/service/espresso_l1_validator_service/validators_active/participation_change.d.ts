import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
/**
 * ParticipationChange represents a change in validator participation
 * percentage. It includes the validator's address and the new participation
 * percentage.
 *
 * The ParticipationChange type is defined by the Espresso L1 Validator Service
 * API.
 * https://www.notion.so/espressosys/Delegation-UI-Service-Specification-2942431b68e980968c28cc5099a4e8f2?source=copy_link#2942431b68e9803791a7f90f4d247228
 */
export declare class ParticipationChange {
    readonly address: ArrayBuffer;
    readonly percentage: number;
    constructor(address: ArrayBuffer, percentage: number);
    toJSON(): unknown;
}
/**
 * ParticipationChangeJSONDecoder decodes ParticipationChange objects from a
 * JSON object.
 */
declare class ParticipationChangeJSONDecoder implements Converter<unknown, ParticipationChange> {
    convert(input: unknown): ParticipationChange;
}
/**
 * ParticipationChangeJSONEncoder encodes ParticipationChange objects to a JSON
 * object.
 */
declare class ParticipationChangeJSONEncoder implements Converter<ParticipationChange, unknown> {
    convert(input: ParticipationChange): unknown;
}
/**
 * ParticipationChangeJSONCodec is a codec that encodes and decodes
 * ParticipationChange objects to and from JSON.
 */
declare class ParticipationChangeJSONCodec extends TypeCheckingCodec<ParticipationChange, unknown> {
    readonly encoder: ParticipationChangeJSONEncoder;
    readonly decoder: ParticipationChangeJSONDecoder;
}
/**
 * participationChangeJSONCodec is a codec that encodes and decodes
 * ParticipationChange objects to and from JSON.
 */
export declare const participationChangeJSONCodec: ParticipationChangeJSONCodec;
export {};

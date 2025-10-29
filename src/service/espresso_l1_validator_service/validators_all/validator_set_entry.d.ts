import { ArrayCodec } from '../../../../../../../../../../../src/convert/codec';
import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { CommissionPercent, TaggedBase64 } from '../../../../../../../../../../../src/models/espresso';
/**
 * ValidatorSetEntry represents a single entry in the validator set.
 *
 * This type definition is informed by the type specification as defined
 * in the Espresso L1 Validator Service API documentation.
 * https://www.notion.so/espressosys/Delegation-UI-Service-Specification-2942431b68e980968c28cc5099a4e8f2?source=copy_link#2942431b68e980e3b356cf32d1531d95
 */
export declare class ValidatorSetEntry {
    readonly address: ArrayBuffer;
    readonly stakeTableKey: TaggedBase64;
    readonly stake: bigint;
    readonly commission: CommissionPercent;
    readonly voterParticipation: null | number;
    readonly leadershipParticipation: null | number;
    constructor(address: ArrayBuffer, stakeTableKey: TaggedBase64, stake: bigint, commission: CommissionPercent, voterParticipation: null | number, leadershipParticipation: null | number);
    toJSON(): unknown;
}
/**
 * ValidatorInformationJSONDecoder decodes ValidatorSetEntry objects from a JSON
 * object.
 */
declare class ValidatorInformationJSONDecoder implements Converter<unknown, ValidatorSetEntry> {
    convert(input: unknown): ValidatorSetEntry;
}
/**
 * ValidatorInformationJSONEncoder encodes ValidatorSetEntry objects to a JSON
 * object.
 */
declare class ValidatorInformationJSONEncoder implements Converter<ValidatorSetEntry, unknown> {
    convert(input: ValidatorSetEntry): unknown;
}
/**
 * ValidatorInformationJSONCodec is a codec that encodes and decodes
 * ValidatorSetEntry objects to and from JSON.
 */
declare class ValidatorInformationJSONCodec extends TypeCheckingCodec<ValidatorSetEntry, unknown> {
    readonly encoder: ValidatorInformationJSONEncoder;
    readonly decoder: ValidatorInformationJSONDecoder;
}
/**
 * validatorInformationJSONCodec is a codec that encodes and decodes
 * ValidatorSetEntry objects to and from JSON.
 */
export declare const validatorInformationJSONCodec: ValidatorInformationJSONCodec;
/**
 * validatorInformationArrayJSONCodec is a codec that encodes and decodes
 * arrays of ValidatorSetEntry objects to and from JSON.
 */
export declare const validatorInformationArrayJSONCodec: ArrayCodec<ValidatorSetEntry, unknown>;
export {};

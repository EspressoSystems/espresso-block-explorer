import { ArrayCodec, Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec';
/**
 * CurrentEpochValidatorSetEntry represents a validator in the current epoch
 * of the Espresso L1 Validator Service API.
 * https://www.notion.so/espressosys/Delegation-UI-Service-Specification-2942431b68e980968c28cc5099a4e8f2?source=copy_link#2942431b68e980b699c5ed84c82199bf
 */
export declare class CurrentEpochValidatorSetEntry {
    readonly address: ArrayBuffer;
    constructor(address: ArrayBuffer);
    toJSON(): unknown;
}
/**
 * CurrentEpochValidatorSetEntryJSONDecoder decodes
 * CurrentEpochValidatorSetEntry objects from a JSON object.
 */
declare class CurrentEpochValidatorSetEntryJSONDecoder implements Converter<unknown, CurrentEpochValidatorSetEntry> {
    convert(input: unknown): CurrentEpochValidatorSetEntry;
}
/**
 * CurrentEpochValidatorSetEntryJSONEncoder encodes
 * CurrentEpochValidatorSetEntry objects to a JSON object.
 */
declare class CurrentEpochValidatorSetEntryJSONEncoder implements Converter<CurrentEpochValidatorSetEntry, unknown> {
    convert(input: CurrentEpochValidatorSetEntry): unknown;
}
/**
 * CurrentEpochValidatorSetEntryJSONCodec is a codec that encodes and decodes
 * CurrentEpochValidatorSetEntry objects to and from JSON.
 */
declare class CurrentEpochValidatorSetEntryJSONCodec extends TypeCheckingCodec<CurrentEpochValidatorSetEntry, unknown> {
    readonly encoder: CurrentEpochValidatorSetEntryJSONEncoder;
    readonly decoder: CurrentEpochValidatorSetEntryJSONDecoder;
}
/**
 * currentEpochValidatorSetEntryJSONCodec is a codec that encodes and decodes
 * CurrentEpochValidatorSetEntry objects to and from JSON.
 */
export declare const currentEpochValidatorSetEntryJSONCodec: CurrentEpochValidatorSetEntryJSONCodec;
/**
 * currentEpochValidatorSetEntryArrayJSONCodec is a codec that encodes and
 * decodes arrays of CurrentEpochValidatorSetEntry objects to and from JSON.
 */
export declare const currentEpochValidatorSetEntryArrayJSONCodec: ArrayCodec<CurrentEpochValidatorSetEntry, unknown>;
export {};

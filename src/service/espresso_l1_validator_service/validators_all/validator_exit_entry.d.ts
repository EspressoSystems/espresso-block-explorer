import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
/**
 * ValidatorExitEntry represents a single entry for a validator exit event.
 *
 * This type definition is informed by the type specification as defined
 * in the Espresso L1 Validator Service API documentation.
 * https://www.notion.so/espressosys/Delegation-UI-Service-Specification-2942431b68e980968c28cc5099a4e8f2?source=copy_link#2942431b68e98015ab44d3893d141b8f
 */
export declare class ValidatorExitEntry {
    readonly address: ArrayBuffer;
    readonly exitTime: Date;
    constructor(address: ArrayBuffer, exitTime: Date);
    toJSON(): unknown;
}
/**
 * ValidatorExitEntryJSONDecoder decodes ValidatorExitEntry objects from a JSON
 * object.
 */
declare class ValidatorExitEntryJSONDecoder implements Converter<unknown, ValidatorExitEntry> {
    convert(input: unknown): ValidatorExitEntry;
}
/**
 * ValidatorExitEntryJSONEncoder encodes ValidatorExitEntry objects to a JSON
 * object.
 */
declare class ValidatorExitEntryJSONEncoder implements Converter<ValidatorExitEntry, unknown> {
    convert(input: ValidatorExitEntry): unknown;
}
/**
 * ValidatorExitEntryJSONCodec is a codec that encodes and decodes
 * ValidatorExitEntry objects to and from JSON.
 */
declare class ValidatorExitEntryJSONCodec extends TypeCheckingCodec<ValidatorExitEntry, unknown> {
    readonly encoder: ValidatorExitEntryJSONEncoder;
    readonly decoder: ValidatorExitEntryJSONDecoder;
}
/**
 * validatorExitEntryJSONCodec is a codec that encodes and decodes
 * ValidatorExitEntry objects to and from JSON.
 */
export declare const validatorExitEntryJSONCodec: ValidatorExitEntryJSONCodec;
export {};

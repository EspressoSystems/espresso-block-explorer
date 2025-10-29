import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { ValidatorExitEntry } from '../validator_exit_entry';
import { FullValidatorSetDiff } from './full_validator_set_diff';
/**
 * FullValidatorSetDiffValidatorExit represents a validator exit in the
 * validator set.
 *
 * This class is a specific case of FullValidatorSetDiff, representing the exit
 * of a validator from the validator set.
 *
 * This type definition is informed by the type specification as defined
 * in the Espresso L1 Validator Service API documentation.
 * https://www.notion.so/espressosys/Delegation-UI-Service-Specification-2942431b68e980968c28cc5099a4e8f2?source=copy_link#2962431b68e980fcbea9f7de226507a2
 */
export declare class FullValidatorSetDiffValidatorExit extends FullValidatorSetDiff {
    readonly validatorExit: ValidatorExitEntry;
    constructor(validatorExit: ValidatorExitEntry);
    toJSON(): unknown;
}
/**
 * ValidatorExitJSONDecoder decodes FullValidatorSetDiffValidatorExit
 * objects from a JSON object.
 */
declare class ValidatorExitJSONDecoder implements Converter<unknown, FullValidatorSetDiffValidatorExit> {
    convert(input: unknown): FullValidatorSetDiffValidatorExit;
}
/**
 * ValidatorExitJSONEncoder encodes FullValidatorSetDiffValidatorExit
 * objects to a JSON object.
 */
declare class ValidatorExitJSONEncoder implements Converter<FullValidatorSetDiffValidatorExit, unknown> {
    convert(input: FullValidatorSetDiffValidatorExit): unknown;
}
/**
 * ValidatorExitJSONCodec is a codec that encodes and decodes
 * FullValidatorSetDiffValidatorExit objects to and from JSON.
 */
declare class ValidatorExitJSONCodec extends TypeCheckingCodec<FullValidatorSetDiffValidatorExit, unknown> {
    readonly encoder: ValidatorExitJSONEncoder;
    readonly decoder: ValidatorExitJSONDecoder;
}
/**
 * ValidatorExitKey is the key used to identify
 * FullValidatorSetDiffValidatorExit objects in the FullValidatorSetDiff
 * enumeration.
 */
export declare const ValidatorExitKey = "ValidatorExit";
/**
 * validatorExitJSONCodec is a codec that encodes and decodes
 * FullValidatorSetDiffValidatorExit objects to and from JSON.
 */
export declare const validatorExitJSONCodec: ValidatorExitJSONCodec;
export {};

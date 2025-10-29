import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec';
import { ActiveValidatorSetDiff } from './active_validator_set_diff/active_validator_set_diff';
import { EpochAndBlock } from './epoch_and_block';
/**
 * ActiveValidatorSetUpdate represents an update to the active validator set
 * at a specific Espresso block.
 *
 * This type definition is informed by the type specification as defined
 * in the Espresso L1 Validator Service API documentation.
 * https://www.notion.so/espressosys/Delegation-UI-Service-Specification-2942431b68e980968c28cc5099a4e8f2?source=copy_link#2962431b68e980ceb4c2ef5766119ddc
 */
export declare class ActiveValidatorSetUpdate {
    readonly espressoBlock: EpochAndBlock;
    readonly diff: ActiveValidatorSetDiff[];
    constructor(espressoBlock: EpochAndBlock, diff: ActiveValidatorSetDiff[]);
    toJSON(): unknown;
}
/**
 * ActiveValidatorSetUpdateJSONDecoder decodes ActiveValidatorSetUpdate
 * objects from a JSON object.
 */
declare class ActiveValidatorSetUpdateJSONDecoder implements Converter<unknown, ActiveValidatorSetUpdate> {
    convert(input: unknown): ActiveValidatorSetUpdate;
}
/**
 * ActiveValidatorSetUpdateJSONEncoder encodes ActiveValidatorSetUpdate
 * objects to a JSON object.
 */
declare class ActiveValidatorSetUpdateJSONEncoder implements Converter<ActiveValidatorSetUpdate, unknown> {
    convert(input: ActiveValidatorSetUpdate): unknown;
}
/**
 * ActiveValidatorSetUpdateJSONCodec is a codec that encodes and decodes
 * ActiveValidatorSetUpdate objects to and from JSON.
 */
declare class ActiveValidatorSetUpdateJSONCodec extends TypeCheckingCodec<ActiveValidatorSetUpdate, unknown> {
    readonly encoder: ActiveValidatorSetUpdateJSONEncoder;
    readonly decoder: ActiveValidatorSetUpdateJSONDecoder;
}
/**
 * activeValidatorSetUpdateJSONCodec is a codec that encodes and decodes
 * ActiveValidatorSetUpdate objects to and from JSON.
 */
export declare const activeValidatorSetUpdateJSONCodec: ActiveValidatorSetUpdateJSONCodec;
export {};

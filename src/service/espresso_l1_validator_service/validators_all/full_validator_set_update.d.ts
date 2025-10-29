import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { L1BlockInfo } from '../l1_block/l1_block_info';
import { FullValidatorSetDiff } from './full_validator_set_diff/full_validator_set_diff';
/**
 * FullValidatorSetUpdate represents a full update to the validator set at a
 * specific L1 block.
 *
 * This type definition is informed by the type specification as defined
 * in the Espresso L1 Validator Service API documentation.
 * https://www.notion.so/espressosys/Delegation-UI-Service-Specification-2942431b68e980968c28cc5099a4e8f2?source=copy_link#2962431b68e98015981fc249d3b292bd
 */
export declare class FullValidatorSetUpdate {
    readonly l1Block: L1BlockInfo;
    readonly diff: FullValidatorSetDiff[];
    constructor(l1Block: L1BlockInfo, diff?: FullValidatorSetDiff[]);
    toJSON(): unknown;
}
/**
 * FullValidatorSetUpdateJSONDecoder decodes FullValidatorSetUpdate objects
 * from a JSON object.
 */
declare class FullValidatorSetUpdateJSONDecoder implements Converter<unknown, FullValidatorSetUpdate> {
    convert(input: unknown): FullValidatorSetUpdate;
}
/**
 * FullValidatorSetUpdateJSONEncoder encodes FullValidatorSetUpdate objects
 * to a JSON object.
 */
declare class FullValidatorSetUpdateJSONEncoder implements Converter<FullValidatorSetUpdate, unknown> {
    convert(input: FullValidatorSetUpdate): unknown;
}
/**
 * FullValidatorSetUpdateJSONCodec is a codec that encodes and decodes
 * FullValidatorSetUpdate objects to and from JSON.
 */
declare class FullValidatorSetUpdateJSONCodec extends TypeCheckingCodec<FullValidatorSetUpdate, unknown> {
    readonly encoder: FullValidatorSetUpdateJSONEncoder;
    readonly decoder: FullValidatorSetUpdateJSONDecoder;
}
/**
 * fullValidatorSetUpdateJSONCodec is a codec that encodes and decodes
 * FullValidatorSetUpdate objects to and from JSON.
 */
export declare const fullValidatorSetUpdateJSONCodec: FullValidatorSetUpdateJSONCodec;
export {};

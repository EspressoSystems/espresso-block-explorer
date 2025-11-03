import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { NodeExit } from '../../common/node_exit';
import { FullNodeSetDiff } from './full_node_set_diff';
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
 * Defined in rust here:
 * https://github.com/EspressoSystems/staking-ui-service/blob/8eb960a9a02d7806fddedfd44090608015d3b6b3/src/types/global.rs#L38
 */
export declare class FullNodeSetDiffNodeExit extends FullNodeSetDiff {
    readonly validatorExit: NodeExit;
    constructor(validatorExit: NodeExit);
    toJSON(): unknown;
}
/**
 * ValidatorExitJSONDecoder decodes FullValidatorSetDiffValidatorExit
 * objects from a JSON object.
 */
declare class FullNodeSetDiffNodeExitJSONDecoder implements Converter<unknown, FullNodeSetDiffNodeExit> {
    convert(input: unknown): FullNodeSetDiffNodeExit;
}
/**
 * ValidatorExitJSONEncoder encodes FullValidatorSetDiffValidatorExit
 * objects to a JSON object.
 */
declare class FullNodeSetDiffNodeExitJSONEncoder implements Converter<FullNodeSetDiffNodeExit, unknown> {
    convert(input: FullNodeSetDiffNodeExit): unknown;
}
/**
 * ValidatorExitJSONCodec is a codec that encodes and decodes
 * FullValidatorSetDiffValidatorExit objects to and from JSON.
 */
declare class FullNodeSetNodeExitJSONCodec extends TypeCheckingCodec<FullNodeSetDiffNodeExit, unknown> {
    readonly encoder: FullNodeSetDiffNodeExitJSONEncoder;
    readonly decoder: FullNodeSetDiffNodeExitJSONDecoder;
}
/**
 * ValidatorExitKey is the key used to identify
 * FullValidatorSetDiffValidatorExit objects in the FullValidatorSetDiff
 * enumeration.
 */
export declare const NodeExitKey = "NodeExit";
/**
 * validatorExitJSONCodec is a codec that encodes and decodes
 * FullValidatorSetDiffValidatorExit objects to and from JSON.
 */
export declare const fullNodeSetDiffNodeExitJSONCodec: FullNodeSetNodeExitJSONCodec;
export {};

import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec';
import { EpochAndBlock } from '../common/epoch_and_block';
import { ActiveNodeSetDiff } from './active_node_set_diff/active_node_set_diff';
/**
 * ActiveNodeSetUpdate represents an update to the active validator set
 * at a specific Espresso block.
 *
 * This type definition is informed by the type specification as defined
 * in the Espresso L1 Validator Service API documentation.
 * https://www.notion.so/espressosys/Delegation-UI-Service-Specification-2942431b68e980968c28cc5099a4e8f2?source=copy_link#2962431b68e980ceb4c2ef5766119ddc
 * Defined in rust here:
 * https://github.com/EspressoSystems/staking-ui-service/blob/8eb960a9a02d7806fddedfd44090608015d3b6b3/src/types/global.rs#L53-L59
 */
export declare class ActiveNodeSetUpdate {
    readonly espressoBlock: EpochAndBlock;
    readonly diff: ActiveNodeSetDiff[];
    constructor(espressoBlock: EpochAndBlock, diff: ActiveNodeSetDiff[]);
    toJSON(): unknown;
}
/**
 * ActiveNodeSetUpdateJSONDecoder decodes ActiveNodeSetUpdate
 * objects from a JSON object.
 */
declare class ActiveNodeSetUpdateJSONDecoder implements Converter<unknown, ActiveNodeSetUpdate> {
    convert(input: unknown): ActiveNodeSetUpdate;
}
/**
 * ActiveNodeSetUpdateJSONEncoder encodes ActiveNodeSetUpdate
 * objects to a JSON object.
 */
declare class ActiveNodeSetUpdateJSONEncoder implements Converter<ActiveNodeSetUpdate, unknown> {
    convert(input: ActiveNodeSetUpdate): unknown;
}
/**
 * ActiveNodeSetUpdateJSONCodec is a codec that encodes and decodes
 * ActiveNodeSetUpdate objects to and from JSON.
 */
declare class ActiveNodeSetUpdateJSONCodec extends TypeCheckingCodec<ActiveNodeSetUpdate, unknown> {
    readonly encoder: ActiveNodeSetUpdateJSONEncoder;
    readonly decoder: ActiveNodeSetUpdateJSONDecoder;
}
/**
 * activeNodeSetUpdateJSONCodec is a codec that encodes and decodes
 * ActiveNodeSetUpdate objects to and from JSON.
 */
export declare const activeNodeSetUpdateJSONCodec: ActiveNodeSetUpdateJSONCodec;
export {};

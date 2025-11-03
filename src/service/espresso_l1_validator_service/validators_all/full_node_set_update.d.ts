import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { L1BlockInfo } from '../common/l1_block_info';
import { FullNodeSetDiff } from './full_node_set_diff/full_node_set_diff';
/**
 * FullNodeSetUpdate represents a full update to the validator set at a
 * specific L1 block.
 *
 * This type definition is informed by the type specification as defined
 * in the Espresso L1 Validator Service API documentation.
 * https://www.notion.so/espressosys/Delegation-UI-Service-Specification-2942431b68e980968c28cc5099a4e8f2?source=copy_link#2962431b68e98015981fc249d3b292bd
 * Defined in rust here:
 * https://github.com/EspressoSystems/staking-ui-service/blob/8eb960a9a02d7806fddedfd44090608015d3b6b3/src/types/global.rs#L20-L26
 */
export declare class FullNodeSetUpdate {
    readonly l1Block: L1BlockInfo;
    readonly diff: FullNodeSetDiff[];
    constructor(l1Block: L1BlockInfo, diff?: FullNodeSetDiff[]);
    toJSON(): unknown;
}
/**
 * FullValidatorSetUpdateJSONDecoder decodes FullNodeSetUpdate objects
 * from a JSON object.
 */
declare class FullNodeSetUpdateJSONDecoder implements Converter<unknown, FullNodeSetUpdate> {
    convert(input: unknown): FullNodeSetUpdate;
}
/**
 * FullNodeSetUpdateJSONEncoder encodes FullNodeSetUpdate objects
 * to a JSON object.
 */
declare class FullNodeSetUpdateJSONEncoder implements Converter<FullNodeSetUpdate, unknown> {
    convert(input: FullNodeSetUpdate): unknown;
}
/**
 * FullNodeSetUpdateJSONCodec is a codec that encodes and decodes
 * FullNodeSetUpdate objects to and from JSON.
 */
declare class FullNodeSetUpdateJSONCodec extends TypeCheckingCodec<FullNodeSetUpdate, unknown> {
    readonly encoder: FullNodeSetUpdateJSONEncoder;
    readonly decoder: FullNodeSetUpdateJSONDecoder;
}
/**
 * fullNodeSetUpdateJSONCodec is a codec that encodes and decodes
 * FullNodeSetUpdate objects to and from JSON.
 */
export declare const fullNodeSetUpdateJSONCodec: FullNodeSetUpdateJSONCodec;
export {};

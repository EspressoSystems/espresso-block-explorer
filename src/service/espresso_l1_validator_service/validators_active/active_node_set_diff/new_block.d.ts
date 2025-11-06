import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { CappuccinoAPIBitVec } from '../../../../../../../../../../../../src/service/hotshot_query_service/cappuccino/availability/bit_vec';
import { ParticipationChange } from '../../common/participation_change';
import { ActiveNodeSetDiff } from './active_node_set_diff';
/**
 * Defined in rust here:
 * https://github.com/EspressoSystems/staking-ui-service/blob/8eb960a9a02d7806fddedfd44090608015d3b6b3/src/types/global.rs#L65
 */
export declare class ActiveNodeSetDiffNewBlock extends ActiveNodeSetDiff {
    readonly leaders: ParticipationChange[];
    readonly voters: CappuccinoAPIBitVec;
    constructor(leaders: ParticipationChange[], voters: CappuccinoAPIBitVec);
    toJSON(): unknown;
}
/**
 * ActiveNodeSetDiffNewBlockJSONDecoder decodes ActiveNodeSetDiffNewBlock
 * objects from a JSON object.
 */
declare class ActiveNodeSetDiffNewBlockJSONDecoder implements Converter<unknown, ActiveNodeSetDiffNewBlock> {
    convert(input: unknown): ActiveNodeSetDiffNewBlock;
}
/**
 * ActiveNodeSetDiffNewBlockJSONEncoder encodes ActiveNodeSetDiffNewBlock
 * objects to a JSON object.
 */
declare class ActiveNodeSetDiffNewBlockJSONEncoder implements Converter<ActiveNodeSetDiffNewBlock, unknown> {
    convert(input: ActiveNodeSetDiffNewBlock): unknown;
}
/**
 * ActiveNodeSetDiffNewBlockJSONCodec is a codec that encodes and decodes
 * ActiveNodeSetDiffNewBlock objects to and from JSON.
 */
declare class ActiveNodeSetDiffNewBlockJSONCodec extends TypeCheckingCodec<ActiveNodeSetDiffNewBlock, unknown> {
    readonly encoder: ActiveNodeSetDiffNewBlockJSONEncoder;
    readonly decoder: ActiveNodeSetDiffNewBlockJSONDecoder;
}
/**
 * ActiveNodeSetDiffNewBlockKey is the key used to identify the
 * ActiveNodeSetDiffNewBlock object in the validator set diff JSON
 * representation.
 */
export declare const NewBlockKey = "NewBlock";
/**
 * ActiveNodeSetDiffNewBlockJSONCodec is a codec that encodes and decodes
 * ActiveNodeSetDiffNewBlock objects to and from JSON.
 */
export declare const activeNodeSetDiffNewBlockJSONCodec: ActiveNodeSetDiffNewBlockJSONCodec;
export {};

import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { EpochAndBlock } from './epoch_and_block';
/**
 * Delegation represents a delegation event to a validator node.
 *
 * The Delegation type is defined by the rust code here:
 * https://github.com/EspressoSystems/staking-ui-service/blob/8eb960a9a02d7806fddedfd44090608015d3b6b3/src/types/common.rs#L117-L129
 */
export declare class Delegation {
    readonly delegator: ArrayBuffer;
    readonly node: ArrayBuffer;
    readonly amount: bigint;
    readonly effective: EpochAndBlock;
    constructor(delegator: ArrayBuffer, node: ArrayBuffer, amount: bigint, effective: EpochAndBlock);
    toJSON(): unknown;
}
/**
 * DelegationEncoder encodes Delegation objects to a JSON object.
 */
declare class DelegationEncoder implements Converter<Delegation, unknown> {
    convert(input: Delegation): unknown;
}
/**
 * DelegationDecoder decodes Delegation objects from a JSON object.
 */
declare class DelegationDecoder implements Converter<unknown, Delegation> {
    convert(input: unknown): Delegation;
}
/**
 * DelegationJSONCodec is a codec that encodes and decodes
 * Delegation objects to and from JSON.
 */
export declare class DelegationJSONCodec extends TypeCheckingCodec<Delegation, unknown> {
    readonly encoder: DelegationEncoder;
    readonly decoder: DelegationDecoder;
}
/**
 * delegationJSONCodec is a codec that encodes and decodes
 * Delegation objects to and from JSON.
 */
export declare const delegationJSONCodec: DelegationJSONCodec;
export {};

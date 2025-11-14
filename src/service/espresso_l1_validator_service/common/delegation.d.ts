import { ArrayCodec } from '../../../../../../../../../../../src/convert/codec';
import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
/**
 * Delegation represents a delegation event to a validator node.
 *
 * The Delegation type is defined by the rust code here:
 * https://github.com/EspressoSystems/staking-ui-service/blob/a2317eb04e89fae58421080dd8f5db1524748476/src/types/common.rs#L114-L123
 */
export declare class Delegation {
    readonly delegator: ArrayBuffer;
    readonly node: ArrayBuffer;
    readonly amount: bigint;
    constructor(delegator: ArrayBuffer, node: ArrayBuffer, amount: bigint);
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
export declare const delegationArrayJSONCodec: ArrayCodec<Delegation, Delegation>;
export {};

import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
/**
 * Withdrawal represents a completed withdrawal.
 *
 * The Withdrawal type is defined by the rust code here:
 * https://github.com/EspressoSystems/staking-ui-service/blob/8eb960a9a02d7806fddedfd44090608015d3b6b3/src/types/common.rs#L151-L160
 */
export declare class Withdrawal {
    readonly delegator: ArrayBuffer;
    readonly node: ArrayBuffer;
    readonly amount: bigint;
    constructor(delegator: ArrayBuffer, node: ArrayBuffer, amount: bigint);
    toJSON(): unknown;
}
/**
 * WithdrawalEncoder encodes Withdrawal objects to a JSON object.
 */
declare class WithdrawalEncoder implements Converter<Withdrawal, unknown> {
    convert(input: Withdrawal): unknown;
}
/**
 * WithdrawalDecoder decodes Withdrawal objects from a JSON object.
 */
declare class WithdrawalDecoder implements Converter<unknown, Withdrawal> {
    convert(input: unknown): Withdrawal;
}
/**
 * WithdrawalJSONCodec is a codec that encodes and decodes
 * Withdrawal objects to and from JSON.
 */
export declare class WithdrawalJSONCodec extends TypeCheckingCodec<Withdrawal, unknown> {
    readonly encoder: WithdrawalEncoder;
    readonly decoder: WithdrawalDecoder;
}
/**
 * WithdrawalJSONCodec is a codec that encodes and decodes
 * Withdrawal objects to and from JSON.
 */
export declare const withdrawalJSONCodec: WithdrawalJSONCodec;
export {};

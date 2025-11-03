import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
/**
 * PendingWithdrawal represents a pending withdrawal.
 *
 * The PendingWithdrawal type is defined by the rust code here:
 * https://github.com/EspressoSystems/staking-ui-service/blob/8eb960a9a02d7806fddedfd44090608015d3b6b3/src/types/common.rs#L133-L147
 */
export declare class PendingWithdrawal {
    readonly delegator: ArrayBuffer;
    readonly node: ArrayBuffer;
    readonly amount: bigint;
    readonly availableTime: Date;
    constructor(delegator: ArrayBuffer, node: ArrayBuffer, amount: bigint, availableTime: Date);
    toJSON(): unknown;
}
/**
 * PendingWithdrawalEncoder encodes PendingWithdrawal objects to a JSON object.
 */
declare class PendingWithdrawalEncoder implements Converter<PendingWithdrawal, unknown> {
    convert(input: PendingWithdrawal): unknown;
}
/**
 * PendingWithdrawalDecoder decodes PendingWithdrawal objects from a JSON object.
 */
declare class PendingWithdrawalDecoder implements Converter<unknown, PendingWithdrawal> {
    convert(input: unknown): PendingWithdrawal;
}
/**
 * PendingWithdrawalJSONCodec is a codec that encodes and decodes
 * PendingWithdrawal objects to and from JSON.
 */
export declare class PendingWithdrawalJSONCodec extends TypeCheckingCodec<PendingWithdrawal, unknown> {
    readonly encoder: PendingWithdrawalEncoder;
    readonly decoder: PendingWithdrawalDecoder;
}
/**
 * PendingWithdrawalJSONCodec is a codec that encodes and decodes
 * PendingWithdrawal objects to and from JSON.
 */
export declare const pendingWithdrawalJSONCodec: PendingWithdrawalJSONCodec;
export {};

import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { Withdrawal } from '../../common/withdrawal';
import { WalletDiff } from './wallet_diff';
/**
 */
export declare class WalletDiffUndelegationWithdrawal extends WalletDiff {
    readonly withdrawal: Withdrawal;
    constructor(withdrawal: Withdrawal);
    toJSON(): unknown;
}
/**
 * WalletDiffUndelegationWithdrawalJSONDecoder decodes WalletDiffUndelegationWithdrawal
 * objects from a JSON object.
 */
declare class WalletDiffUndelegationWithdrawalJSONDecoder implements Converter<unknown, WalletDiffUndelegationWithdrawal> {
    convert(input: unknown): WalletDiffUndelegationWithdrawal;
}
/**
 * WalletDiffUndelegationWithdrawalJSONEncoder encodes WalletDiffUndelegationWithdrawal
 * objects to a JSON object.
 */
declare class WalletDiffUndelegationWithdrawalJSONEncoder implements Converter<WalletDiffUndelegationWithdrawal, unknown> {
    convert(input: WalletDiffUndelegationWithdrawal): unknown;
}
/**
 * WalletDiffUndelegationWithdrawalJSONCodec is a codec that encodes and decodes
 * WalletDiffUndelegationWithdrawal objects to and from JSON.
 */
declare class WalletDiffUndelegationWithdrawalJSONCodec extends TypeCheckingCodec<WalletDiffUndelegationWithdrawal, unknown> {
    readonly encoder: WalletDiffUndelegationWithdrawalJSONEncoder;
    readonly decoder: WalletDiffUndelegationWithdrawalJSONDecoder;
}
/**
 * UndelegationWithdrawalKey is the key used to identify the
 * WalletDiffUndelegationWithdrawal object in the validator set diff JSON
 * representation.
 */
export declare const UndelegationWithdrawalKey = "UndelegationWithdrawal";
/**
 * walletDiffUndelegationWithdrawalJSONCodec is a codec that encodes and decodes
 * WalletDiffUndelegationWithdrawal objects to and from JSON.
 */
export declare const walletDiffUndelegationWithdrawalJSONCodec: WalletDiffUndelegationWithdrawalJSONCodec;
export {};

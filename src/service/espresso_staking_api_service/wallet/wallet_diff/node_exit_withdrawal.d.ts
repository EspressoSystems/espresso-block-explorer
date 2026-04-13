import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { Withdrawal } from '../../common/withdrawal';
import { WalletDiff } from './wallet_diff';
/**
 */
export declare class WalletDiffNodeExitWithdrawal extends WalletDiff {
    readonly withdrawal: Withdrawal;
    constructor(withdrawal: Withdrawal);
    toJSON(): unknown;
}
/**
 * WalletDiffNodeExitWithdrawalJSONDecoder decodes WalletDiffNodeExitWithdrawal
 * objects from a JSON object.
 */
declare class WalletDiffNodeExitWithdrawalJSONDecoder implements Converter<unknown, WalletDiffNodeExitWithdrawal> {
    convert(input: unknown): WalletDiffNodeExitWithdrawal;
}
/**
 * WalletDiffNodeExitWithdrawalJSONEncoder encodes WalletDiffNodeExitWithdrawal
 * objects to a JSON object.
 */
declare class WalletDiffNodeExitWithdrawalJSONEncoder implements Converter<WalletDiffNodeExitWithdrawal, unknown> {
    convert(input: WalletDiffNodeExitWithdrawal): unknown;
}
/**
 * WalletDiffNodeExitWithdrawalJSONCodec is a codec that encodes and decodes
 * WalletDiffNodeExitWithdrawal objects to and from JSON.
 */
declare class WalletDiffNodeExitWithdrawalJSONCodec extends TypeCheckingCodec<WalletDiffNodeExitWithdrawal, unknown> {
    readonly encoder: WalletDiffNodeExitWithdrawalJSONEncoder;
    readonly decoder: WalletDiffNodeExitWithdrawalJSONDecoder;
}
/**
 * NodeExitWithdrawalKey is the key used to identify the
 * WalletDiffNodeExitWithdrawal object in the validator set diff JSON
 * representation.
 */
export declare const NodeExitWithdrawalKey = "NodeExitWithdrawal";
/**
 * walletDiffNodeExitWithdrawalJSONCodec is a codec that encodes and decodes
 * WalletDiffNodeExitWithdrawal objects to and from JSON.
 */
export declare const walletDiffNodeExitWithdrawalJSONCodec: WalletDiffNodeExitWithdrawalJSONCodec;
export {};

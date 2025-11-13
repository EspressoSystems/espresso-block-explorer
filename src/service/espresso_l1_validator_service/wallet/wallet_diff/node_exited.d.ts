import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { PendingWithdrawal } from '../../common/pending_withdrawal';
import { WalletDiff } from './wallet_diff';
/**
 */
export declare class WalletDiffNodeExited extends WalletDiff {
    readonly pendingWithdrawal: PendingWithdrawal;
    constructor(pendingWithdrawal: PendingWithdrawal);
    toJSON(): unknown;
}
/**
 * WalletDiffNodeExitedJSONDecoder decodes WalletDiffNodeExited
 * objects from a JSON object.
 */
declare class WalletDiffNodeExitedJSONDecoder implements Converter<unknown, WalletDiffNodeExited> {
    convert(input: unknown): WalletDiffNodeExited;
}
/**
 * WalletDiffNodeExitedJSONEncoder encodes WalletDiffNodeExited
 * objects to a JSON object.
 */
declare class WalletDiffNodeExitedJSONEncoder implements Converter<WalletDiffNodeExited, unknown> {
    convert(input: WalletDiffNodeExited): unknown;
}
/**
 * WalletDiffNodeExitedJSONCodec is a codec that encodes and decodes
 * WalletDiffNodeExited objects to and from JSON.
 */
declare class WalletDiffNodeExitedJSONCodec extends TypeCheckingCodec<WalletDiffNodeExited, unknown> {
    readonly encoder: WalletDiffNodeExitedJSONEncoder;
    readonly decoder: WalletDiffNodeExitedJSONDecoder;
}
/**
 * NodeExitedKey is the key used to identify the
 * WalletDiffNodeExited object in the validator set diff JSON
 * representation.
 */
export declare const NodeExitedKey = "NodeExited";
/**
 * walletDiffNodeExitedJSONCodec is a codec that encodes and decodes
 * WalletDiffNodeExited objects to and from JSON.
 */
export declare const walletDiffNodeExitedJSONCodec: WalletDiffNodeExitedJSONCodec;
export {};

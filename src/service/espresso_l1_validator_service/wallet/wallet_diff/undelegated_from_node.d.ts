import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { PendingWithdrawal } from '../../common/pending_withdrawal';
import { WalletDiff } from './wallet_diff';
/**
 */
export declare class WalletDiffUndelegatedFromNode extends WalletDiff {
    readonly pendingWithdrawal: PendingWithdrawal;
    constructor(pendingWithdrawal: PendingWithdrawal);
    toJSON(): unknown;
}
/**
 * WalletDiffUndelegatedFromNodeJSONDecoder decodes WalletDiffUndelegatedFromNode
 * objects from a JSON object.
 */
declare class WalletDiffUndelegatedFromNodeJSONDecoder implements Converter<unknown, WalletDiffUndelegatedFromNode> {
    convert(input: unknown): WalletDiffUndelegatedFromNode;
}
/**
 * WalletDiffUndelegatedFromNodeJSONEncoder encodes WalletDiffUndelegatedFromNode
 * objects to a JSON object.
 */
declare class WalletDiffUndelegatedFromNodeJSONEncoder implements Converter<WalletDiffUndelegatedFromNode, unknown> {
    convert(input: WalletDiffUndelegatedFromNode): unknown;
}
/**
 * WalletDiffUndelegatedFromNodeJSONCodec is a codec that encodes and decodes
 * WalletDiffUndelegatedFromNode objects to and from JSON.
 */
declare class WalletDiffUndelegatedFromNodeJSONCodec extends TypeCheckingCodec<WalletDiffUndelegatedFromNode, unknown> {
    readonly encoder: WalletDiffUndelegatedFromNodeJSONEncoder;
    readonly decoder: WalletDiffUndelegatedFromNodeJSONDecoder;
}
/**
 * UndelegatedFromNodeKey is the key used to identify the
 * WalletDiffUndelegatedFromNode object in the validator set diff JSON
 * representation.
 */
export declare const UndelegatedFromNodeKey = "UndelegatedFromNode";
/**
 * walletDiffUndelegatedFromNodeJSONCodec is a codec that encodes and decodes
 * WalletDiffUndelegatedFromNode objects to and from JSON.
 */
export declare const walletDiffUndelegatedFromNodeJSONCodec: WalletDiffUndelegatedFromNodeJSONCodec;
export {};

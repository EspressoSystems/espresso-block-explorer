import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { Delegation } from '../../common/delegation';
import { WalletDiff } from './wallet_diff';
/**
 */
export declare class WalletDiffDelegatedToNode extends WalletDiff {
    readonly delegation: Delegation;
    constructor(delegation: Delegation);
    toJSON(): unknown;
}
/**
 * WalletDiffDelegatedToNodeJSONDecoder decodes WalletDifDelegatedToNodef
 * objects from a JSON object.
 */
declare class WalletDiffDelegatedToNodeJSONDecoder implements Converter<unknown, WalletDiffDelegatedToNode> {
    convert(input: unknown): WalletDiffDelegatedToNode;
}
/**
 * WalletDiffDelegatedToNodeJSONEncoder encodes WalletDifDelegatedToNodef
 * objects to a JSON object.
 */
declare class WalletDiffDelegatedToNodeJSONEncoder implements Converter<WalletDiffDelegatedToNode, unknown> {
    convert(input: WalletDiffDelegatedToNode): unknown;
}
/**
 * WalletDiffDelegatedToNodeJSONCodec is a codec that encodes and decodes
 * WalletDiffDelegatedToNode objects to and from JSON.
 */
declare class WalletDiffDelegatedToNodeJSONCodec extends TypeCheckingCodec<WalletDiffDelegatedToNode, unknown> {
    readonly encoder: WalletDiffDelegatedToNodeJSONEncoder;
    readonly decoder: WalletDiffDelegatedToNodeJSONDecoder;
}
/**
 * DelegatedToNodeKey is the key used to identify the
 * WalletDiffDelegatedToNode object in the validator set diff JSON
 * representation.
 */
export declare const DelegatedToNodeKey = "DelegatedToNode";
/**
 * walletDiffDelegatedToNodeJSONCodec is a codec that encodes and decodes
 * WalletDiffDelegatedToNode objects to and from JSON.
 */
export declare const walletDiffDelegatedToNodeJSONCodec: WalletDiffDelegatedToNodeJSONCodec;
export {};

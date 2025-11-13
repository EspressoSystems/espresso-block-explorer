import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { WalletDiff } from './wallet_diff';
/**
 */
export declare class WalletDiffClaimedRewards extends WalletDiff {
    readonly claimedRewards: bigint;
    constructor(claimedRewards: bigint);
    toJSON(): unknown;
}
/**
 * WalletDiffClaimedRewardsJSONDecoder decodes WalletDiffClaimedRewards
 * objects from a JSON object.
 */
declare class WalletDiffClaimedRewardsJSONDecoder implements Converter<unknown, WalletDiffClaimedRewards> {
    convert(input: unknown): WalletDiffClaimedRewards;
}
/**
 * WalletDiffClaimedRewardsJSONEncoder encodes WalletDiffClaimedRewards
 * objects to a JSON object.
 */
declare class WalletDiffClaimedRewardsJSONEncoder implements Converter<WalletDiffClaimedRewards, unknown> {
    convert(input: WalletDiffClaimedRewards): unknown;
}
/**
 * WalletDiffClaimedRewardsJSONCodec is a codec that encodes and decodes
 * WalletDiffClaimedRewards objects to and from JSON.
 */
declare class WalletDiffClaimedRewardsJSONCodec extends TypeCheckingCodec<WalletDiffClaimedRewards, unknown> {
    readonly encoder: WalletDiffClaimedRewardsJSONEncoder;
    readonly decoder: WalletDiffClaimedRewardsJSONDecoder;
}
/**
 * ClaimedRewardsKey is the key used to identify the
 * WalletDiffClaimedRewards object in the validator set diff JSON
 * representation.
 */
export declare const ClaimedRewardsKey = "ClaimedRewards";
/**
 * walletDiffClaimedRewardsJSONCodec is a codec that encodes and decodes
 * WalletDiffClaimedRewards objects to and from JSON.
 */
export declare const walletDiffClaimedRewardsJSONCodec: WalletDiffClaimedRewardsJSONCodec;
export {};

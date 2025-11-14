import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { NullCodec } from '../../../../../../../../../../../../src/convert/codec/null';
/**
 * RewardClaimInput represents the input needed in order to claim rewards
 * for a user from the ClaimRewards contract.
 */
export declare class RewardClaimInput {
    readonly lifetimeRewards: bigint;
    readonly authData: ArrayBuffer;
    constructor(lifetimeRewards: bigint, authData: ArrayBuffer);
    toJSON(): {
        lifetime_rewards: unknown;
        auth_data: `0x${string}`;
    };
}
declare class RewardClaimInputDecoder implements Converter<unknown, RewardClaimInput> {
    convert(input: unknown): RewardClaimInput;
}
declare class RewardClaimInputEncoder implements Converter<RewardClaimInput> {
    convert(input: RewardClaimInput): {
        lifetime_rewards: unknown;
        auth_data: `0x${string}`;
    };
}
declare class RewardClaimInputCodec extends TypeCheckingCodec<RewardClaimInput, ReturnType<InstanceType<new () => RewardClaimInputEncoder>['convert']>> {
    readonly encoder: RewardClaimInputEncoder;
    readonly decoder: RewardClaimInputDecoder;
}
export declare const rewardClaimInputCodec: RewardClaimInputCodec;
export declare const nullableRewardClaimInputCodec: NullCodec<RewardClaimInput, {
    lifetime_rewards: unknown;
    auth_data: `0x${string}`;
}>;
export {};

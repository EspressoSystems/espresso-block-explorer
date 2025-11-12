import { Config } from 'wagmi';
import { RewardClaimContract } from './reward_claim_interface';
export declare class RewardClaimRemote implements RewardClaimContract {
    private readonly config;
    private readonly chainID;
    readonly address: `0x${string}`;
    constructor(config: Config, chainID: number, address: `0x${string}`);
    claimedRewards(address: `0x${string}`): Promise<bigint>;
    getVersion(): Promise<readonly [number, number, number]>;
    claimRewards(lifetimeRewards: bigint, authData: `0x${string}`): Promise<`0x${string}`>;
}

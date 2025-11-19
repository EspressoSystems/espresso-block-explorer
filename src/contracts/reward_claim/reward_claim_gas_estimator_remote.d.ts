import { Config } from 'wagmi';
import { RewardClaimContractGasEstimator } from './reward_claim_interface';
/**
 * RewardClaimContractGasEstimatorRemote implements
 * RewardClaimContractGasEstimator by making remote calls to estimate gas
 * for reward claim contract methods. It is implemented via the Wagmi
 * estimateContractGas utility function.
 */
export declare class RewardClaimContractGasEstimatorRemote implements RewardClaimContractGasEstimator {
    private readonly config;
    private readonly chainID;
    readonly address: `0x${string}`;
    constructor(config: Config, chainID: number, address: `0x${string}`);
    claimRewards(account: `0x${string}`, lifetimeRewards: bigint, authData: `0x${string}`): Promise<bigint>;
}

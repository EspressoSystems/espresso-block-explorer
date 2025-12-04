import { WebWorkerRequest } from '../../../../../../../../../../../../../src/service/espresso_l1_validator_service/web_worker_types';
import { HeightAndAddress } from '../height_and_address';
import { CappuccinoHotShotQueryServiceRewardStateAPI } from '../reward_start_api';
export type RewardStateRequest<Method extends keyof CappuccinoHotShotQueryServiceRewardStateAPI = keyof CappuccinoHotShotQueryServiceRewardStateAPI> = WebWorkerRequest<'reward-state', Method, Parameters<CappuccinoHotShotQueryServiceRewardStateAPI[Method]>>;
export declare class WebWorkerProxyRewardStateAPI {
    private service;
    constructor(service: CappuccinoHotShotQueryServiceRewardStateAPI);
    getLatestRewardBalance(address: string): Promise<`0x${string}` | null>;
    getLatestRewardClaimInput(address: string): Promise<{
        lifetime_rewards: `0x${string}`;
        auth_data: `0x${string}`;
    } | null>;
    getRewardBalance(request: HeightAndAddress): Promise<`0x${string}` | null>;
    getRewardClaimInput(request: HeightAndAddress): Promise<{
        lifetime_rewards: `0x${string}`;
        auth_data: `0x${string}`;
    } | null>;
    handleRequest(request: RewardStateRequest): Promise<unknown>;
}

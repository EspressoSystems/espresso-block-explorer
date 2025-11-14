import { HeightAndAddress } from '../height_and_address';
import { RewardClaimInput } from '../reward_claim_input';
import { CappuccinoHotShotQueryServiceRewardStateAPI } from '../reward_start_api';
export declare class FakeDataCappuccinoHotShotQueryServiceRewardStateAPI implements CappuccinoHotShotQueryServiceRewardStateAPI {
    getLatestRewardBalance(): Promise<null | bigint>;
    getLatestRewardClaimInput(): Promise<null | RewardClaimInput>;
    getRewardBalance(): Promise<null | bigint>;
    getRewardClaimInput(request: HeightAndAddress): Promise<null | RewardClaimInput>;
}

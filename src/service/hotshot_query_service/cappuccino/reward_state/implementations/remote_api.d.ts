import { CappuccinoHotShotQueryServiceRewardStateAPI } from '../reward_start_api';
export declare class FetchBasedCappuccinoHotShotQueryServiceRewardStateAPI implements CappuccinoHotShotQueryServiceRewardStateAPI {
    private readonly fetcher;
    private readonly baseURL;
    private readonly rewardBalanceResponseValidator;
    constructor(fetcher: typeof fetch, url: URL);
    getLatestRewardBalance(address: string): Promise<null | bigint>;
}

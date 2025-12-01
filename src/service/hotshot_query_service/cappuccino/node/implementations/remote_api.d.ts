import { ActiveValidators } from '../active_validators';
import { CappuccinoHotShotQueryServiceNodeAPI } from '../node_api';
import { StakeTable } from '../stake_table';
export declare class FetchBasedCappuccinoHotShotQueryServiceNodeAPI implements CappuccinoHotShotQueryServiceNodeAPI {
    private readonly fetcher;
    private readonly baseURL;
    private readonly stakeTableURL;
    private readonly validatorsURL;
    private readonly blockHeightResponseValidator;
    private readonly validatorsResponseValidator;
    constructor(fetcher: typeof fetch, url: URL);
    getStakeTableForEpoch(epoch: number): Promise<StakeTable>;
    getValidatorsAtEpoch(epoch: number): Promise<ActiveValidators>;
}

import { ActiveValidators } from '../active_validators';
import { HotShotQueryServiceNodeAPI } from '../node_api';
import { StakeTable } from '../stake_table';
export declare class FetchBasedHotShotQueryServiceNodeAPI implements HotShotQueryServiceNodeAPI {
    private readonly fetcher;
    private readonly baseURL;
    private readonly stakeTableURL;
    private readonly validatorsURL;
    private readonly blockHeightResponseValidator;
    private readonly validatorsResponseValidator;
    constructor(fetcher: typeof fetch, baseURL: URL);
    getStakeTableForEpoch(epoch: number): Promise<StakeTable>;
    getValidatorsAtEpoch(epoch: number): Promise<ActiveValidators>;
}

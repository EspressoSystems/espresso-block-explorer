import { AsyncRequestHelper } from '../../../../../../../../../../../../src/service/espresso_staking_api_service/web_worker_types';
import { ActiveValidators } from '../active_validators';
import { HotShotQueryServiceNodeAPI } from '../node_api';
import { StakeTable } from '../stake_table';
export declare class WebWorkerClientBasedHotShotQueryServiceNodeAPI implements HotShotQueryServiceNodeAPI {
    private helper;
    constructor(helper: AsyncRequestHelper);
    getStakeTableForEpoch(epoch: number): Promise<StakeTable>;
    getValidatorsAtEpoch(epoch: number): Promise<ActiveValidators>;
    private sendRequest;
}

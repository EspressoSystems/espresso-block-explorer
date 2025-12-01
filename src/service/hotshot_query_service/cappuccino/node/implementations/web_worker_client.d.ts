import { AsyncRequestHelper } from '../../../../../../../../../../../../../src/service/espresso_l1_validator_service/web_worker_types';
import { ActiveValidators } from '../active_validators';
import { CappuccinoHotShotQueryServiceNodeAPI } from '../node_api';
import { StakeTable } from '../stake_table';
export declare class WebWorkerClientBasedCappuccinoHotShotQueryServiceNodeAPI implements CappuccinoHotShotQueryServiceNodeAPI {
    private helper;
    constructor(helper: AsyncRequestHelper);
    getStakeTableForEpoch(epoch: number): Promise<StakeTable>;
    getValidatorsAtEpoch(epoch: number): Promise<ActiveValidators>;
    private sendRequest;
}

import { ActiveValidators } from '../active_validators';
import { HotShotQueryServiceNodeAPI } from '../node_api';
import { StakeTable } from '../stake_table';
export declare class FakeDataHotShotQueryServiceNodeAPI implements HotShotQueryServiceNodeAPI {
    getStakeTableForEpoch(): Promise<StakeTable>;
    getValidatorsAtEpoch(): Promise<ActiveValidators>;
}

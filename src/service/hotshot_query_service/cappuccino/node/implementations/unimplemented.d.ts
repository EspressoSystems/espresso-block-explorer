import { ActiveValidators } from '../active_validators';
import { CappuccinoHotShotQueryServiceNodeAPI } from '../node_api';
import { StakeTable } from '../stake_table';
export declare class UnimplementedCappuccinoHotShotQueryServiceNodeAPI implements CappuccinoHotShotQueryServiceNodeAPI {
    getStakeTableForEpoch(): Promise<StakeTable>;
    getValidatorsAtEpoch(): Promise<ActiveValidators>;
}

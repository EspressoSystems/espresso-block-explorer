import { IHotShotQueryServiceNodeAPI } from '../types';
import { ActiveValidators } from './active_validators';
import { StakeTable } from './stake_table';
export interface HotShotQueryServiceNodeAPI extends IHotShotQueryServiceNodeAPI<StakeTable, ActiveValidators> {
}

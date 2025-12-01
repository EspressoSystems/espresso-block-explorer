import { HotShotQueryServiceNodeAPI } from '../../types';
import { ActiveValidators } from './active_validators';
import { StakeTable } from './stake_table';

export interface CappuccinoHotShotQueryServiceNodeAPI extends HotShotQueryServiceNodeAPI<
  StakeTable,
  ActiveValidators
> {}

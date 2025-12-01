import UnimplementedError from '@/errors/UnimplementedError';
import { ActiveValidators } from '../active_validators';
import { CappuccinoHotShotQueryServiceNodeAPI } from '../node_api';
import { StakeTable } from '../stake_table';

export class UnimplementedCappuccinoHotShotQueryServiceNodeAPI implements CappuccinoHotShotQueryServiceNodeAPI {
  getStakeTableForEpoch(): Promise<StakeTable> {
    throw new UnimplementedError();
  }
  getValidatorsAtEpoch(): Promise<ActiveValidators> {
    throw new UnimplementedError();
  }
}

import { UnimplementedError } from '@/errors/unimplemented_error';
import { ActiveValidators } from '../active_validators';
import { HotShotQueryServiceNodeAPI } from '../node_api';
import { StakeTable } from '../stake_table';

export class UnimplementedHotShotQueryServiceNodeAPI implements HotShotQueryServiceNodeAPI {
  getStakeTableForEpoch(): Promise<StakeTable> {
    throw new UnimplementedError();
  }
  getValidatorsAtEpoch(): Promise<ActiveValidators> {
    throw new UnimplementedError();
  }
}

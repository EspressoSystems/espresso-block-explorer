import UnimplementedError from '@/errors/UnimplementedError';
import { CappuccinoHotShotQueryServiceAvailabilityAPI } from '../availability/availability_api';
import { FakeDataCappuccinoHotShotQueryServiceAvailabilityAPI } from '../availability/implementations/fake_data';
import { CappuccinoHotShotQueryServiceExplorerAPI } from '../explorer/explorer_api';
import { FakeDataCappuccinoHotShotQueryServiceExplorerAPI } from '../explorer/implementations/fake_data';
import { CappuccinoHotShotQueryService } from '../hot_shot_query_service_api';
import { FakeDataCappuccinoHotShotQueryServiceNodeAPI } from '../node/implementations/fake_api';
import { CappuccinoHotShotQueryServiceNodeAPI } from '../node/node_api';
import { FakeDataCappuccinoHotShotQueryServiceRewardStateAPI } from '../reward_state/implementations/fake_data';
import { CappuccinoHotShotQueryServiceRewardStateAPI } from '../reward_state/reward_start_api';
import { FakeDataCappuccinoHotShotQueryServiceStatusAPI } from '../status/implementations/fake_api';
import { CappuccinoHotShotQueryServiceStatusAPI } from '../status/status_api';

export class FakeDataCappuccinoHotShotQueryService implements CappuccinoHotShotQueryService {
  public readonly availability: CappuccinoHotShotQueryServiceAvailabilityAPI &
    CappuccinoHotShotQueryServiceAvailabilityAPI =
    new FakeDataCappuccinoHotShotQueryServiceAvailabilityAPI();
  public readonly status: CappuccinoHotShotQueryServiceStatusAPI =
    new FakeDataCappuccinoHotShotQueryServiceStatusAPI();
  public readonly explorer: CappuccinoHotShotQueryServiceExplorerAPI =
    new FakeDataCappuccinoHotShotQueryServiceExplorerAPI();
  public readonly rewardState: CappuccinoHotShotQueryServiceRewardStateAPI =
    new FakeDataCappuccinoHotShotQueryServiceRewardStateAPI();
  public readonly node: CappuccinoHotShotQueryServiceNodeAPI =
    new FakeDataCappuccinoHotShotQueryServiceNodeAPI();

  public async setURL(): Promise<boolean> {
    throw new UnimplementedError();
  }
}

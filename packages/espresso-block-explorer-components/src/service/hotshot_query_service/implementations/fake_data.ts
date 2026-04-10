import { UnimplementedError } from '@/errors/unimplemented_error';
import { HotShotQueryServiceAvailabilityAPI } from '../availability/availability_api';
import { FakeDataHotShotQueryServiceAvailabilityAPI } from '../availability/implementations/fake_data';
import { HotShotQueryServiceExplorerAPI } from '../explorer/explorer_api';
import { FakeDataHotShotQueryServiceExplorerAPI } from '../explorer/implementations/fake_data';
import { HotShotQueryService } from '../hot_shot_query_service_api';
import { FakeDataHotShotQueryServiceNodeAPI } from '../node/implementations/fake_api';
import { HotShotQueryServiceNodeAPI } from '../node/node_api';
import { FakeDataHotShotQueryServiceRewardStateAPI } from '../reward_state/implementations/fake_data';
import { HotShotQueryServiceRewardStateAPI } from '../reward_state/reward_start_api';
import { FakeDataHotShotQueryServiceStatusAPI } from '../status/implementations/fake_api';
import { HotShotQueryServiceStatusAPI } from '../status/status_api';

export class FakeDataHotShotQueryService implements HotShotQueryService {
  public readonly availability: HotShotQueryServiceAvailabilityAPI &
    HotShotQueryServiceAvailabilityAPI =
    new FakeDataHotShotQueryServiceAvailabilityAPI();
  public readonly status: HotShotQueryServiceStatusAPI =
    new FakeDataHotShotQueryServiceStatusAPI();
  public readonly explorer: HotShotQueryServiceExplorerAPI =
    new FakeDataHotShotQueryServiceExplorerAPI();
  public readonly rewardState: HotShotQueryServiceRewardStateAPI =
    new FakeDataHotShotQueryServiceRewardStateAPI();
  public readonly node: HotShotQueryServiceNodeAPI =
    new FakeDataHotShotQueryServiceNodeAPI();

  public async setURL(): Promise<boolean> {
    throw new UnimplementedError();
  }
}

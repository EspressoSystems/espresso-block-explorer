import { validateAndExpandResponse } from '@/async/fetch/response_validators';
import { ActiveValidators, activeValidatorsCodec } from '../active_validators';
import { HotShotQueryServiceNodeAPI } from '../node_api';
import { StakeTable, stakeTableCodec } from '../stake_table';

export class FetchBasedHotShotQueryServiceNodeAPI implements HotShotQueryServiceNodeAPI {
  private readonly stakeTableURL: URL;
  private readonly validatorsURL: URL;
  private readonly blockHeightResponseValidator = validateAndExpandResponse(
    stakeTableCodec.decoder,
  );
  private readonly validatorsResponseValidator = validateAndExpandResponse(
    activeValidatorsCodec.decoder,
  );

  constructor(
    private readonly fetcher: typeof fetch,
    private readonly baseURL: URL,
  ) {
    this.stakeTableURL = new URL('stake-table/', this.baseURL);
    this.validatorsURL = new URL('validators/', this.baseURL);
  }

  getStakeTableForEpoch(epoch: number): Promise<StakeTable> {
    const url = new URL(String(epoch), this.stakeTableURL);
    return this.fetcher(url).then(this.blockHeightResponseValidator);
  }

  getValidatorsAtEpoch(epoch: number): Promise<ActiveValidators> {
    const url = new URL(String(epoch), this.validatorsURL);
    return this.fetcher(url).then(this.validatorsResponseValidator);
  }
}

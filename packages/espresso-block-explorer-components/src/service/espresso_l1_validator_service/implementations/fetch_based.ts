import UnimplementedError from '@/errors/UnimplementedError';
import { FetchBasedL1BlockAPI } from '../l1_block/implementations/fetch_based';
import { L1BlockAPI } from '../l1_block/l1_block_api';
import { L1ValidatorService } from '../l1_validator_service_api';
import { FetchBasedValidatorsActiveAPI } from '../validators_active/implementations/fetch_based';
import { ValidatorsActiveAPI } from '../validators_active/validators_active_api';
import { FetchBasedValidatorsAllAPI } from '../validators_all/implementations/fetch_based';
import { ValidatorsAllAPI } from '../validators_all/validators_all_api';

/**
 * FetchBasedL1ValidatorService is an implementation of L1ValidatorService
 * that uses the Fetch API to communicate with the Validator Service API as
 * an external service over HTTP REST requests.
 */
export class FetchBasedL1ValidatorService implements L1ValidatorService {
  public readonly l1Block: L1BlockAPI;
  public readonly validatorsAll: ValidatorsAllAPI;
  public readonly validatorsActive: ValidatorsActiveAPI;

  constructor(fetcher: typeof fetch, baseURL: URL) {
    this.l1Block = new FetchBasedL1BlockAPI(
      fetcher,
      new URL('l1/block/', baseURL),
    );
    this.validatorsAll = new FetchBasedValidatorsAllAPI(
      fetcher,
      new URL('nodes/all/', baseURL),
    );
    this.validatorsActive = new FetchBasedValidatorsActiveAPI(
      fetcher,
      new URL('nodes/active', baseURL),
    );
  }

  public async setURL(): Promise<boolean> {
    throw new UnimplementedError();
  }
}

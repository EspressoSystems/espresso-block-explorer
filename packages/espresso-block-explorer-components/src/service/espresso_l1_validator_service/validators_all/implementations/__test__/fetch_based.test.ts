import {
  mockFetch200JSONResponse,
  validateRequestMethodAndURL,
} from '@/async/fetch/mock';
import { PseudoRandomNumberGenerator } from '@/data_source/fake_data_source';
import { CommissionPercent } from '@/models/espresso/stake_table/commission_percent';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/TaggedBase64';
import { L1BlockInfo } from '@/service/espresso_l1_validator_service/l1_block/l1_block_info';
import { describe, expect, it } from 'vitest';
import { FullValidatorSetDiffValidatorExit } from '../../full_validator_set_diff/validator_exit';
import { FullValidatorSetUpdateValidatorUpdate } from '../../full_validator_set_diff/validator_update';
import {
  FullValidatorSetSnapshot,
  fullValidatorSetSnapshotJSONCodec,
} from '../../full_validator_set_snapshot';
import {
  FullValidatorSetUpdate,
  fullValidatorSetUpdateJSONCodec,
} from '../../full_validator_set_update';
import { ValidatorExitEntry } from '../../validator_exit_entry';
import { ValidatorSetEntry } from '../../validator_set_entry';
import { ValidatorsAllAPI } from '../../validators_all_api';
import { FetchBasedValidatorsAllAPI } from '../fetch_based';

describe('FetchBasedValidatorsAllAPI', () => {
  const baseURL = new URL('https://example.com/v0/validators/all');

  it('should throw return mocked value successfully', async () => {
    {
      const prng = new PseudoRandomNumberGenerator(Date.now());

      const block = prng.nextRangeBigInt(0n, 1000n);
      const response = new FullValidatorSetSnapshot(
        new L1BlockInfo(block, prng.fillBytes(32), new Date()),
        [
          new ValidatorSetEntry(
            prng.fillBytes(32),
            new TaggedBase64('BLS_PUB_KEY', prng.fillBytes(48)),
            prng.nextRangeBigInt(1n, 1_000_000n),
            new CommissionPercent(prng.nextRange(0, 10000)),
            null,
            null,
          ),

          new ValidatorSetEntry(
            prng.fillBytes(32),
            new TaggedBase64('BLS_PUB_KEY', prng.fillBytes(48)),
            prng.nextRangeBigInt(1n, 1_000_000n),
            new CommissionPercent(prng.nextRange(0, 10000)),
            prng.nextFloat(),
            prng.nextFloat(),
          ),
        ],
      );

      const fetcher: typeof fetch = async (input) => {
        validateRequestMethodAndURL(
          'GET',
          'https://example.com/v0/validators/all',
          input,
        );

        return mockFetch200JSONResponse(
          Buffer.from(
            JSON.stringify(fullValidatorSetSnapshotJSONCodec.encode(response)),
          ),
        );
      };
      const service: ValidatorsAllAPI = new FetchBasedValidatorsAllAPI(
        fetcher,
        baseURL,
      );

      await expect(service.snapshot()).resolves.to.deep.equal(response);
    }

    {
      const prng = new PseudoRandomNumberGenerator(Date.now());
      const block = prng.nextRangeBigInt(0n, 1000n);
      const response = new FullValidatorSetUpdate(
        new L1BlockInfo(block, prng.fillBytes(32), new Date()),
        [
          new FullValidatorSetUpdateValidatorUpdate(
            new ValidatorSetEntry(
              prng.fillBytes(32),
              new TaggedBase64('BLS_PUB_KEY', prng.fillBytes(48)),
              prng.nextRangeBigInt(1n, 1_000_000n),
              new CommissionPercent(prng.nextRange(0, 10000)),
              null,
              null,
            ),
          ),

          new FullValidatorSetDiffValidatorExit(
            new ValidatorExitEntry(prng.fillBytes(32), new Date()),
          ),
        ],
      );
      const fetcher: typeof fetch = async (input) => {
        validateRequestMethodAndURL(
          'GET',
          'https://example.com/v0/validators/all/updates/0xdeadbeef',
          input,
        );

        return mockFetch200JSONResponse(
          Buffer.from(
            JSON.stringify(fullValidatorSetUpdateJSONCodec.encode(response)),
          ),
        );
      };

      const service: ValidatorsAllAPI = new FetchBasedValidatorsAllAPI(
        fetcher,
        baseURL,
      );

      await expect(
        service.updatesSince(new Uint8Array([0xde, 0xad, 0xbe, 0xef]).buffer),
      ).resolves.to.deep.equal(response);
    }
  });
});

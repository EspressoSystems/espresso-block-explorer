import {
  mockFetch200JSONResponse,
  validateRequestMethodAndURL,
} from '@/async/fetch/mock';
import { PseudoRandomNumberGenerator } from '@/data_source/fake_data_source';
import { describe, expect, it } from 'vitest';
import { LeaderParticipationChange } from '../../active_validator_set_diff/leader_participation_change';
import { NewEpoch } from '../../active_validator_set_diff/new_epoch';
import { VoterParticipationChange } from '../../active_validator_set_diff/voter_participation_change';
import {
  ActiveValidatorSetSnapshot,
  activeValidatorSetSnapshotJSONCodec,
} from '../../active_validator_set_snapshot';
import {
  ActiveValidatorSetUpdate,
  activeValidatorSetUpdateJSONCodec,
} from '../../active_validator_set_update';
import { CurrentEpochValidatorSetEntry } from '../../current_epoch_validator_set_entry';
import { EpochAndBlock } from '../../epoch_and_block';
import { ParticipationChange } from '../../participation_change';
import { ValidatorsActiveAPI } from '../../validators_active_api';
import { FetchBasedValidatorsActiveAPI } from '../fetch_based';

describe('FetchBasedValidatorsActiveAPI', () => {
  const baseURL = new URL('https://example.com/v0/validators/active');

  it('should throw return mocked value successfully', async () => {
    {
      const prng = new PseudoRandomNumberGenerator(Date.now());

      const block = prng.nextRangeBigInt(0n, 1000n);
      const epoch = block / 3000n;
      const response = new ActiveValidatorSetSnapshot(
        new EpochAndBlock(epoch, block, new Date()),
        [
          new CurrentEpochValidatorSetEntry(prng.fillBytes(32)),
          new CurrentEpochValidatorSetEntry(prng.fillBytes(32)),
          new CurrentEpochValidatorSetEntry(prng.fillBytes(32)),
          new CurrentEpochValidatorSetEntry(prng.fillBytes(32)),
        ],
      );

      const fetcher: typeof fetch = async (input) => {
        validateRequestMethodAndURL(
          'GET',
          'https://example.com/v0/validators/active',
          input,
        );

        return mockFetch200JSONResponse(
          Buffer.from(
            JSON.stringify(
              activeValidatorSetSnapshotJSONCodec.encode(response),
            ),
          ),
        );
      };
      const service: ValidatorsActiveAPI = new FetchBasedValidatorsActiveAPI(
        fetcher,
        baseURL,
      );

      await expect(service.active()).resolves.to.deep.equal(response);
    }

    {
      const prng = new PseudoRandomNumberGenerator(Date.now());
      const block = prng.nextRangeBigInt(0n, 1000n);
      const epoch = block / 3000n;
      const response = new ActiveValidatorSetUpdate(
        new EpochAndBlock(epoch, block, new Date()),
        [
          new LeaderParticipationChange(
            new ParticipationChange(prng.fillBytes(32), prng.nextFloat()),
          ),
          new VoterParticipationChange(
            new ParticipationChange(prng.fillBytes(32), prng.nextFloat()),
          ),
          new NewEpoch([
            new CurrentEpochValidatorSetEntry(prng.fillBytes(32)),
            new CurrentEpochValidatorSetEntry(prng.fillBytes(32)),
            new CurrentEpochValidatorSetEntry(prng.fillBytes(32)),
            new CurrentEpochValidatorSetEntry(prng.fillBytes(32)),
          ]),
        ],
      );
      const fetcher: typeof fetch = async (input) => {
        validateRequestMethodAndURL(
          'GET',
          'https://example.com/v0/validators/active/updates/4',
          input,
        );

        return mockFetch200JSONResponse(
          Buffer.from(
            JSON.stringify(activeValidatorSetUpdateJSONCodec.encode(response)),
          ),
        );
      };
      const service: ValidatorsActiveAPI = new FetchBasedValidatorsActiveAPI(
        fetcher,
        baseURL,
      );

      await expect(service.updatesSince(4n)).resolves.to.deep.equal(response);
    }
  });
});

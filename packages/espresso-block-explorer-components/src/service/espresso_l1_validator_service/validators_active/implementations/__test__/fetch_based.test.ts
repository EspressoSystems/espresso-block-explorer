import {
  mockFetch200JSONResponse,
  validateRequestMethodAndURL,
} from '@/async/fetch/mock';
import { PseudoRandomNumberGenerator } from '@/data_source/fake_data_source';
import { ActiveNodeSetEntry } from '@/service/espresso_l1_validator_service/common/active_node_set_entry';
import { Ratio } from '@/service/espresso_l1_validator_service/common/ratio';
import { describe, expect, it } from 'vitest';
import { EpochAndBlock } from '../../../common/epoch_and_block';
import { ParticipationChange } from '../../../common/participation_change';
import { LeaderParticipationChange } from '../../active_node_set_diff/leader_participation_change';
import { NewEpoch } from '../../active_node_set_diff/new_epoch';
import { VoterParticipationChange } from '../../active_node_set_diff/voter_participation_change';
import {
  ActiveNodeSetSnapshot,
  activeNodeSetSnapshotJSONCodec,
} from '../../active_node_set_snapshot';
import {
  ActiveNodeSetUpdate,
  activeNodeSetUpdateJSONCodec,
} from '../../active_node_set_update';
import { ValidatorsActiveAPI } from '../../validators_active_api';
import { FetchBasedValidatorsActiveAPI } from '../fetch_based';

describe('FetchBasedValidatorsActiveAPI', () => {
  const baseURL = new URL('https://example.com/v0/validators/active');

  it('should throw return mocked value successfully', async () => {
    {
      const prng = new PseudoRandomNumberGenerator(Date.now());

      const block = prng.nextRangeBigInt(0n, 1000n);
      const epoch = block / 3000n;
      const response = new ActiveNodeSetSnapshot(
        new EpochAndBlock(epoch, block, new Date()),
        [
          new ActiveNodeSetEntry(
            prng.fillBytes(32),
            new Ratio(prng.nextFloat()),
            new Ratio(prng.nextFloat()),
          ),
          new ActiveNodeSetEntry(
            prng.fillBytes(32),
            new Ratio(prng.nextFloat()),
            new Ratio(prng.nextFloat()),
          ),
          new ActiveNodeSetEntry(
            prng.fillBytes(32),
            new Ratio(1.0),
            new Ratio(0.5),
          ),
          new ActiveNodeSetEntry(
            prng.fillBytes(32),
            new Ratio(0.75),
            new Ratio(0.25),
          ),
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
            JSON.stringify(activeNodeSetSnapshotJSONCodec.encode(response)),
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
      const response = new ActiveNodeSetUpdate(
        new EpochAndBlock(epoch, block, new Date()),
        [
          new LeaderParticipationChange([
            new ParticipationChange(
              prng.fillBytes(32),
              new Ratio(prng.nextFloat()),
            ),
          ]),
          new VoterParticipationChange([
            new ParticipationChange(
              prng.fillBytes(32),
              new Ratio(prng.nextFloat()),
            ),
          ]),
          new NewEpoch([
            new ActiveNodeSetEntry(
              prng.fillBytes(32),
              new Ratio(0.9),
              new Ratio(0.8),
            ),
            new ActiveNodeSetEntry(
              prng.fillBytes(32),
              new Ratio(0.7),
              new Ratio(0.6),
            ),
            new ActiveNodeSetEntry(
              prng.fillBytes(32),
              new Ratio(0.5),
              new Ratio(0.4),
            ),
            new ActiveNodeSetEntry(
              prng.fillBytes(32),
              new Ratio(0.3),
              new Ratio(0.2),
            ),
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
            JSON.stringify(activeNodeSetUpdateJSONCodec.encode(response)),
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

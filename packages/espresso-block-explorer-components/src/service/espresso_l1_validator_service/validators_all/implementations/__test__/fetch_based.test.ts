import {
  mockFetch200JSONResponse,
  validateRequestMethodAndURL,
} from '@/async/fetch/mock';
import { PseudoRandomNumberGenerator } from '@/data_source/fake_data_source';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/TaggedBase64';
import { L1BlockInfo } from '@/service/espresso_l1_validator_service/common/l1_block_info';
import { Ratio } from '@/service/espresso_l1_validator_service/common/ratio';
import { describe, expect, it } from 'vitest';
import { NodeExit } from '../../../common/node_exit';
import { NodeSetEntry } from '../../../common/node_set_entry';
import { FullNodeSetDiffNodeExit } from '../../full_node_set_diff/node_exit';
import { FullNodeSetUpdateNodeUpdate } from '../../full_node_set_diff/node_update';
import {
  FullNodeSetSnapshot,
  fullNodeSetSnapshotJSONCodec,
} from '../../full_node_set_snapshot';
import {
  FullNodeSetUpdate,
  fullNodeSetUpdateJSONCodec,
} from '../../full_node_set_update';
import { ValidatorsAllAPI } from '../../validators_all_api';
import { FetchBasedValidatorsAllAPI } from '../fetch_based';

describe('FetchBasedValidatorsAllAPI', () => {
  const baseURL = new URL('https://example.com/v0/nodes/all/');

  it('should throw return mocked value successfully', async () => {
    {
      const prng = new PseudoRandomNumberGenerator(Date.now());

      const block = prng.nextRangeBigInt(0n, 1000n);
      const response = new FullNodeSetSnapshot(
        new L1BlockInfo(block, prng.fillBytes(32), new Date()),
        [
          new NodeSetEntry(
            prng.fillBytes(32),
            new TaggedBase64('BLS_PUB_KEY', prng.fillBytes(48)),
            prng.nextRangeBigInt(1n, 1_000_000n),
            new Ratio(prng.nextFloat()),
          ),

          new NodeSetEntry(
            prng.fillBytes(32),
            new TaggedBase64('BLS_PUB_KEY', prng.fillBytes(48)),
            prng.nextRangeBigInt(1n, 1_000_000n),
            new Ratio(prng.nextFloat()),
          ),
        ],
      );

      const fetcher: typeof fetch = async (input) => {
        validateRequestMethodAndURL(
          'GET',
          'https://example.com/v0/nodes/all/0xdeadc0de',
          input,
        );

        return mockFetch200JSONResponse(
          Buffer.from(
            JSON.stringify(fullNodeSetSnapshotJSONCodec.encode(response)),
          ),
        );
      };
      const service: ValidatorsAllAPI = new FetchBasedValidatorsAllAPI(
        fetcher,
        baseURL,
      );

      await expect(
        service.snapshot(new Uint8Array([0xde, 0xad, 0xc0, 0xde]).buffer),
      ).resolves.to.deep.equal(response);
    }

    {
      const prng = new PseudoRandomNumberGenerator(Date.now());
      const block = prng.nextRangeBigInt(0n, 1000n);
      const response = new FullNodeSetUpdate(
        new L1BlockInfo(block, prng.fillBytes(32), new Date()),
        [
          new FullNodeSetUpdateNodeUpdate(
            new NodeSetEntry(
              prng.fillBytes(32),
              new TaggedBase64('BLS_PUB_KEY', prng.fillBytes(48)),
              prng.nextRangeBigInt(1n, 1_000_000n),
              new Ratio(prng.nextFloat()),
            ),
          ),

          new FullNodeSetDiffNodeExit(
            new NodeExit(prng.fillBytes(32), new Date()),
          ),
        ],
      );
      const fetcher: typeof fetch = async (input) => {
        validateRequestMethodAndURL(
          'GET',
          'https://example.com/v0/nodes/all/updates/0xdeadbeef',
          input,
        );

        return mockFetch200JSONResponse(
          Buffer.from(
            JSON.stringify(fullNodeSetUpdateJSONCodec.encode(response)),
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

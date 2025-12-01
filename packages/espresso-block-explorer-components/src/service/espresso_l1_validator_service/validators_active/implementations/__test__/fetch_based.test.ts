import {
  mockFetch200JSONResponse,
  validateRequestMethodAndURL,
} from '@/async/fetch/mock';
import { PseudoRandomNumberGenerator } from '@/data_source/fake_data_source';
import { ActiveNodeSetEntry } from '@/service/espresso_l1_validator_service/common/active_node_set_entry';
import { Ratio } from '@/service/espresso_l1_validator_service/common/ratio';
import {
  CappuccinoAPIBitVec,
  CappuccinoAPIBitVecHead,
  CappuccinoAPIBitVecOrder,
} from '@/service/hotshot_query_service';
import { describe, expect, it } from 'vitest';
import { EpochAndBlock } from '../../../common/epoch_and_block';
import { ActiveNodeSetDiffNewBlock } from '../../active_node_set_diff/new_block';
import { NewEpoch } from '../../active_node_set_diff/new_epoch';
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
      const epoch = EpochAndBlock.determineEpoch(block, 3000n);
      const response = new ActiveNodeSetSnapshot(
        new EpochAndBlock(epoch, block, new Date()),
        [
          new ActiveNodeSetEntry(
            prng.fillBytes(32),
            Ratio.floatingPoint(prng.nextFloat()),
            Ratio.floatingPoint(prng.nextFloat()),
          ),
          new ActiveNodeSetEntry(
            prng.fillBytes(32),
            Ratio.floatingPoint(prng.nextFloat()),
            Ratio.floatingPoint(prng.nextFloat()),
          ),
          new ActiveNodeSetEntry(
            prng.fillBytes(32),
            Ratio.floatingPoint(1.0),
            Ratio.floatingPoint(0.5),
          ),
          new ActiveNodeSetEntry(
            prng.fillBytes(32),
            Ratio.floatingPoint(0.75),
            Ratio.floatingPoint(0.25),
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
      const epoch = EpochAndBlock.determineEpoch(block, 3000n);
      const response = new ActiveNodeSetSnapshot(
        new EpochAndBlock(epoch, block, new Date()),
        [
          new ActiveNodeSetEntry(
            prng.fillBytes(32),
            Ratio.floatingPoint(prng.nextFloat()),
            Ratio.floatingPoint(prng.nextFloat()),
          ),
          new ActiveNodeSetEntry(
            prng.fillBytes(32),
            Ratio.floatingPoint(prng.nextFloat()),
            Ratio.floatingPoint(prng.nextFloat()),
          ),
          new ActiveNodeSetEntry(
            prng.fillBytes(32),
            Ratio.floatingPoint(1.0),
            Ratio.floatingPoint(0.5),
          ),
          new ActiveNodeSetEntry(
            prng.fillBytes(32),
            Ratio.floatingPoint(0.75),
            Ratio.floatingPoint(0.25),
          ),
        ],
      );

      const fetcher: typeof fetch = async (input) => {
        validateRequestMethodAndURL(
          'GET',
          'https://example.com/v0/validators/active/5',
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

      await expect(service.activeFor(5n)).resolves.to.deep.equal(response);
    }

    {
      const prng = new PseudoRandomNumberGenerator(Date.now());
      const block = prng.nextRangeBigInt(0n, 1000n);
      const epoch = EpochAndBlock.determineEpoch(block, 3000n);
      const response = new ActiveNodeSetUpdate(
        new EpochAndBlock(epoch, block, new Date()),
        [
          new ActiveNodeSetDiffNewBlock(
            prng.nextInt(),
            [prng.nextInt()],
            new CappuccinoAPIBitVec(
              CappuccinoAPIBitVecOrder.lsb0,
              new CappuccinoAPIBitVecHead(8, 0),
              16,
              Array.from(new BigUint64Array(prng.fillBytes(8))),
            ),
          ),
          new NewEpoch([
            prng.fillBytes(32),
            prng.fillBytes(32),
            prng.fillBytes(32),
            prng.fillBytes(32),
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

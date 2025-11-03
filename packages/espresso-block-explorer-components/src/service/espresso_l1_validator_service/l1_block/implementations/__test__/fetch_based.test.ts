import {
  mockFetch200JSONResponse,
  validateRequestMethodAndURL,
} from '@/async/fetch/mock';
import { PseudoRandomNumberGenerator } from '@/data_source/fake_data_source';
import {
  L1BlockID,
  l1BlockIDJSONCodec,
} from '@/service/espresso_l1_validator_service/common/l1_block_id';
import { describe, expect, it } from 'vitest';
import { L1BlockAPI } from '../../l1_block_api';
import { FetchBasedL1BlockAPI } from '../fetch_based';

describe('FetchBasedL1BlockAPI', () => {
  const baseURL = new URL('https://example.com/v0/l1/block/');
  it('should throw return mocked value successfully', async () => {
    const prng = new PseudoRandomNumberGenerator(Date.now());

    const response = new L1BlockID(
      prng.nextRangeBigInt(0n, 1_000_000n),
      prng.fillBytes(32),
      prng.fillBytes(32),
    );

    const fetcher: typeof fetch = async (input) => {
      validateRequestMethodAndURL(
        'GET',
        'https://example.com/v0/l1/block/5',
        input,
      );

      return mockFetch200JSONResponse(
        Buffer.from(JSON.stringify(l1BlockIDJSONCodec.encode(response))),
      );
    };
    const service: L1BlockAPI = new FetchBasedL1BlockAPI(fetcher, baseURL);

    await expect(service.getBlockForHeight(5)).resolves.to.deep.equal(response);
  });
});

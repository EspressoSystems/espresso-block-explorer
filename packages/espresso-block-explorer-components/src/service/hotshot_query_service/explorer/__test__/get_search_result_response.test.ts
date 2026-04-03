import { PseudoRandomNumberGenerator } from '@/data_source/fake_data_source/prng';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/tagged_base64';
import { describe, expect, it } from 'vitest';
import { ExplorerBlockSummary } from '../block_summary';
import {
  ExplorerGetSearchResultResponse,
  explorerGetSearchResultResponseCodec,
} from '../get_search_result_response';
import { ExplorerSearchResults } from '../search_results';
import { ExplorerTransactionSummary } from '../transaction_summary';

describe('ExplorerGetBlockDetailResponse', () => {
  const prng = new PseudoRandomNumberGenerator();

  {
    for (let i = 0; i < 10; i++) {
      const response = new ExplorerGetSearchResultResponse(
        new ExplorerSearchResults(
          [
            new ExplorerBlockSummary(
              new TaggedBase64('BLOCK', prng.fillBytes(20)),
              prng.nextInt(),
              [prng.fillBytes(20)],
              prng.nextInt(),
              prng.nextInt(),
              new Date(prng.nextInt()),
            ),
          ],
          [
            new ExplorerTransactionSummary(
              new TaggedBase64('COMMIT', prng.fillBytes(20)),
              [prng.nextInt()],
              prng.nextInt(),
              new Date(prng.nextInt()),
              prng.nextInt(),
              prng.nextInt(),
            ),
          ],
        ),
      );

      it('should encode and decode to the same values', () => {
        expect(response.toJSON()).deep.equals(
          explorerGetSearchResultResponseCodec.encode(response),
        );

        expect(
          explorerGetSearchResultResponseCodec.decode(
            explorerGetSearchResultResponseCodec.encode(response),
          ),
        ).deep.equals(response);
      });
    }
  }
});

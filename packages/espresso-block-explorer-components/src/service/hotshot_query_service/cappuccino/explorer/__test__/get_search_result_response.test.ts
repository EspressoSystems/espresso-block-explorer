import { describe, expect, it } from 'vitest';
import { PseudoRandomNumberGenerator } from '../../../../../data_source/fake_data_source/prng';
import { TaggedBase64 } from '../../../../../models/espresso/tagged_base64/TaggedBase64';
import { CappuccinoExplorerBlockSummary } from '../block_Summary';
import {
  CappuccinoExplorerGetSearchResultResponse,
  cappuccinoExplorerGetSearchResultResponseCodec,
} from '../get_search_result_response';
import { CappuccinoExplorerSearchResults } from '../search_results';
import { CappuccinoExplorerTransactionSummary } from '../transaction_summary';

describe('CappuccinoExplorerGetBlockDetailResponse', () => {
  const prng = new PseudoRandomNumberGenerator();

  {
    for (let i = 0; i < 10; i++) {
      const response = new CappuccinoExplorerGetSearchResultResponse(
        new CappuccinoExplorerSearchResults(
          [
            new CappuccinoExplorerBlockSummary(
              new TaggedBase64('BLOCK', prng.fillBytes(20)),
              prng.nextInt(),
              prng.fillBytes(20),
              prng.nextInt(),
              prng.nextInt(),
              new Date(prng.nextInt()),
            ),
          ],
          [
            new CappuccinoExplorerTransactionSummary(
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
          cappuccinoExplorerGetSearchResultResponseCodec.encode(response),
        );

        expect(
          cappuccinoExplorerGetSearchResultResponseCodec.decode(
            cappuccinoExplorerGetSearchResultResponseCodec.encode(response),
          ),
        ).deep.equals(response);
      });
    }
  }
});

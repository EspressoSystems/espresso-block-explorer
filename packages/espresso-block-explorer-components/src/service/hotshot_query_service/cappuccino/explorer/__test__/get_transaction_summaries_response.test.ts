import { describe, expect, it } from 'vitest';
import { PseudoRandomNumberGenerator } from '../../../../../data_source/fake_data_source/prng';
import { TaggedBase64 } from '../../../../../models/espresso/tagged_base64/TaggedBase64';
import {
  CappuccinoExplorerGetTransactionSummariesResponse,
  cappuccinoExplorerGetTransactionSummariesResponseCodec,
} from '../get_transaction_summaries_response';
import { CappuccinoExplorerTransactionSummary } from '../transaction_summary';

describe('CappuccinoExplorerGetTransactionSummariesResponse', () => {
  const prng = new PseudoRandomNumberGenerator();

  {
    for (let i = 0; i < 10; i++) {
      const response = new CappuccinoExplorerGetTransactionSummariesResponse([
        new CappuccinoExplorerTransactionSummary(
          new TaggedBase64('COMMIT', prng.fillBytes(20)),
          [prng.nextInt()],
          prng.nextInt(),
          new Date(prng.nextInt()),
          prng.nextInt(),
          prng.nextInt(),
        ),
      ]);

      it('should encode and decode to the same values', () => {
        expect(response.toJSON()).deep.equals(
          cappuccinoExplorerGetTransactionSummariesResponseCodec.encode(
            response,
          ),
        );

        expect(
          cappuccinoExplorerGetTransactionSummariesResponseCodec.decode(
            cappuccinoExplorerGetTransactionSummariesResponseCodec.encode(
              response,
            ),
          ),
        ).deep.equals(response);
      });
    }
  }
});

import { PseudoRandomNumberGenerator } from '@/data_source/fake_data_source/prng';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/tagged_base64';
import { describe, expect, it } from 'vitest';
import {
  ExplorerGetTransactionSummariesResponse,
  explorerGetTransactionSummariesResponseCodec,
} from '../get_transaction_summaries_response';
import { ExplorerTransactionSummary } from '../transaction_summary';

describe('ExplorerGetTransactionSummariesResponse', () => {
  const prng = new PseudoRandomNumberGenerator();

  {
    for (let i = 0; i < 10; i++) {
      const response = new ExplorerGetTransactionSummariesResponse([
        new ExplorerTransactionSummary(
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
          explorerGetTransactionSummariesResponseCodec.encode(response),
        );

        expect(
          explorerGetTransactionSummariesResponseCodec.decode(
            explorerGetTransactionSummariesResponseCodec.encode(response),
          ),
        ).deep.equals(response);
      });
    }
  }
});

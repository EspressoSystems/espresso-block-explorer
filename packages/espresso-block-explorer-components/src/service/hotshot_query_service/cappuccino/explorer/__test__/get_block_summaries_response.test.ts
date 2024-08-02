import { PseudoRandomNumberGenerator } from '@/data_source/fake_data_source/prng';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/TaggedBase64';
import { describe, expect, it } from 'vitest';
import { CappuccinoExplorerBlockSummary } from '../block_summary';
import {
  CappuccinoExplorerGetBlockSummariesResponse,
  cappuccinoExplorerGetBlockSummariesResponseCodec,
} from '../get_block_summaries_response';

describe('CappuccinoExplorerGetBlockSummariesResponse', () => {
  const prng = new PseudoRandomNumberGenerator();

  {
    for (let i = 0; i < 10; i++) {
      const response = new CappuccinoExplorerGetBlockSummariesResponse([
        new CappuccinoExplorerBlockSummary(
          new TaggedBase64('BLOCK', prng.fillBytes(20)),
          prng.nextInt(),
          [prng.fillBytes(20)],
          prng.nextInt(),
          prng.nextInt(),
          new Date(prng.nextInt()),
        ),
      ]);

      it('should encode and decode to the same values', () => {
        expect(response.toJSON()).deep.equals(
          cappuccinoExplorerGetBlockSummariesResponseCodec.encode(response),
        );

        expect(
          cappuccinoExplorerGetBlockSummariesResponseCodec.decode(
            cappuccinoExplorerGetBlockSummariesResponseCodec.encode(response),
          ),
        ).deep.equals(response);
      });
    }
  }
});

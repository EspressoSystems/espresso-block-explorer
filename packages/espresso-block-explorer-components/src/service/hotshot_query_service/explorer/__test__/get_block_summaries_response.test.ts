import { PseudoRandomNumberGenerator } from '@/data_source/fake_data_source/prng';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/tagged_base64';
import { describe, expect, it } from 'vitest';
import { ExplorerBlockSummary } from '../block_summary';
import {
  ExplorerGetBlockSummariesResponse,
  explorerGetBlockSummariesResponseCodec,
} from '../get_block_summaries_response';

describe('ExplorerGetBlockSummariesResponse', () => {
  const prng = new PseudoRandomNumberGenerator();

  {
    for (let i = 0; i < 10; i++) {
      const response = new ExplorerGetBlockSummariesResponse([
        new ExplorerBlockSummary(
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
          explorerGetBlockSummariesResponseCodec.encode(response),
        );

        expect(
          explorerGetBlockSummariesResponseCodec.decode(
            explorerGetBlockSummariesResponseCodec.encode(response),
          ),
        ).deep.equals(response);
      });
    }
  }
});

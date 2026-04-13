import { PseudoRandomNumberGenerator } from '@/data_source/fake_data_source/prng';
import { describe, expect, it } from 'vitest';
import {
  ExplorerGetBlockSummariesRequest,
  explorerGetBlockSummariesRequestCodec,
} from '../get_block_summaries_request';

describe('ExplorerGetBlockSummariesRequest', () => {
  const prng = new PseudoRandomNumberGenerator();

  {
    for (let i = 0; i < 10; i++) {
      const request = ExplorerGetBlockSummariesRequest.latest(prng.nextInt());

      it('should encode and decode to the same values', () => {
        expect(request.toJSON()).deep.equals(
          explorerGetBlockSummariesRequestCodec.encode(request),
        );

        expect(
          explorerGetBlockSummariesRequestCodec.decode(
            explorerGetBlockSummariesRequestCodec.encode(request),
          ),
        ).deep.equals(request);
      });
    }
  }

  {
    for (let i = 0; i < 10; i++) {
      const request = ExplorerGetBlockSummariesRequest.from(
        prng.nextInt(),
        prng.nextInt(),
      );

      it('should encode and decode to the same values', () => {
        expect(request.toJSON()).deep.equals(
          explorerGetBlockSummariesRequestCodec.encode(request),
        );

        expect(
          explorerGetBlockSummariesRequestCodec.decode(
            explorerGetBlockSummariesRequestCodec.encode(request),
          ),
        ).deep.equals(request);
      });
    }
  }
});

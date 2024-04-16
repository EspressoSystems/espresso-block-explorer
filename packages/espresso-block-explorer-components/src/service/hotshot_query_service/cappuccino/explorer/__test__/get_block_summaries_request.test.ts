import { describe, expect, it } from 'vitest';
import { PseudoRandomNumberGenerator } from '../../../../../data_source/fake_data_source/prng';
import {
  CappuccinoExplorerGetBlockSummariesRequest,
  cappuccinoExplorerGetBlockSummariesRequestCodec,
} from '../get_block_summaries_request';

describe('CappuccinoExplorerGetBlockSummariesRequest', () => {
  const prng = new PseudoRandomNumberGenerator();

  {
    for (let i = 0; i < 10; i++) {
      const request = CappuccinoExplorerGetBlockSummariesRequest.latest(
        prng.nextInt(),
      );

      it('should encode and decode to the same values', () => {
        expect(request.toJSON()).deep.equals(
          cappuccinoExplorerGetBlockSummariesRequestCodec.encode(request),
        );

        expect(
          cappuccinoExplorerGetBlockSummariesRequestCodec.decode(
            cappuccinoExplorerGetBlockSummariesRequestCodec.encode(request),
          ),
        ).deep.equals(request);
      });
    }
  }

  {
    for (let i = 0; i < 10; i++) {
      const request = CappuccinoExplorerGetBlockSummariesRequest.from(
        prng.nextInt(),
        prng.nextInt(),
      );

      it('should encode and decode to the same values', () => {
        expect(request.toJSON()).deep.equals(
          cappuccinoExplorerGetBlockSummariesRequestCodec.encode(request),
        );

        expect(
          cappuccinoExplorerGetBlockSummariesRequestCodec.decode(
            cappuccinoExplorerGetBlockSummariesRequestCodec.encode(request),
          ),
        ).deep.equals(request);
      });
    }
  }
});

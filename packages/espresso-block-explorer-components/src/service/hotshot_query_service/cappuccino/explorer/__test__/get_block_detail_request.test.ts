import { describe, expect, it } from 'vitest';
import { PseudoRandomNumberGenerator } from '../../../../../data_source/fake_data_source/prng';
import {
  CappuccinoExplorerGetBlockDetailRequest,
  cappuccinoExplorerGetBlockDetailRequestCodec,
} from '../get_block_detail_request';

describe('CappuccinoExplorerGetBlockDetailRequest', () => {
  const prng = new PseudoRandomNumberGenerator();

  {
    for (let i = 0; i < 10; i++) {
      const request = CappuccinoExplorerGetBlockDetailRequest.latest();

      it('should encode and decode to the same values', () => {
        expect(request.toJSON()).deep.equals(
          cappuccinoExplorerGetBlockDetailRequestCodec.encode(request),
        );

        expect(
          cappuccinoExplorerGetBlockDetailRequestCodec.decode(
            cappuccinoExplorerGetBlockDetailRequestCodec.encode(request),
          ),
        ).deep.equals(request);
      });
    }
  }

  {
    for (let i = 0; i < 10; i++) {
      const request = CappuccinoExplorerGetBlockDetailRequest.height(
        prng.nextInt(),
      );

      it('should encode and decode to the same values', () => {
        expect(request.toJSON()).deep.equals(
          cappuccinoExplorerGetBlockDetailRequestCodec.encode(request),
        );

        expect(
          cappuccinoExplorerGetBlockDetailRequestCodec.decode(
            cappuccinoExplorerGetBlockDetailRequestCodec.encode(request),
          ),
        ).deep.equals(request);
      });
    }
  }
});

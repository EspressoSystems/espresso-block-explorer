import { PseudoRandomNumberGenerator } from '@/data_source/fake_data_source/prng';
import { describe, expect, it } from 'vitest';
import {
  ExplorerGetBlockDetailRequest,
  explorerGetBlockDetailRequestCodec,
} from '../get_block_detail_request';

describe('CappuccinoExplorerGetBlockDetailRequest', () => {
  const prng = new PseudoRandomNumberGenerator();

  {
    for (let i = 0; i < 10; i++) {
      const request = ExplorerGetBlockDetailRequest.latest();

      it('should encode and decode to the same values', () => {
        expect(request.toJSON()).deep.equals(
          explorerGetBlockDetailRequestCodec.encode(request),
        );

        expect(
          explorerGetBlockDetailRequestCodec.decode(
            explorerGetBlockDetailRequestCodec.encode(request),
          ),
        ).deep.equals(request);
      });
    }
  }

  {
    for (let i = 0; i < 10; i++) {
      const request = ExplorerGetBlockDetailRequest.height(prng.nextInt());

      it('should encode and decode to the same values', () => {
        expect(request.toJSON()).deep.equals(
          explorerGetBlockDetailRequestCodec.encode(request),
        );

        expect(
          explorerGetBlockDetailRequestCodec.decode(
            explorerGetBlockDetailRequestCodec.encode(request),
          ),
        ).deep.equals(request);
      });
    }
  }
});

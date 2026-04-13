import { hexArrayBufferCodec } from '@/convert/codec/array_buffer_hex';
import { PseudoRandomNumberGenerator } from '@/data_source/fake_data_source/prng';
import { describe, expect, it } from 'vitest';
import {
  ExplorerGetSearchResultRequest,
  explorerGetSearchResultRequestCodec,
} from '../get_search_result_request';

describe('ExplorerGetSearchResultRequest', () => {
  const prng = new PseudoRandomNumberGenerator();

  {
    for (let i = 0; i < 10; i++) {
      const request = new ExplorerGetSearchResultRequest(
        hexArrayBufferCodec.encode(prng.fillBytes(20)),
      );

      it('should encode and decode to the same values', () => {
        expect(request.toJSON()).deep.equals(
          explorerGetSearchResultRequestCodec.encode(request),
        );

        expect(
          explorerGetSearchResultRequestCodec.decode(
            explorerGetSearchResultRequestCodec.encode(request),
          ),
        ).deep.equals(request);
      });
    }
  }
});

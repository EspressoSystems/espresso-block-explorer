import { describe, expect, it } from 'vitest';
import { hexArrayBufferCodec } from '../../../../../convert/codec/array_buffer';
import { PseudoRandomNumberGenerator } from '../../../../../data_source/fake_data_source/prng';
import {
  CappuccinoExplorerGetSearchResultRequest,
  cappuccinoExplorerGetSearchResultRequestCodec,
} from '../get_search_result_request';

describe('CappuccinoExplorerGetSearchResultRequest', () => {
  const prng = new PseudoRandomNumberGenerator();

  {
    for (let i = 0; i < 10; i++) {
      const request = new CappuccinoExplorerGetSearchResultRequest(
        hexArrayBufferCodec.encode(prng.fillBytes(20)),
      );

      it('should encode and decode to the same values', () => {
        expect(request.toJSON()).deep.equals(
          cappuccinoExplorerGetSearchResultRequestCodec.encode(request),
        );

        expect(
          cappuccinoExplorerGetSearchResultRequestCodec.decode(
            cappuccinoExplorerGetSearchResultRequestCodec.encode(request),
          ),
        ).deep.equals(request);
      });
    }
  }
});

import { PseudoRandomNumberGenerator } from '@/data_source/fake_data_source/prng';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/tagged_base64';
import { describe, expect, it } from 'vitest';
import {
  CappuccinoExplorerGetTransactionDetailRequest,
  cappuccinoExplorerGetTransactionDetailRequestCodec,
} from '../get_transaction_detail_request';

describe('CappuccinoExplorerGetTransactionDetailRequest', () => {
  const prng = new PseudoRandomNumberGenerator();

  {
    for (let i = 0; i < 10; i++) {
      const request =
        CappuccinoExplorerGetTransactionDetailRequest.heightAndOffset(
          prng.nextInt(),
          prng.nextInt(),
        );

      it('should encode and decode to the same values', () => {
        expect(request.toJSON()).deep.equals(
          cappuccinoExplorerGetTransactionDetailRequestCodec.encode(request),
        );

        expect(
          cappuccinoExplorerGetTransactionDetailRequestCodec.decode(
            cappuccinoExplorerGetTransactionDetailRequestCodec.encode(request),
          ),
        ).deep.equals(request);
      });
    }
  }

  {
    for (let i = 0; i < 10; i++) {
      const request = CappuccinoExplorerGetTransactionDetailRequest.hash(
        new TaggedBase64('COMMIT', prng.fillBytes(32)),
      );

      it('should encode and decode to the same values', () => {
        expect(request.toJSON()).deep.equals(
          cappuccinoExplorerGetTransactionDetailRequestCodec.encode(request),
        );

        expect(
          cappuccinoExplorerGetTransactionDetailRequestCodec.decode(
            cappuccinoExplorerGetTransactionDetailRequestCodec.encode(request),
          ),
        ).deep.equals(request);
      });
    }
  }
});

import { PseudoRandomNumberGenerator } from '@/data_source/fake_data_source/prng';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/TaggedBase64';
import { describe, expect, it } from 'vitest';
import {
  CappuccinoExplorerGetTransactionDetailResponse,
  cappuccinoExplorerGetTransactionDetailResponseCodec,
} from '../get_transaction_detail_response';
import { CappuccinoExplorerTransactionDetail } from '../transaction_detail';
import { CappuccinoExplorerTransactionDetailData } from '../transaction_detail_data';
import { CappuccinoExplorerTransactionDetailDetails } from '../transaction_detail_details';

describe('CappuccinoExplorerGetTransactionDetailResponse', () => {
  const prng = new PseudoRandomNumberGenerator();

  {
    for (let i = 0; i < 10; i++) {
      const response = new CappuccinoExplorerGetTransactionDetailResponse(
        new CappuccinoExplorerTransactionDetail(
          new CappuccinoExplorerTransactionDetailDetails(
            new TaggedBase64('COMMIT', prng.fillBytes(20)),
            prng.nextInt(),
            prng.nextFloat() > 0.5,
            prng.nextInt(),
            prng.nextInt(),
            prng.nextInt(),
            new Date(prng.nextInt()),
            [],
            [],
          ),
          [
            new CappuccinoExplorerTransactionDetailData(
              prng.nextInt(),
              prng.fillBytes(120),
            ),
          ],
        ),
      );

      it('should encode and decode to the same values', () => {
        expect(response.toJSON()).deep.equals(
          cappuccinoExplorerGetTransactionDetailResponseCodec.encode(response),
        );

        expect(
          cappuccinoExplorerGetTransactionDetailResponseCodec.decode(
            cappuccinoExplorerGetTransactionDetailResponseCodec.encode(
              response,
            ),
          ),
        ).deep.equals(response);
      });
    }
  }
});

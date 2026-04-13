import { PseudoRandomNumberGenerator } from '@/data_source/fake_data_source/prng';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/tagged_base64';
import { describe, expect, it } from 'vitest';
import {
  ExplorerGetTransactionDetailResponse,
  explorerGetTransactionDetailResponseCodec,
} from '../get_transaction_detail_response';
import { ExplorerTransactionDetail } from '../transaction_detail';
import { ExplorerTransactionDetailData } from '../transaction_detail_data';
import { ExplorerTransactionDetailDetails } from '../transaction_detail_details';

describe('CappuccinoExplorerGetTransactionDetailResponse', () => {
  const prng = new PseudoRandomNumberGenerator();

  {
    for (let i = 0; i < 10; i++) {
      const response = new ExplorerGetTransactionDetailResponse(
        new ExplorerTransactionDetail(
          new ExplorerTransactionDetailDetails(
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
            new ExplorerTransactionDetailData(
              prng.nextInt(),
              prng.fillBytes(120),
            ),
          ],
        ),
      );

      it('should encode and decode to the same values', () => {
        expect(response.toJSON()).deep.equals(
          explorerGetTransactionDetailResponseCodec.encode(response),
        );

        expect(
          explorerGetTransactionDetailResponseCodec.decode(
            explorerGetTransactionDetailResponseCodec.encode(response),
          ),
        ).deep.equals(response);
      });
    }
  }
});

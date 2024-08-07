import { PseudoRandomNumberGenerator } from '@/data_source/fake_data_source/prng';
import { ESP } from '@/models/block_explorer/currency_code';
import MonetaryValue from '@/models/block_explorer/monetary_value';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/TaggedBase64';
import { describe, expect, it } from 'vitest';
import { CappuccinoExplorerBlockDetail } from '../block_detail';
import {
  CappuccinoExplorerGetBlockDetailResponse,
  cappuccinoExplorerGetBlockDetailResponseCodec,
} from '../get_block_detail_response';

describe('CappuccinoExplorerGetBlockDetailResponse', () => {
  const prng = new PseudoRandomNumberGenerator();

  {
    for (let i = 0; i < 10; i++) {
      const response = new CappuccinoExplorerGetBlockDetailResponse(
        new CappuccinoExplorerBlockDetail(
          new TaggedBase64('BLOCK', prng.fillBytes(20)),
          prng.nextInt(),
          new Date(prng.nextInt()),
          prng.nextInt(),
          [prng.fillBytes(20)],
          [prng.fillBytes(20)],
          prng.nextInt(),
          [new MonetaryValue(ESP, BigInt(prng.nextInt()))],
        ),
      );

      it('should encode and decode to the same values', () => {
        expect(response.toJSON()).deep.equals(
          cappuccinoExplorerGetBlockDetailResponseCodec.encode(response),
        );

        expect(
          cappuccinoExplorerGetBlockDetailResponseCodec.decode(
            cappuccinoExplorerGetBlockDetailResponseCodec.encode(response),
          ),
        ).deep.equals(response);
      });
    }
  }
});

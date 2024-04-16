import { describe, expect, it } from 'vitest';
import { PseudoRandomNumberGenerator } from '../../../../../data_source/fake_data_source/prng';
import { ESP } from '../../../../../models/block_explorer/currency_code';
import MonetaryValue from '../../../../../models/block_explorer/monetary_value';
import { TaggedBase64 } from '../../../../../models/espresso/tagged_base64/TaggedBase64';
import { CappuccinoExplorerBlockSummary } from '../block_Summary';
import { CappuccinoExplorerBlockDetail } from '../block_detail';
import { CappuccinoExplorerSummary } from '../explorer_summary';
import { CappuccinoGenesisOverview } from '../genesis_overview';
import {
  CappuccinoExplorerGetExplorerSummaryResponse,
  cappuccinoExplorerGetExplorerSummaryResponseCodec,
} from '../get_explorer_summary_response';
import { CappuccinoSummaryHistograms } from '../summary_histograms';
import { CappuccinoExplorerTransactionSummary } from '../transaction_summary';

describe('CappuccinoExplorerGetExplorerSummaryResponse', () => {
  const prng = new PseudoRandomNumberGenerator();

  {
    for (let i = 0; i < 10; i++) {
      const response = new CappuccinoExplorerGetExplorerSummaryResponse(
        new CappuccinoExplorerSummary(
          new CappuccinoExplorerBlockDetail(
            new TaggedBase64('BLOCK', prng.fillBytes(20)),
            prng.nextInt(),
            new Date(prng.nextInt()),
            prng.nextInt(),
            prng.fillBytes(20),
            prng.fillBytes(20),
            prng.nextInt(),
            [new MonetaryValue(ESP, BigInt(prng.nextInt()))],
          ),
          new CappuccinoGenesisOverview(
            prng.nextInt(),
            prng.nextInt(),
            prng.nextInt(),
          ),
          [
            new CappuccinoExplorerBlockSummary(
              new TaggedBase64('BLOCK', prng.fillBytes(20)),
              prng.nextInt(),
              prng.fillBytes(20),
              prng.nextInt(),
              prng.nextInt(),
              new Date(prng.nextInt()),
            ),
          ],
          [
            new CappuccinoExplorerTransactionSummary(
              new TaggedBase64('COMMIT', prng.fillBytes(20)),
              [prng.nextInt()],
              prng.nextInt(),
              new Date(prng.nextInt()),
              prng.nextInt(),
              prng.nextInt(),
            ),
          ],
          new CappuccinoSummaryHistograms(
            Array.from(new Uint8Array(prng.fillBytes(50))),
            Array.from(new Uint8Array(prng.fillBytes(50))),
            Array.from(new Uint8Array(prng.fillBytes(50))),
            Array.from(new Uint8Array(prng.fillBytes(50))),
          ),
        ),
      );

      it('should encode and decode to the same values', () => {
        expect(response.toJSON()).deep.equals(
          cappuccinoExplorerGetExplorerSummaryResponseCodec.encode(response),
        );

        expect(
          cappuccinoExplorerGetExplorerSummaryResponseCodec.decode(
            cappuccinoExplorerGetExplorerSummaryResponseCodec.encode(response),
          ),
        ).deep.equals(response);
      });
    }
  }
});

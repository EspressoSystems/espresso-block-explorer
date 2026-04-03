import { PseudoRandomNumberGenerator } from '@/data_source/fake_data_source/prng';
import { iota } from '@/functional/functional';
import { ESP } from '@/models/block_explorer/currency_code';
import MonetaryValue from '@/models/block_explorer/monetary_value';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/tagged_base64';
import { describe, expect, it } from 'vitest';
import { ExplorerBlockDetail } from '../block_detail';
import { ExplorerBlockSummary } from '../block_summary';
import { ExplorerSummary } from '../explorer_summary';
import { GenesisOverview } from '../genesis_overview';
import {
  ExplorerGetExplorerSummaryResponse,
  explorerGetExplorerSummaryResponseCodec,
} from '../get_explorer_summary_response';
import { SummaryHistograms } from '../summary_histograms';
import { ExplorerTransactionSummary } from '../transaction_summary';

describe('ExplorerGetExplorerSummaryResponse', () => {
  const prng = new PseudoRandomNumberGenerator();

  {
    for (let i = 0; i < 10; i++) {
      const response = new ExplorerGetExplorerSummaryResponse(
        new ExplorerSummary(
          new ExplorerBlockDetail(
            new TaggedBase64('BLOCK', prng.fillBytes(20)),
            prng.nextInt(),
            new Date(prng.nextInt()),
            prng.nextInt(),
            [prng.fillBytes(20)],
            [prng.fillBytes(20)],
            prng.nextInt(),
            [new MonetaryValue(ESP, BigInt(prng.nextInt()))],
          ),
          new GenesisOverview(prng.nextInt(), prng.nextInt(), prng.nextInt()),
          [
            new ExplorerBlockSummary(
              new TaggedBase64('BLOCK', prng.fillBytes(20)),
              prng.nextInt(),
              [prng.fillBytes(20)],
              prng.nextInt(),
              prng.nextInt(),
              new Date(prng.nextInt()),
            ),
          ],
          [
            new ExplorerTransactionSummary(
              new TaggedBase64('COMMIT', prng.fillBytes(20)),
              [prng.nextInt()],
              prng.nextInt(),
              new Date(prng.nextInt()),
              prng.nextInt(),
              prng.nextInt(),
            ),
          ],
          new SummaryHistograms(
            Array.from(new Uint8Array(prng.fillBytes(50))),
            Array.from(new Uint8Array(prng.fillBytes(50))),
            Array.from(new Uint8Array(prng.fillBytes(50))),
            Array.from(iota(50)),
          ),
        ),
      );

      it('should encode and decode to the same values', () => {
        expect(response.toJSON()).deep.equals(
          explorerGetExplorerSummaryResponseCodec.encode(response),
        );

        expect(
          explorerGetExplorerSummaryResponseCodec.decode(
            explorerGetExplorerSummaryResponseCodec.encode(response),
          ),
        ).deep.equals(response);
      });
    }
  }
});

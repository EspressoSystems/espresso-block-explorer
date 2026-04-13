import { assertInstanceOf } from '@/assert/assert';
import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { ExplorerBlockDetail, explorerBlockDetailCodec } from './block_detail';
import {
  ExplorerBlockSummary,
  explorerBlockSummaryArrayCodec,
} from './block_summary';
import { GenesisOverview, genesisOverviewCodec } from './genesis_overview';
import {
  SummaryHistograms,
  summaryHistogramsCodec,
} from './summary_histograms';
import {
  ExplorerTransactionSummary,
  explorerTransactionSummaryArrayCodec,
} from './transaction_summary';

/**
 * ExplorerSummary is a class that represents the summary of the recent chain
 * history, as a snapshot.
 */
export class ExplorerSummary {
  constructor(
    public readonly latestBlock: ExplorerBlockDetail,
    public readonly genesisOverview: GenesisOverview,
    public readonly latestBlocks: ExplorerBlockSummary[],
    public readonly latestTransactions: ExplorerTransactionSummary[],
    public readonly histograms: SummaryHistograms,
  ) {}

  toJSON() {
    return explorerSummaryCodec.encode(this);
  }
}

class ExplorerSummaryDecoder implements Converter<unknown, ExplorerSummary> {
  convert(input: unknown): ExplorerSummary {
    assertRecordWithKeys(
      input,
      'latest_block',
      'genesis_overview',
      'latest_blocks',
      'latest_transactions',
      'histograms',
    );

    return new ExplorerSummary(
      explorerBlockDetailCodec.decode(input.latest_block),
      genesisOverviewCodec.decode(input.genesis_overview),
      explorerBlockSummaryArrayCodec.decode(input.latest_blocks),
      explorerTransactionSummaryArrayCodec.decode(input.latest_transactions),
      summaryHistogramsCodec.decode(input.histograms),
    );
  }
}

class ExplorerSummaryEncoder implements Converter<ExplorerSummary> {
  convert(input: ExplorerSummary) {
    assertInstanceOf(input, ExplorerSummary);

    return {
      latest_block: explorerBlockDetailCodec.encode(input.latestBlock),
      genesis_overview: genesisOverviewCodec.encode(input.genesisOverview),
      latest_blocks: explorerBlockSummaryArrayCodec.encode(input.latestBlocks),
      latest_transactions: explorerTransactionSummaryArrayCodec.encode(
        input.latestTransactions,
      ),
      histograms: summaryHistogramsCodec.encode(input.histograms),
    };
  }
}

class ExplorerSummaryCodec extends TypeCheckingCodec<
  ExplorerSummary,
  ReturnType<InstanceType<new () => ExplorerSummaryEncoder>['convert']>
> {
  readonly encoder = new ExplorerSummaryEncoder();
  readonly decoder = new ExplorerSummaryDecoder();
}

export const explorerSummaryCodec = new ExplorerSummaryCodec();

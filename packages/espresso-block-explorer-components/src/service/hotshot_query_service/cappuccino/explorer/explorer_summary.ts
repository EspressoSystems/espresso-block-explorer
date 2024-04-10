import {
  Converter,
  InvalidInputError,
  TypeCheckingCodec,
  isRecord,
  isUnknown,
} from '../../../../convert/codec/convert';
import {
  CappuccinoExplorerBlockDetail,
  cappuccinoExplorerBlockDetailCodec,
} from './block_detail';
import {
  CappuccinoExplorerBlockSummary,
  cappuccinoExplorerBlockSummaryArrayCodec,
} from './block_summary';
import {
  CappuccinoGenesisOverview,
  cappuccinoGenesisOverviewCodec,
} from './genesis_overview';
import {
  CappuccinoSummaryHistograms,
  cappuccinoSummaryHistogramsCodec,
} from './summary_histograms';
import {
  CappuccinoExplorerTransactionSummary,
  cappuccinoExplorerTransactionSummaryArrayCodec,
} from './transaction_summary';

export class CappuccinoExplorerSummary {
  readonly latestBlock: CappuccinoExplorerBlockDetail;
  readonly genesisOverview: CappuccinoGenesisOverview;
  readonly latestBlocks: CappuccinoExplorerBlockSummary[];
  readonly latestTransactions: CappuccinoExplorerTransactionSummary[];
  readonly histograms: CappuccinoSummaryHistograms;

  constructor(
    latestBlock: CappuccinoExplorerBlockDetail,
    genesisOverview: CappuccinoGenesisOverview,
    latestBlocks: CappuccinoExplorerBlockSummary[],
    latestTransactions: CappuccinoExplorerTransactionSummary[],
    histograms: CappuccinoSummaryHistograms,
  ) {
    this.latestBlock = latestBlock;
    this.genesisOverview = genesisOverview;
    this.latestBlocks = latestBlocks;
    this.latestTransactions = latestTransactions;
    this.histograms = histograms;
  }

  toJSON() {
    return cappuccinoExplorerSummaryCodec.encode(this);
  }
}

class CappuccinoExplorerSummaryDecoder
  implements Converter<unknown, CappuccinoExplorerSummary>
{
  convert(input: unknown): CappuccinoExplorerSummary {
    if (
      !isRecord(input, 'latest_block', isUnknown) ||
      !isRecord(input, 'genesis_overview', isUnknown) ||
      !isRecord(input, 'latest_blocks', isUnknown) ||
      !isRecord(input, 'latest_transactions', isUnknown) ||
      !isRecord(input, 'histograms', isUnknown)
    ) {
      throw new InvalidInputError();
    }

    return new CappuccinoExplorerSummary(
      cappuccinoExplorerBlockDetailCodec.decode(input.latest_block),
      cappuccinoGenesisOverviewCodec.decode(input.genesis_overview),
      cappuccinoExplorerBlockSummaryArrayCodec.decode(input.latest_blocks),
      cappuccinoExplorerTransactionSummaryArrayCodec.decode(
        input.latest_transactions,
      ),
      cappuccinoSummaryHistogramsCodec.decode(input.histograms),
    );
  }
}

class CappuccinoExplorerSummaryEncoder
  implements Converter<CappuccinoExplorerSummary>
{
  convert(input: CappuccinoExplorerSummary) {
    return {
      latest_block: cappuccinoExplorerBlockDetailCodec.encode(
        input.latestBlock,
      ),
      genesis_overview: cappuccinoGenesisOverviewCodec.encode(
        input.genesisOverview,
      ),
      latest_blocks: cappuccinoExplorerBlockSummaryArrayCodec.encode(
        input.latestBlocks,
      ),
      latest_transactions:
        cappuccinoExplorerTransactionSummaryArrayCodec.encode(
          input.latestTransactions,
        ),
      histograms: cappuccinoSummaryHistogramsCodec.encode(input.histograms),
    };
  }
}

class CappuccinoExplorerSummaryCodec extends TypeCheckingCodec<
  CappuccinoExplorerSummary,
  ReturnType<
    InstanceType<new () => CappuccinoExplorerSummaryEncoder>['convert']
  >
> {
  readonly encoder = new CappuccinoExplorerSummaryEncoder();
  readonly decoder = new CappuccinoExplorerSummaryDecoder();
}

export const cappuccinoExplorerSummaryCodec =
  new CappuccinoExplorerSummaryCodec();

import {
  Codec,
  Converter,
  InvalidInputError,
  isRecord,
  isUnknown,
} from '../../../../convert/codec/convert';
import {
  CappuccinoExplorerBlockSummary,
  cappuccinoExplorerBlockSummaryArrayCodec,
} from './block_summary';
import {
  CappuccinoExplorerTransactionSummary,
  cappuccinoExplorerTransactionSummaryArrayCodec,
} from './transaction_summary';

export class CappuccinoExplorerSearchResults {
  readonly blocks: CappuccinoExplorerBlockSummary[];
  readonly transactions: CappuccinoExplorerTransactionSummary[];

  constructor(
    blocks: CappuccinoExplorerBlockSummary[],
    transactions: CappuccinoExplorerTransactionSummary[],
  ) {
    this.blocks = blocks;
    this.transactions = transactions;
  }

  toJSON() {
    return cappuccinoExplorerSearchResultsCodec.encode(this);
  }
}

class CappuccinoExplorerSearchResultsDecoder
  implements Converter<unknown, CappuccinoExplorerSearchResults>
{
  convert(input: unknown): CappuccinoExplorerSearchResults {
    if (
      !isRecord(input, 'blocks', isUnknown) ||
      !isRecord(input, 'transactions', isUnknown)
    ) {
      throw new InvalidInputError();
    }

    return new CappuccinoExplorerSearchResults(
      cappuccinoExplorerBlockSummaryArrayCodec.decode(input.blocks),
      cappuccinoExplorerTransactionSummaryArrayCodec.decode(input.transactions),
    );
  }
}

class CappuccinoExplorerSearchResultsEncoder
  implements Converter<CappuccinoExplorerSearchResults, unknown>
{
  convert(input: CappuccinoExplorerSearchResults): unknown {
    return {
      blocks: cappuccinoExplorerBlockSummaryArrayCodec.encode(input.blocks),
      transactions: cappuccinoExplorerTransactionSummaryArrayCodec.encode(
        input.transactions,
      ),
    };
  }
}

class CappuccinoExplorerSearchResultsCodec extends Codec<
  CappuccinoExplorerSearchResults,
  unknown
> {
  readonly encoder = new CappuccinoExplorerSearchResultsEncoder();
  readonly decoder = new CappuccinoExplorerSearchResultsDecoder();
}

export const cappuccinoExplorerSearchResultsCodec =
  new CappuccinoExplorerSearchResultsCodec();

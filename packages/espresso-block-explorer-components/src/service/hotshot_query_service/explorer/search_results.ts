import { assertInstanceOf } from '@/assert/assert';
import {
  Codec,
  Converter,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import {
  ExplorerBlockSummary,
  explorerBlockSummaryArrayCodec,
} from './block_summary';
import {
  ExplorerTransactionSummary,
  explorerTransactionSummaryArrayCodec,
} from './transaction_summary';

/**
 * ExplorerSearchResults is a class that represents the search results from the
 * search request to the Explorer API.
 */
export class ExplorerSearchResults {
  readonly blocks: ExplorerBlockSummary[];
  readonly transactions: ExplorerTransactionSummary[];

  constructor(
    blocks: ExplorerBlockSummary[],
    transactions: ExplorerTransactionSummary[],
  ) {
    this.blocks = blocks;
    this.transactions = transactions;
  }

  toJSON() {
    return explorerSearchResultsCodec.encode(this);
  }
}

class ExplorerSearchResultsDecoder implements Converter<
  unknown,
  ExplorerSearchResults
> {
  convert(input: unknown): ExplorerSearchResults {
    assertRecordWithKeys(input, 'blocks', 'transactions');

    return new ExplorerSearchResults(
      explorerBlockSummaryArrayCodec.decode(input.blocks),
      explorerTransactionSummaryArrayCodec.decode(input.transactions),
    );
  }
}

class ExplorerSearchResultsEncoder implements Converter<
  ExplorerSearchResults,
  unknown
> {
  convert(input: ExplorerSearchResults): unknown {
    assertInstanceOf(input, ExplorerSearchResults);

    return {
      blocks: explorerBlockSummaryArrayCodec.encode(input.blocks),
      transactions: explorerTransactionSummaryArrayCodec.encode(
        input.transactions,
      ),
    };
  }
}

class ExplorerSearchResultsCodec extends Codec<ExplorerSearchResults, unknown> {
  readonly encoder = new ExplorerSearchResultsEncoder();
  readonly decoder = new ExplorerSearchResultsDecoder();
}

export const explorerSearchResultsCodec = new ExplorerSearchResultsCodec();

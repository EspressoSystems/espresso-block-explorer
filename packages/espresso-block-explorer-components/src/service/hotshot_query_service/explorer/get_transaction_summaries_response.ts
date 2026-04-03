import { assertInstanceOf } from '@/assert/assert';
import {
  Codec,
  Converter,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import {
  ExplorerTransactionSummary,
  explorerTransactionSummaryArrayCodec,
} from './transaction_summary';

/**
 * ExplorerGetTransactionSummariesResponse is the response to a request to
 * the Explorer API for transaction summaries.
 */
export class ExplorerGetTransactionSummariesResponse {
  constructor(
    public readonly transactionSummaries: ExplorerTransactionSummary[],
  ) {}

  toJSON() {
    return explorerGetTransactionSummariesResponseCodec.encode(this);
  }
}

class ExplorerGetTransactionSummariesResponseDecoder implements Converter<
  unknown,
  ExplorerGetTransactionSummariesResponse
> {
  convert(input: unknown): ExplorerGetTransactionSummariesResponse {
    assertRecordWithKeys(input, 'transaction_summaries');

    return new ExplorerGetTransactionSummariesResponse(
      explorerTransactionSummaryArrayCodec.decode(input.transaction_summaries),
    );
  }
}

class ExplorerGetTransactionSummariesResponseEncoder implements Converter<
  ExplorerGetTransactionSummariesResponse,
  unknown
> {
  convert(input: ExplorerGetTransactionSummariesResponse): unknown {
    assertInstanceOf(input, ExplorerGetTransactionSummariesResponse);

    return {
      transaction_summaries: explorerTransactionSummaryArrayCodec.encode(
        input.transactionSummaries,
      ),
    };
  }
}

class ExplorerGetTransactionSummariesResponseCodec extends Codec<
  ExplorerGetTransactionSummariesResponse,
  unknown
> {
  readonly encoder = new ExplorerGetTransactionSummariesResponseEncoder();
  readonly decoder = new ExplorerGetTransactionSummariesResponseDecoder();
}

export const explorerGetTransactionSummariesResponseCodec =
  new ExplorerGetTransactionSummariesResponseCodec();

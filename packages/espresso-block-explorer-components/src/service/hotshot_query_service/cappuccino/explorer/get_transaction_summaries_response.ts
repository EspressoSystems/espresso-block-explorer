import {
  Codec,
  Converter,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import {
  CappuccinoExplorerTransactionSummary,
  cappuccinoExplorerTransactionSummaryArrayCodec,
} from './transaction_summary';

export class CappuccinoExplorerGetTransactionSummariesResponse {
  readonly transactionSummaries: CappuccinoExplorerTransactionSummary[];

  constructor(transactionSummaries: CappuccinoExplorerTransactionSummary[]) {
    this.transactionSummaries = transactionSummaries;
  }

  toJSON() {
    return cappuccinoExplorerGetTransactionSummariesResponseCodec.encode(this);
  }
}

class CappuccinoExplorerGetTransactionSummariesResponseDecoder
  implements
    Converter<unknown, CappuccinoExplorerGetTransactionSummariesResponse>
{
  convert(input: unknown): CappuccinoExplorerGetTransactionSummariesResponse {
    assertRecordWithKeys(input, 'transaction_summaries');

    return new CappuccinoExplorerGetTransactionSummariesResponse(
      cappuccinoExplorerTransactionSummaryArrayCodec.decode(
        input.transaction_summaries,
      ),
    );
  }
}

class CappuccinoExplorerGetTransactionSummariesResponseEncoder
  implements
    Converter<CappuccinoExplorerGetTransactionSummariesResponse, unknown>
{
  convert(input: CappuccinoExplorerGetTransactionSummariesResponse): unknown {
    return {
      transaction_summaries:
        cappuccinoExplorerTransactionSummaryArrayCodec.encode(
          input.transactionSummaries,
        ),
    };
  }
}

class CappuccinoExplorerGetTransactionSummariesResponseCodec extends Codec<
  CappuccinoExplorerGetTransactionSummariesResponse,
  unknown
> {
  readonly encoder =
    new CappuccinoExplorerGetTransactionSummariesResponseEncoder();
  readonly decoder =
    new CappuccinoExplorerGetTransactionSummariesResponseDecoder();
}

export const cappuccinoExplorerGetTransactionSummariesResponseCodec =
  new CappuccinoExplorerGetTransactionSummariesResponseCodec();

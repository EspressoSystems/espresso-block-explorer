import {
  Codec,
  Converter,
  isRecord,
  isUnknown,
} from '../../../../convert/codec/convert';
import InvalidInputError from '../../../../errors/InvalidInputError';
import {
  CappuccinoExplorerGetTransactionSummariesFilter,
  cappuccinoExplorerGetTransactionSummariesFilterCodec,
} from './get_transaction_summaries_filter';
import {
  CappuccinoExplorerGetTransactionSummariesTarget,
  cappuccinoExplorerGetTransactionSummariesTargetCodec,
} from './get_transaction_summaries_target';

export class CappuccinoExplorerGetTransactionSummariesRequest {
  readonly target: CappuccinoExplorerGetTransactionSummariesTarget;
  readonly filter: CappuccinoExplorerGetTransactionSummariesFilter;

  constructor(
    target: CappuccinoExplorerGetTransactionSummariesTarget,
    filter: CappuccinoExplorerGetTransactionSummariesFilter,
  ) {
    this.target = target;
    this.filter = filter;
  }

  toJSON() {
    return cappuccinoExplorerGetTransactionSummariesRequestCodec.encode(this);
  }
}

class CappuccinoExplorerGetTransactionSummariesRequestDecoder
  implements
    Converter<unknown, CappuccinoExplorerGetTransactionSummariesRequest>
{
  convert(input: unknown): CappuccinoExplorerGetTransactionSummariesRequest {
    if (
      !isRecord(input, 'filter', isUnknown) ||
      !isRecord(input, 'target', isUnknown)
    ) {
      throw new InvalidInputError();
    }

    return new CappuccinoExplorerGetTransactionSummariesRequest(
      cappuccinoExplorerGetTransactionSummariesTargetCodec.decode(input.target),
      cappuccinoExplorerGetTransactionSummariesFilterCodec.decode(input.filter),
    );
  }
}

class CappuccinoExplorerGetTransactionSummariesRequestEncoder
  implements
    Converter<CappuccinoExplorerGetTransactionSummariesRequest, unknown>
{
  convert(input: CappuccinoExplorerGetTransactionSummariesRequest) {
    return {
      filter: cappuccinoExplorerGetTransactionSummariesFilterCodec.encode(
        input.filter,
      ),
      target: cappuccinoExplorerGetTransactionSummariesTargetCodec.encode(
        input.target,
      ),
    };
  }
}

class CappuccinoExplorerGetTransactionSummariesRequestCodec extends Codec<
  CappuccinoExplorerGetTransactionSummariesRequest,
  unknown
> {
  readonly encoder =
    new CappuccinoExplorerGetTransactionSummariesRequestEncoder();
  readonly decoder =
    new CappuccinoExplorerGetTransactionSummariesRequestDecoder();
}

export const cappuccinoExplorerGetTransactionSummariesRequestCodec =
  new CappuccinoExplorerGetTransactionSummariesRequestCodec();

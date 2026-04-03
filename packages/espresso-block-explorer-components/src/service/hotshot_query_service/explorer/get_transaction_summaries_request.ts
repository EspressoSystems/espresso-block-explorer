import { assertInstanceOf } from '@/assert/assert';
import {
  Codec,
  Converter,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import {
  ExplorerGetTransactionSummariesFilter,
  explorerGetTransactionSummariesFilterCodec,
} from './get_transaction_summaries_filter';
import {
  ExplorerGetTransactionSummariesTarget,
  explorerGetTransactionSummariesTargetCodec,
} from './get_transaction_summaries_target';

/**
 * ExplorerGetTransactionSummariesRequest represents a request to get
 * transaction summaries from the explorer.
 */
export class ExplorerGetTransactionSummariesRequest {
  constructor(
    public readonly target: ExplorerGetTransactionSummariesTarget,
    public readonly filter: ExplorerGetTransactionSummariesFilter,
  ) {}

  toJSON() {
    return explorerGetTransactionSummariesRequestCodec.encode(this);
  }
}

class ExplorerGetTransactionSummariesRequestDecoder implements Converter<
  unknown,
  ExplorerGetTransactionSummariesRequest
> {
  convert(input: unknown): ExplorerGetTransactionSummariesRequest {
    assertRecordWithKeys(input, 'filter', 'target');

    return new ExplorerGetTransactionSummariesRequest(
      explorerGetTransactionSummariesTargetCodec.decode(input.target),
      explorerGetTransactionSummariesFilterCodec.decode(input.filter),
    );
  }
}

class ExplorerGetTransactionSummariesRequestEncoder implements Converter<
  ExplorerGetTransactionSummariesRequest,
  unknown
> {
  convert(input: ExplorerGetTransactionSummariesRequest) {
    assertInstanceOf(input, ExplorerGetTransactionSummariesRequest);

    return {
      filter: explorerGetTransactionSummariesFilterCodec.encode(input.filter),
      target: explorerGetTransactionSummariesTargetCodec.encode(input.target),
    };
  }
}

class ExplorerGetTransactionSummariesRequestCodec extends Codec<
  ExplorerGetTransactionSummariesRequest,
  unknown
> {
  readonly encoder = new ExplorerGetTransactionSummariesRequestEncoder();
  readonly decoder = new ExplorerGetTransactionSummariesRequestDecoder();
}

export const explorerGetTransactionSummariesRequestCodec =
  new ExplorerGetTransactionSummariesRequestCodec();

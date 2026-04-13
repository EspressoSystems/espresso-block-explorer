import { assertInstanceOf } from '@/assert/assert';
import {
  Codec,
  Converter,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import {
  ExplorerTransactionDetail,
  cappuccinoExplorerTransactionDetailCodec,
} from './transaction_detail';

/**
 * ExplorerGetTransactionDetailResponse is the response from the explorer API
 * for the getTransactionDetail method.
 */
export class ExplorerGetTransactionDetailResponse {
  constructor(public readonly transactionDetail: ExplorerTransactionDetail) {}

  toJSON() {
    return explorerGetTransactionDetailResponseCodec.encode(this);
  }
}

class ExplorerGetTransactionDetailResponseDecoder implements Converter<
  unknown,
  ExplorerGetTransactionDetailResponse
> {
  convert(input: unknown): ExplorerGetTransactionDetailResponse {
    assertRecordWithKeys(input, 'transaction_detail');

    return new ExplorerGetTransactionDetailResponse(
      cappuccinoExplorerTransactionDetailCodec.decode(input.transaction_detail),
    );
  }
}

class ExplorerGetTransactionDetailResponseEncoder implements Converter<
  ExplorerGetTransactionDetailResponse,
  unknown
> {
  convert(input: ExplorerGetTransactionDetailResponse): unknown {
    assertInstanceOf(input, ExplorerGetTransactionDetailResponse);

    return {
      transaction_detail: cappuccinoExplorerTransactionDetailCodec.encode(
        input.transactionDetail,
      ),
    };
  }
}

class ExplorerGetTransactionDetailResponseCodec extends Codec<
  ExplorerGetTransactionDetailResponse,
  unknown
> {
  readonly encoder = new ExplorerGetTransactionDetailResponseEncoder();
  readonly decoder = new ExplorerGetTransactionDetailResponseDecoder();
}

export const explorerGetTransactionDetailResponseCodec =
  new ExplorerGetTransactionDetailResponseCodec();

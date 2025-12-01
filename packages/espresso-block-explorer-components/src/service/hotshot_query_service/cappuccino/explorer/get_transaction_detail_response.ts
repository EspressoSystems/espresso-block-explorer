import { assertInstanceOf } from '@/assert/assert';
import {
  Codec,
  Converter,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import {
  CappuccinoExplorerTransactionDetail,
  cappuccinoExplorerTransactionDetailCodec,
} from './transaction_detail';

export class CappuccinoExplorerGetTransactionDetailResponse {
  readonly transactionDetail: CappuccinoExplorerTransactionDetail;

  constructor(transactionDetail: CappuccinoExplorerTransactionDetail) {
    this.transactionDetail = transactionDetail;
  }

  toJSON() {
    return cappuccinoExplorerGetTransactionDetailResponseCodec.encode(this);
  }
}

class CappuccinoExplorerGetTransactionDetailResponseDecoder implements Converter<
  unknown,
  CappuccinoExplorerGetTransactionDetailResponse
> {
  convert(input: unknown): CappuccinoExplorerGetTransactionDetailResponse {
    assertRecordWithKeys(input, 'transaction_detail');

    return new CappuccinoExplorerGetTransactionDetailResponse(
      cappuccinoExplorerTransactionDetailCodec.decode(input.transaction_detail),
    );
  }
}

class CappuccinoExplorerGetTransactionDetailResponseEncoder implements Converter<
  CappuccinoExplorerGetTransactionDetailResponse,
  unknown
> {
  convert(input: CappuccinoExplorerGetTransactionDetailResponse): unknown {
    assertInstanceOf(input, CappuccinoExplorerGetTransactionDetailResponse);

    return {
      transaction_detail: cappuccinoExplorerTransactionDetailCodec.encode(
        input.transactionDetail,
      ),
    };
  }
}

class CappuccinoExplorerGetTransactionDetailResponseCodec extends Codec<
  CappuccinoExplorerGetTransactionDetailResponse,
  unknown
> {
  readonly encoder =
    new CappuccinoExplorerGetTransactionDetailResponseEncoder();
  readonly decoder =
    new CappuccinoExplorerGetTransactionDetailResponseDecoder();
}

export const cappuccinoExplorerGetTransactionDetailResponseCodec =
  new CappuccinoExplorerGetTransactionDetailResponseCodec();

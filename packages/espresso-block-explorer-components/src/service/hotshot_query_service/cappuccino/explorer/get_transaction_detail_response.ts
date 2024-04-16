import {
  Codec,
  Converter,
  isRecord,
  isUnknown,
} from '../../../../convert/codec/convert';
import InvalidInputError from '../../../../errors/InvalidInputError';
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

class CappuccinoExplorerGetTransactionDetailResponseDecoder
  implements Converter<unknown, CappuccinoExplorerGetTransactionDetailResponse>
{
  convert(input: unknown): CappuccinoExplorerGetTransactionDetailResponse {
    if (!isRecord(input, 'transaction_detail', isUnknown)) {
      throw new InvalidInputError();
    }

    return new CappuccinoExplorerGetTransactionDetailResponse(
      cappuccinoExplorerTransactionDetailCodec.decode(input.transaction_detail),
    );
  }
}

class CappuccinoExplorerGetTransactionDetailResponseEncoder
  implements Converter<CappuccinoExplorerGetTransactionDetailResponse, unknown>
{
  convert(input: CappuccinoExplorerGetTransactionDetailResponse): unknown {
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

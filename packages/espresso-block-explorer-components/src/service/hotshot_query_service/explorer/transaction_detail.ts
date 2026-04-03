import { assertInstanceOf } from '@/assert/assert';
import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import {
  CappuccinoExplorerTransactionDetailData,
  cappuccinoExplorerTransactionDetailDataArrayCodec,
} from './transaction_detail_data';
import {
  CappuccinoExplorerTransactionDetailDetails,
  cappuccinoExplorerTransactionDetailDetailsCodec,
} from './transaction_detail_details';

export class CappuccinoExplorerTransactionDetail {
  readonly details: CappuccinoExplorerTransactionDetailDetails;
  readonly data: CappuccinoExplorerTransactionDetailData[];

  constructor(
    details: CappuccinoExplorerTransactionDetailDetails,
    data: CappuccinoExplorerTransactionDetailData[],
  ) {
    this.details = details;
    this.data = data;
  }

  toJSON() {
    return cappuccinoExplorerTransactionDetailCodec.encode(this);
  }
}

class CappuccinoExplorerTransactionDetailDecoder implements Converter<
  unknown,
  CappuccinoExplorerTransactionDetail
> {
  convert(input: unknown): CappuccinoExplorerTransactionDetail {
    assertRecordWithKeys(input, 'details', 'data');

    return new CappuccinoExplorerTransactionDetail(
      cappuccinoExplorerTransactionDetailDetailsCodec.decode(input.details),
      cappuccinoExplorerTransactionDetailDataArrayCodec.decode(input.data),
    );
  }
}

class CappuccinoExplorerTransactionDetailEncoder implements Converter<CappuccinoExplorerTransactionDetail> {
  convert(input: CappuccinoExplorerTransactionDetail) {
    assertInstanceOf(input, CappuccinoExplorerTransactionDetail);

    return {
      details: cappuccinoExplorerTransactionDetailDetailsCodec.encode(
        input.details,
      ),
      data: cappuccinoExplorerTransactionDetailDataArrayCodec.encode(
        input.data,
      ),
    };
  }
}

class CappuccinoExplorerTransactionDetailCodec extends TypeCheckingCodec<
  CappuccinoExplorerTransactionDetail,
  ReturnType<
    InstanceType<
      new () => CappuccinoExplorerTransactionDetailEncoder
    >['convert']
  >
> {
  readonly encoder = new CappuccinoExplorerTransactionDetailEncoder();
  readonly decoder = new CappuccinoExplorerTransactionDetailDecoder();
}

export const cappuccinoExplorerTransactionDetailCodec =
  new CappuccinoExplorerTransactionDetailCodec();

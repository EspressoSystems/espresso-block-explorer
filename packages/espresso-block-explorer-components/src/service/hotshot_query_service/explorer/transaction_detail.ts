import { assertInstanceOf } from '@/assert/assert';
import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import {
  ExplorerTransactionDetailData,
  explorerTransactionDetailDataArrayCodec,
} from './transaction_detail_data';
import {
  ExplorerTransactionDetailDetails,
  explorerTransactionDetailDetailsCodec,
} from './transaction_detail_details';

/**
 * ExplorerTransactionDetail is a class that represents the details of a
 * transaction in the Explorer API.
 */
export class ExplorerTransactionDetail {
  constructor(
    public readonly details: ExplorerTransactionDetailDetails,
    public readonly data: ExplorerTransactionDetailData[],
  ) {}

  toJSON() {
    return cappuccinoExplorerTransactionDetailCodec.encode(this);
  }
}

class ExplorerTransactionDetailDecoder implements Converter<
  unknown,
  ExplorerTransactionDetail
> {
  convert(input: unknown): ExplorerTransactionDetail {
    assertRecordWithKeys(input, 'details', 'data');

    return new ExplorerTransactionDetail(
      explorerTransactionDetailDetailsCodec.decode(input.details),
      explorerTransactionDetailDataArrayCodec.decode(input.data),
    );
  }
}

class ExplorerTransactionDetailEncoder implements Converter<ExplorerTransactionDetail> {
  convert(input: ExplorerTransactionDetail) {
    assertInstanceOf(input, ExplorerTransactionDetail);

    return {
      details: explorerTransactionDetailDetailsCodec.encode(input.details),
      data: explorerTransactionDetailDataArrayCodec.encode(input.data),
    };
  }
}

class ExplorerTransactionDetailCodec extends TypeCheckingCodec<
  ExplorerTransactionDetail,
  ReturnType<
    InstanceType<new () => ExplorerTransactionDetailEncoder>['convert']
  >
> {
  readonly encoder = new ExplorerTransactionDetailEncoder();
  readonly decoder = new ExplorerTransactionDetailDecoder();
}

export const cappuccinoExplorerTransactionDetailCodec =
  new ExplorerTransactionDetailCodec();

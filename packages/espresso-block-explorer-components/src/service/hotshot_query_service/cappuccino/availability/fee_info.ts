import { assertInstanceOf } from '@/assert/assert';
import { hexArrayBufferCodec } from '@/convert/codec/array_buffer';
import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';

/**
 * CappuccinoFeeInfo represents the fee information in the Cappuccino API.
 */
export class CappuccinoFeeInfo {
  public readonly account: ArrayBuffer;
  public readonly amount: ArrayBuffer;

  constructor(account: ArrayBuffer, amount: ArrayBuffer) {
    this.account = account;
    this.amount = amount;
  }

  toJSON() {
    return cappuccinoFeeInfoCodec.encode(this);
  }
}

class CappuccinoFeeInfoDecoder implements Converter<
  unknown,
  CappuccinoFeeInfo
> {
  convert(input: unknown): CappuccinoFeeInfo {
    assertRecordWithKeys(input, 'account', 'amount');

    return new CappuccinoFeeInfo(
      hexArrayBufferCodec.decode(input.account),
      hexArrayBufferCodec.decode(input.amount),
    );
  }
}

class CappuccinoFeeInfoEncoder implements Converter<CappuccinoFeeInfo> {
  convert(input: CappuccinoFeeInfo) {
    assertInstanceOf(input, CappuccinoFeeInfo);

    return {
      account: hexArrayBufferCodec.encode(input.account),
      amount: hexArrayBufferCodec.encode(input.amount),
    };
  }
}

class CappuccinoFeeInfoCodec extends TypeCheckingCodec<
  CappuccinoFeeInfo,
  ReturnType<InstanceType<new () => CappuccinoFeeInfoEncoder>['convert']>
> {
  readonly encoder = new CappuccinoFeeInfoEncoder();
  readonly decoder = new CappuccinoFeeInfoDecoder();
}

export const cappuccinoFeeInfoCodec = new CappuccinoFeeInfoCodec();

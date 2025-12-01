import { ArrayCodec, ArrayDecoder, ArrayEncoder } from '@/convert/codec/array';
import { hexArrayBufferCodec } from '@/convert/codec/array_buffer';
import { bigintCodec } from '@/convert/codec/bigint';
import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import { numberCodec } from '@/convert/codec/number';

/**
 * PendingWithdrawal represents a pending withdrawal.
 *
 * The PendingWithdrawal type is defined by the rust code here:
 * https://github.com/EspressoSystems/staking-ui-service/blob/8eb960a9a02d7806fddedfd44090608015d3b6b3/src/types/common.rs#L133-L147
 */
export class PendingWithdrawal {
  public readonly nodeText: `0x${string}`;
  constructor(
    public readonly delegator: ArrayBuffer,
    public readonly node: ArrayBuffer,
    public readonly amount: bigint,
    public readonly availableTime: Date,
  ) {
    this.nodeText = hexArrayBufferCodec.encode(node);
    Object.freeze(this);
  }

  toJSON() {
    return pendingWithdrawalJSONCodec.encode(this);
  }
}

/**
 * PendingWithdrawalEncoder encodes PendingWithdrawal objects to a JSON object.
 */
class PendingWithdrawalEncoder implements Converter<
  PendingWithdrawal,
  unknown
> {
  convert(input: PendingWithdrawal): unknown {
    return {
      delegator: hexArrayBufferCodec.encode(input.delegator),
      node: hexArrayBufferCodec.encode(input.node),
      amount: bigintCodec.encode(input.amount),
      available_time: numberCodec.encode(input.availableTime.valueOf() / 1000),
    };
  }
}

/**
 * PendingWithdrawalDecoder decodes PendingWithdrawal objects from a JSON object.
 */
class PendingWithdrawalDecoder implements Converter<
  unknown,
  PendingWithdrawal
> {
  convert(input: unknown): PendingWithdrawal {
    assertRecordWithKeys(
      input,
      'delegator',
      'node',
      'amount',
      'available_time',
    );

    return new PendingWithdrawal(
      hexArrayBufferCodec.decode(input.delegator),
      hexArrayBufferCodec.decode(input.node),
      bigintCodec.decode(input.amount),
      new Date(numberCodec.decode(input.available_time) * 1000),
    );
  }
}

/**
 * PendingWithdrawalJSONCodec is a codec that encodes and decodes
 * PendingWithdrawal objects to and from JSON.
 */
export class PendingWithdrawalJSONCodec extends TypeCheckingCodec<
  PendingWithdrawal,
  unknown
> {
  readonly encoder = new PendingWithdrawalEncoder();
  readonly decoder = new PendingWithdrawalDecoder();
}

/**
 * PendingWithdrawalJSONCodec is a codec that encodes and decodes
 * PendingWithdrawal objects to and from JSON.
 */
export const pendingWithdrawalJSONCodec = new PendingWithdrawalJSONCodec();

export const pendingWithdrawalArrayJSONCodec = new ArrayCodec(
  new ArrayDecoder(pendingWithdrawalJSONCodec),
  new ArrayEncoder(pendingWithdrawalJSONCodec),
);

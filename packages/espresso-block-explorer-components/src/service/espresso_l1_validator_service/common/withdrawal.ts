import { bigintCodec } from '@/convert/codec';
import { stdBase64ArrayBufferCodec } from '@/convert/codec/array_buffer';
import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';

/**
 * Withdrawal represents a completed withdrawal.
 *
 * The Withdrawal type is defined by the rust code here:
 * https://github.com/EspressoSystems/staking-ui-service/blob/8eb960a9a02d7806fddedfd44090608015d3b6b3/src/types/common.rs#L151-L160
 */
export class Withdrawal {
  constructor(
    public readonly delegator: ArrayBuffer,
    public readonly node: ArrayBuffer,
    public readonly amount: bigint,
  ) {
    Object.freeze(this);
  }

  toJSON() {
    return withdrawalJSONCodec.encode(this);
  }
}

/**
 * WithdrawalEncoder encodes Withdrawal objects to a JSON object.
 */
class WithdrawalEncoder implements Converter<Withdrawal, unknown> {
  convert(input: Withdrawal): unknown {
    return {
      delegator: stdBase64ArrayBufferCodec.encode(input.delegator),
      node: stdBase64ArrayBufferCodec.encode(input.node),
      amount: bigintCodec.encode(input.amount),
    };
  }
}

/**
 * WithdrawalDecoder decodes Withdrawal objects from a JSON object.
 */
class WithdrawalDecoder implements Converter<unknown, Withdrawal> {
  convert(input: unknown): Withdrawal {
    assertRecordWithKeys(input, 'delegator', 'node', 'amount');

    return new Withdrawal(
      stdBase64ArrayBufferCodec.decode(input.delegator),
      stdBase64ArrayBufferCodec.decode(input.node),
      bigintCodec.decode(input.amount),
    );
  }
}

/**
 * WithdrawalJSONCodec is a codec that encodes and decodes
 * Withdrawal objects to and from JSON.
 */
export class WithdrawalJSONCodec extends TypeCheckingCodec<
  Withdrawal,
  unknown
> {
  readonly encoder = new WithdrawalEncoder();
  readonly decoder = new WithdrawalDecoder();
}

/**
 * WithdrawalJSONCodec is a codec that encodes and decodes
 * Withdrawal objects to and from JSON.
 */
export const withdrawalJSONCodec = new WithdrawalJSONCodec();

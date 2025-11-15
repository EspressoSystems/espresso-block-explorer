import { ArrayCodec, ArrayDecoder } from '@/convert/codec/array';
import { hexArrayBufferCodec } from '@/convert/codec/array_buffer';
import { bigintCodec } from '@/convert/codec/bigint';
import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';

/**
 * Delegation represents a delegation event to a validator node.
 *
 * The Delegation type is defined by the rust code here:
 * https://github.com/EspressoSystems/staking-ui-service/blob/a2317eb04e89fae58421080dd8f5db1524748476/src/types/common.rs#L114-L123
 */
export class Delegation {
  constructor(
    public readonly delegator: ArrayBuffer,
    public readonly node: ArrayBuffer,
    public readonly amount: bigint,
  ) {
    Object.freeze(this);
  }

  toJSON() {
    return delegationJSONCodec.encode(this);
  }
}

/**
 * DelegationEncoder encodes Delegation objects to a JSON object.
 */
class DelegationEncoder implements Converter<Delegation, unknown> {
  convert(input: Delegation): unknown {
    return {
      delegator: hexArrayBufferCodec.encode(input.delegator),
      node: hexArrayBufferCodec.encode(input.node),
      amount: bigintCodec.encode(input.amount),
    };
  }
}

/**
 * DelegationDecoder decodes Delegation objects from a JSON object.
 */
class DelegationDecoder implements Converter<unknown, Delegation> {
  convert(input: unknown): Delegation {
    assertRecordWithKeys(input, 'delegator', 'node', 'amount', 'effective');

    return new Delegation(
      hexArrayBufferCodec.decode(input.delegator),
      hexArrayBufferCodec.decode(input.node),
      bigintCodec.decode(input.amount),
    );
  }
}

/**
 * DelegationJSONCodec is a codec that encodes and decodes
 * Delegation objects to and from JSON.
 */
export class DelegationJSONCodec extends TypeCheckingCodec<
  Delegation,
  unknown
> {
  readonly encoder = new DelegationEncoder();
  readonly decoder = new DelegationDecoder();
}

/**
 * delegationJSONCodec is a codec that encodes and decodes
 * Delegation objects to and from JSON.
 */
export const delegationJSONCodec = new DelegationJSONCodec();

export const delegationArrayJSONCodec = new ArrayCodec(
  new ArrayDecoder(delegationJSONCodec),
  new ArrayDecoder(delegationJSONCodec),
);

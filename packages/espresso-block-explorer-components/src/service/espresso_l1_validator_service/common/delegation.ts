import { bigintCodec } from '@/convert/codec';
import { stdBase64ArrayBufferCodec } from '@/convert/codec/array_buffer';
import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import { EpochAndBlock, epochAndBlockNumberJSONCodec } from './epoch_and_block';

/**
 * Delegation represents a delegation event to a validator node.
 *
 * The Delegation type is defined by the rust code here:
 * https://github.com/EspressoSystems/staking-ui-service/blob/8eb960a9a02d7806fddedfd44090608015d3b6b3/src/types/common.rs#L117-L129
 */
export class Delegation {
  readonly delegator: ArrayBuffer;
  readonly node: ArrayBuffer;
  readonly amount: bigint;
  readonly effective: EpochAndBlock;

  constructor(
    delegator: ArrayBuffer,
    node: ArrayBuffer,
    amount: bigint,
    effective: EpochAndBlock,
  ) {
    this.delegator = delegator;
    this.node = node;
    this.amount = amount;
    this.effective = effective;
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
      delegator: stdBase64ArrayBufferCodec.encode(input.delegator),
      node: stdBase64ArrayBufferCodec.encode(input.node),
      amount: bigintCodec.encode(input.amount),
      effective: epochAndBlockNumberJSONCodec.encode(input.effective),
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
      stdBase64ArrayBufferCodec.decode(input.delegator),
      stdBase64ArrayBufferCodec.decode(input.node),
      bigintCodec.decode(input.amount),
      epochAndBlockNumberJSONCodec.decode(input.effective),
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

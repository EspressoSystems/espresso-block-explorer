import { assertInstanceOf } from '@/assert/assert';
import { ArrayCodec, ArrayDecoder, ArrayEncoder } from '@/convert/codec';
import { hexArrayBufferCodec } from '@/convert/codec/array_buffer';
import {
  Codec,
  Converter,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { rfc3999DateCodec } from '@/convert/codec/date';
import { numberCodec } from '@/convert/codec/number';
import MonetaryValue, {
  monetaryValueArrayCodec,
} from '@/models/block_explorer/monetary_value';
import {
  TaggedBase64,
  taggedBase64Codec,
} from '@/models/espresso/tagged_base64/TaggedBase64';

export class CappuccinoExplorerBlockDetail {
  readonly hash: TaggedBase64;
  readonly height: number;
  readonly time: Date;
  readonly numTransactions: number;
  readonly proposerID: ArrayBuffer;
  readonly feeRecipient: ArrayBuffer;
  readonly size: number;
  readonly blockReward: MonetaryValue[];

  constructor(
    hash: TaggedBase64,
    height: number,
    time: Date,
    numTransactions: number,
    proposerID: ArrayBuffer,
    feeRecipient: ArrayBuffer,
    size: number,
    blockReward: MonetaryValue[],
  ) {
    this.hash = hash;
    this.height = height;
    this.time = time;
    this.numTransactions = numTransactions;
    this.proposerID = proposerID;
    this.feeRecipient = feeRecipient;
    this.size = size;
    this.blockReward = blockReward;
  }

  toJSON() {
    return cappuccinoExplorerBlockDetailCodec.encode(this);
  }
}

class CappuccinoExplorerBlockDetailDecoder
  implements Converter<unknown, CappuccinoExplorerBlockDetail>
{
  convert(input: unknown): CappuccinoExplorerBlockDetail {
    assertRecordWithKeys(
      input,
      'hash',
      'height',
      'time',
      'num_transactions',
      'proposer_id',
      'fee_recipient',
      'size',
      'block_reward',
    );

    return new CappuccinoExplorerBlockDetail(
      taggedBase64Codec.decode(input.hash),
      numberCodec.decode(input.height),
      rfc3999DateCodec.decode(input.time),
      numberCodec.decode(input.num_transactions),
      hexArrayBufferCodec.decode(input.proposer_id),
      hexArrayBufferCodec.decode(input.fee_recipient),
      numberCodec.decode(input.size),
      monetaryValueArrayCodec.decode(input.block_reward),
    );
  }
}

class CappuccinoExplorerBlockDetailEncoder
  implements Converter<CappuccinoExplorerBlockDetail, unknown>
{
  convert(input: CappuccinoExplorerBlockDetail): unknown {
    assertInstanceOf(input, CappuccinoExplorerBlockDetail);

    return {
      hash: taggedBase64Codec.encode(input.hash),
      height: numberCodec.encode(input.height),
      time: rfc3999DateCodec.encode(input.time),
      num_transactions: numberCodec.encode(input.numTransactions),
      proposer_id: hexArrayBufferCodec.encode(input.proposerID),
      fee_recipient: hexArrayBufferCodec.encode(input.feeRecipient),
      size: numberCodec.encode(input.size),
      block_reward: monetaryValueArrayCodec.encode(input.blockReward),
    };
  }
}

class CappuccinoExplorerBlockDetailCodec extends Codec<
  CappuccinoExplorerBlockDetail,
  unknown
> {
  readonly encoder = new CappuccinoExplorerBlockDetailEncoder();
  readonly decoder = new CappuccinoExplorerBlockDetailDecoder();
}

export const cappuccinoExplorerBlockDetailCodec =
  new CappuccinoExplorerBlockDetailCodec();
export const cappuccinoExplorerBlockDetailArrayCodec = new ArrayCodec(
  new ArrayDecoder(cappuccinoExplorerBlockDetailCodec),
  new ArrayEncoder(cappuccinoExplorerBlockDetailCodec),
);

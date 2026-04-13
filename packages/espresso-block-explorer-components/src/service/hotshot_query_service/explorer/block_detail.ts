import { assertInstanceOf } from '@/assert/assert';
import { ArrayCodec, ArrayDecoder, ArrayEncoder } from '@/convert/codec/array';
import { backwardsCompatibleHexArrayBufferCodec } from '@/convert/codec/array_buffer_hex';
import {
  Codec,
  Converter,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { rfc3999DateCodec } from '@/convert/codec/date';
import { numberCodec } from '@/convert/codec/number';
import {
  default as MonetaryValue,
  monetaryValueArrayCodec,
} from '@/models/block_explorer/monetary_value';
import {
  TaggedBase64,
  taggedBase64Codec,
} from '@/models/espresso/tagged_base64/tagged_base64';

export class ExplorerBlockDetail {
  constructor(
    public readonly hash: TaggedBase64,
    public readonly height: number,
    public readonly time: Date,
    public readonly numTransactions: number,
    public readonly proposerID: ArrayBuffer[],
    public readonly feeRecipient: ArrayBuffer[],
    public readonly size: number,
    public readonly blockReward: MonetaryValue[],
  ) {}

  toJSON() {
    return explorerBlockDetailCodec.encode(this);
  }
}

class ExplorerBlockDetailDecoder implements Converter<
  unknown,
  ExplorerBlockDetail
> {
  convert(input: unknown): ExplorerBlockDetail {
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

    return new ExplorerBlockDetail(
      taggedBase64Codec.decode(input.hash),
      numberCodec.decode(input.height),
      rfc3999DateCodec.decode(input.time),
      numberCodec.decode(input.num_transactions),
      backwardsCompatibleHexArrayBufferCodec.decode(input.proposer_id),
      backwardsCompatibleHexArrayBufferCodec.decode(input.fee_recipient),
      numberCodec.decode(input.size),
      monetaryValueArrayCodec.decode(input.block_reward),
    );
  }
}

class ExplorerBlockDetailEncoder implements Converter<
  ExplorerBlockDetail,
  unknown
> {
  convert(input: ExplorerBlockDetail): unknown {
    assertInstanceOf(input, ExplorerBlockDetail);

    return {
      hash: taggedBase64Codec.encode(input.hash),
      height: numberCodec.encode(input.height),
      time: rfc3999DateCodec.encode(input.time),
      num_transactions: numberCodec.encode(input.numTransactions),
      proposer_id: backwardsCompatibleHexArrayBufferCodec.encode(
        input.proposerID,
      ),
      fee_recipient: backwardsCompatibleHexArrayBufferCodec.encode(
        input.feeRecipient,
      ),
      size: numberCodec.encode(input.size),
      block_reward: monetaryValueArrayCodec.encode(input.blockReward),
    };
  }
}

class ExplorerBlockDetailCodec extends Codec<ExplorerBlockDetail, unknown> {
  readonly encoder = new ExplorerBlockDetailEncoder();
  readonly decoder = new ExplorerBlockDetailDecoder();
}

export const explorerBlockDetailCodec = new ExplorerBlockDetailCodec();
export const explorerBlockDetailArrayCodec = new ArrayCodec(
  new ArrayDecoder(explorerBlockDetailCodec),
  new ArrayEncoder(explorerBlockDetailCodec),
);

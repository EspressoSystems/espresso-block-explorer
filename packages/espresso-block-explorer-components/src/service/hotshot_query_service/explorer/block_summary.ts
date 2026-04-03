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
  TaggedBase64,
  taggedBase64Codec,
} from '@/models/espresso/tagged_base64/tagged_base64';

export class ExplorerBlockSummary {
  constructor(
    public readonly hash: TaggedBase64,
    public readonly height: number,
    public readonly proposerID: ArrayBuffer[],
    public readonly numTransactions: number,
    public readonly size: number,
    public readonly time: Date,
  ) {}

  toJSON() {
    return explorerBlockSummaryCodec.encode(this);
  }
}

class ExplorerBlockSummaryDecoder implements Converter<
  unknown,
  ExplorerBlockSummary
> {
  convert(input: unknown): ExplorerBlockSummary {
    assertRecordWithKeys(
      input,
      'hash',
      'height',
      'proposer_id',
      'num_transactions',
      'size',
      'time',
    );

    return new ExplorerBlockSummary(
      taggedBase64Codec.decode(input.hash),
      numberCodec.decode(input.height),
      backwardsCompatibleHexArrayBufferCodec.decode(input.proposer_id),
      numberCodec.decode(input.num_transactions),
      numberCodec.decode(input.size),
      rfc3999DateCodec.decode(input.time),
    );
  }
}

class ExplorerBlockSummaryEncoder implements Converter<
  ExplorerBlockSummary,
  unknown
> {
  convert(input: ExplorerBlockSummary): unknown {
    assertInstanceOf(input, ExplorerBlockSummary);

    return {
      hash: taggedBase64Codec.encode(input.hash),
      height: numberCodec.encode(input.height),
      proposer_id: backwardsCompatibleHexArrayBufferCodec.encode(
        input.proposerID,
      ),
      num_transactions: numberCodec.encode(input.numTransactions),
      size: numberCodec.encode(input.size),
      time: rfc3999DateCodec.encode(input.time),
    };
  }
}

class ExplorerBlockSummaryCodec extends Codec<ExplorerBlockSummary, unknown> {
  readonly encoder = new ExplorerBlockSummaryEncoder();
  readonly decoder = new ExplorerBlockSummaryDecoder();
}

export const explorerBlockSummaryCodec = new ExplorerBlockSummaryCodec();

export const explorerBlockSummaryArrayCodec = new ArrayCodec(
  new ArrayDecoder(explorerBlockSummaryCodec),
  new ArrayEncoder(explorerBlockSummaryCodec),
);

import { assertInstanceOf } from '@/assert/assert';
import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { nullableNumberCodec } from '@/convert/codec/number';
import {
  TaggedBase64,
  taggedBase64Codec,
} from '@/models/espresso/tagged_base64/tagged_base64';

/**
 * QuorumCertificateDataV1 represents a BFT quorum certificate data for a
 * Quorum Certificate.
 */
export class QuorumDataV2 {
  constructor(
    public readonly leaf_commit: TaggedBase64,
    public readonly epoch: null | number,
    public readonly block_number: null | number,
  ) {}

  toJSON() {
    return quorumDataV2Codec.encode(this);
  }
}

export class QuorumDataV2Decoder implements Converter<unknown, QuorumDataV2> {
  convert(input: unknown): QuorumDataV2 {
    assertRecordWithKeys(input, 'leaf_commit', 'epoch', 'block_number');

    return new QuorumDataV2(
      taggedBase64Codec.decode(input.leaf_commit),
      nullableNumberCodec.decode(input.epoch),
      nullableNumberCodec.decode(input.block_number),
    );
  }
}

export class QuorumDataV2Encoder implements Converter<QuorumDataV2> {
  convert(input: QuorumDataV2) {
    assertInstanceOf(input, QuorumDataV2);

    return {
      leaf_commit: taggedBase64Codec.encode(input.leaf_commit),
      epoch: nullableNumberCodec.encode(input.epoch),
      block_number: nullableNumberCodec.encode(input.block_number),
    };
  }
}

export class QuorumDataV2Codec extends TypeCheckingCodec<
  QuorumDataV2,
  ReturnType<InstanceType<new () => QuorumDataV2Encoder>['convert']>
> {
  readonly encoder = new QuorumDataV2Encoder();
  readonly decoder = new QuorumDataV2Decoder();
}

export const quorumDataV2Codec = new QuorumDataV2Codec();

import { assertInstanceOf } from '@/assert/assert';
import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import {
  TaggedBase64,
  taggedBase64Codec,
} from '@/models/espresso/tagged_base64/tagged_base64';

/**
 * QuorumDataV1 represents a BFT quorum certificate data for a
 * Quorum to have been reached for a Leaf.
 */
export class QuorumDataV1 {
  readonly leaf_commit: TaggedBase64;

  constructor(leaf_commit: TaggedBase64) {
    this.leaf_commit = leaf_commit;
  }

  toJSON() {
    return quorumDataV1Codec.encode(this);
  }
}

export class QuorumDataV1Decoder implements Converter<unknown, QuorumDataV1> {
  convert(input: unknown): QuorumDataV1 {
    assertRecordWithKeys(input, 'leaf_commit');

    return new QuorumDataV1(taggedBase64Codec.decode(input.leaf_commit));
  }
}

export class QuorumDataV1Encoder implements Converter<QuorumDataV1> {
  convert(input: QuorumDataV1) {
    assertInstanceOf(input, QuorumDataV1);

    return {
      leaf_commit: taggedBase64Codec.encode(input.leaf_commit),
    };
  }
}

export class QuorumDataV1Codec extends TypeCheckingCodec<
  QuorumDataV1,
  ReturnType<InstanceType<new () => QuorumDataV1Encoder>['convert']>
> {
  readonly encoder = new QuorumDataV1Encoder();
  readonly decoder = new QuorumDataV1Decoder();
}

export const quorumDataV1Codec = new QuorumDataV1Codec();

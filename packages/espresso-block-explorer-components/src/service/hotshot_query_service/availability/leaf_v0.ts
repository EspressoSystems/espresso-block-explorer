import { assertInstanceOf } from '@/assert/assert';
import { hexArrayBufferCodec } from '@/convert/codec/array_buffer_hex';
import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { numberArrayCodec, numberCodec } from '@/convert/codec/number';
import {
  TaggedBase64,
  taggedBase64Codec,
} from '@/models/espresso/tagged_base64/tagged_base64';
import {
  AvailabilityAPIHeader,
  availabilityAPIHeaderCodec,
} from './block_header';
import { AvailabilityAPIPayloadBase } from './payload_base';
import { availabilityAPIPayloadCodec } from './payload_unknown';
import {
  QuorumCertificateV1,
  quorumCertificateV1Codec,
} from './quorum_certificate_v1';

/**
 * LeafV0 represents the version 0 of a Leaf within Espresso HotShot
 * Query Availability API.
 *
 * This type is no longer retrievable from the Availability API, and only
 * serves to represent a historical representation that no longer exists.
 *
 * The migration from LeavV0 to LeavV1 was a breaking change as we removed
 * some previous fields that used to exist.
 */
export class LeafV0 {
  constructor(
    public readonly view_number: number,
    public readonly justify_qc: QuorumCertificateV1,
    public readonly parent_commitment: TaggedBase64,
    public readonly block_header: AvailabilityAPIHeader,
    public readonly block_payload: AvailabilityAPIPayloadBase,
    public readonly rejected: number[],
    public readonly timestamp: number,
    public readonly proposer_id: ArrayBuffer,
  ) {}

  toJSON() {
    return leafV0Codec.encode(this);
  }
}

export class LeafV0Decoder implements Converter<unknown, LeafV0> {
  convert(input: unknown): LeafV0 {
    assertRecordWithKeys(
      input,
      'view_number',
      'justify_qc',
      'parent_commitment',
      'block_header',
      'block_payload',
      'rejected',
      'timestamp',
      'proposer_id',
    );

    return new LeafV0(
      numberCodec.decode(input.view_number),
      quorumCertificateV1Codec.decode(input.justify_qc),
      taggedBase64Codec.decode(input.parent_commitment),
      availabilityAPIHeaderCodec.decode(input.block_header),
      availabilityAPIPayloadCodec.decode(input.block_payload),
      numberArrayCodec.decode(input.rejected),
      numberCodec.decode(input.timestamp),
      hexArrayBufferCodec.decode(input.proposer_id),
    );
  }
}

export class LeafV0Encoder implements Converter<LeafV0> {
  convert(input: LeafV0) {
    assertInstanceOf(input, LeafV0);

    return {
      view_number: numberCodec.encode(input.view_number),
      justify_qc: quorumCertificateV1Codec.encode(input.justify_qc),
      parent_commitment: taggedBase64Codec.encode(input.parent_commitment),
      block_header: availabilityAPIHeaderCodec.encode(input.block_header),
      block_payload: availabilityAPIPayloadCodec.encode(input.block_payload),
      rejected: numberArrayCodec.encode(input.rejected),
      timestamp: numberCodec.encode(input.timestamp),
      proposer_id: hexArrayBufferCodec.encode(input.proposer_id),
    };
  }
}

export class LeafV0Codec extends TypeCheckingCodec<
  LeafV0,
  ReturnType<InstanceType<new () => LeafV0Encoder>['convert']>
> {
  readonly encoder = new LeafV0Encoder();
  readonly decoder = new LeafV0Decoder();
}

export const leafV0Codec = new LeafV0Codec();

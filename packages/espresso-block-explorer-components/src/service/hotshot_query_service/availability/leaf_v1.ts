import { assertInstanceOf } from '@/assert/assert';
import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import { numberCodec } from '@/convert/codec/number';
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
import {
  nullableUpgradeCertificateV1Codec,
  UpgradeCertificateV1,
} from './upgrade_certificate_v1';

/**
 * LeafV1 represents the version 1 of a Leaf within Espresso HotShot Query
 * Availability API.
 */
export class LeafV1 {
  constructor(
    public readonly view_number: number,
    public readonly justify_qc: QuorumCertificateV1,
    public readonly parent_commitment: TaggedBase64,
    public readonly block_header: AvailabilityAPIHeader,
    public readonly upgrade_certificate: null | UpgradeCertificateV1,
    public readonly block_payload: AvailabilityAPIPayloadBase,
  ) {}

  toJSON() {
    return leafV1Codec.encode(this);
  }
}

export class LeafV1Decoder implements Converter<unknown, LeafV1> {
  convert(input: unknown): LeafV1 {
    assertRecordWithKeys(
      input,
      'view_number',
      'justify_qc',
      'parent_commitment',
      'block_header',
      'upgrade_certificate',
      'block_payload',
    );

    return new LeafV1(
      numberCodec.decode(input.view_number),
      quorumCertificateV1Codec.decode(input.justify_qc),
      taggedBase64Codec.decode(input.parent_commitment),
      availabilityAPIHeaderCodec.decode(input.block_header),
      nullableUpgradeCertificateV1Codec.decode(input.upgrade_certificate),
      availabilityAPIPayloadCodec.decode(input.block_payload),
    );
  }
}

export class LeafV1Encoder implements Converter<LeafV1> {
  convert(input: LeafV1) {
    assertInstanceOf(input, LeafV1);

    return {
      view_number: numberCodec.encode(input.view_number),
      justify_qc: quorumCertificateV1Codec.encode(input.justify_qc),
      parent_commitment: taggedBase64Codec.encode(input.parent_commitment),
      block_header: availabilityAPIHeaderCodec.encode(input.block_header),
      upgrade_certificate: nullableUpgradeCertificateV1Codec.encode(
        input.upgrade_certificate,
      ),
      block_payload: availabilityAPIPayloadCodec.encode(input.block_payload),
    };
  }
}

export class LeafV1Codec extends TypeCheckingCodec<
  LeafV1,
  ReturnType<InstanceType<new () => LeafV1Encoder>['convert']>
> {
  readonly encoder = new LeafV1Encoder();
  readonly decoder = new LeafV1Decoder();
}

export const leafV1Codec = new LeafV1Codec();

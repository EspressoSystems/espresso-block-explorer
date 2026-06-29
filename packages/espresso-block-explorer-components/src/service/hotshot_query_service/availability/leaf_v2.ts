import { assertInstanceOf } from '@/assert/assert';
import { booleanCodec } from '@/convert/codec/boolean';
import {
  assertRecordWithKeys,
  Converter,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import { numberCodec } from '@/convert/codec/number';
import { nullableUint8ArrayCodec } from '@/convert/codec/uint8_array';
import {
  TaggedBase64,
  taggedBase64Codec,
} from '@/models/espresso/tagged_base64/tagged_base64';
import {
  AvailabilityAPIHeader,
  availabilityAPIHeaderCodec,
} from './block_header';
import { AvailabilityAPIPayloadBase } from './payload_base';
import { nullableAvailabilityAPIPayloadCodec } from './payload_unknown';
import {
  nullableQuorumCertificateV2Codec,
  QuorumCertificateV2,
  quorumCertificateV2Codec,
} from './quorum_certificate_v2';
import {
  nullableUpgradeCertificateV1Codec,
  UpgradeCertificateV1,
} from './upgrade_certificate_v1';
import {
  nullableViewChangeEvidenceV2Codec,
  ViewChangeEvidenceV2,
} from './view_change_evidence_v2';

/**
 * LeafV2 represents the version 2 of a Leaf within Espresso HotShot Query
 * Service availability API.
 */
export class LeafV2 {
  constructor(
    public readonly view_number: number,
    public readonly justify_qc: QuorumCertificateV2,
    public readonly next_epoch_justify_qc: null | QuorumCertificateV2,
    public readonly parent_commitment: TaggedBase64,
    public readonly block_header: AvailabilityAPIHeader,
    public readonly upgrade_certificate: null | UpgradeCertificateV1,
    public readonly block_payload: null | AvailabilityAPIPayloadBase,
    public readonly view_change_evidence: null | ViewChangeEvidenceV2,
    public readonly next_drb_result: null | Uint8Array,
    public readonly with_epoch: boolean,
  ) {}

  toJSON() {
    return leafV2Codec.encode(this);
  }
}

export class LeafV2Decoder implements Converter<unknown, LeafV2> {
  convert(input: unknown): LeafV2 {
    assertRecordWithKeys(
      input,
      'view_number',
      'justify_qc',
      'next_epoch_justify_qc',
      'parent_commitment',
      'block_header',
      'upgrade_certificate',
      'block_payload',
      'view_change_evidence',
      'next_drb_result',
      'with_epoch',
    );

    return new LeafV2(
      numberCodec.decode(input.view_number),
      quorumCertificateV2Codec.decode(input.justify_qc),
      nullableQuorumCertificateV2Codec.decode(input.next_epoch_justify_qc),
      taggedBase64Codec.decode(input.parent_commitment),
      availabilityAPIHeaderCodec.decode(input.block_header),
      nullableUpgradeCertificateV1Codec.decode(input.upgrade_certificate),
      nullableAvailabilityAPIPayloadCodec.decode(input.block_payload),
      nullableViewChangeEvidenceV2Codec.decode(input.view_change_evidence),
      nullableUint8ArrayCodec.decode(input.next_drb_result),
      booleanCodec.decode(input.with_epoch),
    );
  }
}

export class LeafV2Encoder implements Converter<LeafV2> {
  convert(input: LeafV2) {
    assertInstanceOf(input, LeafV2);

    return {
      view_number: numberCodec.encode(input.view_number),
      justify_qc: quorumCertificateV2Codec.encode(input.justify_qc),
      next_epoch_justify_qc: nullableQuorumCertificateV2Codec.encode(
        input.next_epoch_justify_qc,
      ),
      parent_commitment: taggedBase64Codec.encode(input.parent_commitment),
      block_header: availabilityAPIHeaderCodec.encode(input.block_header),
      upgrade_certificate: nullableUpgradeCertificateV1Codec.encode(
        input.upgrade_certificate,
      ),
      block_payload: nullableAvailabilityAPIPayloadCodec.encode(
        input.block_payload,
      ),
      view_change_evidence: nullableViewChangeEvidenceV2Codec.encode(
        input.view_change_evidence,
      ),
      next_drb_result: nullableUint8ArrayCodec.encode(input.next_drb_result),
      with_epoch: booleanCodec.encode(input.with_epoch),
    };
  }
}

export class LeafV2Codec extends TypeCheckingCodec<
  LeafV2,
  ReturnType<InstanceType<new () => LeafV2Encoder>['convert']>
> {
  readonly encoder = new LeafV2Encoder();
  readonly decoder = new LeafV2Decoder();
}

export const leafV2Codec = new LeafV2Codec();

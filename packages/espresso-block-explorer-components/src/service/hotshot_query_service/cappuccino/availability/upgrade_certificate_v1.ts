import { Converter, TypeCheckingCodec } from '@/convert/codec/convert';
import { NullCodec, NullDecoder, NullEncoder } from '@/convert/codec/null';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/tagged_base64';
import {
  SimpleCertificate,
  SimpleCertificateDecoder,
} from './simple_certificate';
import { SimpleCertificateSignatures } from './simple_certificate_signatures';
import {
  UpgradeProposalDataV1,
  upgradeProposalDataV1Codec,
} from './upgrade_proposal_data_v1';

/**
 * UpgradeCertificateV1 represents a Simple Ceritifcate of TimeoutDataV1
 * retrieved from the HotShot Query Service's Availability API.
 */
export class UpgradeCertificateV1 extends SimpleCertificate<UpgradeProposalDataV1> {
  constructor(
    data: UpgradeProposalDataV1,
    vote_commitment: TaggedBase64,
    view_number: number,
    signatures: null | SimpleCertificateSignatures,
    is_genesis: boolean,
    _pd: null,
  ) {
    super(data, vote_commitment, view_number, signatures, is_genesis, _pd);
  }

  toJSON() {
    return upgradeCertificateV1Codec.encode(this);
  }
}

const simpleCertificateDecoder = new SimpleCertificateDecoder(
  upgradeProposalDataV1Codec,
);

export class UpgradeCertificateV1Decoder implements Converter<
  unknown,
  UpgradeCertificateV1
> {
  convert(input: unknown): UpgradeCertificateV1 {
    const certifcate = simpleCertificateDecoder.convert(input);
    return new UpgradeCertificateV1(
      certifcate.data,
      certifcate.vote_commitment,
      certifcate.view_number,
      certifcate.signatures,
      certifcate.is_genesis,
      certifcate._pd,
    );
  }
}

const simpleCertificateEncoder = new SimpleCertificateDecoder(
  upgradeProposalDataV1Codec,
);

export class UpgradeCertificateV1Encoder implements Converter<UpgradeCertificateV1> {
  convert(input: UpgradeCertificateV1) {
    return simpleCertificateEncoder.convert(input);
  }
}

export class UpgradeCertificateV1Codec extends TypeCheckingCodec<
  UpgradeCertificateV1,
  ReturnType<InstanceType<new () => UpgradeCertificateV1Encoder>['convert']>
> {
  readonly encoder = new UpgradeCertificateV1Encoder();
  readonly decoder = new UpgradeCertificateV1Decoder();
}

export const upgradeCertificateV1Codec = new UpgradeCertificateV1Codec();
export const nullableUpgradeCertificateV1Codec = new NullCodec(
  new NullDecoder(upgradeCertificateV1Codec),
  new NullEncoder(upgradeCertificateV1Codec),
);

import { Converter, TypeCheckingCodec } from '@/convert/codec/convert';
import { NullCodec, NullDecoder, NullEncoder } from '@/convert/codec/null';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/tagged_base64';
import { QuorumDataV2, quorumDataV2Codec } from './quorum_data_v2';
import {
  SimpleCertificate,
  SimpleCertificateDecoder,
} from './simple_certificate';
import { SimpleCertificateSignatures } from './simple_certificate_signatures';

/**
 * QuorumCertificateV2 a SimpleSertificate of QuorumDataV2 retrieved from
 * the HotShot Query Service's Availability API.
 */
export class QuorumCertificateV2 extends SimpleCertificate<QuorumDataV2> {
  constructor(
    data: QuorumDataV2,
    vote_commitment: TaggedBase64,
    view_number: number,
    signatures: null | SimpleCertificateSignatures,
    is_genesis: boolean,
    _pd: null,
  ) {
    super(data, vote_commitment, view_number, signatures, is_genesis, _pd);
  }

  toJSON() {
    return quorumCertificateV2Codec.encode(this);
  }
}

const simpleCertificateDecoder = new SimpleCertificateDecoder(
  quorumDataV2Codec,
);

export class QuorumCertificateV2Decoder implements Converter<
  unknown,
  QuorumCertificateV2
> {
  convert(input: unknown): QuorumCertificateV2 {
    const certifcate = simpleCertificateDecoder.convert(input);
    return new QuorumCertificateV2(
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
  quorumDataV2Codec,
);

export class QuorumCertificateV2Encoder implements Converter<QuorumCertificateV2> {
  convert(input: QuorumCertificateV2) {
    return simpleCertificateEncoder.convert(input);
  }
}

export class QuorumCertificateV2Codec extends TypeCheckingCodec<
  QuorumCertificateV2,
  ReturnType<InstanceType<new () => QuorumCertificateV2Encoder>['convert']>
> {
  readonly encoder = new QuorumCertificateV2Encoder();
  readonly decoder = new QuorumCertificateV2Decoder();
}

export const quorumCertificateV2Codec = new QuorumCertificateV2Codec();
export const nullableQuorumCertificateV2Codec = new NullCodec(
  new NullDecoder(quorumCertificateV2Codec),
  new NullEncoder(quorumCertificateV2Codec),
);

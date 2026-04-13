import { Converter, TypeCheckingCodec } from '@/convert/codec/convert';
import { NullCodec, NullDecoder, NullEncoder } from '@/convert/codec/null';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/tagged_base64';
import { QuorumDataV1, quorumDataV1Codec } from './quorum_data_v1';
import {
  SimpleCertificate,
  SimpleCertificateDecoder,
  SimpleCertificateEncoder,
} from './simple_certificate';
import { SimpleCertificateSignatures } from './simple_certificate_signatures';

/**
 * QuorumCertificateV1 represents a Simple Ceritifcate of QuorumDataV1
 * retrieved from the HotShot Query Service's Availability API.
 */
export class QuorumCertificateV1 extends SimpleCertificate<QuorumDataV1> {
  constructor(
    data: QuorumDataV1,
    vote_commitment: TaggedBase64,
    view_number: number,
    signatures: null | SimpleCertificateSignatures,
    is_genesis: boolean,
    _pd: null,
  ) {
    super(data, vote_commitment, view_number, signatures, is_genesis, _pd);
  }

  toJSON() {
    return quorumCertificateV1Codec.encode(this);
  }
}

const simpleCertificateDecoder = new SimpleCertificateDecoder(
  quorumDataV1Codec,
);

export class QuorumCertificateV1Decoder implements Converter<
  unknown,
  QuorumCertificateV1
> {
  convert(input: unknown): QuorumCertificateV1 {
    const certifcate = simpleCertificateDecoder.convert(input);
    return new QuorumCertificateV1(
      certifcate.data,
      certifcate.vote_commitment,
      certifcate.view_number,
      certifcate.signatures,
      certifcate.is_genesis,
      certifcate._pd,
    );
  }
}

const simpleCertificateEncoder = new SimpleCertificateEncoder(
  quorumDataV1Codec,
);

export class QuorumCertificateV1Encoder implements Converter<QuorumCertificateV1> {
  convert(input: QuorumCertificateV1) {
    return simpleCertificateEncoder.convert(input);
  }
}

export class QuorumCertificateV1Codec extends TypeCheckingCodec<
  QuorumCertificateV1,
  ReturnType<InstanceType<new () => QuorumCertificateV1Encoder>['convert']>
> {
  readonly encoder = new QuorumCertificateV1Encoder();
  readonly decoder = new QuorumCertificateV1Decoder();
}

export const quorumCertificateV1Codec = new QuorumCertificateV1Codec();
export const nullableQuorumCertificateV1Codec = new NullCodec(
  new NullDecoder(quorumCertificateV1Codec),
  new NullEncoder(quorumCertificateV1Codec),
);

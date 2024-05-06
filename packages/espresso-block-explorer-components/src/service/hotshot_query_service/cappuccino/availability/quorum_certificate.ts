import { assertInstanceOf } from '@/assert/assert';
import { booleanCodec } from '@/convert/codec/boolean';
import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { numberCodec } from '@/convert/codec/number';
import {
  TaggedBase64,
  taggedBase64Codec,
} from '@/models/espresso/tagged_base64/TaggedBase64';
import {
  CappuccinoAPIBQuorumCertificateData,
  cappuccinoAPIBQuorumCertificateDataCodec,
} from './quorum_certificate_data';
import {
  CappuccinoAPIQuorumCertificateSignatures,
  nullableCappuccinoAPIQuorumCertificateSignaturesCodec,
} from './quorum_certificate_signatures';

/**
 * CappuccinoAPIQuorumCertificate represents a quorum certificate in the
 * Cappuccino API.
 */
export class CappuccinoAPIQuorumCertificate {
  readonly data: CappuccinoAPIBQuorumCertificateData;
  readonly vote_commitment: TaggedBase64;
  readonly view_number: number;
  readonly signatures: null | CappuccinoAPIQuorumCertificateSignatures;
  readonly is_genesis: boolean;
  readonly _pd: null;

  constructor(
    data: CappuccinoAPIBQuorumCertificateData,
    vote_commitment: TaggedBase64,
    view_number: number,
    signatures: null | CappuccinoAPIQuorumCertificateSignatures,
    is_genesis: boolean,
    _pd: null,
  ) {
    this.data = data;
    this.vote_commitment = vote_commitment;
    this.view_number = view_number;
    this.signatures = signatures;
    this.is_genesis = is_genesis;
    this._pd = _pd;
  }

  toJSON() {
    return cappuccinoAPIQuorumCertificateCodec.encode(this);
  }
}

export class CappuccinoAPIQuorumCertificateDecoder
  implements Converter<unknown, CappuccinoAPIQuorumCertificate>
{
  convert(input: unknown): CappuccinoAPIQuorumCertificate {
    assertRecordWithKeys(
      input,
      'data',
      'vote_commitment',
      'view_number',
      'signatures',
      'is_genesis',
      '_pd',
    );

    return new CappuccinoAPIQuorumCertificate(
      cappuccinoAPIBQuorumCertificateDataCodec.decode(input.data),
      taggedBase64Codec.decode(input.vote_commitment),
      numberCodec.decode(input.view_number),
      nullableCappuccinoAPIQuorumCertificateSignaturesCodec.decode(
        input.signatures,
      ),
      booleanCodec.decode(input.is_genesis),
      null,
    );
  }
}

export class CappuccinoAPIQuorumCertificateEncoder
  implements Converter<CappuccinoAPIQuorumCertificate>
{
  convert(input: CappuccinoAPIQuorumCertificate) {
    assertInstanceOf(input, CappuccinoAPIQuorumCertificate);

    return {
      data: cappuccinoAPIBQuorumCertificateDataCodec.encode(input.data),
      vote_commitment: taggedBase64Codec.encode(input.vote_commitment),
      view_number: numberCodec.encode(input.view_number),
      signatures: nullableCappuccinoAPIQuorumCertificateSignaturesCodec.encode(
        input.signatures,
      ),
      is_genesis: booleanCodec.encode(input.is_genesis),
      _pd: null,
    };
  }
}

export class CappuccinoAPIQuorumCertificateCodec extends TypeCheckingCodec<
  CappuccinoAPIQuorumCertificate,
  ReturnType<
    InstanceType<new () => CappuccinoAPIQuorumCertificateEncoder>['convert']
  >
> {
  readonly encoder = new CappuccinoAPIQuorumCertificateEncoder();
  readonly decoder = new CappuccinoAPIQuorumCertificateDecoder();
}

export const cappuccinoAPIQuorumCertificateCodec =
  new CappuccinoAPIQuorumCertificateCodec();

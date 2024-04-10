import {
  Codec,
  Converter,
  InvalidInputError,
  isBoolean,
  isNull,
  isNumber,
  isRecord,
  isUnknown,
} from '../../../../convert/codec/convert';
import { isUnknownArray } from '../../../../convert/codec/unknown';
import {
  TaggedBase64,
  taggedBase64Codec,
} from '../../../../models/espresso/tagged_base64/TaggedBase64';
import {
  GibraltarAPIBQuorumCertificateData,
  gibraltarAPIBQuorumCertificateDataCodec,
} from './quorum_certificate_data';
import {
  GibraltarAPIQuorumCertificateSignatures,
  gibraltarAPIQuorumCertificateSignaturesCodec,
} from './quorum_certificate_signatures';

export class GibraltarAPIQuorumCertificate {
  readonly data: GibraltarAPIBQuorumCertificateData;
  readonly vote_commitment: TaggedBase64;
  readonly view_number: number;
  readonly signatures: null | GibraltarAPIQuorumCertificateSignatures;
  readonly is_genesis: boolean;
  readonly _pd: null;

  constructor(
    data: GibraltarAPIBQuorumCertificateData,
    vote_commitment: TaggedBase64,
    view_number: number,
    signatures: null | GibraltarAPIQuorumCertificateSignatures,
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
    return gibraltarAPIQuorumCertificateCodec.encode(this);
  }
}

export class GibraltarAPIQuorumCertificateDecoder
  implements Converter<unknown, GibraltarAPIQuorumCertificate>
{
  convert(input: unknown): GibraltarAPIQuorumCertificate {
    if (
      !isRecord(input, 'data', isUnknown) ||
      !isRecord(input, 'vote_commitment', isUnknown) ||
      !isRecord(input, 'view_number', isNumber) ||
      !(
        isRecord(input, 'signatures', isUnknownArray) ||
        isRecord(input, 'signatures', isNull)
      ) ||
      !isRecord(input, 'is_genesis', isBoolean) ||
      !isRecord(input, '_pd', isUnknown)
    ) {
      throw new InvalidInputError();
    }

    return new GibraltarAPIQuorumCertificate(
      gibraltarAPIBQuorumCertificateDataCodec.decode(input.data),
      taggedBase64Codec.decode(input.vote_commitment),
      input.view_number,
      input.signatures &&
        gibraltarAPIQuorumCertificateSignaturesCodec.decode(input.signatures),
      input.is_genesis,
      null,
    );
  }
}

export class GibraltarAPIQuorumCertificateEncoder
  implements Converter<GibraltarAPIQuorumCertificate, unknown>
{
  convert(input: GibraltarAPIQuorumCertificate): unknown {
    return {
      data: gibraltarAPIBQuorumCertificateDataCodec.encode(input.data),
      vote_commitment: taggedBase64Codec.encode(input.vote_commitment),
      view_number: input.view_number,
      signatures:
        input.signatures &&
        gibraltarAPIQuorumCertificateSignaturesCodec.encode(input.signatures),
      is_genesis: input.is_genesis,
      _pd: null,
    };
  }
}

export class GibraltarAPIQuorumCertificateCodec extends Codec<
  GibraltarAPIQuorumCertificate,
  unknown
> {
  readonly encoder = new GibraltarAPIQuorumCertificateEncoder();
  readonly decoder = new GibraltarAPIQuorumCertificateDecoder();
}

export const gibraltarAPIQuorumCertificateCodec =
  new GibraltarAPIQuorumCertificateCodec();

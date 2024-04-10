import {
  Codec,
  Converter,
  InvalidInputError,
} from '../../../../convert/codec/convert';
import { isUnknownArray } from '../../../../convert/codec/unknown';
import {
  TaggedBase64,
  taggedBase64Codec,
} from '../../../../models/espresso/tagged_base64/TaggedBase64';
import { GibraltarAPIBitVec, gibraltarAPIBitVecCodec } from './bit_vec';

export class GibraltarAPIQuorumCertificateSignatures {
  readonly signature: TaggedBase64;
  readonly bitvec: GibraltarAPIBitVec;

  constructor(signature: TaggedBase64, bitvec: GibraltarAPIBitVec) {
    this.signature = signature;
    this.bitvec = bitvec;
  }

  toJSON() {
    return gibraltarAPIQuorumCertificateSignaturesCodec.encode(this);
  }
}

export class GibraltarAPIQuorumCertificateSignaturesDecoder
  implements Converter<unknown, GibraltarAPIQuorumCertificateSignatures>
{
  convert(input: unknown): GibraltarAPIQuorumCertificateSignatures {
    if (!isUnknownArray(input) || input.length !== 2) {
      throw new InvalidInputError();
    }

    return new GibraltarAPIQuorumCertificateSignatures(
      taggedBase64Codec.decode(input[0]),
      gibraltarAPIBitVecCodec.decode(input[1]),
    );
  }
}

export class GibraltarAPIQuorumCertificateSignaturesEncoder
  implements Converter<GibraltarAPIQuorumCertificateSignatures, unknown>
{
  convert(input: GibraltarAPIQuorumCertificateSignatures): unknown {
    return [
      taggedBase64Codec.encode(input.signature),
      gibraltarAPIBitVecCodec.encode(input.bitvec),
    ];
  }
}

export class GibraltarAPIQuorumCertificateSignaturesCodec extends Codec<
  GibraltarAPIQuorumCertificateSignatures,
  unknown
> {
  readonly encoder = new GibraltarAPIQuorumCertificateSignaturesEncoder();
  readonly decoder = new GibraltarAPIQuorumCertificateSignaturesDecoder();
}

export const gibraltarAPIQuorumCertificateSignaturesCodec =
  new GibraltarAPIQuorumCertificateSignaturesCodec();

import {
  Converter,
  InvalidInputError,
  TypeCheckingCodec,
} from '../../../../convert/codec/convert';
import {
  NullCodec,
  NullDecoder,
  NullEncoder,
} from '../../../../convert/codec/null';
import { isUnknownArray } from '../../../../convert/codec/unknown';
import {
  TaggedBase64,
  taggedBase64Codec,
} from '../../../../models/espresso/tagged_base64/TaggedBase64';
import { CappuccinoAPIBitVec, cappuccinoAPIBitVecCodec } from './bit_vec';

export class CappuccinoAPIQuorumCertificateSignatures {
  readonly signature: TaggedBase64;
  readonly bitvec: CappuccinoAPIBitVec;

  constructor(signature: TaggedBase64, bitvec: CappuccinoAPIBitVec) {
    this.signature = signature;
    this.bitvec = bitvec;
  }

  toJSON() {
    return cappuccinoAPIQuorumCertificateSignaturesCodec.encode(this);
  }
}

export class CappuccinoAPIQuorumCertificateSignaturesDecoder
  implements Converter<unknown, CappuccinoAPIQuorumCertificateSignatures>
{
  convert(input: unknown): CappuccinoAPIQuorumCertificateSignatures {
    if (!isUnknownArray(input) || input.length !== 2) {
      throw new InvalidInputError();
    }

    return new CappuccinoAPIQuorumCertificateSignatures(
      taggedBase64Codec.decode(input[0]),
      cappuccinoAPIBitVecCodec.decode(input[1]),
    );
  }
}

export class CappuccinoAPIQuorumCertificateSignaturesEncoder
  implements Converter<CappuccinoAPIQuorumCertificateSignatures>
{
  convert(input: CappuccinoAPIQuorumCertificateSignatures) {
    return [
      taggedBase64Codec.encode(input.signature),
      cappuccinoAPIBitVecCodec.encode(input.bitvec),
    ];
  }
}

export class CappuccinoAPIQuorumCertificateSignaturesCodec extends TypeCheckingCodec<
  CappuccinoAPIQuorumCertificateSignatures,
  ReturnType<
    InstanceType<
      new () => CappuccinoAPIQuorumCertificateSignaturesEncoder
    >['convert']
  >
> {
  readonly encoder = new CappuccinoAPIQuorumCertificateSignaturesEncoder();
  readonly decoder = new CappuccinoAPIQuorumCertificateSignaturesDecoder();
}

export const cappuccinoAPIQuorumCertificateSignaturesCodec =
  new CappuccinoAPIQuorumCertificateSignaturesCodec();
export const nullableCappuccinoAPIQuorumCertificateSignaturesCodec =
  new NullCodec(
    new NullDecoder(cappuccinoAPIQuorumCertificateSignaturesCodec),
    new NullEncoder(cappuccinoAPIQuorumCertificateSignaturesCodec),
  );

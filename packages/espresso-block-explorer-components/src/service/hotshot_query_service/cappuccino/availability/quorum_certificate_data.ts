import {
  Converter,
  InvalidInputError,
  TypeCheckingCodec,
  isRecord,
  isUnknown,
} from '../../../../convert/codec/convert';
import {
  TaggedBase64,
  taggedBase64Codec,
} from '../../../../models/espresso/tagged_base64/TaggedBase64';

export class CappuccinoAPIBQuorumCertificateData {
  readonly leaf_commit: TaggedBase64;

  constructor(leaf_commit: TaggedBase64) {
    this.leaf_commit = leaf_commit;
  }

  toJSON() {
    return cappuccinoAPIBQuorumCertificateDataCodec.encode(this);
  }
}

export class CappuccinoAPIBQuorumCertificateDataDecoder
  implements Converter<unknown, CappuccinoAPIBQuorumCertificateData>
{
  convert(input: unknown): CappuccinoAPIBQuorumCertificateData {
    if (!isRecord(input, 'leaf_commit', isUnknown)) {
      throw new InvalidInputError();
    }

    return new CappuccinoAPIBQuorumCertificateData(
      taggedBase64Codec.decode(input.leaf_commit),
    );
  }
}

export class CappuccinoAPIBQuorumCertificateDataEncoder
  implements Converter<CappuccinoAPIBQuorumCertificateData>
{
  convert(input: CappuccinoAPIBQuorumCertificateData) {
    return {
      leaf_commit: taggedBase64Codec.encode(input.leaf_commit),
    };
  }
}

export class CappuccinoAPIBQuorumCertificateDataCodec extends TypeCheckingCodec<
  CappuccinoAPIBQuorumCertificateData,
  ReturnType<
    InstanceType<
      new () => CappuccinoAPIBQuorumCertificateDataEncoder
    >['convert']
  >
> {
  readonly encoder = new CappuccinoAPIBQuorumCertificateDataEncoder();
  readonly decoder = new CappuccinoAPIBQuorumCertificateDataDecoder();
}

export const cappuccinoAPIBQuorumCertificateDataCodec =
  new CappuccinoAPIBQuorumCertificateDataCodec();

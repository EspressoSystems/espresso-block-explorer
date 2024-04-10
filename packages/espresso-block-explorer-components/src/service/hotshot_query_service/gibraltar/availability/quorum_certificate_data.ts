import {
  Codec,
  Converter,
  InvalidInputError,
  isRecord,
  isUnknown,
} from '../../../../convert/codec/convert';
import {
  TaggedBase64,
  taggedBase64Codec,
} from '../../../../models/espresso/tagged_base64/TaggedBase64';

export class GibraltarAPIBQuorumCertificateData {
  readonly leaf_commit: TaggedBase64;

  constructor(leaf_commit: TaggedBase64) {
    this.leaf_commit = leaf_commit;
  }

  toJSON() {
    return gibraltarAPIBQuorumCertificateDataCodec.encode(this);
  }
}

export class GibraltarAPIBQuorumCertificateDataDecoder
  implements Converter<unknown, GibraltarAPIBQuorumCertificateData>
{
  convert(input: unknown): GibraltarAPIBQuorumCertificateData {
    if (!isRecord(input, 'leaf_commit', isUnknown)) {
      throw new InvalidInputError();
    }

    return new GibraltarAPIBQuorumCertificateData(
      taggedBase64Codec.decode(input.leaf_commit),
    );
  }
}

export class GibraltarAPIBQuorumCertificateDataEncoder
  implements Converter<GibraltarAPIBQuorumCertificateData, unknown>
{
  convert(input: GibraltarAPIBQuorumCertificateData): unknown {
    return {
      leaf_commit: taggedBase64Codec.encode(input.leaf_commit),
    };
  }
}

export class GibraltarAPIBQuorumCertificateDataCodec extends Codec<
  GibraltarAPIBQuorumCertificateData,
  unknown
> {
  readonly encoder = new GibraltarAPIBQuorumCertificateDataEncoder();
  readonly decoder = new GibraltarAPIBQuorumCertificateDataDecoder();
}

export const gibraltarAPIBQuorumCertificateDataCodec =
  new GibraltarAPIBQuorumCertificateDataCodec();

import {
  Codec,
  Converter,
  InvalidInputError,
  isRecord,
  isUnknown,
} from '../../../../convert/codec/convert';
import { GibraltarAPILeaf, gibraltarAPILeafCodec } from './leaf';
import {
  GibraltarAPIQuorumCertificate,
  gibraltarAPIQuorumCertificateCodec,
} from './quorum_certificate';

export class GibraltarAPILeafResponse {
  readonly leaf: GibraltarAPILeaf;
  readonly qc: GibraltarAPIQuorumCertificate;

  constructor(leaf: GibraltarAPILeaf, qc: GibraltarAPIQuorumCertificate) {
    this.leaf = leaf;
    this.qc = qc;
  }

  toJSON() {
    return gibraltarAPILeafResponseCodec.encode(this);
  }
}

export class GibraltarAPILeafResponseDecoder
  implements Converter<unknown, GibraltarAPILeafResponse>
{
  convert(input: unknown): GibraltarAPILeafResponse {
    if (
      !isRecord(input, 'leaf', isUnknown) ||
      !isRecord(input, 'qc', isUnknown)
    ) {
      throw new InvalidInputError();
    }

    return new GibraltarAPILeafResponse(
      gibraltarAPILeafCodec.decode(input.leaf),
      gibraltarAPIQuorumCertificateCodec.decode(input.qc),
    );
  }
}

export class GibraltarAPILeafResponseEncoder
  implements Converter<GibraltarAPILeafResponse, unknown>
{
  convert(input: GibraltarAPILeafResponse): unknown {
    return {
      leaf: gibraltarAPILeafCodec.encode(input.leaf),
      qc: gibraltarAPIQuorumCertificateCodec.encode(input.qc),
    };
  }
}

export class GibraltarAPILeafResponseCodec extends Codec<
  GibraltarAPILeafResponse,
  unknown
> {
  readonly encoder = new GibraltarAPILeafResponseEncoder();
  readonly decoder = new GibraltarAPILeafResponseDecoder();
}

export const gibraltarAPILeafResponseCodec =
  new GibraltarAPILeafResponseCodec();

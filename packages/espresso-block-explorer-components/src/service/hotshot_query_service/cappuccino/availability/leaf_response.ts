import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '../../../../convert/codec/convert';
import { CappuccinoAPILeaf, cappuccinoAPILeafCodec } from './leaf';
import {
  CappuccinoAPIQuorumCertificate,
  cappuccinoAPIQuorumCertificateCodec,
} from './quorum_certificate';

/**
 * CappuccinoAPILeafResponse represents a leaf response in the Cappuccino API.
 */
export class CappuccinoAPILeafResponse {
  readonly leaf: CappuccinoAPILeaf;
  readonly qc: CappuccinoAPIQuorumCertificate;

  constructor(leaf: CappuccinoAPILeaf, qc: CappuccinoAPIQuorumCertificate) {
    this.leaf = leaf;
    this.qc = qc;
  }

  toJSON() {
    return cappuccinoAPILeafResponseCodec.encode(this);
  }
}

export class CappuccinoAPILeafResponseDecoder
  implements Converter<unknown, CappuccinoAPILeafResponse>
{
  convert(input: unknown): CappuccinoAPILeafResponse {
    assertRecordWithKeys(input, 'leaf', 'qc');

    return new CappuccinoAPILeafResponse(
      cappuccinoAPILeafCodec.decode(input.leaf),
      cappuccinoAPIQuorumCertificateCodec.decode(input.qc),
    );
  }
}

export class CappuccinoAPILeafResponseEncoder
  implements Converter<CappuccinoAPILeafResponse>
{
  convert(input: CappuccinoAPILeafResponse) {
    return {
      leaf: cappuccinoAPILeafCodec.encode(input.leaf),
      qc: cappuccinoAPIQuorumCertificateCodec.encode(input.qc),
    };
  }
}

export class CappuccinoAPILeafResponseCodec extends TypeCheckingCodec<
  CappuccinoAPILeafResponse,
  ReturnType<
    InstanceType<new () => CappuccinoAPILeafResponseEncoder>['convert']
  >
> {
  readonly encoder = new CappuccinoAPILeafResponseEncoder();
  readonly decoder = new CappuccinoAPILeafResponseDecoder();
}

export const cappuccinoAPILeafResponseCodec =
  new CappuccinoAPILeafResponseCodec();

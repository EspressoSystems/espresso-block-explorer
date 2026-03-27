import { assertInstanceOf } from '@/assert/assert';
import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { CappuccinoAPILeaf, cappuccinoAPILeafCodec } from './leaf';
import {
  QuorumCertificateV1,
  quorumCertificateV1Codec,
} from './quorum_certificate_v1';

/**
 * CappuccinoAPILeafResponse represents a leaf response in the Cappuccino API.
 */
export class CappuccinoAPILeafResponse {
  readonly leaf: CappuccinoAPILeaf;
  readonly qc: QuorumCertificateV1;

  constructor(leaf: CappuccinoAPILeaf, qc: QuorumCertificateV1) {
    this.leaf = leaf;
    this.qc = qc;
  }

  toJSON() {
    return cappuccinoAPILeafResponseCodec.encode(this);
  }
}

export class CappuccinoAPILeafResponseDecoder implements Converter<
  unknown,
  CappuccinoAPILeafResponse
> {
  convert(input: unknown): CappuccinoAPILeafResponse {
    assertRecordWithKeys(input, 'leaf', 'qc');

    return new CappuccinoAPILeafResponse(
      cappuccinoAPILeafCodec.decode(input.leaf),
      quorumCertificateV1Codec.decode(input.qc),
    );
  }
}

export class CappuccinoAPILeafResponseEncoder implements Converter<CappuccinoAPILeafResponse> {
  convert(input: CappuccinoAPILeafResponse) {
    assertInstanceOf(input, CappuccinoAPILeafResponse);

    return {
      leaf: cappuccinoAPILeafCodec.encode(input.leaf),
      qc: quorumCertificateV1Codec.encode(input.qc),
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

import { assertInstanceOf } from '@/assert/assert';
import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { AvailabilityAPILeaf, availabilityAPILeafCodec } from './leaf';
import {
  QuorumCertificateV1,
  quorumCertificateV1Codec,
} from './quorum_certificate_v1';

/**
 * AvailabilityAPILeafResponse represents a leaf response in the Availability API.
 */
export class AvailabilityAPILeafResponse {
  constructor(
    public readonly leaf: AvailabilityAPILeaf,
    public readonly qc: QuorumCertificateV1,
  ) {}

  toJSON() {
    return availabilityAPILeafResponseCodec.encode(this);
  }
}

export class AvailabilityAPILeafResponseDecoder implements Converter<
  unknown,
  AvailabilityAPILeafResponse
> {
  convert(input: unknown): AvailabilityAPILeafResponse {
    assertRecordWithKeys(input, 'leaf', 'qc');

    return new AvailabilityAPILeafResponse(
      availabilityAPILeafCodec.decode(input.leaf),
      quorumCertificateV1Codec.decode(input.qc),
    );
  }
}

export class AvailabilityAPILeafResponseEncoder implements Converter<AvailabilityAPILeafResponse> {
  convert(input: AvailabilityAPILeafResponse) {
    assertInstanceOf(input, AvailabilityAPILeafResponse);

    return {
      leaf: availabilityAPILeafCodec.encode(input.leaf),
      qc: quorumCertificateV1Codec.encode(input.qc),
    };
  }
}

export class AvailabilityAPILeafResponseCodec extends TypeCheckingCodec<
  AvailabilityAPILeafResponse,
  ReturnType<
    InstanceType<new () => AvailabilityAPILeafResponseEncoder>['convert']
  >
> {
  readonly encoder = new AvailabilityAPILeafResponseEncoder();
  readonly decoder = new AvailabilityAPILeafResponseDecoder();
}

export const availabilityAPILeafResponseCodec =
  new AvailabilityAPILeafResponseCodec();

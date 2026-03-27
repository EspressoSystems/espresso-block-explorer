import { Converter, TypeCheckingCodec } from '@/convert/codec/convert';
import { NullCodec, NullDecoder, NullEncoder } from '@/convert/codec/null';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/tagged_base64';
import {
  SimpleCertificate,
  SimpleCertificateDecoder,
} from './simple_certificate';
import { SimpleCertificateSignatures } from './simple_certificate_signatures';
import { TimeoutDataV1, timeoutDataV1Codec } from './timeout_data_v1';

/**
 * TimeoutCertificateV1 represents a Simple Ceritifcate of TimeoutDataV1
 * retrieved from the HotShot Query Service's Availability API.
 */
export class TimeoutCertificateV1 extends SimpleCertificate<TimeoutDataV1> {
  constructor(
    data: TimeoutDataV1,
    vote_commitment: TaggedBase64,
    view_number: number,
    signatures: null | SimpleCertificateSignatures,
    is_genesis: boolean,
    _pd: null,
  ) {
    super(data, vote_commitment, view_number, signatures, is_genesis, _pd);
  }

  toJSON() {
    return timeoutCertificateV1Codec.encode(this);
  }
}

const simpleCertificateDecoder = new SimpleCertificateDecoder(
  timeoutDataV1Codec,
);

export class TimeoutCertificateV1Decoder implements Converter<
  unknown,
  TimeoutCertificateV1
> {
  convert(input: unknown): TimeoutCertificateV1 {
    const certifcate = simpleCertificateDecoder.convert(input);
    return new TimeoutCertificateV1(
      certifcate.data,
      certifcate.vote_commitment,
      certifcate.view_number,
      certifcate.signatures,
      certifcate.is_genesis,
      certifcate._pd,
    );
  }
}

const simpleCertificateEncoder = new SimpleCertificateDecoder(
  timeoutDataV1Codec,
);

export class TimeoutCertificateV1Encoder implements Converter<TimeoutCertificateV1> {
  convert(input: TimeoutCertificateV1) {
    return simpleCertificateEncoder.convert(input);
  }
}

export class TimeoutCertificateV1Codec extends TypeCheckingCodec<
  TimeoutCertificateV1,
  ReturnType<InstanceType<new () => TimeoutCertificateV1Encoder>['convert']>
> {
  readonly encoder = new TimeoutCertificateV1Encoder();
  readonly decoder = new TimeoutCertificateV1Decoder();
}

export const timeoutCertificateV1Codec = new TimeoutCertificateV1Codec();
export const nullableTimeoutCertificateV1Codec = new NullCodec(
  new NullDecoder(timeoutCertificateV1Codec),
  new NullEncoder(timeoutCertificateV1Codec),
);

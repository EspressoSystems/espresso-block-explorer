import { Converter, TypeCheckingCodec } from '@/convert/codec/convert';
import { NullCodec, NullDecoder, NullEncoder } from '@/convert/codec/null';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/tagged_base64';
import {
  SimpleCertificate,
  SimpleCertificateDecoder,
} from './simple_certificate';
import { SimpleCertificateSignatures } from './simple_certificate_signatures';
import { TimeoutDataV2, timeoutDataV2Codec } from './timeout_data_v2';

/**
 * TimeoutCertificateV2 represents a Simple Ceritifcate of TimeoutDataV2
 * retrieved from the HotShot Query Service's Availability API.
 */
export class TimeoutCertificateV2 extends SimpleCertificate<TimeoutDataV2> {
  constructor(
    data: TimeoutDataV2,
    vote_commitment: TaggedBase64,
    view_number: number,
    signatures: null | SimpleCertificateSignatures,
    is_genesis: boolean,
    _pd: null,
  ) {
    super(data, vote_commitment, view_number, signatures, is_genesis, _pd);
  }

  toJSON() {
    return timeoutCertificateV2Codec.encode(this);
  }
}

const simpleCertificateDecoder = new SimpleCertificateDecoder(
  timeoutDataV2Codec,
);

export class TimeoutCertificateV2Decoder implements Converter<
  unknown,
  TimeoutCertificateV2
> {
  convert(input: unknown): TimeoutCertificateV2 {
    const certifcate = simpleCertificateDecoder.convert(input);
    return new TimeoutCertificateV2(
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
  timeoutDataV2Codec,
);

export class TimeoutCertificateV2Encoder implements Converter<TimeoutCertificateV2> {
  convert(input: TimeoutCertificateV2) {
    return simpleCertificateEncoder.convert(input);
  }
}

export class TimeoutCertificateV2Codec extends TypeCheckingCodec<
  TimeoutCertificateV2,
  ReturnType<InstanceType<new () => TimeoutCertificateV2Encoder>['convert']>
> {
  readonly encoder = new TimeoutCertificateV2Encoder();
  readonly decoder = new TimeoutCertificateV2Decoder();
}

export const timeoutCertificateV2Codec = new TimeoutCertificateV2Codec();
export const nullableTimeoutCertificateV2Codec = new NullCodec(
  new NullDecoder(timeoutCertificateV2Codec),
  new NullEncoder(timeoutCertificateV2Codec),
);

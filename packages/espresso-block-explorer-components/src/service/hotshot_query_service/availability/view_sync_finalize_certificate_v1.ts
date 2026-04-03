import { Converter, TypeCheckingCodec } from '@/convert/codec/convert';
import { NullCodec, NullDecoder, NullEncoder } from '@/convert/codec/null';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/tagged_base64';
import {
  SimpleCertificate,
  SimpleCertificateDecoder,
} from './simple_certificate';
import { SimpleCertificateSignatures } from './simple_certificate_signatures';
import {
  ViewSyncFinalizeDataV1,
  viewSyncFinalizeDataV1Codec,
} from './view_sync_finalize_data_v1';

/**
 * ViewSyncFinalizeCertificateV1 represents a Simple Ceritifcate of
 * ViewSyncFinalizeDataV1 retrieved from the HotShot Query Service's
 * Availability API.
 */
export class ViewSyncFinalizeCertificateV1 extends SimpleCertificate<ViewSyncFinalizeDataV1> {
  constructor(
    data: ViewSyncFinalizeDataV1,
    vote_commitment: TaggedBase64,
    view_number: number,
    signatures: null | SimpleCertificateSignatures,
    is_genesis: boolean,
    _pd: null,
  ) {
    super(data, vote_commitment, view_number, signatures, is_genesis, _pd);
  }

  toJSON() {
    return viewSyncFinalizeCertificateV1Codec.encode(this);
  }
}

const simpleCertificateDecoder = new SimpleCertificateDecoder(
  viewSyncFinalizeDataV1Codec,
);

export class ViewSyncFinalizeCertificateV1Decoder implements Converter<
  unknown,
  ViewSyncFinalizeCertificateV1
> {
  convert(input: unknown): ViewSyncFinalizeCertificateV1 {
    const certifcate = simpleCertificateDecoder.convert(input);
    return new ViewSyncFinalizeCertificateV1(
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
  viewSyncFinalizeDataV1Codec,
);

export class ViewSyncFinalizeCertificateV1Encoder implements Converter<ViewSyncFinalizeCertificateV1> {
  convert(input: ViewSyncFinalizeCertificateV1) {
    return simpleCertificateEncoder.convert(input);
  }
}

export class ViewSyncFinalizeCertificateV1Codec extends TypeCheckingCodec<
  ViewSyncFinalizeCertificateV1,
  ReturnType<
    InstanceType<new () => ViewSyncFinalizeCertificateV1Encoder>['convert']
  >
> {
  readonly encoder = new ViewSyncFinalizeCertificateV1Encoder();
  readonly decoder = new ViewSyncFinalizeCertificateV1Decoder();
}

export const viewSyncFinalizeCertificateV1Codec =
  new ViewSyncFinalizeCertificateV1Codec();
export const nullableViewSyncFinalizeCertificateV1Codec = new NullCodec(
  new NullDecoder(viewSyncFinalizeCertificateV1Codec),
  new NullEncoder(viewSyncFinalizeCertificateV1Codec),
);

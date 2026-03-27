import { Converter, TypeCheckingCodec } from '@/convert/codec/convert';
import { NullCodec, NullDecoder, NullEncoder } from '@/convert/codec/null';
import { TaggedBase64 } from '@/models/espresso/tagged_base64/tagged_base64';
import {
  SimpleCertificate,
  SimpleCertificateDecoder,
} from './simple_certificate';
import { SimpleCertificateSignatures } from './simple_certificate_signatures';
import {
  ViewSyncFinalizeDataV2,
  viewSyncFinalizeDataV2Codec,
} from './view_sync_finalize_data_v2';

/**
 * ViewSyncFinalizeCertificateV1 represents a Simple Ceritifcate of
 * ViewSyncFinalizeDataV1 retrieved from the HotShot Query Service's
 * Availability API.
 */
export class ViewSyncFinalizeCertificateV2 extends SimpleCertificate<ViewSyncFinalizeDataV2> {
  constructor(
    data: ViewSyncFinalizeDataV2,
    vote_commitment: TaggedBase64,
    view_number: number,
    signatures: null | SimpleCertificateSignatures,
    is_genesis: boolean,
    _pd: null,
  ) {
    super(data, vote_commitment, view_number, signatures, is_genesis, _pd);
  }

  toJSON() {
    return viewSyncFinalizeCertificateV2Codec.encode(this);
  }
}

const simpleCertificateDecoder = new SimpleCertificateDecoder(
  viewSyncFinalizeDataV2Codec,
);

export class ViewSyncFinalizeCertificateV2Decoder implements Converter<
  unknown,
  ViewSyncFinalizeCertificateV2
> {
  convert(input: unknown): ViewSyncFinalizeCertificateV2 {
    const certifcate = simpleCertificateDecoder.convert(input);
    return new ViewSyncFinalizeCertificateV2(
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
  viewSyncFinalizeDataV2Codec,
);

export class ViewSyncFinalizeCertificateV2Encoder implements Converter<ViewSyncFinalizeCertificateV2> {
  convert(input: ViewSyncFinalizeCertificateV2) {
    return simpleCertificateEncoder.convert(input);
  }
}

export class ViewSyncFinalizeCertificateV2Codec extends TypeCheckingCodec<
  ViewSyncFinalizeCertificateV2,
  ReturnType<
    InstanceType<new () => ViewSyncFinalizeCertificateV2Encoder>['convert']
  >
> {
  readonly encoder = new ViewSyncFinalizeCertificateV2Encoder();
  readonly decoder = new ViewSyncFinalizeCertificateV2Decoder();
}

export const viewSyncFinalizeCertificateV2Codec =
  new ViewSyncFinalizeCertificateV2Codec();
export const nullableViewSyncFinalizeCertificateV2Codec = new NullCodec(
  new NullDecoder(viewSyncFinalizeCertificateV2Codec),
  new NullEncoder(viewSyncFinalizeCertificateV2Codec),
);

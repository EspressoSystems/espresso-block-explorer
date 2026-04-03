import {
  Converter,
  isRecordWithKeys,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import { NullCodec, NullDecoder, NullEncoder } from '@/convert/codec/null';
import UnimplementedError from '@/errors/unimplemented_error';
import {
  TimeoutCertificateV1,
  timeoutCertificateV1Codec,
} from './timeout_certificate_v1';
import {
  ViewSyncFinalizeCertificateV1,
  viewSyncFinalizeCertificateV1Codec,
} from './view_sync_finalize_certificate_v1';

/**
 * ViewChangeEvidenceV1 represents evidence of a view change, which can be
 * either a TimeoutCertificateV1 or a ViewSyncFinalizeCertificateV1,
 * retrieved from the HotShot Query Service's Availability API.
 */
export abstract class ViewChangeEvidenceV1 {
  toJSON() {
    return viewChangeEvidenceV1Codec.encode(this);
  }
}

const KeyTimeout = 'Timeout';
const KeyViewSync = 'ViewSync';

class ViewChangeEvidenceV1Timeout extends ViewChangeEvidenceV1 {
  constructor(public readonly timeout: TimeoutCertificateV1) {
    super();
  }
}

class ViewChangeEvidenceV1ViewSync extends ViewChangeEvidenceV1 {
  constructor(public readonly viewSync: ViewSyncFinalizeCertificateV1) {
    super();
  }
}

class ViewChangeEvidenceV1Decoder implements Converter<
  unknown,
  ViewChangeEvidenceV1
> {
  convert(input: unknown) {
    if (isRecordWithKeys(input, KeyTimeout)) {
      return new ViewChangeEvidenceV1Timeout(
        timeoutCertificateV1Codec.decode(input[KeyTimeout]),
      );
    }

    if (isRecordWithKeys(input, KeyViewSync)) {
      return new ViewChangeEvidenceV1ViewSync(
        viewSyncFinalizeCertificateV1Codec.decode(input[KeyViewSync]),
      );
    }

    throw new UnimplementedError();
  }
}

class ViewChangeEvidenceV1Encoder implements Converter<
  ViewChangeEvidenceV1,
  unknown
> {
  convert(input: ViewChangeEvidenceV1) {
    if (input instanceof ViewChangeEvidenceV1Timeout) {
      return {
        [KeyTimeout]: timeoutCertificateV1Codec.encode(input.timeout),
      };
    }

    if (input instanceof ViewChangeEvidenceV1ViewSync) {
      return {
        [KeyViewSync]: viewSyncFinalizeCertificateV1Codec.encode(
          input.viewSync,
        ),
      };
    }

    throw new UnimplementedError();
  }
}

class ViewChangeEvidenceV1Codec extends TypeCheckingCodec<
  ViewChangeEvidenceV1,
  unknown
> {
  public readonly decoder = new ViewChangeEvidenceV1Decoder();
  public readonly encoder = new ViewChangeEvidenceV1Encoder();
}

export const viewChangeEvidenceV1Codec = new ViewChangeEvidenceV1Codec();
export const nullableViewChangeEvidenceV1Codec = new NullCodec(
  new NullDecoder(viewChangeEvidenceV1Codec),
  new NullEncoder(viewChangeEvidenceV1Codec),
);

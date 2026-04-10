import {
  Converter,
  isRecordWithKeys,
  TypeCheckingCodec,
} from '@/convert/codec/convert';
import { NullCodec, NullDecoder, NullEncoder } from '@/convert/codec/null';
import { UnimplementedError } from '@/errors/unimplemented_error';
import {
  TimeoutCertificateV2,
  timeoutCertificateV2Codec,
} from './timeout_certificate_v2';
import {
  ViewSyncFinalizeCertificateV2,
  viewSyncFinalizeCertificateV2Codec,
} from './view_sync_finalize_certificate_v2';

/**
 * ViewChangeEvidenceV2 represents evidence of a view change, which can be
 * either a TimeoutCertificateV2 or a ViewSyncFinalizeCertificateV2,
 * retrieved from the HotShot Query Service's Availability API.
 */
export abstract class ViewChangeEvidenceV2 {
  toJSON() {
    return viewChangeEvidenceV2Codec.encode(this);
  }
}

const KeyTimeout = 'Timeout';
const KeyViewSync = 'ViewSync';

class ViewChangeEvidenceV2Timeout extends ViewChangeEvidenceV2 {
  constructor(public readonly timeout: TimeoutCertificateV2) {
    super();
  }
}

class ViewChangeEvidenceV2ViewSync extends ViewChangeEvidenceV2 {
  constructor(public readonly viewSync: ViewSyncFinalizeCertificateV2) {
    super();
  }
}

class ViewChangeEvidenceV2Decoder implements Converter<
  unknown,
  ViewChangeEvidenceV2
> {
  convert(input: unknown) {
    if (isRecordWithKeys(input, KeyTimeout)) {
      return new ViewChangeEvidenceV2Timeout(
        timeoutCertificateV2Codec.decode(input[KeyTimeout]),
      );
    }

    if (isRecordWithKeys(input, KeyViewSync)) {
      return new ViewChangeEvidenceV2ViewSync(
        viewSyncFinalizeCertificateV2Codec.decode(input[KeyViewSync]),
      );
    }

    throw new UnimplementedError();
  }
}

class ViewChangeEvidenceV2Encoder implements Converter<
  ViewChangeEvidenceV2,
  unknown
> {
  convert(input: ViewChangeEvidenceV2) {
    if (input instanceof ViewChangeEvidenceV2Timeout) {
      return {
        [KeyTimeout]: timeoutCertificateV2Codec.encode(input.timeout),
      };
    }

    if (input instanceof ViewChangeEvidenceV2ViewSync) {
      return {
        [KeyViewSync]: viewSyncFinalizeCertificateV2Codec.encode(
          input.viewSync,
        ),
      };
    }

    throw new UnimplementedError();
  }
}

class ViewChangeEvidenceV2Codec extends TypeCheckingCodec<
  ViewChangeEvidenceV2,
  unknown
> {
  public readonly decoder = new ViewChangeEvidenceV2Decoder();
  public readonly encoder = new ViewChangeEvidenceV2Encoder();
}

export const viewChangeEvidenceV2Codec = new ViewChangeEvidenceV2Codec();
export const nullableViewChangeEvidenceV2Codec = new NullCodec(
  new NullDecoder(viewChangeEvidenceV2Codec),
  new NullEncoder(viewChangeEvidenceV2Codec),
);

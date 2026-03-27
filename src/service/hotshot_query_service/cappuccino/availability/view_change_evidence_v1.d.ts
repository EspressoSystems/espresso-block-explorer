import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { NullCodec } from '../../../../../../../../../../../../src/convert/codec/null';
import { TimeoutCertificateV1 } from './timeout_certificate_v1';
import { ViewSyncFinalizeCertificateV1 } from './view_sync_finalize_certificate_v1';
/**
 * ViewChangeEvidenceV1 represents evidence of a view change, which can be
 * either a TimeoutCertificateV1 or a ViewSyncFinalizeCertificateV1,
 * retrieved from the HotShot Query Service's Availability API.
 */
export declare abstract class ViewChangeEvidenceV1 {
    toJSON(): unknown;
}
declare class ViewChangeEvidenceV1Timeout extends ViewChangeEvidenceV1 {
    readonly timeout: TimeoutCertificateV1;
    constructor(timeout: TimeoutCertificateV1);
}
declare class ViewChangeEvidenceV1ViewSync extends ViewChangeEvidenceV1 {
    readonly viewSync: ViewSyncFinalizeCertificateV1;
    constructor(viewSync: ViewSyncFinalizeCertificateV1);
}
declare class ViewChangeEvidenceV1Decoder implements Converter<unknown, ViewChangeEvidenceV1> {
    convert(input: unknown): ViewChangeEvidenceV1Timeout | ViewChangeEvidenceV1ViewSync;
}
declare class ViewChangeEvidenceV1Encoder implements Converter<ViewChangeEvidenceV1, unknown> {
    convert(input: ViewChangeEvidenceV1): {
        Timeout: import('./simple_certificate').SimpleCertificate<import('./timeout_data_v1').TimeoutDataV1>;
        ViewSync?: undefined;
    } | {
        ViewSync: import('./simple_certificate').SimpleCertificate<import('./view_sync_finalize_data_v1').ViewSyncFinalizeDataV1>;
        Timeout?: undefined;
    };
}
declare class ViewChangeEvidenceV1Codec extends TypeCheckingCodec<ViewChangeEvidenceV1, unknown> {
    readonly decoder: ViewChangeEvidenceV1Decoder;
    readonly encoder: ViewChangeEvidenceV1Encoder;
}
export declare const viewChangeEvidenceV1Codec: ViewChangeEvidenceV1Codec;
export declare const nullableViewChangeEvidenceV1Codec: NullCodec<ViewChangeEvidenceV1, unknown>;
export {};

import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { NullCodec } from '../../../../../../../../../../../../src/convert/codec/null';
import { TimeoutCertificateV2 } from './timeout_certificate_v2';
import { ViewSyncFinalizeCertificateV2 } from './view_sync_finalize_certificate_v2';
/**
 * ViewChangeEvidenceV2 represents evidence of a view change, which can be
 * either a TimeoutCertificateV2 or a ViewSyncFinalizeCertificateV2,
 * retrieved from the HotShot Query Service's Availability API.
 */
export declare abstract class ViewChangeEvidenceV2 {
    toJSON(): unknown;
}
declare class ViewChangeEvidenceV2Timeout extends ViewChangeEvidenceV2 {
    readonly timeout: TimeoutCertificateV2;
    constructor(timeout: TimeoutCertificateV2);
}
declare class ViewChangeEvidenceV2ViewSync extends ViewChangeEvidenceV2 {
    readonly viewSync: ViewSyncFinalizeCertificateV2;
    constructor(viewSync: ViewSyncFinalizeCertificateV2);
}
declare class ViewChangeEvidenceV2Decoder implements Converter<unknown, ViewChangeEvidenceV2> {
    convert(input: unknown): ViewChangeEvidenceV2Timeout | ViewChangeEvidenceV2ViewSync;
}
declare class ViewChangeEvidenceV2Encoder implements Converter<ViewChangeEvidenceV2, unknown> {
    convert(input: ViewChangeEvidenceV2): {
        Timeout: import('./simple_certificate').SimpleCertificate<import('./timeout_data_v2').TimeoutDataV2>;
        ViewSync?: undefined;
    } | {
        ViewSync: import('./simple_certificate').SimpleCertificate<import('./view_sync_finalize_data_v2').ViewSyncFinalizeDataV2>;
        Timeout?: undefined;
    };
}
declare class ViewChangeEvidenceV2Codec extends TypeCheckingCodec<ViewChangeEvidenceV2, unknown> {
    readonly decoder: ViewChangeEvidenceV2Decoder;
    readonly encoder: ViewChangeEvidenceV2Encoder;
}
export declare const viewChangeEvidenceV2Codec: ViewChangeEvidenceV2Codec;
export declare const nullableViewChangeEvidenceV2Codec: NullCodec<ViewChangeEvidenceV2, unknown>;
export {};

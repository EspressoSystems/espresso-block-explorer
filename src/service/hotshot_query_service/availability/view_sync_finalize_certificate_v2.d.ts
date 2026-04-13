import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { NullCodec } from '../../../../../../../../../../../src/convert/codec/null';
import { TaggedBase64 } from '../../../../../../../../../../../src/models/espresso/tagged_base64/tagged_base64';
import { SimpleCertificate } from './simple_certificate';
import { SimpleCertificateSignatures } from './simple_certificate_signatures';
import { ViewSyncFinalizeDataV2 } from './view_sync_finalize_data_v2';
/**
 * ViewSyncFinalizeCertificateV1 represents a Simple Ceritifcate of
 * ViewSyncFinalizeDataV1 retrieved from the HotShot Query Service's
 * Availability API.
 */
export declare class ViewSyncFinalizeCertificateV2 extends SimpleCertificate<ViewSyncFinalizeDataV2> {
    constructor(data: ViewSyncFinalizeDataV2, vote_commitment: TaggedBase64, view_number: number, signatures: null | SimpleCertificateSignatures, is_genesis: boolean, _pd: null);
    toJSON(): SimpleCertificate<ViewSyncFinalizeDataV2>;
}
export declare class ViewSyncFinalizeCertificateV2Decoder implements Converter<unknown, ViewSyncFinalizeCertificateV2> {
    convert(input: unknown): ViewSyncFinalizeCertificateV2;
}
export declare class ViewSyncFinalizeCertificateV2Encoder implements Converter<ViewSyncFinalizeCertificateV2> {
    convert(input: ViewSyncFinalizeCertificateV2): SimpleCertificate<ViewSyncFinalizeDataV2>;
}
export declare class ViewSyncFinalizeCertificateV2Codec extends TypeCheckingCodec<ViewSyncFinalizeCertificateV2, ReturnType<InstanceType<new () => ViewSyncFinalizeCertificateV2Encoder>['convert']>> {
    readonly encoder: ViewSyncFinalizeCertificateV2Encoder;
    readonly decoder: ViewSyncFinalizeCertificateV2Decoder;
}
export declare const viewSyncFinalizeCertificateV2Codec: ViewSyncFinalizeCertificateV2Codec;
export declare const nullableViewSyncFinalizeCertificateV2Codec: NullCodec<ViewSyncFinalizeCertificateV2, SimpleCertificate<ViewSyncFinalizeDataV2>>;

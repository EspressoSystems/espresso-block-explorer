import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { NullCodec } from '../../../../../../../../../../../src/convert/codec/null';
import { TaggedBase64 } from '../../../../../../../../../../../src/models/espresso/tagged_base64/tagged_base64';
import { SimpleCertificate } from './simple_certificate';
import { SimpleCertificateSignatures } from './simple_certificate_signatures';
import { ViewSyncFinalizeDataV1 } from './view_sync_finalize_data_v1';
/**
 * ViewSyncFinalizeCertificateV1 represents a Simple Ceritifcate of
 * ViewSyncFinalizeDataV1 retrieved from the HotShot Query Service's
 * Availability API.
 */
export declare class ViewSyncFinalizeCertificateV1 extends SimpleCertificate<ViewSyncFinalizeDataV1> {
    constructor(data: ViewSyncFinalizeDataV1, vote_commitment: TaggedBase64, view_number: number, signatures: null | SimpleCertificateSignatures, is_genesis: boolean, _pd: null);
    toJSON(): SimpleCertificate<ViewSyncFinalizeDataV1>;
}
export declare class ViewSyncFinalizeCertificateV1Decoder implements Converter<unknown, ViewSyncFinalizeCertificateV1> {
    convert(input: unknown): ViewSyncFinalizeCertificateV1;
}
export declare class ViewSyncFinalizeCertificateV1Encoder implements Converter<ViewSyncFinalizeCertificateV1> {
    convert(input: ViewSyncFinalizeCertificateV1): SimpleCertificate<ViewSyncFinalizeDataV1>;
}
export declare class ViewSyncFinalizeCertificateV1Codec extends TypeCheckingCodec<ViewSyncFinalizeCertificateV1, ReturnType<InstanceType<new () => ViewSyncFinalizeCertificateV1Encoder>['convert']>> {
    readonly encoder: ViewSyncFinalizeCertificateV1Encoder;
    readonly decoder: ViewSyncFinalizeCertificateV1Decoder;
}
export declare const viewSyncFinalizeCertificateV1Codec: ViewSyncFinalizeCertificateV1Codec;
export declare const nullableViewSyncFinalizeCertificateV1Codec: NullCodec<ViewSyncFinalizeCertificateV1, SimpleCertificate<ViewSyncFinalizeDataV1>>;

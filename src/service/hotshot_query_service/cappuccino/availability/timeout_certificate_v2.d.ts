import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { NullCodec } from '../../../../../../../../../../../../src/convert/codec/null';
import { TaggedBase64 } from '../../../../../../../../../../../../src/models/espresso/tagged_base64/tagged_base64';
import { SimpleCertificate } from './simple_certificate';
import { SimpleCertificateSignatures } from './simple_certificate_signatures';
import { TimeoutDataV2 } from './timeout_data_v2';
/**
 * TimeoutCertificateV2 represents a Simple Ceritifcate of TimeoutDataV2
 * retrieved from the HotShot Query Service's Availability API.
 */
export declare class TimeoutCertificateV2 extends SimpleCertificate<TimeoutDataV2> {
    constructor(data: TimeoutDataV2, vote_commitment: TaggedBase64, view_number: number, signatures: null | SimpleCertificateSignatures, is_genesis: boolean, _pd: null);
    toJSON(): SimpleCertificate<TimeoutDataV2>;
}
export declare class TimeoutCertificateV2Decoder implements Converter<unknown, TimeoutCertificateV2> {
    convert(input: unknown): TimeoutCertificateV2;
}
export declare class TimeoutCertificateV2Encoder implements Converter<TimeoutCertificateV2> {
    convert(input: TimeoutCertificateV2): SimpleCertificate<TimeoutDataV2>;
}
export declare class TimeoutCertificateV2Codec extends TypeCheckingCodec<TimeoutCertificateV2, ReturnType<InstanceType<new () => TimeoutCertificateV2Encoder>['convert']>> {
    readonly encoder: TimeoutCertificateV2Encoder;
    readonly decoder: TimeoutCertificateV2Decoder;
}
export declare const timeoutCertificateV2Codec: TimeoutCertificateV2Codec;
export declare const nullableTimeoutCertificateV2Codec: NullCodec<TimeoutCertificateV2, SimpleCertificate<TimeoutDataV2>>;

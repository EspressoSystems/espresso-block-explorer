import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { NullCodec } from '../../../../../../../../../../../../src/convert/codec/null';
import { TaggedBase64 } from '../../../../../../../../../../../../src/models/espresso/tagged_base64/tagged_base64';
import { SimpleCertificate } from './simple_certificate';
import { SimpleCertificateSignatures } from './simple_certificate_signatures';
import { TimeoutDataV1 } from './timeout_data_v1';
/**
 * TimeoutCertificateV1 represents a Simple Ceritifcate of TimeoutDataV1
 * retrieved from the HotShot Query Service's Availability API.
 */
export declare class TimeoutCertificateV1 extends SimpleCertificate<TimeoutDataV1> {
    constructor(data: TimeoutDataV1, vote_commitment: TaggedBase64, view_number: number, signatures: null | SimpleCertificateSignatures, is_genesis: boolean, _pd: null);
    toJSON(): SimpleCertificate<TimeoutDataV1>;
}
export declare class TimeoutCertificateV1Decoder implements Converter<unknown, TimeoutCertificateV1> {
    convert(input: unknown): TimeoutCertificateV1;
}
export declare class TimeoutCertificateV1Encoder implements Converter<TimeoutCertificateV1> {
    convert(input: TimeoutCertificateV1): SimpleCertificate<TimeoutDataV1>;
}
export declare class TimeoutCertificateV1Codec extends TypeCheckingCodec<TimeoutCertificateV1, ReturnType<InstanceType<new () => TimeoutCertificateV1Encoder>['convert']>> {
    readonly encoder: TimeoutCertificateV1Encoder;
    readonly decoder: TimeoutCertificateV1Decoder;
}
export declare const timeoutCertificateV1Codec: TimeoutCertificateV1Codec;
export declare const nullableTimeoutCertificateV1Codec: NullCodec<TimeoutCertificateV1, SimpleCertificate<TimeoutDataV1>>;

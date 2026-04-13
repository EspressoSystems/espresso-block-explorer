import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { NullCodec } from '../../../../../../../../../../../src/convert/codec/null';
import { TaggedBase64 } from '../../../../../../../../../../../src/models/espresso/tagged_base64/tagged_base64';
import { QuorumDataV2 } from './quorum_data_v2';
import { SimpleCertificate } from './simple_certificate';
import { SimpleCertificateSignatures } from './simple_certificate_signatures';
/**
 * QuorumCertificateV2 a SimpleSertificate of QuorumDataV2 retrieved from
 * the HotShot Query Service's Availability API.
 */
export declare class QuorumCertificateV2 extends SimpleCertificate<QuorumDataV2> {
    constructor(data: QuorumDataV2, vote_commitment: TaggedBase64, view_number: number, signatures: null | SimpleCertificateSignatures, is_genesis: boolean, _pd: null);
    toJSON(): SimpleCertificate<QuorumDataV2>;
}
export declare class QuorumCertificateV2Decoder implements Converter<unknown, QuorumCertificateV2> {
    convert(input: unknown): QuorumCertificateV2;
}
export declare class QuorumCertificateV2Encoder implements Converter<QuorumCertificateV2> {
    convert(input: QuorumCertificateV2): SimpleCertificate<QuorumDataV2>;
}
export declare class QuorumCertificateV2Codec extends TypeCheckingCodec<QuorumCertificateV2, ReturnType<InstanceType<new () => QuorumCertificateV2Encoder>['convert']>> {
    readonly encoder: QuorumCertificateV2Encoder;
    readonly decoder: QuorumCertificateV2Decoder;
}
export declare const quorumCertificateV2Codec: QuorumCertificateV2Codec;
export declare const nullableQuorumCertificateV2Codec: NullCodec<QuorumCertificateV2, SimpleCertificate<QuorumDataV2>>;

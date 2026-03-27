import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { NullCodec } from '../../../../../../../../../../../../src/convert/codec/null';
import { TaggedBase64 } from '../../../../../../../../../../../../src/models/espresso/tagged_base64/tagged_base64';
import { SimpleCertificate } from './simple_certificate';
import { SimpleCertificateSignatures } from './simple_certificate_signatures';
import { UpgradeProposalDataV1 } from './upgrade_proposal_data_v1';
/**
 * UpgradeCertificateV1 represents a Simple Ceritifcate of TimeoutDataV1
 * retrieved from the HotShot Query Service's Availability API.
 */
export declare class UpgradeCertificateV1 extends SimpleCertificate<UpgradeProposalDataV1> {
    constructor(data: UpgradeProposalDataV1, vote_commitment: TaggedBase64, view_number: number, signatures: null | SimpleCertificateSignatures, is_genesis: boolean, _pd: null);
    toJSON(): SimpleCertificate<UpgradeProposalDataV1>;
}
export declare class UpgradeCertificateV1Decoder implements Converter<unknown, UpgradeCertificateV1> {
    convert(input: unknown): UpgradeCertificateV1;
}
export declare class UpgradeCertificateV1Encoder implements Converter<UpgradeCertificateV1> {
    convert(input: UpgradeCertificateV1): SimpleCertificate<UpgradeProposalDataV1>;
}
export declare class UpgradeCertificateV1Codec extends TypeCheckingCodec<UpgradeCertificateV1, ReturnType<InstanceType<new () => UpgradeCertificateV1Encoder>['convert']>> {
    readonly encoder: UpgradeCertificateV1Encoder;
    readonly decoder: UpgradeCertificateV1Decoder;
}
export declare const upgradeCertificateV1Codec: UpgradeCertificateV1Codec;
export declare const nullableUpgradeCertificateV1Codec: NullCodec<UpgradeCertificateV1, SimpleCertificate<UpgradeProposalDataV1>>;

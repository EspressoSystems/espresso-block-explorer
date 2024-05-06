import { TaggedBase64 } from '../../../../../../../../../../../../src/models/espresso/tagged_base64/TaggedBase64';
import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';

/**
 * CappuccinoAPIBQuorumCertificateData represents a BFT quorum certificate
 * data in the Cappuccino API.
 */
export declare class CappuccinoAPIBQuorumCertificateData {
    readonly leaf_commit: TaggedBase64;
    constructor(leaf_commit: TaggedBase64);
    toJSON(): {
        leaf_commit: string;
    };
}
export declare class CappuccinoAPIBQuorumCertificateDataDecoder implements Converter<unknown, CappuccinoAPIBQuorumCertificateData> {
    convert(input: unknown): CappuccinoAPIBQuorumCertificateData;
}
export declare class CappuccinoAPIBQuorumCertificateDataEncoder implements Converter<CappuccinoAPIBQuorumCertificateData> {
    convert(input: CappuccinoAPIBQuorumCertificateData): {
        leaf_commit: string;
    };
}
export declare class CappuccinoAPIBQuorumCertificateDataCodec extends TypeCheckingCodec<CappuccinoAPIBQuorumCertificateData, ReturnType<InstanceType<new () => CappuccinoAPIBQuorumCertificateDataEncoder>['convert']>> {
    readonly encoder: CappuccinoAPIBQuorumCertificateDataEncoder;
    readonly decoder: CappuccinoAPIBQuorumCertificateDataDecoder;
}
export declare const cappuccinoAPIBQuorumCertificateDataCodec: CappuccinoAPIBQuorumCertificateDataCodec;

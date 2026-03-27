import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { TaggedBase64 } from '../../../../../../../../../../../../src/models/espresso/tagged_base64/tagged_base64';
/**
 * QuorumCertificateDataV1 represents a BFT quorum certificate data for a
 * Quorum Certificate.
 */
export declare class QuorumDataV2 {
    readonly leaf_commit: TaggedBase64;
    readonly epoch: null | number;
    readonly block_number: null | number;
    constructor(leaf_commit: TaggedBase64, epoch: null | number, block_number: null | number);
    toJSON(): {
        leaf_commit: string;
        epoch: number | null;
        block_number: number | null;
    };
}
export declare class QuorumDataV2Decoder implements Converter<unknown, QuorumDataV2> {
    convert(input: unknown): QuorumDataV2;
}
export declare class QuorumDataV2Encoder implements Converter<QuorumDataV2> {
    convert(input: QuorumDataV2): {
        leaf_commit: string;
        epoch: number | null;
        block_number: number | null;
    };
}
export declare class QuorumDataV2Codec extends TypeCheckingCodec<QuorumDataV2, ReturnType<InstanceType<new () => QuorumDataV2Encoder>['convert']>> {
    readonly encoder: QuorumDataV2Encoder;
    readonly decoder: QuorumDataV2Decoder;
}
export declare const quorumDataV2Codec: QuorumDataV2Codec;

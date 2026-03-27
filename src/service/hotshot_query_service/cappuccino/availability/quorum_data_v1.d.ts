import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { TaggedBase64 } from '../../../../../../../../../../../../src/models/espresso/tagged_base64/tagged_base64';
/**
 * QuorumDataV1 represents a BFT quorum certificate data for a
 * Quorum to have been reached for a Leaf.
 */
export declare class QuorumDataV1 {
    readonly leaf_commit: TaggedBase64;
    constructor(leaf_commit: TaggedBase64);
    toJSON(): {
        leaf_commit: string;
    };
}
export declare class QuorumDataV1Decoder implements Converter<unknown, QuorumDataV1> {
    convert(input: unknown): QuorumDataV1;
}
export declare class QuorumDataV1Encoder implements Converter<QuorumDataV1> {
    convert(input: QuorumDataV1): {
        leaf_commit: string;
    };
}
export declare class QuorumDataV1Codec extends TypeCheckingCodec<QuorumDataV1, ReturnType<InstanceType<new () => QuorumDataV1Encoder>['convert']>> {
    readonly encoder: QuorumDataV1Encoder;
    readonly decoder: QuorumDataV1Decoder;
}
export declare const quorumDataV1Codec: QuorumDataV1Codec;

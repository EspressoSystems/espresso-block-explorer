import { ArrayCodec } from '../../../../../../../../../../../../src/convert/codec/array';
import { Codec, Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { TaggedBase64 } from '../../../../../../../../../../../../src/models/espresso/tagged_base64/TaggedBase64';
/**
 * CappuccinoAPIMerkleTreeProof represents a proof in the Merkle Tree.
 */
export declare abstract class CappuccinoAPIMerkleTreeProof {
}
/**
 * CappuccinoAPIMerkleTreeEmptyProof represents an empty proof in the Merkle
 * Tree.
 */
export declare class CappuccinoAPIMerkleTreeEmptyProof extends CappuccinoAPIMerkleTreeProof {
    toJSON(): "Empty";
}
export declare class CappuccinoAPIMerkleTreeEmptyProofDecoder implements Converter<unknown, CappuccinoAPIMerkleTreeEmptyProof> {
    convert(input: unknown): CappuccinoAPIMerkleTreeEmptyProof;
}
export declare class CappuccinoAPIMerkleTreeEmptyProofEncoder implements Converter<CappuccinoAPIMerkleTreeEmptyProof> {
    convert(input: CappuccinoAPIMerkleTreeEmptyProof): "Empty";
}
export declare class CappuccinoAPIMerkleTreeEmptyProofCodec extends TypeCheckingCodec<CappuccinoAPIMerkleTreeEmptyProof, ReturnType<InstanceType<new () => CappuccinoAPIMerkleTreeEmptyProofEncoder>['convert']>> {
    readonly encoder: CappuccinoAPIMerkleTreeEmptyProofEncoder;
    readonly decoder: CappuccinoAPIMerkleTreeEmptyProofDecoder;
}
export declare const cappuccinoAPIMerkleTreeEmptyProofCodec: CappuccinoAPIMerkleTreeEmptyProofCodec;
/**
 * CappuccinoAPIMerkleTreeLeafProof represents a leaf proof in the Merkle Tree.
 */
export declare class CappuccinoAPIMerkleTreeLeafProof extends CappuccinoAPIMerkleTreeProof {
    readonly value: TaggedBase64;
    readonly pos: TaggedBase64;
    readonly elem: TaggedBase64;
    constructor(value: TaggedBase64, pos: TaggedBase64, elem: TaggedBase64);
    toJSON(): {
        readonly Leaf: {
            readonly value: string;
            readonly pos: string;
            readonly elem: string;
        };
    };
}
export declare class CappuccinoAPIMerkleTreeLeafProofDecoder implements Converter<unknown, CappuccinoAPIMerkleTreeLeafProof> {
    convert(input: unknown): CappuccinoAPIMerkleTreeLeafProof;
}
export declare class CappuccinoAPIMerkleTreeLeafProofEncoder implements Converter<CappuccinoAPIMerkleTreeLeafProof> {
    convert(input: CappuccinoAPIMerkleTreeLeafProof): {
        readonly Leaf: {
            readonly value: string;
            readonly pos: string;
            readonly elem: string;
        };
    };
}
export declare class CappuccinoAPIMerkleTreeLeafProofCodec extends Codec<CappuccinoAPIMerkleTreeLeafProof, ReturnType<InstanceType<new () => CappuccinoAPIMerkleTreeLeafProofEncoder>['convert']>> {
    readonly encoder: CappuccinoAPIMerkleTreeLeafProofEncoder;
    readonly decoder: CappuccinoAPIMerkleTreeLeafProofDecoder;
}
export declare const cappuccinoAPIMerkleTreeLeafProofCodec: CappuccinoAPIMerkleTreeLeafProofCodec;
/**
 * CappuccinoAPIMerkleTreeForgottenSubTreeProof represents a forgotten subtree
 * proof in the Merkle Tree.
 */
export declare class CappuccinoAPIMerkleTreeForgottenSubTreeProof extends CappuccinoAPIMerkleTreeProof {
    readonly value: TaggedBase64;
    constructor(value: TaggedBase64);
    toJSON(): {
        readonly ForgettenSubtree: {
            readonly value: string;
        };
    };
}
export declare class CappuccinoAPIMerkleTreeForgottenSubTreeProofDecoder implements Converter<unknown, CappuccinoAPIMerkleTreeForgottenSubTreeProof> {
    convert(input: unknown): CappuccinoAPIMerkleTreeForgottenSubTreeProof;
}
export declare class CappuccinoAPIMerkleTreeForgottenSubTreeProofEncoder implements Converter<CappuccinoAPIMerkleTreeForgottenSubTreeProof> {
    convert(input: CappuccinoAPIMerkleTreeForgottenSubTreeProof): {
        readonly ForgettenSubtree: {
            readonly value: string;
        };
    };
}
export declare class CappuccinoAPIMerkleTreeForgottenSubTreeProofCodec extends Codec<CappuccinoAPIMerkleTreeForgottenSubTreeProof, ReturnType<InstanceType<new () => CappuccinoAPIMerkleTreeForgottenSubTreeProofEncoder>['convert']>> {
    readonly encoder: CappuccinoAPIMerkleTreeForgottenSubTreeProofEncoder;
    readonly decoder: CappuccinoAPIMerkleTreeForgottenSubTreeProofDecoder;
}
export declare const cappuccinoAPIMerkleTreeForgottenSubTreeProofCodec: CappuccinoAPIMerkleTreeForgottenSubTreeProofCodec;
/**
 * CappuccinoAPIMerkleTreeBranchProof represents a branch proof in the Merkle
 * Tree.
 */
export declare class CappuccinoAPIMerkleTreeBranchProof extends CappuccinoAPIMerkleTreeProof {
    readonly value: TaggedBase64;
    readonly children: CappuccinoAPIMerkleTreeProof[];
    constructor(value: TaggedBase64, children: CappuccinoAPIMerkleTreeProof[]);
    toJSON(): {
        readonly Branch: {
            readonly value: string;
            readonly children: unknown[];
        };
    };
}
export declare class CappuccinoAPIMerkleTreeBranchProofDecoder implements Converter<unknown, CappuccinoAPIMerkleTreeBranchProof> {
    convert(input: unknown): CappuccinoAPIMerkleTreeBranchProof;
}
export declare class CappuccinoAPIMerkleTreeBranchProofEncoder implements Converter<CappuccinoAPIMerkleTreeBranchProof, {
    readonly Branch: {
        readonly value: string;
        readonly children: unknown[];
    };
}> {
    convert(input: CappuccinoAPIMerkleTreeBranchProof): {
        readonly Branch: {
            readonly value: string;
            readonly children: unknown[];
        };
    };
}
export declare class CappuccinoAPIMerkleTreeBranchProofCodec extends TypeCheckingCodec<CappuccinoAPIMerkleTreeBranchProof, ReturnType<InstanceType<new () => CappuccinoAPIMerkleTreeBranchProofEncoder>['convert']>> {
    readonly encoder: CappuccinoAPIMerkleTreeBranchProofEncoder;
    readonly decoder: CappuccinoAPIMerkleTreeBranchProofDecoder;
}
export declare const cappuccinoAPIMerkleTreeBranchProofCodec: CappuccinoAPIMerkleTreeBranchProofCodec;
export declare class CappuccinoAPIMerkleTreeProofDecoder implements Converter<unknown, CappuccinoAPIMerkleTreeProof> {
    convert(input: unknown): CappuccinoAPIMerkleTreeProof;
}
export declare class CappuccinoAPIMerkleTreeProofEncoder implements Converter<CappuccinoAPIMerkleTreeProof> {
    convert(input: CappuccinoAPIMerkleTreeProof): "Empty" | {
        readonly Leaf: {
            readonly value: string;
            readonly pos: string;
            readonly elem: string;
        };
    } | {
        readonly ForgettenSubtree: {
            readonly value: string;
        };
    } | {
        readonly Branch: {
            readonly value: string;
            readonly children: unknown[];
        };
    };
}
export declare class CappuccinoAPIMerkleTreeProofCodec extends TypeCheckingCodec<CappuccinoAPIMerkleTreeProof, ReturnType<InstanceType<new () => CappuccinoAPIMerkleTreeProofEncoder>['convert']>> {
    readonly encoder: CappuccinoAPIMerkleTreeProofEncoder;
    readonly decoder: CappuccinoAPIMerkleTreeProofDecoder;
}
export declare const cappuccinoAPIMerkleTreeProofCodec: CappuccinoAPIMerkleTreeProofCodec;
export declare const listCappuccinoAPIMerkleTreeProofCodec: ArrayCodec<CappuccinoAPIMerkleTreeProof, "Empty" | {
    readonly Leaf: {
        readonly value: string;
        readonly pos: string;
        readonly elem: string;
    };
} | {
    readonly ForgettenSubtree: {
        readonly value: string;
    };
} | {
    readonly Branch: {
        readonly value: string;
        readonly children: unknown[];
    };
}>;

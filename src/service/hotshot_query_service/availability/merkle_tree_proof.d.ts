import { ArrayCodec } from '../../../../../../../../../../../src/convert/codec/array';
import { Codec, Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { TaggedBase64 } from '../../../../../../../../../../../src/models/espresso/tagged_base64/tagged_base64';
/**
 * AvailabilityAPIMerkleTreeProof represents a proof in the Merkle Tree.
 */
export declare abstract class AvailabilityAPIMerkleTreeProof {
}
/**
 * AvailabilityAPIMerkleTreeEmptyProof represents an empty proof in the Merkle
 * Tree.
 */
export declare class AvailabilityAPIMerkleTreeEmptyProof extends AvailabilityAPIMerkleTreeProof {
    toJSON(): "Empty";
}
export declare class AvailabilityAPIMerkleTreeEmptyProofDecoder implements Converter<unknown, AvailabilityAPIMerkleTreeEmptyProof> {
    convert(input: unknown): AvailabilityAPIMerkleTreeEmptyProof;
}
export declare class AvailabilityAPIMerkleTreeEmptyProofEncoder implements Converter<AvailabilityAPIMerkleTreeEmptyProof> {
    convert(input: AvailabilityAPIMerkleTreeEmptyProof): "Empty";
}
export declare class AvailabilityAPIMerkleTreeEmptyProofCodec extends TypeCheckingCodec<AvailabilityAPIMerkleTreeEmptyProof, ReturnType<InstanceType<new () => AvailabilityAPIMerkleTreeEmptyProofEncoder>['convert']>> {
    readonly encoder: AvailabilityAPIMerkleTreeEmptyProofEncoder;
    readonly decoder: AvailabilityAPIMerkleTreeEmptyProofDecoder;
}
export declare const availabilityAPIMerkleTreeEmptyProofCodec: AvailabilityAPIMerkleTreeEmptyProofCodec;
/**
 * AvailabilityAPIMerkleTreeLeafProof represents a leaf proof in the Merkle Tree.
 */
export declare class AvailabilityAPIMerkleTreeLeafProof extends AvailabilityAPIMerkleTreeProof {
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
export declare class AvailabilityAPIMerkleTreeLeafProofDecoder implements Converter<unknown, AvailabilityAPIMerkleTreeLeafProof> {
    convert(input: unknown): AvailabilityAPIMerkleTreeLeafProof;
}
export declare class AvailabilityAPIMerkleTreeLeafProofEncoder implements Converter<AvailabilityAPIMerkleTreeLeafProof> {
    convert(input: AvailabilityAPIMerkleTreeLeafProof): {
        readonly Leaf: {
            readonly value: string;
            readonly pos: string;
            readonly elem: string;
        };
    };
}
export declare class AvailabilityAPIMerkleTreeLeafProofCodec extends Codec<AvailabilityAPIMerkleTreeLeafProof, ReturnType<InstanceType<new () => AvailabilityAPIMerkleTreeLeafProofEncoder>['convert']>> {
    readonly encoder: AvailabilityAPIMerkleTreeLeafProofEncoder;
    readonly decoder: AvailabilityAPIMerkleTreeLeafProofDecoder;
}
export declare const availabilityAPIMerkleTreeLeafProofCodec: AvailabilityAPIMerkleTreeLeafProofCodec;
/**
 * AvailabilityAPIMerkleTreeForgottenSubTreeProof represents a forgotten subtree
 * proof in the Merkle Tree.
 */
export declare class AvailabilityAPIMerkleTreeForgottenSubTreeProof extends AvailabilityAPIMerkleTreeProof {
    readonly value: TaggedBase64;
    constructor(value: TaggedBase64);
    toJSON(): {
        readonly ForgettenSubtree: {
            readonly value: string;
        };
    };
}
export declare class AvailabilityAPIMerkleTreeForgottenSubTreeProofDecoder implements Converter<unknown, AvailabilityAPIMerkleTreeForgottenSubTreeProof> {
    convert(input: unknown): AvailabilityAPIMerkleTreeForgottenSubTreeProof;
}
export declare class AvailabilityAPIMerkleTreeForgottenSubTreeProofEncoder implements Converter<AvailabilityAPIMerkleTreeForgottenSubTreeProof> {
    convert(input: AvailabilityAPIMerkleTreeForgottenSubTreeProof): {
        readonly ForgettenSubtree: {
            readonly value: string;
        };
    };
}
export declare class AvailabilityAPIMerkleTreeForgottenSubTreeProofCodec extends Codec<AvailabilityAPIMerkleTreeForgottenSubTreeProof, ReturnType<InstanceType<new () => AvailabilityAPIMerkleTreeForgottenSubTreeProofEncoder>['convert']>> {
    readonly encoder: AvailabilityAPIMerkleTreeForgottenSubTreeProofEncoder;
    readonly decoder: AvailabilityAPIMerkleTreeForgottenSubTreeProofDecoder;
}
export declare const availabilityAPIMerkleTreeForgottenSubTreeProofCodec: AvailabilityAPIMerkleTreeForgottenSubTreeProofCodec;
/**
 * AvailabilityAPIMerkleTreeBranchProof represents a branch proof in the Merkle
 * Tree.
 */
export declare class AvailabilityAPIMerkleTreeBranchProof extends AvailabilityAPIMerkleTreeProof {
    readonly value: TaggedBase64;
    readonly children: AvailabilityAPIMerkleTreeProof[];
    constructor(value: TaggedBase64, children: AvailabilityAPIMerkleTreeProof[]);
    toJSON(): {
        readonly Branch: {
            readonly value: string;
            readonly children: unknown[];
        };
    };
}
export declare class AvailabilityAPIMerkleTreeBranchProofDecoder implements Converter<unknown, AvailabilityAPIMerkleTreeBranchProof> {
    convert(input: unknown): AvailabilityAPIMerkleTreeBranchProof;
}
export declare class AvailabilityAPIMerkleTreeBranchProofEncoder implements Converter<AvailabilityAPIMerkleTreeBranchProof, {
    readonly Branch: {
        readonly value: string;
        readonly children: unknown[];
    };
}> {
    convert(input: AvailabilityAPIMerkleTreeBranchProof): {
        readonly Branch: {
            readonly value: string;
            readonly children: unknown[];
        };
    };
}
export declare class AvailabilityAPIMerkleTreeBranchProofCodec extends TypeCheckingCodec<AvailabilityAPIMerkleTreeBranchProof, ReturnType<InstanceType<new () => AvailabilityAPIMerkleTreeBranchProofEncoder>['convert']>> {
    readonly encoder: AvailabilityAPIMerkleTreeBranchProofEncoder;
    readonly decoder: AvailabilityAPIMerkleTreeBranchProofDecoder;
}
export declare const availabilityAPIMerkleTreeBranchProofCodec: AvailabilityAPIMerkleTreeBranchProofCodec;
export declare class AvailabilityAPIMerkleTreeProofDecoder implements Converter<unknown, AvailabilityAPIMerkleTreeProof> {
    convert(input: unknown): AvailabilityAPIMerkleTreeProof;
}
export declare class AvailabilityAPIMerkleTreeProofEncoder implements Converter<AvailabilityAPIMerkleTreeProof> {
    convert(input: AvailabilityAPIMerkleTreeProof): "Empty" | {
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
export declare class AvailabilityAPIMerkleTreeProofCodec extends TypeCheckingCodec<AvailabilityAPIMerkleTreeProof, ReturnType<InstanceType<new () => AvailabilityAPIMerkleTreeProofEncoder>['convert']>> {
    readonly encoder: AvailabilityAPIMerkleTreeProofEncoder;
    readonly decoder: AvailabilityAPIMerkleTreeProofDecoder;
}
export declare const availabilityAPIMerkleTreeProofCodec: AvailabilityAPIMerkleTreeProofCodec;
export declare const listAvailabilityAPIMerkleTreeProofCodec: ArrayCodec<AvailabilityAPIMerkleTreeProof, "Empty" | {
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

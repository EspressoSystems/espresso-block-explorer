import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../../src/convert/codec/convert';
import { TaggedBase64 } from '../../../../../../../../../../../../src/models/espresso/tagged_base64/TaggedBase64';
import { CappuccinoAPIMerkleTreeProof } from './merkle_tree_proof';
/**
 * CappuccinoAPITransactionProof represents a transaction proof in the
 * Cappuccino API.
 */
export declare class CappuccinoAPITransactionProof {
    readonly pos: TaggedBase64;
    readonly proof: CappuccinoAPIMerkleTreeProof[];
    constructor(pos: TaggedBase64, proof: CappuccinoAPIMerkleTreeProof[]);
    toJSON(): {
        pos: string;
        proof: ("Empty" | {
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
        })[];
    };
}
export declare class CappuccinoAPITransactionProofDecoder implements Converter<unknown, CappuccinoAPITransactionProof> {
    convert(input: unknown): CappuccinoAPITransactionProof;
}
export declare class CappuccinoAPITransactionProofEncoder implements Converter<CappuccinoAPITransactionProof> {
    convert(input: CappuccinoAPITransactionProof): {
        pos: string;
        proof: ("Empty" | {
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
        })[];
    };
}
export declare class CappuccinoAPITransactionProofCodec extends TypeCheckingCodec<CappuccinoAPITransactionProof, ReturnType<InstanceType<new () => CappuccinoAPITransactionProofEncoder>['convert']>> {
    readonly encoder: CappuccinoAPITransactionProofEncoder;
    readonly decoder: CappuccinoAPITransactionProofDecoder;
}
export declare const cappuccinoAPITransactionProofCodec: CappuccinoAPITransactionProofCodec;

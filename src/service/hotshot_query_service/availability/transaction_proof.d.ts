import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { TaggedBase64 } from '../../../../../../../../../../../src/models/espresso/tagged_base64/tagged_base64';
import { AvailabilityAPIMerkleTreeProof } from './merkle_tree_proof';
/**
 * AvailabilityAPITransactionProof represents a transaction proof in the
 * Availability API.
 */
export declare class AvailabilityAPITransactionProof {
    readonly pos: TaggedBase64;
    readonly proof: AvailabilityAPIMerkleTreeProof[];
    constructor(pos: TaggedBase64, proof: AvailabilityAPIMerkleTreeProof[]);
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
export declare class AvailabilityAPITransactionProofDecoder implements Converter<unknown, AvailabilityAPITransactionProof> {
    convert(input: unknown): AvailabilityAPITransactionProof;
}
export declare class AvailabilityAPITransactionProofEncoder implements Converter<AvailabilityAPITransactionProof> {
    convert(input: AvailabilityAPITransactionProof): {
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
export declare class AvailablityAPITransactionProofCodec extends TypeCheckingCodec<AvailabilityAPITransactionProof, ReturnType<InstanceType<new () => AvailabilityAPITransactionProofEncoder>['convert']>> {
    readonly encoder: AvailabilityAPITransactionProofEncoder;
    readonly decoder: AvailabilityAPITransactionProofDecoder;
}
export declare const availabilityAPITransactionProofCodec: AvailablityAPITransactionProofCodec;

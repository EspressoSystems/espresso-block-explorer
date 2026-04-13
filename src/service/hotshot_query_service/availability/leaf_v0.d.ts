import { Converter, TypeCheckingCodec } from '../../../../../../../../../../../src/convert/codec/convert';
import { TaggedBase64 } from '../../../../../../../../../../../src/models/espresso/tagged_base64/tagged_base64';
import { AvailabilityAPIHeader } from './block_header';
import { AvailabilityAPIPayload } from './payload';
import { QuorumCertificateV1 } from './quorum_certificate_v1';
/**
 * LeafV0 represents the version 0 of a Leaf within Espresso HotShot
 * Query Availability API.
 *
 * This type is no longer retrievable from the Availability API, and only
 * serves to represent a historical representation that no longer exists.
 *
 * The migration from LeavV0 to LeavV1 was a breaking change as we removed
 * some previous fields that used to exist.
 */
export declare class LeafV0 {
    readonly view_number: number;
    readonly justify_qc: QuorumCertificateV1;
    readonly parent_commitment: TaggedBase64;
    readonly block_header: AvailabilityAPIHeader;
    readonly block_payload: AvailabilityAPIPayload;
    readonly rejected: number[];
    readonly timestamp: number;
    readonly proposer_id: ArrayBuffer;
    constructor(view_number: number, justify_qc: QuorumCertificateV1, parent_commitment: TaggedBase64, block_header: AvailabilityAPIHeader, block_payload: AvailabilityAPIPayload, rejected: number[], timestamp: number, proposer_id: ArrayBuffer);
    toJSON(): {
        view_number: number;
        justify_qc: {
            data: unknown;
            vote_commitment: string;
            view_number: number;
            signatures: (string | {
                order: string;
                head: {
                    width: number;
                    index: number;
                };
                bits: number;
                data: `0x${string}`[];
            })[] | null;
            is_genesis: boolean;
            _pd: null;
        };
        parent_commitment: string;
        block_header: unknown;
        block_payload: {
            transaction_nmt: {
                vm: number;
                payload: number[];
            }[];
        };
        rejected: number[];
        timestamp: number;
        proposer_id: `0x${string}`;
    };
}
export declare class LeafV0Decoder implements Converter<unknown, LeafV0> {
    convert(input: unknown): LeafV0;
}
export declare class LeafV0Encoder implements Converter<LeafV0> {
    convert(input: LeafV0): {
        view_number: number;
        justify_qc: {
            data: unknown;
            vote_commitment: string;
            view_number: number;
            signatures: (string | {
                order: string;
                head: {
                    width: number;
                    index: number;
                };
                bits: number;
                data: `0x${string}`[];
            })[] | null;
            is_genesis: boolean;
            _pd: null;
        };
        parent_commitment: string;
        block_header: unknown;
        block_payload: {
            transaction_nmt: {
                vm: number;
                payload: number[];
            }[];
        };
        rejected: number[];
        timestamp: number;
        proposer_id: `0x${string}`;
    };
}
export declare class LeafV0Codec extends TypeCheckingCodec<LeafV0, ReturnType<InstanceType<new () => LeafV0Encoder>['convert']>> {
    readonly encoder: LeafV0Encoder;
    readonly decoder: LeafV0Decoder;
}
export declare const leafV0Codec: LeafV0Codec;

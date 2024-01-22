import { QuorumData } from './QuorumData';
import { Signatures } from './Signatures';
import { TaggedBase64 } from './TaggedBase64';
export declare class QuorumCertificate {
    readonly quorum_data: QuorumData;
    readonly vote_commitment: TaggedBase64;
    readonly view_number: number;
    readonly signatures: Signatures;
    readonly is_genesis: boolean;
    constructor(quorum_data: QuorumData, vote_commitment: TaggedBase64, view_number: number, signatures: Signatures, is_genesis: boolean);
    static inflate(value: unknown): QuorumCertificate;
    toJSON(): {
        data: {
            leaf_commit: string;
        };
        vote_commitment: string;
        view_number: number;
        signatures: Signatures;
        is_genesis: boolean;
    };
}
export declare function isQuorumCertificate(a: unknown): a is QuorumCertificate;

import { TaggedBase64 } from './TaggedBase64';
export declare class QuorumData {
    readonly leaf_commit: TaggedBase64;
    constructor(leaf_commit: TaggedBase64);
    static inflate(value: unknown): QuorumData;
    toJSON(): {
        leaf_commit: string;
    };
}
export declare function isQuorumData(a: unknown): a is QuorumData;

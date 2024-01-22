import { BitVec } from './BitVec';
import { TaggedBase64 } from './TaggedBase64';
export declare class Signatures {
    readonly commitment: TaggedBase64;
    readonly vector: BitVec;
    constructor(commitment: TaggedBase64, vector: BitVec);
    static inflate(value: unknown): Signatures;
    toJSON(): (TaggedBase64 | BitVec)[];
}
export declare function isSignatures(a: unknown): a is Signatures;

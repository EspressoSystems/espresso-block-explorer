export type Namespace = number;
export declare class NamespaceMerkleTree {
    get namespace(): Namespace;
    readonly vm: Namespace;
    readonly payload: unknown;
    constructor(vm: Namespace, payload: unknown);
    static inflate(value: unknown): NamespaceMerkleTree;
    toJSON(): {
        vm: number;
        payload: unknown;
    };
}

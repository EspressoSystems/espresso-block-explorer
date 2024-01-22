export declare class TransactionsRoot {
    readonly root: number[];
    constructor(root: number[]);
    static inflate(value: unknown): TransactionsRoot;
    toJSON(): {
        root: number[];
    };
}

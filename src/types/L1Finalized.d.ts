export declare class L1Finalized {
    readonly number: number;
    readonly timestamp: string;
    readonly hash: string;
    constructor(number: number, timestamp: string, hash: string);
    static inflate(value: unknown): L1Finalized;
    toJSON(): {
        number: number;
        timestamp: string;
        hash: string;
    };
}

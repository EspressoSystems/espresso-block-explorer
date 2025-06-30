export declare class KeccakState {
    state: number[];
    blockSize: number;
    count: number;
    squeezing: boolean;
    initialize(rate: number, _capacity: number): void;
    absorb(data: Uint8Array): void;
    absorbLastFewBits(bits: number): void;
    squeeze(length: number): Uint8Array;
    copy(dest: KeccakState): void;
}

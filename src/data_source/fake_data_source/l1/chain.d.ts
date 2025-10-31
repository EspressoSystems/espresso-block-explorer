import { PseudoRandomNumberGenerator } from '../prng';
export interface GeneratedL1Block {
    number: bigint;
    hash: ArrayBuffer;
    time: Date;
}
export declare function generateAllL1Blocks(prng?: PseudoRandomNumberGenerator): AsyncGenerator<GeneratedL1Block>;
export declare function streamNewL1Blocks(prng: PseudoRandomNumberGenerator, incomingTime: number, incomingHeight: bigint): AsyncGenerator<GeneratedL1Block>;

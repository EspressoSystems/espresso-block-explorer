/// LCG using GCC's constants
const kM = 0x80000000;
const kA = 1103515245;
const kC = 12345;

export class PseudoRandomNumberGenerator {
  private state: number;

  constructor(seed?: number) {
    this.state =
      seed !== undefined ? seed : Math.floor(Math.random() * (kM - 1));
  }

  nextInt(): number {
    this.state = (kA * this.state + kC) % kM;
    return this.state;
  }

  nextFloat(): number {
    // returns in the range [0, 1]
    return this.nextInt() / (kM - 1);
  }

  nextRange(start: number, end: number) {
    // returns in range [start, end): including start, excluding end.
    // can't modulus nextInt because of weak randomness in lower bits.
    const rangeSize = end - start;
    const randomUnder1 = this.nextInt() / kM;
    return start + Math.floor(randomUnder1 * rangeSize);
  }

  nextRangeBigInt(start: bigint, end: bigint): bigint {
    const rangeSize = end - start;
    const randomUnder1 = (BigInt(this.nextInt()) * 1000000n) / BigInt(kM);
    return start + (randomUnder1 * rangeSize) / 1000000n;
  }

  fillBytes(n: number): ArrayBuffer {
    const ab = new ArrayBuffer(n);
    const dv = new DataView(ab);

    let c = 0;
    for (; c < n - 4; c += 4) {
      dv.setUint32(c, this.nextRange(0, 0xffffffff));
    }

    for (let i = c; i < n; i++) {
      dv.setUint8(i, this.nextRange(0, 256));
    }

    return ab;
  }
}

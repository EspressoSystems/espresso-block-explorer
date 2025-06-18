import * as keccakState from './keccak_state_unroll';

export class KeccakState {
  state: number[] = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ];
  blockSize: number = 0;
  count: number = 0;
  squeezing: boolean = false;

  initialize(rate: number, _capacity: number): void {
    for (let i = 0; i < 50; ++i) this.state[i] = 0;
    this.blockSize = rate / 8;
    this.count = 0;
    this.squeezing = false;
  }

  absorb(data: Uint8Array): void {
    for (let i = 0; i < data.length; ++i) {
      this.state[~~(this.count / 4)] ^= data[i] << (8 * (this.count % 4));
      this.count += 1;
      if (this.count === this.blockSize) {
        keccakState.p1600(this.state);
        this.count = 0;
      }
    }
  }

  absorbLastFewBits(bits: number): void {
    this.state[~~(this.count / 4)] ^= bits << (8 * (this.count % 4));
    if ((bits & 0x80) !== 0 && this.count === this.blockSize - 1)
      keccakState.p1600(this.state);
    this.state[~~((this.blockSize - 1) / 4)] ^=
      0x80 << (8 * ((this.blockSize - 1) % 4));
    keccakState.p1600(this.state);
    this.count = 0;
    this.squeezing = true;
  }

  squeeze(length: number): Uint8Array {
    if (!this.squeezing) this.absorbLastFewBits(0x01);

    const output = new Uint8Array(length);
    for (let i = 0; i < length; ++i) {
      output[i] =
        (this.state[~~(this.count / 4)] >>> (8 * (this.count % 4))) & 0xff;
      this.count += 1;
      if (this.count === this.blockSize) {
        keccakState.p1600(this.state);
        this.count = 0;
      }
    }

    return output;
  }

  copy(dest: KeccakState) {
    for (let i = 0; i < 50; ++i) dest.state[i] = this.state[i];
    dest.blockSize = this.blockSize;
    dest.count = this.count;
    dest.squeezing = this.squeezing;
  }
}

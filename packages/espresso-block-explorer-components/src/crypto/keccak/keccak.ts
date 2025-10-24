import { uint8ArrayToArrayBufferCodec } from '@/convert/codec/uint8_array';
import { KeccakState } from './keccak_state';

export class Keccak {
  private _rate: number;
  private _capacity: number;
  private _delimitedSuffix: null | number;
  private _hashBitLength: number;
  private _state: KeccakState;
  private _finalized: boolean;

  constructor(
    rate: number,
    capacity: number,
    delimitedSuffix: null | number,
    hashBitLength: number,
  ) {
    this._rate = rate;
    this._capacity = capacity;
    this._delimitedSuffix = delimitedSuffix;
    this._hashBitLength = hashBitLength;

    this._state = new KeccakState();
    this._state.initialize(rate, capacity);
    this._finalized = false;
  }

  update(data: ArrayBuffer): Keccak {
    if (this._finalized) throw new Error('Digest already called');

    this._state.absorb(new Uint8Array(data));
    return this;
  }

  digest(): ArrayBuffer {
    if (this._finalized) throw new Error('Digest already called');
    this._finalized = true;

    if (this._delimitedSuffix)
      this._state.absorbLastFewBits(this._delimitedSuffix);
    const digest = this._state.squeeze(this._hashBitLength / 8);

    this._resetState();

    return uint8ArrayToArrayBufferCodec.encode(digest);
  }

  // remove result from memory
  _resetState() {
    this._state.initialize(this._rate, this._capacity);
    return this;
  }
}

import { bigintCodec } from '@/convert/codec/bigint';

export class ScalarField {
  constructor(public readonly value: bigint) {
    Object.freeze(this);
  }

  toJSON() {
    return bigintCodec.encode(this.value);
  }
}

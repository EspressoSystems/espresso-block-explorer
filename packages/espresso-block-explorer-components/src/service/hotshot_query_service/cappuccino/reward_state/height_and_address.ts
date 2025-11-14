import { assertInstanceOf } from '@/assert/assert';
import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { NullCodec, NullDecoder, NullEncoder } from '@/convert/codec/null';
import { numberCodec } from '@/convert/codec/number';
import { stringCodec } from '@/convert/codec/string';

/**
 * HeightAndAddress represents the input needed in order to claim rewards
 * for a user from the ClaimRewards contract.
 */
export class HeightAndAddress {
  constructor(
    public readonly height: number,
    public readonly address: string,
  ) {
    Object.freeze(this);
  }

  toJSON() {
    return heightAndAddressCodec.encode(this);
  }
}

class HeightAndAddressDecoder implements Converter<unknown, HeightAndAddress> {
  convert(input: unknown): HeightAndAddress {
    assertRecordWithKeys(input, 'height', 'address');

    return new HeightAndAddress(
      numberCodec.decode(input.height),
      stringCodec.decode(input.address),
    );
  }
}

class HeightAndAddressEncoder implements Converter<HeightAndAddress> {
  convert(input: HeightAndAddress) {
    assertInstanceOf(input, HeightAndAddress);

    return {
      height: numberCodec.encode(input.height),
      address: stringCodec.encode(input.address),
    };
  }
}

class HeightAndAddressCodec extends TypeCheckingCodec<
  HeightAndAddress,
  ReturnType<InstanceType<new () => HeightAndAddressEncoder>['convert']>
> {
  readonly encoder = new HeightAndAddressEncoder();
  readonly decoder = new HeightAndAddressDecoder();
}

export const heightAndAddressCodec = new HeightAndAddressCodec();
export const nullableHeightAndAddressCodec = new NullCodec(
  new NullDecoder(heightAndAddressCodec),
  new NullEncoder(heightAndAddressCodec),
);

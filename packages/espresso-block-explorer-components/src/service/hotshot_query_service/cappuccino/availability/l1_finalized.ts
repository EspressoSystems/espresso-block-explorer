import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '../../../../convert/codec/convert';
import {
  NullCodec,
  NullDecoder,
  NullEncoder,
} from '../../../../convert/codec/null';
import { numberCodec } from '../../../../convert/codec/number';
import { stringCodec } from '../../../../convert/codec/string';

/**
 * CappuccinoL1Finalized represents the finalized block in the Cappuccino L1.
 */
export class CappuccinoL1Finalized {
  readonly number: number;
  readonly timestamp: string;
  readonly hash: string;

  constructor(number: number, timestamp: string, hash: string) {
    this.number = number;
    this.timestamp = timestamp;
    this.hash = hash;
  }

  toJSON() {
    return cappuccinoL1FinalizedCodec.encode(this);
  }
}

export class CappuccinoL1FinalizedDecoder
  implements Converter<unknown, CappuccinoL1Finalized>
{
  convert(input: unknown): CappuccinoL1Finalized {
    assertRecordWithKeys(input, 'number', 'timestamp', 'hash');

    return new CappuccinoL1Finalized(
      numberCodec.decode(input.number),
      stringCodec.decode(input.timestamp),
      stringCodec.decode(input.hash),
    );
  }
}

export class CappuccinoL1FinalizedEncoder
  implements Converter<CappuccinoL1Finalized>
{
  convert(input: CappuccinoL1Finalized) {
    return {
      number: numberCodec.encode(input.number),
      timestamp: stringCodec.encode(input.timestamp),
      hash: stringCodec.encode(input.hash),
    };
  }
}

export class CappuccinoL1FinalizedCodec extends TypeCheckingCodec<
  CappuccinoL1Finalized,
  ReturnType<InstanceType<new () => CappuccinoL1FinalizedEncoder>['convert']>
> {
  readonly encoder = new CappuccinoL1FinalizedEncoder();
  readonly decoder = new CappuccinoL1FinalizedDecoder();
}

export const cappuccinoL1FinalizedCodec = new CappuccinoL1FinalizedCodec();
export const nullableCappuccinoL1FinalizedCodec = new NullCodec(
  new NullDecoder(cappuccinoL1FinalizedCodec),
  new NullEncoder(cappuccinoL1FinalizedCodec),
);

import {
  Converter,
  InvalidInputError,
  TypeCheckingCodec,
  isNumber,
  isRecord,
  isString,
} from '../../../../convert/codec/convert';
import {
  NullCodec,
  NullDecoder,
  NullEncoder,
} from '../../../../convert/codec/null';

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
    if (
      !isRecord(input, 'number', isNumber) ||
      !isRecord(input, 'timestamp', isString) ||
      !isRecord(input, 'hash', isString)
    ) {
      throw new InvalidInputError();
    }

    return new CappuccinoL1Finalized(input.number, input.timestamp, input.hash);
  }
}

export class CappuccinoL1FinalizedEncoder
  implements Converter<CappuccinoL1Finalized>
{
  convert(input: CappuccinoL1Finalized) {
    return {
      number: input.number,
      timestamp: input.timestamp,
      hash: input.hash,
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

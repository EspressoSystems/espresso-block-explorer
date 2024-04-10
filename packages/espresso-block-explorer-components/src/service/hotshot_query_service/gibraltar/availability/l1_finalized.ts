import {
  Codec,
  Converter,
  InvalidInputError,
  isNumber,
  isRecord,
  isString,
} from '../../../../convert/codec/convert';

export class GibraltarL1Finalized {
  readonly number: number;
  readonly timestamp: string;
  readonly hash: string;

  constructor(number: number, timestamp: string, hash: string) {
    this.number = number;
    this.timestamp = timestamp;
    this.hash = hash;
  }

  toJSON() {
    return gibraltarL1FinalizedCodec.encode(this);
  }
}

export class GibraltarL1FinalizedDecoder
  implements Converter<unknown, GibraltarL1Finalized>
{
  convert(input: unknown): GibraltarL1Finalized {
    if (
      !isRecord(input, 'number', isNumber) ||
      !isRecord(input, 'timestamp', isString) ||
      !isRecord(input, 'hash', isString)
    ) {
      throw new InvalidInputError();
    }

    return new GibraltarL1Finalized(input.number, input.timestamp, input.hash);
  }
}

export class GibraltarL1FinalizedEncoder
  implements
    Converter<
      GibraltarL1Finalized,
      Record<'number', number> &
        Record<'timestamp', string> &
        Record<'hash', string>
    >
{
  convert(
    input: GibraltarL1Finalized,
  ): Record<'number', number> &
    Record<'timestamp', string> &
    Record<'hash', string> {
    return {
      number: input.number,
      timestamp: input.timestamp,
      hash: input.hash,
    };
  }
}

export class GibraltarL1FinalizedCodec extends Codec<
  GibraltarL1Finalized,
  unknown
> {
  readonly encoder = new GibraltarL1FinalizedEncoder();
  readonly decoder = new GibraltarL1FinalizedDecoder();
}

export const gibraltarL1FinalizedCodec = new GibraltarL1FinalizedCodec();

import {
  Converter,
  TypeCheckingCodec,
  isRecord,
  isUnknown,
} from '../../../../convert/codec/convert';
import { numberArrayCodec } from '../../../../convert/codec/number';
import InvalidInputError from '../../../../errors/InvalidInputError';

export class CappuccinoSummaryHistograms {
  readonly blockTime: number[];
  readonly blockSize: number[];
  readonly blockTransactions: number[];
  readonly blockHeights: number[];

  constructor(
    blockTime: number[],
    blockSize: number[],
    blockTransactions: number[],
    blockHeights: number[],
  ) {
    this.blockTime = blockTime;
    this.blockSize = blockSize;
    this.blockTransactions = blockTransactions;
    this.blockHeights = blockHeights;
  }

  toJSON() {
    return cappuccinoSummaryHistogramsCodec.encode(this);
  }
}

class CappuccinoSummaryHistogramsDecoder
  implements Converter<unknown, CappuccinoSummaryHistograms>
{
  convert(input: unknown): CappuccinoSummaryHistograms {
    if (
      !isRecord(input, 'block_time', isUnknown) ||
      !isRecord(input, 'block_size', isUnknown) ||
      !isRecord(input, 'block_transactions', isUnknown) ||
      !isRecord(input, 'block_heights', isUnknown)
    ) {
      throw new InvalidInputError();
    }

    return new CappuccinoSummaryHistograms(
      numberArrayCodec.decode(input.block_time),
      numberArrayCodec.decode(input.block_size),
      numberArrayCodec.decode(input.block_transactions),
      numberArrayCodec.decode(input.block_heights),
    );
  }
}

class CappuccinoSummaryHistogramsEncoder
  implements Converter<CappuccinoSummaryHistograms>
{
  convert(input: CappuccinoSummaryHistograms) {
    return {
      block_time: numberArrayCodec.encode(input.blockTime),
      block_size: numberArrayCodec.encode(input.blockSize),
      block_transactions: numberArrayCodec.encode(input.blockTransactions),
      block_heights: numberArrayCodec.encode(input.blockHeights),
    };
  }
}

class CappuccinoSummaryHistogramsCodec extends TypeCheckingCodec<
  CappuccinoSummaryHistograms,
  ReturnType<
    InstanceType<new () => CappuccinoSummaryHistogramsEncoder>['convert']
  >
> {
  readonly encoder = new CappuccinoSummaryHistogramsEncoder();
  readonly decoder = new CappuccinoSummaryHistogramsDecoder();
}

export const cappuccinoSummaryHistogramsCodec =
  new CappuccinoSummaryHistogramsCodec();

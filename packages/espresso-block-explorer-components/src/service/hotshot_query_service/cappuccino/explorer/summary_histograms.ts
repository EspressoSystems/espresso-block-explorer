import { assertInstanceOf } from '@/assert/assert';
import {
  Converter,
  TypeCheckingCodec,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { nullableNumberArrayCodec } from '@/convert/codec/number';

/**
 * HistogramGroup is a group of values that are associated with a block height.
 * We use this to combine the histogram data together, so we can account for
 * gaps within the data, and that it is given in the correct order.
 */
interface HistogramGroup {
  blockTime: null | number;
  blockSize: null | number;
  blockTransactions: null | number;
  blockHeights: number;
}

/**
 * sortGroup is a sorting function that sorts two HistogramGroups based on
 * their block height.
 */
function sortGroup(a: HistogramGroup, b: HistogramGroup): number {
  return a.blockHeights - b.blockHeights;
}

export class CappuccinoSummaryHistograms {
  readonly blockTime: (null | number)[];
  readonly blockSize: (null | number)[];
  readonly blockTransactions: (null | number)[];
  readonly blockHeights: (null | number)[];

  constructor(
    blockTime: (null | number)[],
    blockSize: (null | number)[],
    blockTransactions: (null | number)[],
    blockHeights: (null | number)[],
  ) {
    // Let's ensure that these things are sorted in the correct order,
    // and that they are contiguous.  If missing blocks, we should fill
    // with null.

    const groups: HistogramGroup[] = [];
    const l = Math.min(
      blockTime.length,
      blockSize.length,
      blockTransactions.length,
      blockHeights.length,
    );
    for (let i = 0; i < l; i++) {
      const height = blockHeights[i];
      if (height === null) {
        // We skip over any null values for block heights, so we can just
        // operate on it as if it were missing.
        continue;
      }

      groups.push({
        blockTime: blockTime[i],
        blockSize: blockSize[i],
        blockTransactions: blockTransactions[i],
        blockHeights: height,
      });
    }
    groups.sort(sortGroup);

    const minBlock = groups[0].blockHeights;
    const maxBlock = groups[groups.length - 1].blockHeights;

    const times: (null | number)[] = [];
    const sizes: (null | number)[] = [];
    const transactions: (null | number)[] = [];
    const heights: (null | number)[] = [];
    for (let b = minBlock, i = 0; b <= maxBlock; b++) {
      const group = groups[i];
      if (group.blockHeights !== b) {
        times.push(null);
        sizes.push(null);
        transactions.push(null);

        // We actually know what this height *should* be, but we need our
        // array sizes to match up when encoded / decoded.  So in order to
        // support a good format for serialization, we will still enter a
        // null value here.  We can always derive the expected height from
        // the index of the array.
        heights.push(null);
        continue;
      }

      times.push(group.blockTime);
      sizes.push(group.blockSize);
      transactions.push(group.blockTransactions);
      heights.push(group.blockHeights);
      i++;
    }

    // We want to ensure only a maximum of 50 records is returned.
    const startPoint = Math.max(0, heights.length - 50);
    this.blockTime = times.slice(startPoint);
    this.blockSize = sizes.slice(startPoint);
    this.blockTransactions = transactions.slice(startPoint);
    this.blockHeights = heights.slice(startPoint);
  }

  toJSON() {
    return cappuccinoSummaryHistogramsCodec.encode(this);
  }
}

class CappuccinoSummaryHistogramsDecoder
  implements Converter<unknown, CappuccinoSummaryHistograms>
{
  convert(input: unknown): CappuccinoSummaryHistograms {
    assertRecordWithKeys(
      input,
      'block_time',
      'block_size',
      'block_transactions',
      'block_heights',
    );

    return new CappuccinoSummaryHistograms(
      nullableNumberArrayCodec.decode(input.block_time),
      nullableNumberArrayCodec.decode(input.block_size),
      nullableNumberArrayCodec.decode(input.block_transactions),
      nullableNumberArrayCodec.decode(input.block_heights),
    );
  }
}

class CappuccinoSummaryHistogramsEncoder
  implements Converter<CappuccinoSummaryHistograms>
{
  convert(input: CappuccinoSummaryHistograms) {
    assertInstanceOf(input, CappuccinoSummaryHistograms);

    // Because we can store null data, but we don't want to encode null data,
    // we must filter out the nulls.
    return {
      block_time: nullableNumberArrayCodec.encode(input.blockTime),
      block_size: nullableNumberArrayCodec.encode(input.blockSize),
      block_transactions: nullableNumberArrayCodec.encode(
        input.blockTransactions,
      ),
      block_heights: nullableNumberArrayCodec.encode(input.blockHeights),
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

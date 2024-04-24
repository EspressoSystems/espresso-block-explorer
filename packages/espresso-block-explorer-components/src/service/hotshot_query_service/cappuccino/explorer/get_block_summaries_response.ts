import {
  Codec,
  Converter,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import {
  CappuccinoExplorerBlockSummary,
  cappuccinoExplorerBlockSummaryArrayCodec,
} from './block_summary';

export class CappuccinoExplorerGetBlockSummariesResponse {
  readonly blockSummaries: CappuccinoExplorerBlockSummary[];

  constructor(blockSummaries: CappuccinoExplorerBlockSummary[]) {
    this.blockSummaries = blockSummaries;
  }

  toJSON() {
    return cappuccinoExplorerGetBlockSummariesResponseCodec.encode(this);
  }
}

class CappuccinoExplorerGetBlockSummariesResponseDecoder
  implements Converter<unknown, CappuccinoExplorerGetBlockSummariesResponse>
{
  convert(input: unknown): CappuccinoExplorerGetBlockSummariesResponse {
    assertRecordWithKeys(input, 'block_summaries');

    return new CappuccinoExplorerGetBlockSummariesResponse(
      cappuccinoExplorerBlockSummaryArrayCodec.decode(input.block_summaries),
    );
  }
}

class CappuccinoExplorerGetBlockSummariesResponseEncoder
  implements Converter<CappuccinoExplorerGetBlockSummariesResponse, unknown>
{
  convert(input: CappuccinoExplorerGetBlockSummariesResponse): unknown {
    return {
      block_summaries: cappuccinoExplorerBlockSummaryArrayCodec.encode(
        input.blockSummaries,
      ),
    };
  }
}

class CappuccinoExplorerGetBlockSummariesResponseCodec extends Codec<
  CappuccinoExplorerGetBlockSummariesResponse,
  unknown
> {
  readonly encoder = new CappuccinoExplorerGetBlockSummariesResponseEncoder();
  readonly decoder = new CappuccinoExplorerGetBlockSummariesResponseDecoder();
}

export const cappuccinoExplorerGetBlockSummariesResponseCodec =
  new CappuccinoExplorerGetBlockSummariesResponseCodec();

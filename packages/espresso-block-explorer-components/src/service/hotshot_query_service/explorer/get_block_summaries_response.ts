import { assertInstanceOf } from '@/assert/assert';
import {
  Codec,
  Converter,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import {
  ExplorerBlockSummary,
  explorerBlockSummaryArrayCodec,
} from './block_summary';

/**
 * ExplorerGetBlockSummariesResponse represents the successful response
 * received from the Explorer API for a GetBlockSummariesRequest.
 */
export class ExplorerGetBlockSummariesResponse {
  readonly blockSummaries: ExplorerBlockSummary[];

  constructor(blockSummaries: ExplorerBlockSummary[]) {
    this.blockSummaries = blockSummaries;
  }

  toJSON() {
    return explorerGetBlockSummariesResponseCodec.encode(this);
  }
}

class ExplorerGetBlockSummariesResponseDecoder implements Converter<
  unknown,
  ExplorerGetBlockSummariesResponse
> {
  convert(input: unknown): ExplorerGetBlockSummariesResponse {
    assertRecordWithKeys(input, 'block_summaries');

    return new ExplorerGetBlockSummariesResponse(
      explorerBlockSummaryArrayCodec.decode(input.block_summaries),
    );
  }
}

class ExplorerGetBlockSummariesResponseEncoder implements Converter<
  ExplorerGetBlockSummariesResponse,
  unknown
> {
  convert(input: ExplorerGetBlockSummariesResponse): unknown {
    assertInstanceOf(input, ExplorerGetBlockSummariesResponse);

    return {
      block_summaries: explorerBlockSummaryArrayCodec.encode(
        input.blockSummaries,
      ),
    };
  }
}

class ExplorerGetBlockSummariesResponseCodec extends Codec<
  ExplorerGetBlockSummariesResponse,
  unknown
> {
  readonly encoder = new ExplorerGetBlockSummariesResponseEncoder();
  readonly decoder = new ExplorerGetBlockSummariesResponseDecoder();
}

export const explorerGetBlockSummariesResponseCodec =
  new ExplorerGetBlockSummariesResponseCodec();

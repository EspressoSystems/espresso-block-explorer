import { assertInstanceOf } from '@/assert/assert';
import {
  Codec,
  Converter,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import { ExplorerBlockDetail, explorerBlockDetailCodec } from './block_detail';

/**
 * ExplorerGetBlockDetailResponse represents the response of the getBlockDetail
 * request.
 */
export class ExplorerGetBlockDetailResponse {
  constructor(public readonly blockDetail: ExplorerBlockDetail) {}

  toJSON() {
    return explorerGetBlockDetailResponseCodec.encode(this);
  }
}

class ExplorerGetBlockDetailResponseDecoder implements Converter<
  unknown,
  ExplorerGetBlockDetailResponse
> {
  convert(input: unknown): ExplorerGetBlockDetailResponse {
    assertRecordWithKeys(input, 'block_detail');

    return new ExplorerGetBlockDetailResponse(
      explorerBlockDetailCodec.decode(input.block_detail),
    );
  }
}

class ExplorerGetBlockDetailResponseEncoder implements Converter<
  ExplorerGetBlockDetailResponse,
  unknown
> {
  convert(input: ExplorerGetBlockDetailResponse): unknown {
    assertInstanceOf(input, ExplorerGetBlockDetailResponse);

    return {
      block_detail: explorerBlockDetailCodec.encode(input.blockDetail),
    };
  }
}

class ExplorerGetBlockDetailResponseCodec extends Codec<
  ExplorerGetBlockDetailResponse,
  unknown
> {
  readonly encoder = new ExplorerGetBlockDetailResponseEncoder();
  readonly decoder = new ExplorerGetBlockDetailResponseDecoder();
}

export const explorerGetBlockDetailResponseCodec =
  new ExplorerGetBlockDetailResponseCodec();

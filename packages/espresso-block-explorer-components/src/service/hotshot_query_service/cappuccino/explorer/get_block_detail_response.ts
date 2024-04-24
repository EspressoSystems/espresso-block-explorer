import {
  Codec,
  Converter,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import {
  CappuccinoExplorerBlockDetail,
  cappuccinoExplorerBlockDetailCodec,
} from './block_detail';

export class CappuccinoExplorerGetBlockDetailResponse {
  readonly blockDetail: CappuccinoExplorerBlockDetail;

  constructor(blockDetail: CappuccinoExplorerBlockDetail) {
    this.blockDetail = blockDetail;
  }

  toJSON() {
    return cappuccinoExplorerGetBlockDetailResponseCodec.encode(this);
  }
}

class CappuccinoExplorerGetBlockDetailResponseDecoder
  implements Converter<unknown, CappuccinoExplorerGetBlockDetailResponse>
{
  convert(input: unknown): CappuccinoExplorerGetBlockDetailResponse {
    assertRecordWithKeys(input, 'block_detail');

    return new CappuccinoExplorerGetBlockDetailResponse(
      cappuccinoExplorerBlockDetailCodec.decode(input.block_detail),
    );
  }
}

class CappuccinoExplorerGetBlockDetailResponseEncoder
  implements Converter<CappuccinoExplorerGetBlockDetailResponse, unknown>
{
  convert(input: CappuccinoExplorerGetBlockDetailResponse): unknown {
    return {
      block_detail: cappuccinoExplorerBlockDetailCodec.encode(
        input.blockDetail,
      ),
    };
  }
}

class CappuccinoExplorerGetBlockDetailResponseCodec extends Codec<
  CappuccinoExplorerGetBlockDetailResponse,
  unknown
> {
  readonly encoder = new CappuccinoExplorerGetBlockDetailResponseEncoder();
  readonly decoder = new CappuccinoExplorerGetBlockDetailResponseDecoder();
}

export const cappuccinoExplorerGetBlockDetailResponseCodec =
  new CappuccinoExplorerGetBlockDetailResponseCodec();

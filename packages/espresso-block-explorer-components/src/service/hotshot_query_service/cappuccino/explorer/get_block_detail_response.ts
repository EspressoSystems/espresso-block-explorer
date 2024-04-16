import {
  Codec,
  Converter,
  isRecord,
  isUnknown,
} from '../../../../convert/codec/convert';
import InvalidInputError from '../../../../errors/InvalidInputError';
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
    if (!isRecord(input, 'block_detail', isUnknown)) {
      throw new InvalidInputError();
    }

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

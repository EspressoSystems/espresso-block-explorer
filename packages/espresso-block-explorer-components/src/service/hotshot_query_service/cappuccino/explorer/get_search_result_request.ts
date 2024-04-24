import { Codec, Converter } from '@/convert/codec/convert';
import { stringCodec } from '@/convert/codec/string';

export class CappuccinoExplorerGetSearchResultRequest {
  readonly query: string;

  constructor(query: string) {
    this.query = query;
  }

  toJSON() {
    return cappuccinoExplorerGetSearchResultRequestCodec.encode(this);
  }
}

class CappuccinoExplorerGetSearchResultRequestEncoder
  implements Converter<CappuccinoExplorerGetSearchResultRequest, unknown>
{
  convert(input: CappuccinoExplorerGetSearchResultRequest) {
    return stringCodec.encode(input.query);
  }
}

class CappuccinoExplorerGetSearchResultRequestDecoder
  implements Converter<unknown, CappuccinoExplorerGetSearchResultRequest>
{
  convert(input: unknown): CappuccinoExplorerGetSearchResultRequest {
    return new CappuccinoExplorerGetSearchResultRequest(
      stringCodec.decode(input),
    );
  }
}

class CappuccinoExplorerGetSearchResultRequestCodec extends Codec<
  CappuccinoExplorerGetSearchResultRequest,
  unknown
> {
  readonly encoder = new CappuccinoExplorerGetSearchResultRequestEncoder();
  readonly decoder = new CappuccinoExplorerGetSearchResultRequestDecoder();
}

export const cappuccinoExplorerGetSearchResultRequestCodec =
  new CappuccinoExplorerGetSearchResultRequestCodec();

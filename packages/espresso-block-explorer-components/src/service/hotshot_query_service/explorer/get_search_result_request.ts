import { assertInstanceOf } from '@/assert/assert';
import { Codec, Converter } from '@/convert/codec/convert';
import { stringCodec } from '@/convert/codec/string';

/**
 * ExplorerGetSearchResultRequest is a request to get the search result for a
 * a given search query.
 */
export class ExplorerGetSearchResultRequest {
  constructor(public readonly query: string) {}

  toJSON() {
    return explorerGetSearchResultRequestCodec.encode(this);
  }
}

class ExplorerGetSearchResultRequestEncoder implements Converter<
  ExplorerGetSearchResultRequest,
  unknown
> {
  convert(input: ExplorerGetSearchResultRequest) {
    assertInstanceOf(input, ExplorerGetSearchResultRequest);

    return stringCodec.encode(input.query);
  }
}

class ExplorerGetSearchResultRequestDecoder implements Converter<
  unknown,
  ExplorerGetSearchResultRequest
> {
  convert(input: unknown): ExplorerGetSearchResultRequest {
    return new ExplorerGetSearchResultRequest(stringCodec.decode(input));
  }
}

class ExplorerGetSearchResultRequestCodec extends Codec<
  ExplorerGetSearchResultRequest,
  unknown
> {
  readonly encoder = new ExplorerGetSearchResultRequestEncoder();
  readonly decoder = new ExplorerGetSearchResultRequestDecoder();
}

export const explorerGetSearchResultRequestCodec =
  new ExplorerGetSearchResultRequestCodec();

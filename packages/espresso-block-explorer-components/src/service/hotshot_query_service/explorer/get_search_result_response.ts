import { assertInstanceOf } from '@/assert/assert';
import {
  Codec,
  Converter,
  assertRecordWithKeys,
} from '@/convert/codec/convert';
import {
  ExplorerSearchResults,
  explorerSearchResultsCodec,
} from './search_results';

/**
 * ExplorerGetSearchResultResponse is the response from the explorer when
 * querying for search results.
 */
export class ExplorerGetSearchResultResponse {
  constructor(public readonly searchResults: ExplorerSearchResults) {}

  toJSON() {
    return explorerGetSearchResultResponseCodec.encode(this);
  }
}

class ExplorerGetSearchResultResponseDecoder implements Converter<
  unknown,
  ExplorerGetSearchResultResponse
> {
  convert(input: unknown): ExplorerGetSearchResultResponse {
    assertRecordWithKeys(input, 'search_results');

    return new ExplorerGetSearchResultResponse(
      explorerSearchResultsCodec.decode(input.search_results),
    );
  }
}

class ExplorerGetSearchResultResponseEncoder implements Converter<
  ExplorerGetSearchResultResponse,
  unknown
> {
  convert(input: ExplorerGetSearchResultResponse): unknown {
    assertInstanceOf(input, ExplorerGetSearchResultResponse);

    return {
      search_results: explorerSearchResultsCodec.encode(input.searchResults),
    };
  }
}

class ExplorerGetSearchResultResponseCodec extends Codec<
  ExplorerGetSearchResultResponse,
  unknown
> {
  readonly encoder = new ExplorerGetSearchResultResponseEncoder();
  readonly decoder = new ExplorerGetSearchResultResponseDecoder();
}

export const explorerGetSearchResultResponseCodec =
  new ExplorerGetSearchResultResponseCodec();

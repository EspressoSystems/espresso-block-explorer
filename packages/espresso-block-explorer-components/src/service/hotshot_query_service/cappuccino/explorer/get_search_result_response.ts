import {
  Codec,
  Converter,
  assertRecordWithKeys,
} from '../../../../convert/codec/convert';
import {
  CappuccinoExplorerSearchResults,
  cappuccinoExplorerSearchResultsCodec,
} from './search_results';

export class CappuccinoExplorerGetSearchResultResponse {
  readonly searchResults: CappuccinoExplorerSearchResults;

  constructor(searchResults: CappuccinoExplorerSearchResults) {
    this.searchResults = searchResults;
  }

  toJSON() {
    return cappuccinoExplorerGetSearchResultResponseCodec.encode(this);
  }
}

class CappuccinoExplorerGetSearchResultResponseDecoder
  implements Converter<unknown, CappuccinoExplorerGetSearchResultResponse>
{
  convert(input: unknown): CappuccinoExplorerGetSearchResultResponse {
    assertRecordWithKeys(input, 'search_results');

    return new CappuccinoExplorerGetSearchResultResponse(
      cappuccinoExplorerSearchResultsCodec.decode(input.search_results),
    );
  }
}

class CappuccinoExplorerGetSearchResultResponseEncoder
  implements Converter<CappuccinoExplorerGetSearchResultResponse, unknown>
{
  convert(input: CappuccinoExplorerGetSearchResultResponse): unknown {
    return {
      search_results: cappuccinoExplorerSearchResultsCodec.encode(
        input.searchResults,
      ),
    };
  }
}

class CappuccinoExplorerGetSearchResultResponseCodec extends Codec<
  CappuccinoExplorerGetSearchResultResponse,
  unknown
> {
  readonly encoder = new CappuccinoExplorerGetSearchResultResponseEncoder();
  readonly decoder = new CappuccinoExplorerGetSearchResultResponseDecoder();
}

export const cappuccinoExplorerGetSearchResultResponseCodec =
  new CappuccinoExplorerGetSearchResultResponseCodec();

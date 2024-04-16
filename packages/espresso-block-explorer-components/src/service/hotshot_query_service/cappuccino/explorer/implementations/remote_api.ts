import { validateAndExpandResponse } from '../../../../../async/fetch/response_validators';
import UnimplementedError from '../../../../../errors/UnimplementedError';
import { CappuccinoHotShotQueryServiceExplorerAPI } from '../explorer_api';
import { CappuccinoExplorerGetBlockDetailRequest } from '../get_block_detail_request';
import {
  CappuccinoExplorerGetBlockDetailResponse,
  cappuccinoExplorerGetBlockDetailResponseCodec,
} from '../get_block_detail_response';
import { CappuccinoExplorerGetBlockSummariesRequest } from '../get_block_summaries_request';
import {
  CappuccinoExplorerGetBlockSummariesResponse,
  cappuccinoExplorerGetBlockSummariesResponseCodec,
} from '../get_block_summaries_response';
import {
  CappuccinoExplorerGetExplorerSummaryResponse,
  cappuccinoExplorerGetExplorerSummaryResponseCodec,
} from '../get_explorer_summary_response';
import { CappuccinoExplorerGetSearchResultRequest } from '../get_search_result_request';
import {
  CappuccinoExplorerGetSearchResultResponse,
  cappuccinoExplorerGetSearchResultResponseCodec,
} from '../get_search_result_response';
import {
  CappuccinoExplorerGetTransactionDetailRequest,
  CappuccinoExplorerGetTransactionDetailRequestHash,
  CappuccinoExplorerGetTransactionDetailRequestHeightAndOffset,
} from '../get_transaction_detail_request';
import {
  CappuccinoExplorerGetTransactionDetailResponse,
  cappuccinoExplorerGetTransactionDetailResponseCodec,
} from '../get_transaction_detail_response';
import { CappuccinoExplorerGetTransactionSummariesRequest } from '../get_transaction_summaries_request';
import {
  CappuccinoExplorerGetTransactionSummariesResponse,
  cappuccinoExplorerGetTransactionSummariesResponseCodec,
} from '../get_transaction_summaries_response';

export class FetchBasedCappuccinoHotShotQueryServiceExplorerAPI
  implements CappuccinoHotShotQueryServiceExplorerAPI
{
  private readonly fetcher: typeof fetch;
  private readonly baseURL: URL;

  constructor(fetcher: typeof fetch, url: URL) {
    this.fetcher = fetcher;
    this.baseURL = url;
  }

  async getBlockDetail(
    request: CappuccinoExplorerGetBlockDetailRequest,
  ): Promise<CappuccinoExplorerGetBlockDetailResponse> {
    const url = new URL(`block/${request.target}`, this.baseURL);
    return this.fetcher(url.toString()).then(
      validateAndExpandResponse(
        cappuccinoExplorerGetBlockDetailResponseCodec.decoder,
      ),
    );
  }

  async getBlockSummaries(
    request: CappuccinoExplorerGetBlockSummariesRequest,
  ): Promise<CappuccinoExplorerGetBlockSummariesResponse> {
    const url = new URL(
      `blocks/${request.from}/${request.limit}`,
      this.baseURL,
    );
    return this.fetcher(url.toString()).then(
      validateAndExpandResponse(
        cappuccinoExplorerGetBlockSummariesResponseCodec.decoder,
      ),
    );
  }
  async getTransactionDetail(
    request: CappuccinoExplorerGetTransactionDetailRequest,
  ): Promise<CappuccinoExplorerGetTransactionDetailResponse> {
    let url: URL | null = null;
    if (request instanceof CappuccinoExplorerGetTransactionDetailRequestHash) {
      url = new URL(`transaction/hash/${request.hash}`, this.baseURL);
    } else if (
      request instanceof
      CappuccinoExplorerGetTransactionDetailRequestHeightAndOffset
    ) {
      url = new URL(
        `transaction/${request.height}/${request.offset}`,
        this.baseURL,
      );
    }

    if (!url) {
      throw new UnimplementedError();
    }
    return this.fetcher(url.toString()).then(
      validateAndExpandResponse(
        cappuccinoExplorerGetTransactionDetailResponseCodec.decoder,
      ),
    );
  }

  async getTransactionSummaries(
    request: CappuccinoExplorerGetTransactionSummariesRequest,
  ): Promise<CappuccinoExplorerGetTransactionSummariesResponse> {
    const { target, filter } = request;
    let url = target.convertURL(this.baseURL);
    url = filter.convertURL(url);

    return this.fetcher(url.toString()).then(
      validateAndExpandResponse(
        cappuccinoExplorerGetTransactionSummariesResponseCodec.decoder,
      ),
    );
  }

  async getExplorerOverview(): Promise<CappuccinoExplorerGetExplorerSummaryResponse> {
    const url = new URL('explorer-summary', this.baseURL);
    return this.fetcher(url.toString()).then(
      validateAndExpandResponse(
        cappuccinoExplorerGetExplorerSummaryResponseCodec.decoder,
      ),
    );
  }

  async getSearchResult(
    request: CappuccinoExplorerGetSearchResultRequest,
  ): Promise<CappuccinoExplorerGetSearchResultResponse> {
    const url = new URL(
      `search/${encodeURIComponent(request.query)}`,
      this.baseURL,
    );

    return this.fetcher(url.toString()).then(
      validateAndExpandResponse(
        cappuccinoExplorerGetSearchResultResponseCodec.decoder,
      ),
    );
  }
}

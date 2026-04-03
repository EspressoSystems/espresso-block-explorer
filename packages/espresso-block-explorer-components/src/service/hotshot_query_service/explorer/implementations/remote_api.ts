import {
  checkErrorAndExpandResponse,
  validateAndExpandResponse,
} from '@/async/fetch/response_validators';
import UnimplementedError from '@/errors/unimplemented_error';
import { HotShotQueryServiceExplorerAPI } from '../explorer_api';
import { unwrappedExplorerErrorResponseDecoder } from '../explorer_error_response';
import { ExplorerGetBlockDetailRequest } from '../get_block_detail_request';
import {
  ExplorerGetBlockDetailResponse,
  explorerGetBlockDetailResponseCodec,
} from '../get_block_detail_response';
import { ExplorerGetBlockSummariesRequest } from '../get_block_summaries_request';
import {
  ExplorerGetBlockSummariesResponse,
  explorerGetBlockSummariesResponseCodec,
} from '../get_block_summaries_response';
import {
  ExplorerGetExplorerSummaryResponse,
  explorerGetExplorerSummaryResponseCodec,
} from '../get_explorer_summary_response';
import { ExplorerGetSearchResultRequest } from '../get_search_result_request';
import {
  ExplorerGetSearchResultResponse,
  explorerGetSearchResultResponseCodec,
} from '../get_search_result_response';
import {
  ExplorerGetTransactionDetailRequest,
  ExplorerGetTransactionDetailRequestHash,
  ExplorerGetTransactionDetailRequestHeightAndOffset,
} from '../get_transaction_detail_request';
import {
  ExplorerGetTransactionDetailResponse,
  explorerGetTransactionDetailResponseCodec,
} from '../get_transaction_detail_response';
import { ExplorerGetTransactionSummariesRequest } from '../get_transaction_summaries_request';
import {
  ExplorerGetTransactionSummariesResponse,
  explorerGetTransactionSummariesResponseCodec,
} from '../get_transaction_summaries_response';

export class FetchBasedHotShotQueryServiceExplorerAPI implements HotShotQueryServiceExplorerAPI {
  private readonly catchErrorResponseHandler = checkErrorAndExpandResponse(
    unwrappedExplorerErrorResponseDecoder,
  );
  private readonly blockDetailHandler = validateAndExpandResponse(
    explorerGetBlockDetailResponseCodec.decoder,
    unwrappedExplorerErrorResponseDecoder,
  );
  private readonly blockSummariesHandler = validateAndExpandResponse(
    explorerGetBlockSummariesResponseCodec.decoder,
    unwrappedExplorerErrorResponseDecoder,
  );
  private readonly transactionDetailHandler = validateAndExpandResponse(
    explorerGetTransactionDetailResponseCodec.decoder,
    unwrappedExplorerErrorResponseDecoder,
  );
  private readonly transactionSummariesHandler = validateAndExpandResponse(
    explorerGetTransactionSummariesResponseCodec.decoder,
    unwrappedExplorerErrorResponseDecoder,
  );
  private readonly explorerSummaryHandler = validateAndExpandResponse(
    explorerGetExplorerSummaryResponseCodec.decoder,
    unwrappedExplorerErrorResponseDecoder,
  );
  private readonly searchResultsHnalder = validateAndExpandResponse(
    explorerGetSearchResultResponseCodec.decoder,
    unwrappedExplorerErrorResponseDecoder,
  );
  constructor(
    private readonly fetcher: typeof fetch,
    private readonly baseURL: URL,
  ) {}

  async getBlockDetail(
    request: ExplorerGetBlockDetailRequest,
  ): Promise<ExplorerGetBlockDetailResponse> {
    const url = new URL(`block/${request.target}`, this.baseURL);
    return this.fetcher(url).then(
      this.blockDetailHandler,
      this.catchErrorResponseHandler,
    );
  }

  async getBlockSummaries(
    request: ExplorerGetBlockSummariesRequest,
  ): Promise<ExplorerGetBlockSummariesResponse> {
    const url = new URL(
      `blocks/${request.from}/${request.limit}`,
      this.baseURL,
    );
    return this.fetcher(url).then(
      this.blockSummariesHandler,
      this.catchErrorResponseHandler,
    );
  }
  async getTransactionDetail(
    request: ExplorerGetTransactionDetailRequest,
  ): Promise<ExplorerGetTransactionDetailResponse> {
    let url: URL | null = null;
    if (request instanceof ExplorerGetTransactionDetailRequestHash) {
      url = new URL(`transaction/hash/${request.hash}`, this.baseURL);
    } else if (
      request instanceof ExplorerGetTransactionDetailRequestHeightAndOffset
    ) {
      url = new URL(
        `transaction/${request.height}/${request.offset}`,
        this.baseURL,
      );
    }

    if (!url) {
      throw new UnimplementedError();
    }
    return this.fetcher(url).then(
      this.transactionDetailHandler,
      this.catchErrorResponseHandler,
    );
  }

  async getTransactionSummaries(
    request: ExplorerGetTransactionSummariesRequest,
  ): Promise<ExplorerGetTransactionSummariesResponse> {
    const { target, filter } = request;
    let url = target.convertURL(this.baseURL);
    url = filter.convertURL(url);

    return this.fetcher(url).then(
      this.transactionSummariesHandler,
      this.catchErrorResponseHandler,
    );
  }

  async getExplorerOverview(): Promise<ExplorerGetExplorerSummaryResponse> {
    const url = new URL('explorer-summary', this.baseURL);
    return this.fetcher(url).then(
      this.explorerSummaryHandler,
      this.catchErrorResponseHandler,
    );
  }

  async getSearchResult(
    request: ExplorerGetSearchResultRequest,
  ): Promise<ExplorerGetSearchResultResponse> {
    const url = new URL(
      `search/${encodeURIComponent(request.query)}`,
      this.baseURL,
    );

    return this.fetcher(url).then(
      this.searchResultsHnalder,
      this.catchErrorResponseHandler,
    );
  }
}

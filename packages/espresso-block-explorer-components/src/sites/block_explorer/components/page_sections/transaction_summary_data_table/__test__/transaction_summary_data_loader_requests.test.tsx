import { HotShotQueryServiceAPIContext } from '@/contexts/hot_shot_query_service_api_context';
import { ExplorerGetTransactionSummariesRequest } from '@/service/hotshot_query_service/explorer/get_transaction_summaries_request';
import { ExplorerGetTransactionSummariesResponse } from '@/service/hotshot_query_service/explorer/get_transaction_summaries_response';
import { ExplorerGetTransactionSummariesTargetHeightAndOffset } from '@/service/hotshot_query_service/explorer/get_transaction_summaries_target';
import { UnimplementedHotShotQueryService } from '@/service/hotshot_query_service/implementations/unimplemented';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { TransactionSummaryDataLoader } from '../transaction_summary_data_loader';

/** renderLoader renders the loader against a service that records requests. */
function renderLoader(props: { offset?: number; limit?: number }) {
  const service = new UnimplementedHotShotQueryService();
  const requests: { height: number; offset: number; limit: number }[] = [];
  Object.assign(service.explorer, {
    getTransactionSummaries: (
      request: ExplorerGetTransactionSummariesRequest,
    ) => {
      const target =
        request.target as ExplorerGetTransactionSummariesTargetHeightAndOffset;
      requests.push({
        height: target.height,
        offset: target.offset,
        limit: target.limit,
      });
      return Promise.resolve(new ExplorerGetTransactionSummariesResponse([]));
    },
  });

  const loader = (p: typeof props) => (
    <HotShotQueryServiceAPIContext.Provider value={service}>
      <TransactionSummaryDataLoader startAtBlock={10} {...p}>
        <div />
      </TransactionSummaryDataLoader>
    </HotShotQueryServiceAPIContext.Provider>
  );
  const view = render(loader(props));
  return { requests, rerender: (p: typeof props) => view.rerender(loader(p)) };
}

describe('TransactionSummaryDataLoader requests', () => {
  it('asks for 20 transactions unless given a limit', () => {
    const { requests } = renderLoader({ offset: 5 });
    expect(requests).toEqual([{ height: 10, offset: 5, limit: 20 }]);
  });

  it('sends a request once, however often it re-renders', () => {
    const { requests, rerender } = renderLoader({ offset: 5, limit: 50 });
    rerender({ offset: 5, limit: 50 });
    rerender({ offset: 5, limit: 50 });
    expect(requests).toEqual([{ height: 10, offset: 5, limit: 50 }]);
  });

  it('sends a new request when the page changes', () => {
    const { requests, rerender } = renderLoader({ offset: 5, limit: 50 });
    rerender({ offset: 55, limit: 50 });
    expect(requests).toEqual([
      { height: 10, offset: 5, limit: 50 },
      { height: 10, offset: 55, limit: 50 },
    ]);
  });
});

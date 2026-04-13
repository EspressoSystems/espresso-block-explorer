import { describe, expect, it } from 'vitest';
import { ExplorerGetBlockDetailRequest } from '../explorer/get_block_detail_request';
import { ExplorerGetBlockSummariesRequest } from '../explorer/get_block_summaries_request';
import { ExplorerGetSearchResultRequest } from '../explorer/get_search_result_request';
import { ExplorerGetTransactionDetailRequest } from '../explorer/get_transaction_detail_request';
import { ExplorerGetTransactionSummariesFilter } from '../explorer/get_transaction_summaries_filter';
import { ExplorerGetTransactionSummariesRequest } from '../explorer/get_transaction_summaries_request';
import { ExplorerGetTransactionSummariesTarget } from '../explorer/get_transaction_summaries_target';
import { WebWorkerClientBasedHotShotQueryService } from '../implementations/web_worker_client';

describe('Web worker Client Based', () => {
  describe('Fake Data', { timeout: 10000 }, () => {
    const client = new WebWorkerClientBasedHotShotQueryService();

    describe('Status', () => {
      it('should resolve with data', async () => {
        await expect(client.status.blockHeight()).resolves.toBeGreaterThan(0);
      });
    });

    describe('Availability', () => {
      it('should resolve with data', async () => {
        await expect(
          client.availability.getBlockFromHeight(0),
        ).resolves.not.toBeNull();
        await expect(
          client.availability.getBlockSummaries(0, 10),
        ).resolves.not.toBeNull();
        await expect(
          client.availability.getLeafFromHeight(0),
        ).resolves.not.toBeNull();
        await expect(
          client.availability.getTransactionFromHeightAndOffset(10, 0),
        ).resolves.not.toBe(null);
        await expect(
          client.availability.getTransactionSummaryRange(10, 0, 10),
        ).resolves.not.toBeNull();
        await expect(
          client.availability.getTransactionSummaryRangeForRollup(
            0xc0ffee1,
            40,
            0,
            10,
          ),
        ).resolves.not.toBeNull();
      });
    });

    describe('Explorer', () => {
      it('should resolve with data', async () => {
        await expect(
          client.explorer.getBlockDetail(
            ExplorerGetBlockDetailRequest.latest(),
          ),
        ).resolves.not.toBeNull();

        const latestBlockResult = await client.explorer.getBlockDetail(
          ExplorerGetBlockDetailRequest.latest(),
        );

        await expect(
          client.explorer.getBlockDetail(
            ExplorerGetBlockDetailRequest.height(
              latestBlockResult.blockDetail.height,
            ),
          ),
        ).resolves.not.toBeNull();

        await expect(
          client.explorer.getBlockSummaries(
            ExplorerGetBlockSummariesRequest.latest(10),
          ),
        ).resolves.not.toBeNull();

        await expect(
          client.explorer.getBlockSummaries(
            ExplorerGetBlockSummariesRequest.from(
              latestBlockResult.blockDetail.height,
              10,
            ),
          ),
        ).resolves.not.toBeNull();

        await expect(
          client.explorer.getTransactionDetail(
            ExplorerGetTransactionDetailRequest.heightAndOffset(
              latestBlockResult.blockDetail.height,
              0,
            ),
          ),
        ).resolves.not.toBeNull();
        const latestTransaction = await client.explorer.getTransactionDetail(
          ExplorerGetTransactionDetailRequest.heightAndOffset(
            latestBlockResult.blockDetail.height,
            0,
          ),
        );

        await expect(
          client.explorer.getTransactionSummaries(
            new ExplorerGetTransactionSummariesRequest(
              ExplorerGetTransactionSummariesTarget.latest(10),
              ExplorerGetTransactionSummariesFilter.none(),
            ),
          ),
        );

        await expect(
          client.explorer.getTransactionSummaries(
            new ExplorerGetTransactionSummariesRequest(
              ExplorerGetTransactionSummariesTarget.hash(
                latestTransaction.transactionDetail.details.hash,
                10,
              ),
              ExplorerGetTransactionSummariesFilter.namespace(
                latestTransaction.transactionDetail.data[0].namespace,
              ),
            ),
          ),
        );

        await expect(
          client.explorer.getTransactionSummaries(
            new ExplorerGetTransactionSummariesRequest(
              ExplorerGetTransactionSummariesTarget.heightAndOffset(
                latestTransaction.transactionDetail.details.height,
                0,
                10,
              ),
              ExplorerGetTransactionSummariesFilter.block(
                latestTransaction.transactionDetail.details.height,
              ),
            ),
          ),
        );

        await expect(
          client.explorer.getExplorerOverview(),
        ).resolves.not.toBeNull();

        await expect(
          client.explorer.getSearchResult(
            new ExplorerGetSearchResultRequest('BLOCK~'),
          ),
        ).resolves.not.toBeNull();
      });
    });
  });

  // Need some way to figure out some way to specify a mock data source outside
  // of the config file.
});

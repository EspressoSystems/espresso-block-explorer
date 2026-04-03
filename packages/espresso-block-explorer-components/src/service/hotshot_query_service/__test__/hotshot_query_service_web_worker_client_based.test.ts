import { describe, expect, it } from 'vitest';
import { CappuccinoExplorerGetBlockDetailRequest } from '../explorer/get_block_detail_request';
import { CappuccinoExplorerGetBlockSummariesRequest } from '../explorer/get_block_summaries_request';
import { CappuccinoExplorerGetSearchResultRequest } from '../explorer/get_search_result_request';
import { CappuccinoExplorerGetTransactionDetailRequest } from '../explorer/get_transaction_detail_request';
import { CappuccinoExplorerGetTransactionSummariesFilter } from '../explorer/get_transaction_summaries_filter';
import { CappuccinoExplorerGetTransactionSummariesRequest } from '../explorer/get_transaction_summaries_request';
import { CappuccinoExplorerGetTransactionSummariesTarget } from '../explorer/get_transaction_summaries_target';
import { WebWorkerClientBasedCappuccinoHotShotQueryService } from '../implementations/web_worker_client';

describe('Web worker Client Based', () => {
  describe('Fake Data', { timeout: 10000 }, () => {
    const client = new WebWorkerClientBasedCappuccinoHotShotQueryService();

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
            CappuccinoExplorerGetBlockDetailRequest.latest(),
          ),
        ).resolves.not.toBeNull();

        const latestBlockResult = await client.explorer.getBlockDetail(
          CappuccinoExplorerGetBlockDetailRequest.latest(),
        );

        await expect(
          client.explorer.getBlockDetail(
            CappuccinoExplorerGetBlockDetailRequest.height(
              latestBlockResult.blockDetail.height,
            ),
          ),
        ).resolves.not.toBeNull();

        await expect(
          client.explorer.getBlockSummaries(
            CappuccinoExplorerGetBlockSummariesRequest.latest(10),
          ),
        ).resolves.not.toBeNull();

        await expect(
          client.explorer.getBlockSummaries(
            CappuccinoExplorerGetBlockSummariesRequest.from(
              latestBlockResult.blockDetail.height,
              10,
            ),
          ),
        ).resolves.not.toBeNull();

        await expect(
          client.explorer.getTransactionDetail(
            CappuccinoExplorerGetTransactionDetailRequest.heightAndOffset(
              latestBlockResult.blockDetail.height,
              0,
            ),
          ),
        ).resolves.not.toBeNull();
        const latestTransaction = await client.explorer.getTransactionDetail(
          CappuccinoExplorerGetTransactionDetailRequest.heightAndOffset(
            latestBlockResult.blockDetail.height,
            0,
          ),
        );

        await expect(
          client.explorer.getTransactionSummaries(
            new CappuccinoExplorerGetTransactionSummariesRequest(
              CappuccinoExplorerGetTransactionSummariesTarget.latest(10),
              CappuccinoExplorerGetTransactionSummariesFilter.none(),
            ),
          ),
        );

        await expect(
          client.explorer.getTransactionSummaries(
            new CappuccinoExplorerGetTransactionSummariesRequest(
              CappuccinoExplorerGetTransactionSummariesTarget.hash(
                latestTransaction.transactionDetail.details.hash,
                10,
              ),
              CappuccinoExplorerGetTransactionSummariesFilter.namespace(
                latestTransaction.transactionDetail.data[0].namespace,
              ),
            ),
          ),
        );

        await expect(
          client.explorer.getTransactionSummaries(
            new CappuccinoExplorerGetTransactionSummariesRequest(
              CappuccinoExplorerGetTransactionSummariesTarget.heightAndOffset(
                latestTransaction.transactionDetail.details.height,
                0,
                10,
              ),
              CappuccinoExplorerGetTransactionSummariesFilter.block(
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
            new CappuccinoExplorerGetSearchResultRequest('BLOCK~'),
          ),
        ).resolves.not.toBeNull();
      });
    });
  });

  // Need some way to figure out some way to specify a mock data source outside
  // of the config file.
});

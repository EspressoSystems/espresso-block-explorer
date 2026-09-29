import { FakeDataHotShotQueryService } from '@/service/hotshot_query_service/implementations/fake_data';
import { describe, expect, it } from 'vitest';

describe('Fake explorer summary', () => {
  it('lists the latest blocks and transactions newest first, as the real service does', async () => {
    const { explorerSummary } =
      await new FakeDataHotShotQueryService().explorer.getExplorerOverview();

    const blockHeights = explorerSummary.latestBlocks.map((b) => b.height);
    expect(blockHeights[0]).toBe(explorerSummary.latestBlock.height);
    expect(blockHeights).toEqual([...blockHeights].sort((a, b) => b - a));

    const txnHeights = explorerSummary.latestTransactions.map((t) => t.height);
    expect(txnHeights).toEqual([...txnHeights].sort((a, b) => b - a));
  });
});

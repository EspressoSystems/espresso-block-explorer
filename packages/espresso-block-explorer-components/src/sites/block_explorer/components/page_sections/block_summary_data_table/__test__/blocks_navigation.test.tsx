import { DefaultPathResolver } from '@/block_explorer/contexts/path_resolver';
import { DataTableStateContext } from '@/components/data/data_table/data_table';
import { ExplorerBlockSummariesContext } from '@/contexts/explorer_api_contexts';
import { HotShotQueryServiceAPIContext } from '@/contexts/hot_shot_query_service_api_context';
import { ExplorerBlockSummary } from '@/service/hotshot_query_service/explorer/block_summary';
import { UnimplementedHotShotQueryService } from '@/service/hotshot_query_service/implementations/unimplemented';
import '@testing-library/jest-dom';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import {
  BlocksNavigation,
  RefreshBlockSummariesContext,
} from '../block_summary_data_loader';

const paths = new DefaultPathResolver();

/** A service whose block count is `numberOfBlocks`, or none if omitted. */
function service(numberOfBlocks?: number) {
  const s = new UnimplementedHotShotQueryService();
  if (numberOfBlocks !== undefined) {
    Object.assign(s, {
      status: { blockHeight: () => Promise.resolve(numberOfBlocks) },
    });
  }
  return s;
}

/** Twenty blocks, `top` down to `top - 19`. */
const page = (top: number) =>
  Array.from({ length: 20 }, (_, i) => ({
    height: top - i,
  })) as unknown as ExplorerBlockSummary[];

async function renderNavigation(options: {
  top: number;
  startAtBlock?: number;
  numberOfBlocks?: number;
  refresh?: () => void;
}) {
  render(
    <HotShotQueryServiceAPIContext.Provider
      value={service(options.numberOfBlocks)}
    >
      <RefreshBlockSummariesContext.Provider
        value={options.refresh ?? (() => {})}
      >
        <DataTableStateContext.Provider
          value={{ startAtBlock: options.startAtBlock }}
        >
          <ExplorerBlockSummariesContext.Provider value={page(options.top)}>
            <BlocksNavigation />
          </ExplorerBlockSummariesContext.Provider>
        </DataTableStateContext.Provider>
      </RefreshBlockSummariesContext.Provider>
    </HotShotQueryServiceAPIContext.Provider>,
  );
  await act(async () => {});
}

const control = (name: string) => screen.getByText(name).closest('a, button')!;

describe('Blocks Navigation', () => {
  it('should disable Newer at the head until newer blocks exist', async () => {
    // The newest block (count - 1) is the top of the page.
    await renderNavigation({ top: 1000, numberOfBlocks: 1001 });
    expect(control('Newer')).toHaveAttribute('disabled');
    expect(control('Newer')).not.toHaveAttribute('href');
  });

  it('should lead Newer to the newest block when fewer than a page arrived', async () => {
    await renderNavigation({ top: 1000, numberOfBlocks: 1006 });
    expect(control('Newer')).toHaveAttribute('href', paths.blocks(1005));
  });

  it('should lead Newer to the page above when a full page arrived', async () => {
    await renderNavigation({ top: 1000, numberOfBlocks: 2000 });
    expect(control('Newer')).toHaveAttribute('href', paths.blocks(1020));
  });

  it('should enable Newer on a pinned page before the height is known', async () => {
    await renderNavigation({ top: 1000, startAtBlock: 1000 });
    expect(control('Newer')).toHaveAttribute('href', paths.blocks(1020));
  });

  it('should re-fetch from Latest at the head', async () => {
    const refresh = vi.fn();
    await renderNavigation({ top: 1000, numberOfBlocks: 1001, refresh });
    fireEvent.click(control('Latest'));
    expect(refresh).toHaveBeenCalledTimes(1);
  });

  it('should lead Older to the page below', async () => {
    await renderNavigation({ top: 1000, numberOfBlocks: 1001 });
    expect(control('Older')).toHaveAttribute('href', paths.blocks(980));
  });
});

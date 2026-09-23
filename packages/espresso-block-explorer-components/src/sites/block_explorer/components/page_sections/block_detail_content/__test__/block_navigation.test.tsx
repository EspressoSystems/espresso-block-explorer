import { DefaultPathResolver } from '@/block_explorer/contexts/path_resolver';
import { HotShotQueryServiceAPIContext } from '@/contexts/hot_shot_query_service_api_context';
import { UnimplementedHotShotQueryService } from '@/service/hotshot_query_service/implementations/unimplemented';
import '@testing-library/jest-dom';
import { act, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { BlockNavigation } from '../block_detail_content';
import { BlockNumberContext } from '../block_detail_content_loader';

const paths = new DefaultPathResolver();

/**
 * serviceReporting builds a query service whose block height -- the number of
 * blocks it holds -- is each of the given values in turn, then the last.
 */
function serviceReporting(...numberOfBlocks: number[]) {
  const answers = [...numberOfBlocks];
  const service = new UnimplementedHotShotQueryService();
  Object.assign(service, {
    status: {
      blockHeight: () =>
        Promise.resolve(answers.length > 1 ? answers.shift()! : answers[0]),
    },
  });
  return service;
}

async function renderNavigation(
  blockID: number,
  service: UnimplementedHotShotQueryService = new UnimplementedHotShotQueryService(),
) {
  render(
    <HotShotQueryServiceAPIContext.Provider value={service}>
      <BlockNumberContext.Provider value={blockID}>
        <BlockNavigation />
      </BlockNumberContext.Provider>
    </HotShotQueryServiceAPIContext.Provider>,
  );
  // Let the block height request settle.
  await act(async () => {});
}

const button = (name: string) => screen.getByText(name).closest('a')!;

describe('Block Navigation', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should lead to the newer, older and newest blocks', async () => {
    // 201 blocks: the newest is block 200.
    await renderNavigation(100, serviceReporting(201));

    expect(button('Latest')).toHaveAttribute('href', paths.block(200));
    expect(button('Newer')).toHaveAttribute('href', paths.block(101));
    expect(button('Older')).toHaveAttribute('href', paths.block(99));
  });

  it('should have nowhere newer to go from the newest block', async () => {
    await renderNavigation(200, serviceReporting(201));

    expect(button('Latest')).not.toHaveAttribute('href');
    expect(button('Newer')).not.toHaveAttribute('href');
    expect(button('Older')).toHaveAttribute('href', paths.block(199));
  });

  it('should have nowhere older to go from the first block', async () => {
    await renderNavigation(0, serviceReporting(201));

    expect(button('Older')).not.toHaveAttribute('href');
    expect(button('Newer')).toHaveAttribute('href', paths.block(1));
  });

  it('should leave the way newer open when the height is unknown', async () => {
    // The unimplemented service cannot report a block height.
    await renderNavigation(100);

    expect(button('Latest')).not.toHaveAttribute('href');
    expect(button('Newer')).toHaveAttribute('href', paths.block(101));
    expect(button('Older')).toHaveAttribute('href', paths.block(99));
  });

  it('should open the way newer once a newer block arrives', async () => {
    await renderNavigation(200, serviceReporting(201, 202));
    expect(button('Newer')).not.toHaveAttribute('href');

    await act(async () => {
      vi.advanceTimersByTime(5000);
    });

    expect(button('Newer')).toHaveAttribute('href', paths.block(201));
    expect(button('Latest')).toHaveAttribute('href', paths.block(201));
  });

  it('should not move backwards on a replica that has fallen behind', async () => {
    await renderNavigation(100, serviceReporting(201, 150));

    await act(async () => {
      vi.advanceTimersByTime(5000);
    });

    expect(button('Latest')).toHaveAttribute('href', paths.block(200));
  });
});

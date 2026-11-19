import { render } from '@testing-library/react';
import { BlockPage } from 'espresso-block-explorer-components/block-explorer';
import {
  notFound,
  ReadonlyURLSearchParams,
  usePathname,
  useSearchParams,
} from 'next/navigation';
import { afterEach, describe, expect, it, vi } from 'vitest';
import Block from '../block';

vi.mock('next/navigation');
vi.mock(
  'espresso-block-explorer-components/block-explorer',
  async (importOriginal) => ({
    ...(await importOriginal<object>()),
    BlockPage: vi.fn(() => null),
  }),
);
vi.mocked(usePathname).mockReturnValue('/block/0');

function withQuery(query: string) {
  vi.mocked(useSearchParams).mockReturnValue(
    new URLSearchParams(query) as ReadonlyURLSearchParams,
  );
}

/** The position the block page was last asked to show. */
const positionShown = () =>
  vi.mocked(BlockPage).mock.lastCall?.[0].transactionsPosition;

describe('Block', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should not throw', async () => {
    withQuery('');
    expect(() => render(<Block />)).not.toThrow();
    expect(usePathname).toHaveBeenCalled();
    expect(notFound).not.toHaveBeenCalled();
  });

  it('shows the first page of transactions without a position', () => {
    withQuery('');
    render(<Block />);
    expect(positionShown()).toBe(0);
  });

  it('shows the page of transactions given by ?position=', () => {
    withQuery('position=50');
    render(<Block />);
    expect(positionShown()).toBe(50);
  });

  it('ignores a position that is not a whole number', () => {
    withQuery('position=abc');
    render(<Block />);
    expect(positionShown()).toBe(0);
  });
});

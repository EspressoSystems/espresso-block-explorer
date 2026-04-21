import { render } from '@testing-library/react';
import {
  notFound,
  ReadonlyURLSearchParams,
  usePathname,
  useSearchParams,
} from 'next/navigation';
import { afterEach, describe, expect, it, vi } from 'vitest';
import Blocks from '../blocks';

vi.mock('next/navigation');
vi.mocked(usePathname).mockReturnValue('/blocks');
vi.mocked(useSearchParams).mockReturnValue(
  new URLSearchParams() as ReadonlyURLSearchParams,
);

describe('Blocks', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should not throw', async () => {
    expect(() => render(<Blocks />)).not.toThrow();
    expect(usePathname).not.toHaveBeenCalled();
    expect(useSearchParams).toHaveBeenCalled();
    expect(notFound).not.toHaveBeenCalled();
  });
});

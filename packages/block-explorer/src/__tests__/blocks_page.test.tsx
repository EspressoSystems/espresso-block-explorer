import { render } from '@testing-library/react';
import {
  ReadonlyURLSearchParams,
  usePathname,
  useSearchParams,
} from 'next/navigation';
import { afterEach, describe, expect, it, vi } from 'vitest';
import Blocks from '../app/blocks/page';

vi.mock('next/navigation');

vi.mocked(usePathname).mockReturnValue('/blocks');
vi.mocked(useSearchParams).mockReturnValue(
  new URLSearchParams() as ReadonlyURLSearchParams,
);

describe('Blocks', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should not throw', () => {
    expect(() => render(<Blocks />)).not.toThrow();
    expect(usePathname).not.toHaveBeenCalled();
    expect(useSearchParams).toHaveBeenCalled();
  });

  it('should not throw when no params are provided', async () => {
    expect(() => render(<Blocks />)).not.toThrow();
    expect(usePathname).not.toHaveBeenCalled();
    expect(useSearchParams).toHaveBeenCalled();
  });
});

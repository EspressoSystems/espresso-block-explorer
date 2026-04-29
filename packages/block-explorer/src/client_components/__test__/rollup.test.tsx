import { render } from '@testing-library/react';
import {
  ReadonlyURLSearchParams,
  usePathname,
  useSearchParams,
} from 'next/navigation';
import { afterEach, describe, expect, it, vi } from 'vitest';
import Rollup from '../rollup';

vi.mock('next/navigation');
vi.mocked(usePathname).mockReturnValue('/rollup/0');
vi.mocked(useSearchParams).mockReturnValue(
  new URLSearchParams() as ReadonlyURLSearchParams,
);

describe('Rollup', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should not throw', async () => {
    expect(() => render(<Rollup />)).not.toThrow();
    expect(usePathname).toHaveBeenCalled();
    expect(useSearchParams).toHaveBeenCalled();
  });
});

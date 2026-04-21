import { render } from '@testing-library/react';
import {
  ReadonlyURLSearchParams,
  usePathname,
  useSearchParams,
} from 'next/navigation';
import { afterEach, describe, expect, it, vi } from 'vitest';
import Transactions from '../transactions';

vi.mock('next/navigation');
vi.mocked(usePathname).mockReturnValue('/transactions');
vi.mocked(useSearchParams).mockReturnValue(
  new URLSearchParams() as ReadonlyURLSearchParams,
);

describe('Transactions', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should not throw', async () => {
    expect(() => render(<Transactions />)).not.toThrow();
    expect(usePathname).not.toHaveBeenCalled();
    expect(useSearchParams).toHaveBeenCalled();
  });

  it('should not throw', async () => {
    vi.mocked(useSearchParams).mockReturnValue(
      new URLSearchParams([['block', '0']]) as ReadonlyURLSearchParams,
    );
    expect(() => render(<Transactions />)).not.toThrow();
    expect(usePathname).not.toHaveBeenCalled();
    expect(useSearchParams).toHaveBeenCalled();
  });
});

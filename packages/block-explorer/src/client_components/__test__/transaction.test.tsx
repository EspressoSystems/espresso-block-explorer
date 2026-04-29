import { render } from '@testing-library/react';
import {
  usePathname,
  useSearchParams,
  notFound,
  ReadonlyURLSearchParams,
} from 'next/navigation';
import { afterEach, describe, expect, it, vi } from 'vitest';
import Transaction from '../transaction';

vi.mock('next/navigation');
vi.mocked(usePathname).mockReturnValue('/transaction/0-0');
vi.mocked(useSearchParams).mockReturnValue(
  new URLSearchParams() as ReadonlyURLSearchParams,
);

describe('Transaction', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should not throw', async () => {
    expect(() => render(<Transaction />)).not.toThrow();
    expect(usePathname).toHaveBeenCalled();
    expect(useSearchParams).not.toHaveBeenCalled();
    expect(notFound).not.toHaveBeenCalled();
  });
});

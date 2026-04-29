import { render } from '@testing-library/react';
import {
  notFound,
  ReadonlyURLSearchParams,
  usePathname,
  useSearchParams,
} from 'next/navigation';
import { afterEach, describe, expect, it, vi } from 'vitest';
import Block from '../block';

vi.mock('next/navigation');
vi.mocked(usePathname).mockReturnValue('/block/0');
vi.mocked(useSearchParams).mockReturnValue(
  new URLSearchParams() as ReadonlyURLSearchParams,
);

describe('Block', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should not throw', async () => {
    expect(() => render(<Block />)).not.toThrow();
    expect(usePathname).toHaveBeenCalled();
    expect(useSearchParams).not.toHaveBeenCalled();
    expect(notFound).not.toHaveBeenCalled();
  });
});

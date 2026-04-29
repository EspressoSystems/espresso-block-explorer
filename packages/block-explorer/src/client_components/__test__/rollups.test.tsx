import { render } from '@testing-library/react';
import {
  ReadonlyURLSearchParams,
  usePathname,
  useSearchParams,
} from 'next/navigation';
import { afterEach, describe, expect, it, vi } from 'vitest';
import Rollups from '../rollups';

vi.mock('next/navigation');
vi.mocked(usePathname).mockReturnValue('/rollups');
vi.mocked(useSearchParams).mockReturnValue(
  new URLSearchParams() as ReadonlyURLSearchParams,
);

describe('Rollups', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should not throw', async () => {
    expect(() => render(<Rollups />)).not.toThrow();
    expect(usePathname).not.toHaveBeenCalled();
    expect(useSearchParams).not.toHaveBeenCalled();
  });
});

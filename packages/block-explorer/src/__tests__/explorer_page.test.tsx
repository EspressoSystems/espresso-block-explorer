import { render } from '@testing-library/react';
import {
  ReadonlyURLSearchParams,
  usePathname,
  useSearchParams,
} from 'next/navigation';
import { describe, expect, it, vi } from 'vitest';
import Explorer from '../app/page';

vi.mock('next/navigation');
vi.mocked(usePathname).mockReturnValue('/');
vi.mocked(useSearchParams).mockReturnValue(
  new URLSearchParams() as ReadonlyURLSearchParams,
);

describe('Explorer', () => {
  it('should not throw', async () => {
    expect(() => render(<Explorer />)).not.toThrow();
    expect(usePathname).not.toHaveBeenCalled();
    expect(useSearchParams).not.toHaveBeenCalled();
  });
});

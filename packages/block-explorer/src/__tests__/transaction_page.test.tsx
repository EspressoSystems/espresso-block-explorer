import { render } from '@testing-library/react';
import {
  notFound,
  ReadonlyURLSearchParams,
  usePathname,
  useSearchParams,
} from 'next/navigation';
import { afterEach, describe, expect, it, vi } from 'vitest';
import Transaction from '../app/transaction/[slug]/page';

vi.mock('next/navigation');
vi.mocked(usePathname).mockReturnValue('/transaction/');
vi.mocked(useSearchParams).mockReturnValue(
  new URLSearchParams() as ReadonlyURLSearchParams,
);

describe('Transaction', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should not throw', async () => {
    vi.mocked(usePathname).mockReturnValue('/transaction/0-0');
    expect(() => render(<Transaction />)).not.toThrow();
    expect(usePathname).toHaveBeenCalled();
    expect(useSearchParams).not.toHaveBeenCalled();
    expect(notFound).not.toHaveBeenCalled();
  });

  it('should throw when no params are provided', async () => {
    vi.mocked(usePathname).mockReturnValue('/transaction/');
    expect(() => render(<Transaction />)).not.toThrow();
    expect(usePathname).toHaveBeenCalled();
    expect(useSearchParams).not.toHaveBeenCalled();
    expect(notFound).toHaveBeenCalled();
  });

  it('should throw when slug is null', async () => {
    vi.mocked(usePathname).mockReturnValue('/transaction/null');
    expect(() => render(<Transaction />)).not.toThrow();
    expect(usePathname).toHaveBeenCalled();
    expect(useSearchParams).not.toHaveBeenCalled();
    expect(notFound).toHaveBeenCalled();
  });

  it('should throw when slug is not a string', async () => {
    vi.mocked(usePathname).mockReturnValue('/transaction/true');
    expect(() => render(<Transaction />)).not.toThrow();
    expect(usePathname).toHaveBeenCalled();
    expect(useSearchParams).not.toHaveBeenCalled();
    expect(notFound).toHaveBeenCalled();
  });

  it('should throw when slug is not numeric string', async () => {
    vi.mocked(usePathname).mockReturnValue('/transaction/foo');
    expect(() => render(<Transaction />)).not.toThrow();
    expect(usePathname).toHaveBeenCalled();
    expect(useSearchParams).not.toHaveBeenCalled();
    expect(notFound).toHaveBeenCalled();
  });

  it('renders an async component', async () => {
    vi.mocked(usePathname).mockReturnValue('/transaction/0-0');
    expect(() => render(<Transaction />)).not.toThrow();
    expect(usePathname).toHaveBeenCalled();
    expect(useSearchParams).not.toHaveBeenCalled();
    expect(notFound).not.toHaveBeenCalled();
  });
});

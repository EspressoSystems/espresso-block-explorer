import { render } from '@testing-library/react';
import { notFound, usePathname } from 'next/navigation';
import { afterEach, describe, expect, it, vi } from 'vitest';
import BlockLayout from '../app/block/layout';

vi.mock('next/navigation');

describe('Block', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should not throw', async () => {
    vi.mocked(usePathname).mockReturnValue('/block/0');
    expect(() => render(<BlockLayout>{null}</BlockLayout>)).not.toThrow();
    expect(usePathname).toHaveBeenCalled();
    expect(notFound).not.toHaveBeenCalled();
  });

  it('should throw when no params are provided', async () => {
    vi.mocked(usePathname).mockReturnValue('/block');
    expect(() => render(<BlockLayout>{null}</BlockLayout>)).not.toThrow();
    expect(usePathname).toHaveBeenCalled();
    expect(notFound).toHaveBeenCalled();
  });

  it('should throw when blockID is null', async () => {
    vi.mocked(usePathname).mockReturnValue('/block/null');
    expect(() => render(<BlockLayout>{null}</BlockLayout>)).not.toThrow();
    expect(usePathname).toHaveBeenCalled();
    expect(notFound).toHaveBeenCalled();
  });

  it('should throw when blockID is not a string', async () => {
    vi.mocked(usePathname).mockReturnValue('/block/true');
    expect(() => render(<BlockLayout>{null}</BlockLayout>)).not.toThrow();
    expect(usePathname).toHaveBeenCalled();
    expect(notFound).toHaveBeenCalled();
  });

  it('should throw when blockID is not numeric string', async () => {
    vi.mocked(usePathname).mockReturnValue('/block/foo');
    expect(() => render(<BlockLayout>{null}</BlockLayout>)).not.toThrow();
    expect(usePathname).toHaveBeenCalled();
    expect(notFound).toHaveBeenCalled();
  });

  it('renders an async component', async () => {
    vi.mocked(usePathname).mockReturnValue('/block/0');
    expect(() => render(<BlockLayout>{null}</BlockLayout>)).not.toThrow();
    expect(usePathname).toHaveBeenCalled();
    expect(notFound).not.toHaveBeenCalled();
  });
});

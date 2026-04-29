import { render } from '@testing-library/react';
import { notFound, usePathname } from 'next/navigation';
import { afterEach, describe, expect, it, vi } from 'vitest';
import Block from '../app/block/[blockID]/page';

vi.mock('next/navigation');

describe('Block', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should not throw', async () => {
    vi.mocked(usePathname).mockReturnValue('/block/0');
    expect(() => render(<Block />)).not.toThrow();
    expect(usePathname).toHaveBeenCalled();
    expect(notFound).not.toHaveBeenCalled();
  });

  it('should throw when no params are provided', async () => {
    usePathname.mockReturnValue('/block');
    expect(() => render(<Block />)).not.toThrow();
    expect(usePathname).toHaveBeenCalled();
    expect(notFound).toHaveBeenCalled();
  });

  it('should throw when blockID is null', async () => {
    usePathname.mockReturnValue('/block/null');
    expect(() => render(<Block />)).not.toThrow();
    expect(usePathname).toHaveBeenCalled();
    expect(notFound).toHaveBeenCalled();
  });

  it('should throw when blockID is not a string', async () => {
    usePathname.mockReturnValue('/block/true');
    expect(() => render(<Block />)).not.toThrow();
    expect(usePathname).toHaveBeenCalled();
    expect(notFound).toHaveBeenCalled();
  });

  it('should throw when blockID is not numeric string', async () => {
    usePathname.mockReturnValue('/block/foo');
    expect(() => render(<Block />)).not.toThrow();
    expect(usePathname).toHaveBeenCalled();
    expect(notFound).toHaveBeenCalled();
  });

  it('renders an async component', async () => {
    usePathname.mockReturnValue('/block/0');
    expect(() => render(<Block />)).not.toThrow();
    expect(usePathname).toHaveBeenCalled();
    expect(notFound).not.toHaveBeenCalled();
  });
});

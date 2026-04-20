import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Block from '../app/block/[blockID]/page';
import { ReadonlyURLSearchParams } from 'next/navigation';

const usePathnameMock = vi.fn();
const useSearchParamsMock = vi.fn();

// vi.mock('next/router', () => nextRouterMock);
vi.mock('next/navigation', () => ({
  usePathname: usePathnameMock,
  useSearchParams: useSearchParamsMock,
}));

describe('Block', () => {
  it('should not throw', async () => {
    usePathnameMock.mockReturnValue('/block/0');
    useSearchParamsMock.mockReturnValue(new ReadonlyURLSearchParams());
    await expect(async () => render(<Block />)).resolves.not.toThrow();
  });

  it('should throw when no params are provided', async () => {
    usePathnameMock.mockReturnValue('/block/');
    useSearchParamsMock.mockReturnValue(new ReadonlyURLSearchParams());
    await expect(async () => render(await Block())).rejects.toThrow();
  });

  it('should throw when blockID is null', async () => {
    usePathnameMock.mockReturnValue('/block/null');
    useSearchParamsMock.mockReturnValue(new ReadonlyURLSearchParams());
    await expect(async () => render(await Block())).rejects.toThrow();
  });

  it('should throw when blockID is not a string', async () => {
    usePathnameMock.mockReturnValue('/block/true');
    useSearchParamsMock.mockReturnValue(new ReadonlyURLSearchParams());
    await expect(async () => render(await Block())).rejects.toThrow();
  });

  it('should throw when blockID is not numeric string', async () => {
    usePathnameMock.mockReturnValue('/block/foo');
    useSearchParamsMock.mockReturnValue(new ReadonlyURLSearchParams());

    await expect(async () => render(await Block())).rejects.toThrow();
  });

  it('renders an async component', async () => {
    usePathnameMock.mockReturnValue('/block/0');
    useSearchParamsMock.mockReturnValue(new ReadonlyURLSearchParams());

    await expect(async () => render(await Block())).resolves.not.toThrow();
  });
});

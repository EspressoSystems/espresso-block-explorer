import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import RollUp from '../app/rollup/[namespace]/page';

describe('RollUp', () => {
  it('should not throw', () => {
    render(<RollUp />);
  });

  it('should throw when no params are provided', async () => {
    await expect(async () =>
      render(
        await RollUp({
          params: Promise.resolve({}),
          searchParams: Promise.resolve({}),
        }),
      ),
    ).rejects.toThrow();
  });

  it('should throw when namespace is null', async () => {
    await expect(async () =>
      render(
        await RollUp({
          params: Promise.resolve({ namespace: null }),
          searchParams: Promise.resolve({}),
        }),
      ),
    ).rejects.toThrow();
  });

  it('should throw when namespace is not a string', async () => {
    await expect(async () =>
      render(
        await RollUp({
          params: Promise.resolve({ namespace: true }),
          searchParams: Promise.resolve({}),
        }),
      ),
    ).rejects.toThrow();
  });

  it('should throw when namespace is not numeric string', async () => {
    await expect(async () =>
      render(
        await RollUp({
          params: Promise.resolve({ namespace: 'foo' }),
          searchParams: Promise.resolve({}),
        }),
      ),
    ).rejects.toThrow();
  });

  it('renders an async component', async () => {
    render(
      await RollUp({
        params: Promise.resolve({ namespace: '0' }),
        searchParams: Promise.resolve({}),
      }),
    );
  });
});

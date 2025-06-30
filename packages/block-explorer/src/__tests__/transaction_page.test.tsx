import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Transaction from '../app/transaction/[slug]/page';

describe('Transaction', () => {
  it('should not throw', () => {
    render(<Transaction />);
  });

  it('should throw when no params are provided', async () => {
    await expect(async () =>
      render(
        await Transaction({
          params: Promise.resolve({}),
        }),
      ),
    ).rejects.toThrow();
  });

  it('should throw when slug is null', async () => {
    await expect(async () =>
      render(
        await Transaction({
          params: Promise.resolve({ slug: null }),
        }),
      ),
    ).rejects.toThrow();
  });

  it('should throw when slug is not a string', async () => {
    await expect(async () =>
      render(
        await Transaction({
          params: Promise.resolve({ slug: true }),
        }),
      ),
    ).rejects.toThrow();
  });

  it('should throw when slug is not numeric string', async () => {
    await expect(async () =>
      render(
        await Transaction({
          params: Promise.resolve({ slug: 'foo' }),
        }),
      ),
    ).rejects.toThrow();
  });

  it('renders an async component', async () => {
    render(
      await Transaction({
        params: Promise.resolve({ slug: '0' }),
      }),
    );
  });
});

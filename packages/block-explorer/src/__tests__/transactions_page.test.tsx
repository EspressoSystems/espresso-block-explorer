import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Transactions from '../app/transactions/page';

describe('Transactions', () => {
  it('should not throw', () => {
    render(<Transactions />);
  });

  it('should not throw when no params are provided', async () => {
    await expect(
      (async () =>
        render(await Transactions({ searchParams: Promise.resolve({}) })))(),
    ).resolves.toBeTruthy();
  });
});

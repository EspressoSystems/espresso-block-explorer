import { render } from '@testing-library/react';
import nextRouterMock from 'next-router-mock';
import { describe, it, vi } from 'vitest';
import Transactions from '../app/transactions/page';

vi.mock('next/router', () => nextRouterMock);
vi.mock('next/navigation', () => {
  return {
    usePathName: () => {
      return '/transactions';
    },
    useParams: () => {
      return {};
    },
    useSearchParams: () => {
      return new URLSearchParams();
    },
  };
});

describe('Transactions', () => {
  it('should not throw', () => {
    render(<Transactions />);
  });
});

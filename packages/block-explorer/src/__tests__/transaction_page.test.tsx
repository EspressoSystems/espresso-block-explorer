import { render } from '@testing-library/react';
import nextRouterMock from 'next-router-mock';
import { describe, it, vi } from 'vitest';
import Transaction from '../app/transaction/[slug]/page';

vi.mock('next/router', () => nextRouterMock);
vi.mock('next/navigation', () => {
  return {
    usePathName: () => {
      return '/transaction/0-0';
    },
    useParams: () => {
      return {
        slug: '0-0',
      };
    },
    useSearchParams: () => {
      return new URLSearchParams();
    },
  };
});

describe('Transaction', () => {
  it('should not throw', () => {
    render(<Transaction />);
  });
});

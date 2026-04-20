import { render } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import Transactions from '../transactions';

const useSearchParamsMock = vi.fn();
vi.mock('next/navigation', () => ({
  usePathname: () => '/transctions',
  useSearchParams: useSearchParamsMock,
}));

describe('Transactions', () => {
  it('should not throw', () => {
    render(<Transactions />);
  });

  it('should not throw', () => {
    useSearchParamsMock.mockReturnValue(0);
    render(<Transactions />);
  });
});

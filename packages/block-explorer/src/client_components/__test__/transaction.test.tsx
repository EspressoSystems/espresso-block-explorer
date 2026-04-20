import { render } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import Transaction from '../transaction';

vi.mock('next/navigation', () => ({
  usePathname: () => '/transaction/0-0',
}));

describe('Transaction', () => {
  it('should not throw', () => {
    render(<Transaction />);
  });
});

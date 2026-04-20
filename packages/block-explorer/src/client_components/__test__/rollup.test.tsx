import { render } from '@testing-library/react';
import { ReadonlyURLSearchParams } from 'next/navigation';
import { describe, it, vi } from 'vitest';
import Rollup from '../rollup';

vi.mock('next/navigation', () => ({
  usePathname: () => '/rollup/0',
  useSearchParams: () => new ReadonlyURLSearchParams(),
}));

describe('Rollup', () => {
  it('should not throw', () => {
    render(<Rollup />);
  });
});

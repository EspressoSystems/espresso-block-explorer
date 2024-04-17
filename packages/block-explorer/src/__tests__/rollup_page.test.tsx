import { render } from '@testing-library/react';
import nextRouterMock from 'next-router-mock';
import { describe, it, vi } from 'vitest';
import RollUp from '../app/rollup/[namespace]/page';

vi.mock('next/router', () => nextRouterMock);
vi.mock('next/navigation', () => {
  return {
    usePathName: () => {
      return '/rollup/202374881';
    },
    useParams: () => {
      return {
        namespace: '202374881',
      };
    },
    useSearchParams: () => {
      return new URLSearchParams();
    },
  };
});

describe('RollUp', () => {
  it('should not throw', () => {
    render(<RollUp />);
  });
});

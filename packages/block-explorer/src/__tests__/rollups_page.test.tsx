import { render } from '@testing-library/react';
import nextRouterMock from 'next-router-mock';
import { describe, it, vi } from 'vitest';
import RollUps from '../app/rollups/page';

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

describe('RollUps', () => {
  it('should not throw', () => {
    render(<RollUps />);
  });
});

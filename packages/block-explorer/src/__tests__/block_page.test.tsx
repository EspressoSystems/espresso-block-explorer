import { render } from '@testing-library/react';
import nextRouterMock from 'next-router-mock';
import { describe, it, vi } from 'vitest';
import Block from '../app/block/[blockID]/page';

vi.mock('next/router', () => nextRouterMock);
vi.mock('next/navigation', () => {
  return {
    usePathName: () => {
      return '/block/0';
    },
    useParams: () => {
      return {
        blockID: '0',
      };
    },
    useSearchParams: () => {
      return new URLSearchParams();
    },
  };
});

describe('Block', () => {
  it('should not throw', () => {
    render(<Block />);
  });
});

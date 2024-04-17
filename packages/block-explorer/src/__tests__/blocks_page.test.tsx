import { render } from '@testing-library/react';
import nextRouterMock from 'next-router-mock';
import { describe, it, vi } from 'vitest';
import Blocks from '../app/blocks/page';

vi.mock('next/router', () => nextRouterMock);
vi.mock('next/navigation', () => {
  return {
    usePathName: () => {
      return '/blocks';
    },
    useParams: () => {
      return {};
    },
    useSearchParams: () => {
      return new URLSearchParams();
    },
  };
});

describe('Blocks', () => {
  it('should not throw', () => {
    render(<Blocks />);
  });
});

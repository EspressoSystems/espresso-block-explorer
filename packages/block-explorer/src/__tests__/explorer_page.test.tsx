import { render } from '@testing-library/react';
import nextRouterMock from 'next-router-mock';
import { describe, it, vi } from 'vitest';
import Explorer from '../app/page';

vi.mock('next/router', () => nextRouterMock);
vi.mock('next/navigation', () => {
  return {
    usePathName: () => {
      return '/';
    },
    useParams: () => {
      return {};
    },
    useSearchParams: () => {
      return new URLSearchParams();
    },
  };
});

describe('Explorer', () => {
  it('should not throw', () => {
    render(<Explorer />);
  });
});

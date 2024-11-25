import { render } from '@testing-library/react';
import nextRouterMock from 'next-router-mock';
import { describe, it, vi } from 'vitest';
import Home from '../app/page';

vi.mock('next/router', () => nextRouterMock);
vi.mock('next/navigation', () => {
  return {
    usePathName: () => {
      return '/';
    },
  };
});

describe('Block', () => {
  it('should not throw', () => {
    render(<Home />);
  });
});

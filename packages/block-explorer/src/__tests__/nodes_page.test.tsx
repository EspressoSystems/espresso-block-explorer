import { render } from '@testing-library/react';
import nextRouterMock from 'next-router-mock';
import { describe, it, vi } from 'vitest';
import Nodes from '../app/nodes/page';

vi.mock('next/router', () => nextRouterMock);
vi.mock('next/navigation', () => {
  return {
    usePathName: () => {
      return '/nodes';
    },
  };
});

describe('RollUp', () => {
  it('should not throw', () => {
    render(<Nodes />);
  });
});

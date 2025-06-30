import { render } from '@testing-library/react';
import nextRouterMock from 'next-router-mock';
import { describe, it, vi } from 'vitest';
import Layout from '../app/layout';

vi.mock('next/router', () => nextRouterMock);
vi.mock('next/navigation', () => {
  return {
    usePathName: () => {
      return '/';
    },
  };
});

describe('Layout', () => {
  it('should not throw', () => {
    render(
      <Layout>
        <div />
      </Layout>,
    );
  });
});

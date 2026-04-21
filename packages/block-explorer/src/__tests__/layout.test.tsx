import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Layout from '../app/layout';

describe('Block Explorer/Components/Links/Layout', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should not throw', async () => {
    expect(() =>
      render(
        <Layout>
          <div />
        </Layout>,
      ),
    ).not.toThrow();
  });
});

import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import Layout from '../layout';

describe('Block Explorer/Components/Links/Layout', () => {
  it('should not throw', () => {
    render(
      <Layout>
        <div />
      </Layout>,
    );
  });
});

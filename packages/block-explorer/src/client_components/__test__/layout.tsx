import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import Layout from '../layout';

describe('Block Explorer/Components/Links/Layout', () => {
  it('should not throw', () => {
    render(
      <Layout
        env={{
          environment: 'fakeData',
          contract_address_esp_token: null,
          contract_address_stake_table: null,
        }}
      >
        <div />
      </Layout>,
    );
  });
});

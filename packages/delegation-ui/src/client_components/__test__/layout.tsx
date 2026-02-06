import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import Layout from '../layout';

describe('Block Explorer/Components/Links/Layout', () => {
  it('should not throw', () => {
    render(
      <Layout
        env={{
          environment: 'fakeData',
          contract_address_stake_table:
            '0x0000000000000000000000000000000000000000',
          contract_address_esp_token:
            '0x0000000000000000000000000000000000000000',
          contract_address_reward_claim:
            '0x0000000000000000000000000000000000000000',
          contract_address_light_client:
            '0x0000000000000000000000000000000000000000',
          walletconnect_project_id: null,
        }}
      >
        <div />
      </Layout>,
    );
  });
});

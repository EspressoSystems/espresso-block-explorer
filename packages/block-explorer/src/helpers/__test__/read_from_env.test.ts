import { Environment } from 'espresso-block-explorer-components';
import { describe, expect, it } from 'vitest';
import { readFromEnv } from '../read_from_env';

describe('Reader From ENV', () => {
  it('should resolve environment from ENVIRONMENT_NAME', () => {
    process.env.ENVIRONMENT_NAME = 'decaf';

    expect(readFromEnv()).to.deep.equal({
      environment: Environment.decaf,
      contract_address_stake_table: null,
      contract_address_esp_token: null,
    });

    process.env.ENVIRONMENT_NAME = 'milk';
    expect(readFromEnv()).to.deep.equal({
      environment: Environment.milk,
      contract_address_stake_table: null,
      contract_address_esp_token: null,
    });

    process.env.ENVIRONMENT_NAME = 'water';
    expect(readFromEnv()).to.deep.equal({
      environment: Environment.water,
      contract_address_stake_table: null,
      contract_address_esp_token: null,
    });

    process.env.ENVIRONMENT_NAME = 'mainnet';
    expect(readFromEnv()).to.deep.equal({
      environment: Environment.mainnet,
      contract_address_stake_table: null,
      contract_address_esp_token: null,
    });

    process.env.CONTRACT_ADDRESS_STAKE_TABLE = '1234';
    process.env.CONTRACT_ADDRESS_ESP_TOKEN = '5678';
    expect(readFromEnv()).to.deep.equal({
      environment: Environment.mainnet,
      contract_address_stake_table: null,
      contract_address_esp_token: null,
    });

    process.env.CONTRACT_ADDRESS_STAKE_TABLE = '0x1234';
    process.env.CONTRACT_ADDRESS_ESP_TOKEN = '0x5678';
    expect(readFromEnv()).to.deep.equal({
      environment: Environment.mainnet,
      contract_address_stake_table: '0x1234',
      contract_address_esp_token: '0x5678',
    });
  });
});

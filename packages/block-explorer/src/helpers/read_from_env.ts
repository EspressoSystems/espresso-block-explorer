/**
 * determineEnvironment determines the environment based on the
 * ENVIRONMENT_NAME environment variable.
 * It returns the appropriate Environment enum value.
 * If the environment variable is not set or does not match any known
 * environment, it defaults to Environment.mainnet.
 */
export function determineEnvironmentFromVariable(
  environmentName?: string,
): string {
  switch (environmentName) {
    case 'decaf':
      return 'decaf';
    case 'water':
      return 'water';
    case 'milk':
      return 'milk';
    case 'fakeData':
      return 'fakeData';
    case 'mainnet':
      return 'mainnet';
    default:
      return 'mainnet';
  }
}

export function validateContractAddress(
  address: null | undefined | string,
): null | `0x${string}` {
  if (address === null || address === undefined || address === '') {
    return null;
  }

  if (!address.startsWith('0x')) {
    return null;
  }

  return address as `0x${string}`;
}

export interface EnvironmentConfig {
  environment: string;
  contract_address_stake_table: null | `0x${string}`;
  contract_address_esp_token: null | `0x${string}`;
}

/**
 * readFromEnv reads the environment variables and returns an object
 * containing the environment and contract addresses.
 */
export function readFromEnv() {
  return {
    environment: determineEnvironmentFromVariable(process.env.ENVIRONMENT_NAME),
    contract_address_stake_table: validateContractAddress(
      process.env.CONTRACT_ADDRESS_STAKE_TABLE,
    ),
    contract_address_esp_token: validateContractAddress(
      process.env.CONTRACT_ADDRESS_ESP_TOKEN,
    ),
  } as const satisfies EnvironmentConfig;
}

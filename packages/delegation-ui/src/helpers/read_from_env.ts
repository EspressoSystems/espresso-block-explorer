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

/**
 * isValidURL returns whether the given string is a valid URL or not.
 */
function isValidURL(urlString: string): boolean {
  try {
    new URL(urlString);
    return true;
  } catch {
    return false;
  }
}

/**
 * parseRPCURLs takes an environment variable, and returns the valid list of
 * RPC URLS within them.
 *
 * The value is expected to be a comma separated list of URL strings.
 */
export function parseRPCURLs(envValue: string | undefined): null | string[] {
  if (!envValue || envValue.trim() === '') {
    return null;
  }

  const urls = envValue
    .split(',')
    .map((url) => url.trim())
    .filter(isValidURL);

  if (urls.length === 0) {
    return null;
  }

  return urls;
}

export interface EnvironmentConfig {
  environment: string;
  contract_address_stake_table: null | `0x${string}`;
  contract_address_esp_token: null | `0x${string}`;
  contract_address_reward_claim: null | `0x${string}`;
  contract_address_light_client: null | `0x${string}`;
  walletconnect_project_id: null | string;
  rpc_urls: null | string[];
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
    contract_address_reward_claim: validateContractAddress(
      process.env.CONTRACT_ADDRESS_REWARD_CLAIM,
    ),
    contract_address_light_client: validateContractAddress(
      process.env.CONTRACT_ADDRESS_LIGHT_CLIENT,
    ),
    walletconnect_project_id: process.env.WALLETCONNECT_PROJECT_ID || null,
    rpc_urls: parseRPCURLs(process.env.RPC_URLS),
  } as const satisfies EnvironmentConfig;
}

import { cacheLife, cacheTag } from 'next/cache';

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

/**
 * EnvironmentConfig represents the configuration of the Delegation UI that
 * is derived from Environment variables.
 */
export interface EnvironmentConfig {
  environment: string;
  contract_address_stake_table: null | `0x${string}`;
  contract_address_esp_token: null | `0x${string}`;
  contract_address_reward_claim: null | `0x${string}`;
  contract_address_light_client: null | `0x${string}`;
  walletconnect_project_id: null | string;
  rpc_urls: null | string[];
  proof_of_stake_released: boolean;
  base_url: null | string;
  base_path: null | string;
}

/**
 * booleanEnv is an input validator / sanitizer that is utilized to ensure that
 * the given string is a valid `boolean` value.
 */
function booleanEnv(input: unknown): boolean {
  if (typeof input !== 'string') {
    return false;
  }

  const trimmed = input.trim();

  switch (trimmed.toLowerCase()) {
    // We explicitly handle the string "false" in order to ensure that
    // this is interpretted as false.
    case 'false':
      return false;

    // We explicitly handle the string "0" in order to ensure that this
    // is interpretted as false.
    case '0':
      return false;

    default:
      return Boolean(input.trim());
  }
}

/**
 * urlEnv is an input validator / sanitizer that is utilized to ensure that
 * environment variables are valid URL strings.
 */
function urlEnv(input: unknown): null | string {
  if (typeof input !== 'string') {
    return null;
  }

  const trimmed = input.trim();

  if (!isValidURL(trimmed)) {
    return null;
  }

  return trimmed;
}

/**
 * readFromEnv reads the environment variables and returns an object
 * containing the environment and contract addresses.
 */
export async function readFromEnv() {
  'use cache';
  cacheTag('ENV');
  cacheLife('max');

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
    proof_of_stake_released: booleanEnv(process.env.PROOF_OF_STAKE_RELEASED),
    base_url: urlEnv(process.env.BASE_URL) || null,
    base_path: process.env.BASE_PATH || null,
  } as const satisfies EnvironmentConfig;
}

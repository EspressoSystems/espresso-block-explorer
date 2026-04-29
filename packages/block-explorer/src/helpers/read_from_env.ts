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
    case 'main':
      return 'mainnet';
    case 'mainnet':
      return 'mainnet';
    default:
      return 'mainnet';
  }
}

export interface SiteTitleConfig {
  sitePrefix: string;
  networkSiteName: string;
}

/**
 * getSiteTitleConfig maps a resolved environment key to the display strings
 * used in page titles.  The same mapping is mirrored in the bash case statement
 * in docker/block-explorer-init.sh — keep both in sync when adding environments.
 */
export function getSiteTitleConfig(environment: string): SiteTitleConfig {
  switch (environment) {
    case 'decaf':
      return {
        sitePrefix: 'TESTNET',
        networkSiteName: 'Espresso Decaf Block Network',
      };

    case 'milk':
      return {
        sitePrefix: 'DEVNET',
        networkSiteName: 'Espresso Milk Block Network',
      };

    case 'water':
      return {
        sitePrefix: 'DEVNET',
        networkSiteName: 'Espresso Water Block Network',
      };

    default:
      return {
        sitePrefix: 'MAINNET',
        networkSiteName: 'Espresso Block Explorer',
      };
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
}

/**
 * readFromEnv reads the environment variables and returns an object
 * containing the environment and contract addresses.
 */
export function readFromEnv() {
  return {
    environment: determineEnvironmentFromVariable(process.env.ENVIRONMENT_NAME),
  } as const satisfies EnvironmentConfig;
}

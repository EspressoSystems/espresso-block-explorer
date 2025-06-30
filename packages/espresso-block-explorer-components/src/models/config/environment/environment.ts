/**
 * Environment represents the different environments in which the
 * Espresso Block Explorer can operate.
 *
 * This enum pre-defines the known environments in which we normally operate
 * the Block Explorer.
 * These values are predominately informational only.
 *
 * In order to be able to utilize the Web3 components, the appropriate
 * environment configuration must be provided.
 */
export enum Environment {
  mainnet = 'mainnet',
  decaf = 'decaf',
  milk = 'milk',
  water = 'water',
  fakeData = 'fakeData',
}

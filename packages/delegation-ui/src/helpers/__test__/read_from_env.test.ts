import { Environment } from 'espresso-block-explorer-components';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { parseRPCURLs, readFromEnv } from '../read_from_env';

describe('Reader From ENV', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    // Reset process.env before each test
    process.env = { ...originalEnv };
    delete process.env.RPC_URLS;
  });

  afterEach(() => {
    // Restore process.env after each test
    process.env = originalEnv;
  });

  it('should resolve environment from ENVIRONMENT_NAME', () => {
    process.env.ENVIRONMENT_NAME = 'decaf';

    expect(readFromEnv()).to.deep.equal({
      environment: Environment.decaf,
      contract_address_stake_table: null,
      contract_address_esp_token: null,
      contract_address_reward_claim: null,
      contract_address_light_client: null,
      walletconnect_project_id: null,
      rpc_urls: null,
      proof_of_stake_released: false,
    });

    process.env.ENVIRONMENT_NAME = 'milk';
    expect(readFromEnv()).to.deep.equal({
      environment: Environment.milk,
      contract_address_stake_table: null,
      contract_address_esp_token: null,
      contract_address_reward_claim: null,
      contract_address_light_client: null,
      walletconnect_project_id: null,
      rpc_urls: null,
      proof_of_stake_released: false,
    });

    process.env.ENVIRONMENT_NAME = 'water';
    expect(readFromEnv()).to.deep.equal({
      environment: Environment.water,
      contract_address_stake_table: null,
      contract_address_esp_token: null,
      contract_address_reward_claim: null,
      contract_address_light_client: null,
      walletconnect_project_id: null,
      rpc_urls: null,
      proof_of_stake_released: false,
    });

    process.env.ENVIRONMENT_NAME = 'mainnet';
    expect(readFromEnv()).to.deep.equal({
      environment: Environment.mainnet,
      contract_address_stake_table: null,
      contract_address_esp_token: null,
      contract_address_reward_claim: null,
      contract_address_light_client: null,
      walletconnect_project_id: null,
      rpc_urls: null,
      proof_of_stake_released: false,
    });

    process.env.CONTRACT_ADDRESS_STAKE_TABLE = '1234';
    process.env.CONTRACT_ADDRESS_ESP_TOKEN = '5678';
    process.env.CONTRACT_ADDRESS_REWARD_CLAIM = '9012';
    process.env.CONTRACT_ADDRESS_LIGHT_CLIENT = '3456';
    expect(readFromEnv()).to.deep.equal({
      environment: Environment.mainnet,
      contract_address_stake_table: null,
      contract_address_esp_token: null,
      contract_address_reward_claim: null,
      contract_address_light_client: null,
      walletconnect_project_id: null,
      rpc_urls: null,
      proof_of_stake_released: false,
    });

    process.env.CONTRACT_ADDRESS_STAKE_TABLE = '0x1234';
    process.env.CONTRACT_ADDRESS_ESP_TOKEN = '0x5678';
    process.env.CONTRACT_ADDRESS_REWARD_CLAIM = '0x9012';
    process.env.CONTRACT_ADDRESS_LIGHT_CLIENT = '0x3456';
    expect(readFromEnv()).to.deep.equal({
      environment: Environment.mainnet,
      contract_address_stake_table: '0x1234',
      contract_address_esp_token: '0x5678',
      contract_address_reward_claim: '0x9012',
      contract_address_light_client: '0x3456',
      walletconnect_project_id: null,
      rpc_urls: null,
      proof_of_stake_released: false,
    });
  });

  it('should parse RPC_URLS environment variable', () => {
    process.env.ENVIRONMENT_NAME = 'water';
    process.env.RPC_URLS = 'https://rpc1.example.com,https://rpc2.example.com';

    const result = readFromEnv();
    expect(result.rpc_urls).toEqual([
      'https://rpc1.example.com',
      'https://rpc2.example.com',
    ]);
  });

  it('should handle empty RPC_URLS', () => {
    process.env.ENVIRONMENT_NAME = 'water';
    process.env.RPC_URLS = '';

    const result = readFromEnv();
    expect(result.rpc_urls).toBeNull();
  });

  it('should handle RPC_URLS with multiple fallbacks', () => {
    process.env.ENVIRONMENT_NAME = 'mainnet';
    process.env.RPC_URLS = 'https://rpc1.com,https://rpc2.com,https://rpc3.com';

    const result = readFromEnv();
    expect(result.rpc_urls).toEqual([
      'https://rpc1.com',
      'https://rpc2.com',
      'https://rpc3.com',
    ]);
  });
});

describe('parseRPCURLs', () => {
  it('should return null when no value is provided', () => {
    expect(parseRPCURLs(undefined)).toBeNull();
    expect(parseRPCURLs('')).toBeNull();
    expect(parseRPCURLs('   ')).toBeNull();
  });

  it('should parse single URL', () => {
    const result = parseRPCURLs('https://rpc.example.com');
    expect(result).toEqual(['https://rpc.example.com']);
  });

  it('should parse multiple URLs', () => {
    const result = parseRPCURLs(
      'https://rpc1.example.com,https://rpc2.example.com,https://rpc3.example.com',
    );
    expect(result).toEqual([
      'https://rpc1.example.com',
      'https://rpc2.example.com',
      'https://rpc3.example.com',
    ]);
  });

  it('should trim whitespace from URLs', () => {
    const result = parseRPCURLs(
      '  https://rpc1.example.com  ,  https://rpc2.example.com  ',
    );
    expect(result).toEqual([
      'https://rpc1.example.com',
      'https://rpc2.example.com',
    ]);
  });

  it('should filter out invalid URLs', () => {
    const result = parseRPCURLs(
      'https://valid.com,invalid-url,https://another-valid.com',
    );
    expect(result).toEqual(['https://valid.com', 'https://another-valid.com']);
  });

  it('should return null when all URLs are invalid', () => {
    const result = parseRPCURLs('invalid-url-1,invalid-url-2,not-a-url');
    expect(result).toBeNull();
  });

  it('should accept HTTP and HTTPS URLs', () => {
    const result = parseRPCURLs('https://rpc1.com,http://localhost:8545');
    expect(result).toEqual(['https://rpc1.com', 'http://localhost:8545']);
  });

  it('should skip empty strings after trimming', () => {
    const result = parseRPCURLs('https://rpc1.url,  ,https://rpc2.url, ');
    expect(result).toEqual(['https://rpc1.url', 'https://rpc2.url']);
  });

  it('should handle URLs with ports', () => {
    const result = parseRPCURLs(
      'https://rpc.example.com:8545,http://localhost:8555',
    );
    expect(result).toEqual([
      'https://rpc.example.com:8545',
      'http://localhost:8555',
    ]);
  });

  it('should handle URLs with paths', () => {
    const result = parseRPCURLs(
      'https://rpc.example.com/v1/mainnet,https://rpc.example.com/v2/mainnet',
    );
    expect(result).toEqual([
      'https://rpc.example.com/v1/mainnet',
      'https://rpc.example.com/v2/mainnet',
    ]);
  });

  it('should handle mixed valid and invalid URLs with whitespace', () => {
    const result = parseRPCURLs(
      ' https://valid1.com , not-valid , https://valid2.com , , also-invalid ',
    );
    expect(result).toEqual(['https://valid1.com', 'https://valid2.com']);
  });
});

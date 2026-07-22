import { Environment } from 'espresso-block-explorer-components';
import { describe, expect, it } from 'vitest';
import {
  decaf,
  fakeData,
  getWagmiConfigForEnvironment,
  localDevNet,
  mainnet,
  milk,
  water,
} from '../wagmi';

describe('Wagmi Configuration', () => {
  describe('Static configs', () => {
    it('should have valid mainnet config', () => {
      expect(mainnet).toBeDefined();
      expect(mainnet.chains).toHaveLength(1);
      expect(mainnet.chains[0].name).toBe('Ethereum');
    });

    it('should have valid decaf config', () => {
      expect(decaf).toBeDefined();
      expect(decaf.chains).toHaveLength(1);
      expect(decaf.chains[0].name).toBe('Sepolia');
    });

    it('should have valid water config', () => {
      expect(water).toBeDefined();
      expect(water.chains).toHaveLength(1);
      expect(water.chains[0].name).toBe('RETH (water)');
      expect(water.chains[0].id).toBe(1337);
      expect(water.chains[0].testnet).toBe(true);
    });

    it('should have valid milk config', () => {
      expect(milk).toBeDefined();
      expect(milk.chains).toHaveLength(1);
      expect(milk.chains[0].name).toBe('RETH (milk)');
      expect(milk.chains[0].id).toBe(1337);
      expect(milk.chains[0].testnet).toBe(true);
    });

    it('should have valid localDevNet config', () => {
      expect(localDevNet).toBeDefined();
      expect(localDevNet.chains).toHaveLength(1);
      expect(localDevNet.chains[0].name).toBe('RETH (Local DevNet)');
      expect(localDevNet.chains[0].id).toBe(31337);
      expect(localDevNet.chains[0].testnet).toBe(true);
    });

    it('should have valid fakeData config', () => {
      expect(fakeData).toBeDefined();
      expect(fakeData.chains).toHaveLength(1);
      expect(fakeData.chains[0].name).toBe('Fake Data');
      expect(fakeData.chains[0].id).toBe(31337);
      expect(fakeData.chains[0].testnet).toBe(true);
    });
  });

  describe('getWagmiConfigForEnvironment', () => {
    it('should return mainnet config for mainnet environment', () => {
      const config = getWagmiConfigForEnvironment(Environment.mainnet);
      expect(config).toBe(mainnet);
    });

    it('should return decaf config for decaf environment', () => {
      const config = getWagmiConfigForEnvironment(Environment.decaf);
      expect(config).toBe(decaf);
    });

    it('should return water config for water environment', () => {
      const config = getWagmiConfigForEnvironment(Environment.water);
      expect(config).toBe(water);
    });

    it('should return milk config for milk environment', () => {
      const config = getWagmiConfigForEnvironment(Environment.milk);
      expect(config).toBe(milk);
    });

    it('should return localDevNet config for localDevNet environment', () => {
      const config = getWagmiConfigForEnvironment(Environment.localDevNet);
      expect(config).toBe(localDevNet);
    });

    it('should return fakeData config for fakeData environment', () => {
      const config = getWagmiConfigForEnvironment(Environment.fakeData);
      expect(config).toBe(fakeData);
    });

    it('should throw error for invalid environment', () => {
      expect(() => {
        getWagmiConfigForEnvironment('invalid-environment' as any);
      }).toThrow('Unsupported environment');
    });
  });

  describe('Config structure', () => {
    it('should have all required config properties', () => {
      // Verify configs have chains
      expect(mainnet.chains).toBeDefined();
      expect(decaf.chains).toBeDefined();
      expect(water.chains).toBeDefined();
      expect(milk.chains).toBeDefined();
      expect(localDevNet.chains).toBeDefined();
      expect(fakeData.chains).toBeDefined();

      // Verify each config has exactly one chain
      expect(mainnet.chains.length).toBe(1);
      expect(decaf.chains.length).toBe(1);
      expect(water.chains.length).toBe(1);
      expect(milk.chains.length).toBe(1);
      expect(localDevNet.chains.length).toBe(1);
      expect(fakeData.chains.length).toBe(1);
    });
  });

  describe('Chain properties', () => {
    it('should have correct chain IDs', () => {
      expect(mainnet.chains[0].id).toBe(1);
      expect(decaf.chains[0].id).toBe(11155111);
      expect(water.chains[0].id).toBe(1337);
      expect(milk.chains[0].id).toBe(1337);
      expect(localDevNet.chains[0].id).toBe(31337);
      expect(fakeData.chains[0].id).toBe(31337);
    });

    it('should mark devnet chains as testnet', () => {
      expect(water.chains[0].testnet).toBe(true);
      expect(milk.chains[0].testnet).toBe(true);
      expect(localDevNet.chains[0].testnet).toBe(true);
      expect(fakeData.chains[0].testnet).toBe(true);
    });

    it('should have correct native currencies', () => {
      expect(mainnet.chains[0].nativeCurrency.symbol).toBe('ETH');
      expect(decaf.chains[0].nativeCurrency.symbol).toBe('ETH');
      expect(water.chains[0].nativeCurrency.symbol).toBe('ETH');
      expect(milk.chains[0].nativeCurrency.symbol).toBe('ETH');
      expect(localDevNet.chains[0].nativeCurrency.symbol).toBe('ETH');
      expect(fakeData.chains[0].nativeCurrency.symbol).toBe('ETH');
    });
  });

  describe('RPC URLs', () => {
    it('should have default RPC URLs configured', () => {
      expect(water.chains[0].rpcUrls.default.http).toContain('https://reth.water.devnet.espresso.network');
      expect(milk.chains[0].rpcUrls.default.http).toContain('https://reth.milk.devnet.espresso.network');
      expect(localDevNet.chains[0].rpcUrls.default.http).toContain('http://localhost:8545');
    });

    it('should have WebSocket URLs configured for devnets', () => {
      expect(water.chains[0].rpcUrls.default.webSocket).toContain('wss://wsreth.water.devnet.espresso.network');
      expect(milk.chains[0].rpcUrls.default.webSocket).toContain('wss://wsgeth.milk.devnet.espresso.network');
      expect(localDevNet.chains[0].rpcUrls.default.webSocket).toContain('ws://localhost:8546');
    });
  });
});

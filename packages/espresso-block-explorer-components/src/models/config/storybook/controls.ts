import { Environment } from '../environment/environment';

export const environmentControlArgType = {
  options: [
    Environment.water,
    Environment.milk,
    Environment.mainnet,
    Environment.decaf,
    Environment.fakeData,
    Environment.localDevNet,
  ],
  control: { type: 'select' },
  description:
    'Environment to use for the Nodes Page, if only this is specified, the rest of the fields will be derived from the environment.',
} as const;

export const stakeTableContractAddressControlArgType = {
  control: { type: 'text' },
  description: 'Stake Table Contract Address',
} as const;

export const espTokenContractAddressControlArgType = {
  control: { type: 'text' },
  description: 'ESP Token Contract Address',
} as const;

export const queryServiceNodeURLControlArgType = {
  control: { type: 'text' },
  description:
    'Query Service Node URL (starting with http:// or https://, ending with the version. Eg: http://localhost:9000/v0/)',
} as const;

export const nodeValidatorWebSocketURLControlArgType = {
  control: { type: 'text' },
  description:
    'Node Validator WebSocket URL (starting with ws:// or wss://, ending with the version. E?. ws://localhost:9000/v0/)',
} as const;

export const environmentArgTypes = {
  environment: environmentControlArgType,
  hotshotQueryServiceURL: queryServiceNodeURLControlArgType,
  nodeValidatorWebSocketURL: nodeValidatorWebSocketURLControlArgType,
} as const;

export const environmentArgTypesWithContracts = {
  ...environmentArgTypes,
  stakeTableContractAddress: stakeTableContractAddressControlArgType,
  espTokenContractAddress: espTokenContractAddressControlArgType,
} as const;

export interface EnvironmentArgs {
  environment: Environment;
  hotshotQueryServiceURL?: string;
  nodeValidatorWebSocketURL?: string;
}

export interface EnvironmentWithContractsArgs extends EnvironmentArgs {
  stakeTableContractAddress?: `0x${string}`;
  espTokenContractAddress?: `0x${string}`;
}

export const environmentArgsMilk: EnvironmentArgs = {
  environment: Environment.milk,
  hotshotQueryServiceURL: 'https://query.milk.devnet.espresso.network/v0/',
  nodeValidatorWebSocketURL: 'wss://nv.milk.devnet.espresso.network/v0/',
};

export const environmentArgsMilkWithContracts: EnvironmentWithContractsArgs = {
  ...environmentArgsMilk,
  stakeTableContractAddress: '0xed1db453c3156ff3155a97ad217b3087d5dc5f6e',
  espTokenContractAddress: '0xe1aa25618fa0c7a1cfdab5d6b456af611873b629',
};

export const environmentArgsWater: EnvironmentArgs = {
  environment: Environment.water,
  hotshotQueryServiceURL: 'https://query.water.devnet.espresso.network/v0/',
  nodeValidatorWebSocketURL: 'wss://nv.water.devnet.espresso.network/v0/',
};

export const environmentArgsWaterWithContracts: EnvironmentWithContractsArgs = {
  ...environmentArgsWater,
  stakeTableContractAddress: '0xed1db453c3156ff3155a97ad217b3087d5dc5f6e',
  espTokenContractAddress: '0xe1aa25618fa0c7a1cfdab5d6b456af611873b629',
};

export const environmentArgsDecaf: EnvironmentArgs = {
  environment: Environment.decaf,
  hotshotQueryServiceURL: 'https://query.decaf.testnet.espresso.network/v0/',
  nodeValidatorWebSocketURL: 'wss://nv.decaf.testnet.espresso.network/v0/',
};

export const environmentArgsDecafWithContracts: EnvironmentWithContractsArgs = {
  ...environmentArgsDecaf,
  stakeTableContractAddress: '0x40304fbe94d5e7d1492dd90c53a2d63e8506a037',
  espTokenContractAddress: '0xb3e655a030e2e34a18b72757b40be086a8f43f3b',
};

export const environmentArgsMainnet: EnvironmentArgs = {
  environment: Environment.mainnet,
  hotshotQueryServiceURL: 'https://query.main.net.espresso.network/v0/',
  nodeValidatorWebSocketURL: 'wss://nv.main.net.espresso.network/v0/',
};

export const environmentArgsMainnetWithContracts: EnvironmentWithContractsArgs =
  {
    ...environmentArgsMainnet,
    stakeTableContractAddress: undefined,
    espTokenContractAddress: undefined,
  };

export const environmentArgsFakeData: EnvironmentArgs = {
  environment: Environment.fakeData,
  hotshotQueryServiceURL: undefined,
  nodeValidatorWebSocketURL: undefined,
};

export const environmentArgsFakeDataWithContracts: EnvironmentWithContractsArgs =
  {
    ...environmentArgsFakeData,
    stakeTableContractAddress: '0x40304fbe94d5e7d1492dd90c53a2d63e8506a037',
    espTokenContractAddress: '0xb3e655a030e2e34a18b72757b40be086a8f43f3b',
  };

export const environmentArgsLocalDevNet: EnvironmentArgs = {
  environment: Environment.localDevNet,
  hotshotQueryServiceURL: 'http://localhost:24000/v0/',
  nodeValidatorWebSocketURL: 'ws://localhost:9000/v0/',
};

export const environmentArgsLocalDevNetWithContracts: EnvironmentWithContractsArgs =
  {
    ...environmentArgsLocalDevNet,
    stakeTableContractAddress: '0x12975173b87f7595ee45dffb2ab812ece596bf84',
    espTokenContractAddress: '0x0c8e79f3534b00d9a3d4a856b665bf4ebc22f2ba',
  };

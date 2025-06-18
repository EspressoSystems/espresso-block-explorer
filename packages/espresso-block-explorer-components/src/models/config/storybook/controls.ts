import { Environment } from '../environment/environment';

export const environmentControlArgType = {
  options: [
    Environment.water,
    Environment.milk,
    Environment.mainnet,
    Environment.decaf,
    Environment.fakeData,
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
  hotshotQueryServiceURL?: string | null;
  nodeValidatorWebSocketURL?: string | null;
}

export interface EnvironmentWithContractsArgs extends EnvironmentArgs {
  stakeTableContractAddress?: `0x${string}` | null;
  espTokenContractAddress?: `0x${string}` | null;
}

export const environmentArgsMilk: EnvironmentArgs = {
  environment: Environment.milk,
  hotshotQueryServiceURL: 'https://query.milk.devnet.espresso.network/v0/',
  nodeValidatorWebSocketURL: 'wss://nv.milk.devnet.espresso.network/v0/',
};

export const environmentArgsMilkWithContracts: EnvironmentWithContractsArgs = {
  ...environmentArgsMilk,
  stakeTableContractAddress: '0x196dbcbb54b8ec4958c959d8949ebfe87ac2aaaf',
  espTokenContractAddress: '0xf7cd8fa9b94db2aa972023b379c7f72c65e4de9d',
};

export const environmentArgsWater: EnvironmentArgs = {
  environment: Environment.water,
  hotshotQueryServiceURL: 'https://query.water.devnet.espresso.network/v0/',
  nodeValidatorWebSocketURL: 'wss://nv.water.devnet.espresso.network/v0/',
};

export const environmentArgsWaterWithContracts: EnvironmentWithContractsArgs = {
  ...environmentArgsWater,
  stakeTableContractAddress: '0x82c6d3ed4cd33d8ec1e51d0b5cc1d822eaa0c3dc',
  espTokenContractAddress: '0x12975173b87f7595ee45dffb2ab812ece596bf84',
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
    stakeTableContractAddress: null,
    espTokenContractAddress: null,
  };

export const environmentArgsFakeData: EnvironmentArgs = {
  environment: Environment.mainnet,
  hotshotQueryServiceURL: '',
  nodeValidatorWebSocketURL: '',
};

export const environmentArgsFakeDataWithContracts: EnvironmentWithContractsArgs =
  {
    ...environmentArgsFakeData,
    stakeTableContractAddress: null,
    espTokenContractAddress: null,
  };

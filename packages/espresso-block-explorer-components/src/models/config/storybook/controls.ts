import {
  hexArrayBufferCodec,
  rawStdBase64ArrayBufferCodec,
  rawURLBase64ArrayBufferCodec,
} from '@/convert/codec/array_buffer';
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

export const rewardClaimContractAddressControlArgType = {
  control: { type: 'text' },
  description: 'Reward Claim Contract Address',
} as const;

export const queryServiceNodeURLControlArgType = {
  control: { type: 'text' },
  description:
    'Query Service Node URL (starting with http:// or https://, ending with the version. Eg: http://localhost:9000/v0/)',
} as const;

export const nodeValidatorWebSocketURLControlArgType = {
  control: { type: 'text' },
  description:
    'Node Validator WebSocket URL (starting with ws:// or wss://, ending with the version. Eg. ws://localhost:9000/v0/)',
} as const;

export const l1ValidatorServiceURLControlArgType = {
  control: { type: 'text' },
  description:
    'L1 Validator Service URL (starting with http:// or https://, ending with the version. Eg: http://localhost:9100/v0/)',
} as const;

export const rewardClaimContractAddressArgType = {
  control: { type: 'text' },
  description: 'Reward Claim Contract Address',
} as const;

export const environmentArgTypes = {
  environment: environmentControlArgType,
  hotshotQueryServiceURL: queryServiceNodeURLControlArgType,
  nodeValidatorWebSocketURL: nodeValidatorWebSocketURLControlArgType,
} as const;

export const environmentArgsTypesL1ValidatorService = {
  l1ValidatorServiceURL: l1ValidatorServiceURLControlArgType,
};

export const environmentArgTypesWithContracts = {
  ...environmentArgTypes,
  stakeTableContractAddress: stakeTableContractAddressControlArgType,
  espTokenContractAddress: espTokenContractAddressControlArgType,
  rewardClaimContractAddress: rewardClaimContractAddressControlArgType,
} as const;

export interface EnvironmentArgs {
  environment: Environment;
  hotshotQueryServiceURL?: string;
  nodeValidatorWebSocketURL?: string;
}

export interface EnvironmentWithContractsArgs extends EnvironmentArgs {
  stakeTableContractAddress?: `0x${string}`;
  espTokenContractAddress?: `0x${string}`;
  rewardClaimContractAddress?: `0x${string}`;
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
    stakeTableContractAddress: undefined,
    espTokenContractAddress: undefined,
  };

export const environmentArgsLocalDevNet: EnvironmentArgs = {
  environment: Environment.localDevNet,
  hotshotQueryServiceURL: 'http://localhost:24000/v0/',
  nodeValidatorWebSocketURL: 'ws://localhost:9000/v0/',
};

export const environmentArgsLocalDevNetWithContracts: EnvironmentWithContractsArgs =
  {
    ...environmentArgsLocalDevNet,
    stakeTableContractAddress: '0xefdc2a236dba7a8f60726b49abc79ee6b22ed445',
    espTokenContractAddress: '0x80f43505d8d1a739504eb4237eb15b2e0048da8d',
    rewardClaimContractAddress: undefined,
  };

/**
 * extractURLWithmaybeURL tries to extract a URL from the provided url
 * string. If the url is not provided or invalid, it attempts to decode the
 * encodedFallback which can be a hex or base64 encoded representation of the
 * URL.
 */
export function extractURLWithEncodedFallback(
  maybeURL: undefined | null | string,
): undefined | string {
  if (!maybeURL) {
    return undefined;
  }

  // First step, try to decode the URL as a URL directly
  try {
    return new URL(maybeURL).toString();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_err) {
    // We were not provided a valid URL, we'll try to treat it as if it were
    // an encoded string instead.
  }

  try {
    const textDecoder = new TextDecoder();
    // Assumed to be a hex string
    if (maybeURL.startsWith('0x')) {
      const urlString = hexArrayBufferCodec.decode(maybeURL);
      return new URL(textDecoder.decode(urlString)).toString();
    }

    if (/[+/=_-]/.test(maybeURL)) {
      // Assumed to be a standard base64 string
      const urlString = rawStdBase64ArrayBufferCodec.decode(maybeURL);
      return new URL(textDecoder.decode(urlString)).toString();
    }

    // Assumed to be a url safe base64 string
    const urlString = rawURLBase64ArrayBufferCodec.decode(maybeURL);
    return new URL(textDecoder.decode(urlString)).toString();
  } catch (error) {
    console.error('Invalid encoded URL provided:', maybeURL, error);
    return undefined;
  }
}

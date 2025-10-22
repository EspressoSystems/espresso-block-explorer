import { Environment } from '../environment/environment';
export declare const environmentControlArgType: {
    readonly options: readonly [Environment.water, Environment.milk, Environment.mainnet, Environment.decaf, Environment.fakeData, Environment.localDevNet];
    readonly control: {
        readonly type: "select";
    };
    readonly description: "Environment to use for the Nodes Page, if only this is specified, the rest of the fields will be derived from the environment.";
};
export declare const stakeTableContractAddressControlArgType: {
    readonly control: {
        readonly type: "text";
    };
    readonly description: "Stake Table Contract Address";
};
export declare const espTokenContractAddressControlArgType: {
    readonly control: {
        readonly type: "text";
    };
    readonly description: "ESP Token Contract Address";
};
export declare const queryServiceNodeURLControlArgType: {
    readonly control: {
        readonly type: "text";
    };
    readonly description: "Query Service Node URL (starting with http:// or https://, ending with the version. Eg: http://localhost:9000/v0/)";
};
export declare const nodeValidatorWebSocketURLControlArgType: {
    readonly control: {
        readonly type: "text";
    };
    readonly description: "Node Validator WebSocket URL (starting with ws:// or wss://, ending with the version. E?. ws://localhost:9000/v0/)";
};
export declare const environmentArgTypes: {
    readonly environment: {
        readonly options: readonly [Environment.water, Environment.milk, Environment.mainnet, Environment.decaf, Environment.fakeData, Environment.localDevNet];
        readonly control: {
            readonly type: "select";
        };
        readonly description: "Environment to use for the Nodes Page, if only this is specified, the rest of the fields will be derived from the environment.";
    };
    readonly hotshotQueryServiceURL: {
        readonly control: {
            readonly type: "text";
        };
        readonly description: "Query Service Node URL (starting with http:// or https://, ending with the version. Eg: http://localhost:9000/v0/)";
    };
    readonly nodeValidatorWebSocketURL: {
        readonly control: {
            readonly type: "text";
        };
        readonly description: "Node Validator WebSocket URL (starting with ws:// or wss://, ending with the version. E?. ws://localhost:9000/v0/)";
    };
};
export declare const environmentArgTypesWithContracts: {
    readonly stakeTableContractAddress: {
        readonly control: {
            readonly type: "text";
        };
        readonly description: "Stake Table Contract Address";
    };
    readonly espTokenContractAddress: {
        readonly control: {
            readonly type: "text";
        };
        readonly description: "ESP Token Contract Address";
    };
    readonly environment: {
        readonly options: readonly [Environment.water, Environment.milk, Environment.mainnet, Environment.decaf, Environment.fakeData, Environment.localDevNet];
        readonly control: {
            readonly type: "select";
        };
        readonly description: "Environment to use for the Nodes Page, if only this is specified, the rest of the fields will be derived from the environment.";
    };
    readonly hotshotQueryServiceURL: {
        readonly control: {
            readonly type: "text";
        };
        readonly description: "Query Service Node URL (starting with http:// or https://, ending with the version. Eg: http://localhost:9000/v0/)";
    };
    readonly nodeValidatorWebSocketURL: {
        readonly control: {
            readonly type: "text";
        };
        readonly description: "Node Validator WebSocket URL (starting with ws:// or wss://, ending with the version. E?. ws://localhost:9000/v0/)";
    };
};
export interface EnvironmentArgs {
    environment: Environment;
    hotshotQueryServiceURL?: string;
    nodeValidatorWebSocketURL?: string;
}
export interface EnvironmentWithContractsArgs extends EnvironmentArgs {
    stakeTableContractAddress?: `0x${string}`;
    espTokenContractAddress?: `0x${string}`;
}
export declare const environmentArgsMilk: EnvironmentArgs;
export declare const environmentArgsMilkWithContracts: EnvironmentWithContractsArgs;
export declare const environmentArgsWater: EnvironmentArgs;
export declare const environmentArgsWaterWithContracts: EnvironmentWithContractsArgs;
export declare const environmentArgsDecaf: EnvironmentArgs;
export declare const environmentArgsDecafWithContracts: EnvironmentWithContractsArgs;
export declare const environmentArgsMainnet: EnvironmentArgs;
export declare const environmentArgsMainnetWithContracts: EnvironmentWithContractsArgs;
export declare const environmentArgsFakeData: EnvironmentArgs;
export declare const environmentArgsFakeDataWithContracts: EnvironmentWithContractsArgs;
export declare const environmentArgsLocalDevNet: EnvironmentArgs;
export declare const environmentArgsLocalDevNetWithContracts: EnvironmentWithContractsArgs;

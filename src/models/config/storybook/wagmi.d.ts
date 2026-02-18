import { Environment } from '../environment/environment';
import { WagmiConfig } from '../environment/wagmi';
export declare const mainnet: WagmiConfig;
export declare const decaf: WagmiConfig;
export declare const waterChain: {
    blockExplorers?: {
        [key: string]: {
            name: string;
            url: string;
            apiUrl?: string | undefined;
        };
        default: {
            name: string;
            url: string;
            apiUrl?: string | undefined;
        };
    } | undefined | undefined;
    blockTime?: number | undefined | undefined;
    contracts?: {
        [x: string]: import('viem').ChainContract | {
            [sourceId: number]: import('viem').ChainContract | undefined;
        } | undefined;
        ensRegistry?: import('viem').ChainContract | undefined;
        ensUniversalResolver?: import('viem').ChainContract | undefined;
        multicall3?: import('viem').ChainContract | undefined;
        erc6492Verifier?: import('viem').ChainContract | undefined;
    } | undefined;
    ensTlds?: readonly string[] | undefined;
    id: 900;
    name: "RETH (water)";
    nativeCurrency: {
        readonly name: "Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    experimental_preconfirmationTime?: number | undefined | undefined;
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://reth.water.devnet.espresso.network"];
            readonly webSocket: readonly ["wss://wsreth.water.devnet.espresso.network"];
        };
    };
    sourceId?: number | undefined | undefined;
    testnet: true;
    custom?: Record<string, unknown> | undefined;
    extendSchema?: Record<string, unknown> | undefined;
    fees?: import('viem').ChainFees<undefined> | undefined;
    formatters?: undefined;
    prepareTransactionRequest?: ((args: import('viem').PrepareTransactionRequestParameters, options: {
        phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
    }) => Promise<import('viem').PrepareTransactionRequestParameters>) | [fn: ((args: import('viem').PrepareTransactionRequestParameters, options: {
        phase: "beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters";
    }) => Promise<import('viem').PrepareTransactionRequestParameters>) | undefined, options: {
        runAt: readonly ("beforeFillTransaction" | "beforeFillParameters" | "afterFillParameters")[];
    }] | undefined;
    serializers?: import('viem').ChainSerializers<undefined, import('viem').TransactionSerializable> | undefined;
    verifyHash?: ((client: import('viem').Client, parameters: import('viem').VerifyHashActionParameters) => Promise<import('viem').VerifyHashActionReturnType>) | undefined;
};
export declare const water: WagmiConfig;
export declare const milk: WagmiConfig;
export declare const localDevNet: WagmiConfig;
export declare const fakeData: WagmiConfig;
/**
 * getWagmiConfigForEnvironment returns the appropriate WagmiConfig based on
 * the provided environment.
 * @param environment
 * @returns
 */
export declare function getWagmiConfigForEnvironment(environment: Environment): WagmiConfig;

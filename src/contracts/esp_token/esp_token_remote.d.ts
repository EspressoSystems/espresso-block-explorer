import { Config } from 'wagmi';
import { ESPTokenContract } from './esp_token_interface';
export declare class ESPTokenRemote implements ESPTokenContract {
    private readonly contractAddress;
    private readonly chainID;
    private readonly config;
    constructor(config: Config, chainID: number, contractAddress: `0x${string}`);
    getVersion(): Promise<readonly [number, number, number]>;
    name(): Promise<string>;
    symbol(): Promise<string>;
    decimals(): Promise<number>;
    totalSupply(): Promise<bigint>;
    balanceOf(account: `0x${string}`): Promise<bigint>;
    allowance(owner: `0x${string}`, spender: `0x${string}`): Promise<bigint>;
    transfer(to: `0x${string}`, value: bigint): Promise<`0x${string}`>;
    approve(spender: `0x${string}`, value: bigint): Promise<`0x${string}`>;
    transferFrom(from: `0x${string}`, to: `0x${string}`, value: bigint): Promise<`0x${string}`>;
}

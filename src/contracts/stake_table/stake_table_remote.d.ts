import { Config } from 'wagmi';
import { StakeTableContract } from './stake_table_interface';
export declare class StakeTableRemote implements StakeTableContract {
    protected readonly contractAddress: `0x${string}`;
    protected readonly chainID: number;
    protected readonly config: Config;
    constructor(config: Config, chainID: number, contractAddress: `0x${string}`);
    lightClient(): Promise<`0x${string}`>;
    token(): Promise<`0x${string}`>;
    validator(account: `0x${string}`): Promise<readonly [bigint, number]>;
    blsKey(blsKeyHash: `0x${string}`): Promise<boolean>;
    validatorExit(validator: `0x${string}`): Promise<bigint>;
    delegation(validator: `0x${string}`, delegator: `0x${string}`): Promise<bigint>;
    undelegation(validator: `0x${string}`, delegator: `0x${string}`): Promise<readonly [bigint, bigint]>;
    exitEscrowPeriod(): Promise<bigint>;
    getVersion(): Promise<readonly [number, number, number]>;
    deregisterValidator(): Promise<`0x${string}`>;
    delegate(validator: `0x${string}`, amount: bigint): Promise<`0x${string}`>;
    undelegate(validator: `0x${string}`, amount: bigint): Promise<`0x${string}`>;
    claimWithdrawal(validator: `0x${string}`): Promise<`0x${string}`>;
    claimValidatorExit(validator: `0x${string}`): Promise<`0x${string}`>;
}

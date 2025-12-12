import { ContractFunctionName, ReadContractParameters, ReadContractReturnType } from 'viem';
import { StakeTableState } from '../light_client/light_client_interface';
import { LightClientRemote } from '../light_client/light_client_remote';
import { default as LightClientV2Abi } from './light_client_v2_abi';
import { LightClientV2Contract } from './light_client_v2_interface';
type LightClientV2FunctionNames = ContractFunctionName<typeof LightClientV2Abi, 'pure' | 'view'>;
type LightClientV2ReadContractParams<N extends LightClientV2FunctionNames> = ReadContractParameters<typeof LightClientV2Abi, N>;
type LightClientV2ReadContractReturnType<N extends LightClientV2FunctionNames> = ReadContractReturnType<typeof LightClientV2Abi, N>;
export declare class LightClientV2Remote extends LightClientRemote implements LightClientV2Contract {
    protected readContractV2<N extends LightClientV2FunctionNames, A extends Omit<LightClientV2ReadContractParams<N>, 'address' | 'abi' | 'chainId' | 'functionName'>>(functionName: N, args?: A['args'], extra?: Omit<A, 'args'>): Promise<LightClientV2ReadContractReturnType<N>>;
    blocksPerEpoch(): Promise<bigint>;
    epochStartBlock(): Promise<bigint>;
    votingStakeTableState(): Promise<StakeTableState>;
    currentEpoch(): Promise<bigint>;
    epochFromBlockNumber(blockNum: bigint, blocksPerEpoch: bigint): Promise<bigint>;
    isEpochRoot(blockHeight: bigint): Promise<boolean>;
    isGtEpochRoot(blockHeight: bigint): Promise<boolean>;
}
export {};

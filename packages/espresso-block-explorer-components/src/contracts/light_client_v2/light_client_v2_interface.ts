import { GasEstimatorForContract } from '../l1/l1_interface';
import {
  LightClientContractReadOnly,
  LightClientContractWriteable,
  StakeTableState,
} from '../light_client/light_client_interface';

export interface LightClientV2ContractReadOnly extends LightClientContractReadOnly {
  readonly address: `0x${string}`;

  blocksPerEpoch(): Promise<bigint>;
  epochStartBlock(): Promise<bigint>;
  votingStakeTableState(): Promise<StakeTableState>;
  currentEpoch(): Promise<bigint>;
  epochFromBlockNumber(
    blockNum: bigint,
    blocksPerEpoch: bigint,
  ): Promise<bigint>;
  isEpochRoot(blockHeight: bigint): Promise<boolean>;
  isGtEpochRoot(blockHeight: bigint): Promise<boolean>;
}

export interface LightClientV2ContractWriteable extends LightClientContractWriteable {}

export interface LightClientV2Contract
  extends LightClientV2ContractReadOnly, LightClientV2ContractWriteable {}

export type LightClientV2ContractGasEstimator =
  GasEstimatorForContract<LightClientV2ContractWriteable>;

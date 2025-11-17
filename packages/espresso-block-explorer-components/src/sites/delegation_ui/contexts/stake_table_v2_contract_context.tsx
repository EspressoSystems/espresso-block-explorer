import { EspressoConfigContext } from '@/components/config';
import { StakeTableV2ContractGasEstimatorRemote } from '@/contracts/stake_table_v2/stake_table_v2_gas_estimator_remote';
import {
  StakeTableV2Contract,
  StakeTableV2ContractGasEstimator,
} from '@/contracts/stake_table_v2/stake_table_v2_interface';
import { StakeTableV2Remote } from '@/contracts/stake_table_v2/stake_table_v2_remote';
import React from 'react';
import { useConfig } from 'wagmi';
import {
  StakeTableContractContext,
  StakeTableContractGasEstimatorContext,
} from './stake_table_contract_context';

/**
 * StakeTableV2ContractContext is a React context that provides
 * the Stake Table V2 contract instance.
 */
export const StakeTableV2ContractContext =
  React.createContext<null | StakeTableV2Contract>(null);

/**
 * StakeTableV2ContractGasEstimatorContext is a React context that provides
 * the Stake Table V2 contract gas estimator instance.
 */
export const StakeTableV2ContractGasEstimatorContext =
  React.createContext<null | StakeTableV2ContractGasEstimator>(null);

/**
 * ProvideStakeTableV2Contract is a React component that provides
 * the Stake Table V2 contract via StakeTableV2ContractContext.
 */
export const ProvideStakeTableV2Contract: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <ProvideStakeTableContractUtilizingWagmi>
      {children}
    </ProvideStakeTableContractUtilizingWagmi>
  );
};

/**
 * ProvideStakeTableContractUtilizingWagmi is a React component that provides
 * the Stake Table V2 contract via StakeTableV2ContractContext.  It is created
 * and configured to use Wagmi for blockchain interactions.
 */
const ProvideStakeTableContractUtilizingWagmi: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const config = useConfig();
  const espressoConfig = React.useContext(EspressoConfigContext);

  const stakeTable = !espressoConfig?.stakeTableContractAddress
    ? null
    : new StakeTableV2Remote(
        config,
        config.chains[0].id,
        espressoConfig.stakeTableContractAddress,
      );

  const stakeTableGasEstimator = !espressoConfig?.stakeTableContractAddress
    ? null
    : new StakeTableV2ContractGasEstimatorRemote(
        config,
        config.chains[0].id,
        espressoConfig.stakeTableContractAddress,
      );

  return (
    <StakeTableContractContext.Provider value={stakeTable}>
      <StakeTableContractGasEstimatorContext.Provider
        value={stakeTableGasEstimator}
      >
        <StakeTableV2ContractContext.Provider value={stakeTable}>
          <StakeTableV2ContractGasEstimatorContext.Provider
            value={stakeTableGasEstimator}
          >
            {children}
          </StakeTableV2ContractGasEstimatorContext.Provider>
        </StakeTableV2ContractContext.Provider>
      </StakeTableContractGasEstimatorContext.Provider>
    </StakeTableContractContext.Provider>
  );
};

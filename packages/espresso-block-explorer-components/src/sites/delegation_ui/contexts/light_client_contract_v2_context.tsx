import { EspressoConfigContext } from '@/components/config';
import { LightClientV2ContractGasEstimatorRemote } from '@/contracts/light_client_v2/light_client_v2_gas_estimator_remote';
import {
  LightClientV2Contract,
  LightClientV2ContractGasEstimator,
} from '@/contracts/light_client_v2/light_client_v2_interface';
import { LightClientV2Remote } from '@/contracts/light_client_v2/light_client_v2_remote';
import React from 'react';
import { useConfig } from 'wagmi';
import {
  LightClientContractContext,
  LightClientContractGasEstimatorContext,
} from './light_client_contract_context';

/**
 * LightClientV2ContractContext is a React context that provides
 * the Light client V2 contract instance.
 */
export const LightClientV2ContractContext =
  React.createContext<null | LightClientV2Contract>(null);

/**
 * LightClientV2ContractGasEstimatorContext is a React context that provides
 * the Light client V2 contract gas estimator instance.
 */
export const LightClientV2ContractGasEstimatorContext =
  React.createContext<null | LightClientV2ContractGasEstimator>(null);

/**
 * ProvideLightClientV2Contract is a React component that provides
 * the Light client V2 contract via LightClientV2ContractContext.
 */
export const ProvideLightClientV2Contract: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  return (
    <ProvideLightClientV2ContractUtilizingWagmi>
      {children}
    </ProvideLightClientV2ContractUtilizingWagmi>
  );
};

/**
 * ProvideStakeTableContractUtilizingWagmi is a React component that provides
 * the Light client V2 contract via LightClientV2ContractContext.  It is created
 * and configured to use Wagmi for blockchain interactions.
 */
const ProvideLightClientV2ContractUtilizingWagmi: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const config = useConfig();
  const espressoConfig = React.useContext(EspressoConfigContext);

  const stakeTable = !espressoConfig?.lightClientContractAddress
    ? null
    : new LightClientV2Remote(
        config,
        config.chains[0].id,
        espressoConfig.lightClientContractAddress,
      );

  const stakeTableGasEstimator = !espressoConfig?.lightClientContractAddress
    ? null
    : new LightClientV2ContractGasEstimatorRemote(
        config,
        config.chains[0].id,
        espressoConfig.lightClientContractAddress,
      );

  return (
    <LightClientContractContext.Provider value={stakeTable}>
      <LightClientContractGasEstimatorContext.Provider
        value={stakeTableGasEstimator}
      >
        <LightClientV2ContractContext.Provider value={stakeTable}>
          <LightClientV2ContractGasEstimatorContext.Provider
            value={stakeTableGasEstimator}
          >
            {children}
          </LightClientV2ContractGasEstimatorContext.Provider>
        </LightClientV2ContractContext.Provider>
      </LightClientContractGasEstimatorContext.Provider>
    </LightClientContractContext.Provider>
  );
};

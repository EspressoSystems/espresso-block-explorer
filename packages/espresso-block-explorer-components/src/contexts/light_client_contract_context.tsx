import { EspressoConfigContext } from '@/components/config';
import { LightClientContractGasEstimatorRemote } from '@/contracts/light_client/light_client_gas_estimator_remote';
import {
  LightClientContract,
  LightClientContractGasEstimator,
} from '@/contracts/light_client/light_client_interface';
import { LightClientRemote } from '@/contracts/light_client/light_client_remote';
import { default as React } from 'react';
import { useConfig } from 'wagmi';

/**
 * LightClientContractContext is a React context that provides
 * the Light client contract instance.
 */
export const LightClientContractContext =
  React.createContext<null | LightClientContract>(null);

/**
 * LightClientContractGasEstimatorContext is a React context that provides
 * the Light client contract gas estimator instance.
 */
export const LightClientContractGasEstimatorContext =
  React.createContext<null | LightClientContractGasEstimator>(null);

/**
 * ProvideLightClientContract is a React component that provides
 * the Light client contract via LightClientContractContext.
 */
export const ProvideLightClientContract: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <ProvideLightClientContractUtilizingWagmi>
      {children}
    </ProvideLightClientContractUtilizingWagmi>
  );
};

/**
 * ProvideLightClientContractUtilizingWagmi is a React component that provides
 * the Light client contract via LightClientContractContext.  It is created
 * and configured to use Wagmi for blockchain interactions.
 */
const ProvideLightClientContractUtilizingWagmi: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const config = useConfig();
  const espressoConfig = React.useContext(EspressoConfigContext);

  const stakeTable = !espressoConfig?.lightClientContractAddress
    ? null
    : new LightClientRemote(
        config,
        config.chains[0].id,
        espressoConfig.lightClientContractAddress,
      );

  const stakeTableGasEstimator = !espressoConfig?.lightClientContractAddress
    ? null
    : new LightClientContractGasEstimatorRemote(
        config,
        config.chains[0].id,
        espressoConfig.lightClientContractAddress,
      );

  return (
    <LightClientContractContext.Provider value={stakeTable}>
      <LightClientContractGasEstimatorContext.Provider
        value={stakeTableGasEstimator}
      >
        {children}
      </LightClientContractGasEstimatorContext.Provider>
    </LightClientContractContext.Provider>
  );
};

import { EspressoConfigContext } from '@/components/config';
import { ESPTokenContractGasEstimatorRemote } from '@/contracts/esp_token/esp_token_gas_estimator_remote';
import {
  ESPTokenContract,
  ESPTokenContractGasEstimator,
} from '@/contracts/esp_token/esp_token_interface';
import { ESPTokenRemote } from '@/contracts/esp_token/esp_token_remote';
import React from 'react';
import { useConfig } from 'wagmi';

/**
 * ESPTokenContractContext provides a React Context
 * for the ESP token contract.
 */
export const ESPTokenContractContext =
  React.createContext<null | ESPTokenContract>(null);

/**
 * ESPTokenContractGasEstimatorContext provides a React Context
 * for the ESP token contract gas estimator.
 */
export const ESPTokenContractGasEstimatorContext =
  React.createContext<null | ESPTokenContractGasEstimator>(null);

/**
 * ProvideESPTokenContract is a React component that provides
 * the ESP token contract via ESPTokenContractContext.
 */
export const ProvideESPTokenContract: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <ProvideESPTokenContractUtilizingWagmi>
      {children}
    </ProvideESPTokenContractUtilizingWagmi>
  );
};

/**
 * ProvideESPTokenContractUtilizingWagmi is a React component that provides
 * the ESP token contract via ESPTokenContractContext.  It is created
 * and configured to use Wagmi for blockchain interactions.
 */
const ProvideESPTokenContractUtilizingWagmi: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const config = useConfig();
  const espressoConfig = React.useContext(EspressoConfigContext);

  const espContract = !espressoConfig?.espTokenContractAddress
    ? null
    : new ESPTokenRemote(
        config,
        config.chains[0].id,
        espressoConfig.espTokenContractAddress,
      );

  const espTokenContractGasEstimator = !espressoConfig?.espTokenContractAddress
    ? null
    : new ESPTokenContractGasEstimatorRemote(
        config,
        config.chains[0].id,
        espressoConfig.espTokenContractAddress,
      );

  return (
    <ESPTokenContractContext.Provider value={espContract}>
      <ESPTokenContractGasEstimatorContext.Provider
        value={espTokenContractGasEstimator}
      >
        {children}
      </ESPTokenContractGasEstimatorContext.Provider>
    </ESPTokenContractContext.Provider>
  );
};

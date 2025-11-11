import { EspressoConfigContext } from '@/components/config';
import { StakeTableV2Contract } from '@/contracts/stake_table_v2/stake_table_v2_interface';
import { StakeTableV2Remote } from '@/contracts/stake_table_v2/stake_table_v2_remote';
import React from 'react';
import { useConfig } from 'wagmi';
import { StakeTableContractContext } from './stake_table_contract_context';

export const StakeTableV2ContractContext =
  React.createContext<null | StakeTableV2Contract>(null);

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

  return (
    <StakeTableContractContext.Provider value={stakeTable}>
      <StakeTableV2ContractContext.Provider value={stakeTable}>
        {children}
      </StakeTableV2ContractContext.Provider>
    </StakeTableContractContext.Provider>
  );
};

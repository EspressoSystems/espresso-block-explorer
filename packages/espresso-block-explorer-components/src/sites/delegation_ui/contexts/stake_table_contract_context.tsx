import { EspressoConfigContext } from '@/components/config';
import { StakeTableContract } from '@/contracts/stake_table/stake_table_interface';
import { StakeTableRemote } from '@/contracts/stake_table/stake_table_remote';
import React from 'react';
import { useConfig } from 'wagmi';

export const StakeTableContractContext =
  React.createContext<null | StakeTableContract>(null);

/**
 * ProvideESPTokenContract is a React component that provides
 * the ESP token contract via ESPTokenContractContext.
 */
export const ProvideStakeTableContract: React.FC<React.PropsWithChildren> = ({
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
 * the Stake Table contract via StakeTableContractContext.  It is created
 * and configured to use Wagmi for blockchain interactions.
 */
const ProvideStakeTableContractUtilizingWagmi: React.FC<
  React.PropsWithChildren
> = ({ children }) => {
  const config = useConfig();
  const espressoConfig = React.useContext(EspressoConfigContext);

  const stakeTable = !espressoConfig?.stakeTableContractAddress
    ? null
    : new StakeTableRemote(
        config,
        config.chains[0].id,
        espressoConfig.stakeTableContractAddress,
      );

  return (
    <StakeTableContractContext.Provider value={stakeTable}>
      {children}
    </StakeTableContractContext.Provider>
  );
};

// Fake Chain

import { EnvironmentContext } from '@/components/config/environment';
import { EspressoConfigContext } from '@/components/config/espresso';
import { Environment } from '@/models/config/environment/environment';
import React from 'react';
import { MockESPTokenContract } from './esp_token_contract';
import { MockL1Methods, ProvideAutoAdvanceL1Methods } from './l1_methods';
import { MockRainbowKit } from './rainbow_kit';
import { MockRewardClaimContract } from './reward_claim_contract';
import { MockStakeTableV2Contract } from './stake_table_v2_contract';

/**
 * FakeDataMockOverrides is a React component that provides
 * mock overrides for various contexts when the environment
 * is set to FakeData and the relevant contracts are not
 * already provided in the Espresso configuration.
 */
export const FakeDataMockOverrides: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const environment = React.useContext(EnvironmentContext);
  const espressoConfig = React.useContext(EspressoConfigContext);

  if (
    environment !== Environment.fakeData ||
    espressoConfig?.espTokenContractAddress ||
    espressoConfig?.stakeTableContractAddress
  ) {
    return <>{children}</>;
  }

  return (
    <MockRainbowKit>
      <OtherMocks>{children}</OtherMocks>
    </MockRainbowKit>
  );
};

const OtherMocks: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <MockL1Methods>
      <ProvideAutoAdvanceL1Methods>
        <MockESPTokenContract>
          <MockStakeTableV2Contract>
            <MockRewardClaimContract>{children}</MockRewardClaimContract>
          </MockStakeTableV2Contract>
        </MockESPTokenContract>
      </ProvideAutoAdvanceL1Methods>
    </MockL1Methods>
  );
};

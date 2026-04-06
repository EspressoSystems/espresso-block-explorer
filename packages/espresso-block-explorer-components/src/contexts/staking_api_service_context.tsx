import { BlockExplorerConfigContext } from '@/components/config/explorer';
import { FakeDataStakingAPIService } from '@/service/espresso_staking_api_service/implementations/fake_data';
import { UnimplementedStakingAPIService } from '@/service/espresso_staking_api_service/implementations/unimplemented';
import { WebWorkerClientBasedStakingAPIService } from '@/service/espresso_staking_api_service/implementations/web_worker_client';
import { StakingAPIService } from '@/service/espresso_staking_api_service/staking_api_service';
import React from 'react';

/**
 * StakingAPIServiceContext provides a React Context
 * for the StakingAPIService.
 */
export const StakingAPIServiceContext = React.createContext<StakingAPIService>(
  new UnimplementedStakingAPIService(),
);

let singletonService: StakingAPIService | null = null;

/**
 * createWebWorkerStakingAPIService returns a singleton instanceof
 * a StakingAPIService implemented using Web Workers.
 */
function createWebWorkerStakingAPIService(
  stakingAPIServiceURL: string | null | undefined,
): StakingAPIService {
  if (singletonService === null) {
    singletonService = new WebWorkerClientBasedStakingAPIService();
  }

  if (stakingAPIServiceURL) {
    // If the Service URL is provided, then let's invoke the service to set
    // the proxy url.
    singletonService.setURL(stakingAPIServiceURL).then(
      (success) => {
        if (!success) {
          console.warn(
            'unable to set the url for the hotshot query service',
            stakingAPIServiceURL,
          );
        }
      },
      (error) => {
        console.error(
          'unable to set the url for the hotshot query service',
          stakingAPIServiceURL,
          error,
        );
      },
    );
  }

  return singletonService;
}

/**
 * createDefaultStakingAPIService creates the default StakingAPIService
 * implementation based on the current environment.
 */
function createDefaultStakingAPIService(
  stakingAPIServiceURL: string | null | undefined,
): StakingAPIService {
  if (
    (typeof window !== 'undefined' && 'Worker' in window) ||
    (typeof self !== 'undefined' && 'Worker' in self)
  ) {
    return createWebWorkerStakingAPIService(stakingAPIServiceURL);
  }

  return new FakeDataStakingAPIService();
}

/**
 * ProvideStakingAPIServiceContext is a React Component that provides
 * the StakingAPIService context to its children.
 */
export const ProvideStakingAPIServiceContext: React.FC<
  React.PropsWithChildren
> = (props) => {
  const explorerConfig = React.useContext(BlockExplorerConfigContext);
  const stakingAPIServiceURL = explorerConfig?.stakingAPIServiceURL;

  return (
    <StakingAPIServiceContext.Provider
      value={createDefaultStakingAPIService(stakingAPIServiceURL)}
    >
      {props.children}
    </StakingAPIServiceContext.Provider>
  );
};

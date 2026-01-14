import { BlockExplorerConfigContext } from '@/components/config/explorer';
import { FakeDataL1ValidatorService } from '@/service/espresso_l1_validator_service/implementations/fake_data';
import { UnimplementedL1ValidatorService } from '@/service/espresso_l1_validator_service/implementations/unimplemented';
import { WebWorkerClientBasedL1ValidatorService } from '@/service/espresso_l1_validator_service/implementations/web_worker_client';
import { L1ValidatorService } from '@/service/espresso_l1_validator_service/l1_validator_service_api';
import React from 'react';

/**
 * L1ValidatorServiceContext provides a React Context
 * for the L1ValidatorService API.
 */
export const L1ValidatorServiceContext =
  React.createContext<L1ValidatorService>(
    new UnimplementedL1ValidatorService(),
  );

let singletonService: L1ValidatorService | null = null;
/**
 * createWebWorkerCappuccinoHotShotQueryService returns a singleton instanceof
 * a CappuccinoHotShotQueryService implemented using Web Workers.
 */
function createWebWorkerL1ValidatorService(
  l1ValidatorServiceURL: string | null | undefined,
): L1ValidatorService {
  if (singletonService === null) {
    singletonService = new WebWorkerClientBasedL1ValidatorService();
  }

  if (l1ValidatorServiceURL) {
    // If the Service URL is provided, then let's invoke the service to set
    // the proxy url.
    singletonService.setURL(l1ValidatorServiceURL).then(
      (success) => {
        if (!success) {
          console.warn(
            'unable to set the url for the hotshot query service',
            l1ValidatorServiceURL,
          );
        }
      },
      (error) => {
        console.error(
          'unable to set the url for the hotshot query service',
          l1ValidatorServiceURL,
          error,
        );
      },
    );
  }

  return singletonService;
}

/**
 * createDefaultL1ValidatorService creates the default L1ValidatorService
 * implementation based on the current environment.
 */
function createDefaultL1ValidatorService(
  l1ValidatorServiceURL: string | null | undefined,
): L1ValidatorService {
  if (
    (typeof window !== 'undefined' && 'Worker' in window) ||
    (typeof self !== 'undefined' && 'Worker' in self)
  ) {
    return createWebWorkerL1ValidatorService(l1ValidatorServiceURL);
  }

  return new FakeDataL1ValidatorService();
}

/**
 * ProvideL1ValidatorServiceAPIContext is a React Component that provides
 * the L1ValidatorService API context to its children.
 */
export const ProvideL1ValidatorServiceAPIContext: React.FC<
  React.PropsWithChildren
> = (props) => {
  const explorerConfig = React.useContext(BlockExplorerConfigContext);
  const l1ValidatorServiceURL = explorerConfig?.l1ValidatorServiceURL;

  return (
    <L1ValidatorServiceContext.Provider
      value={createDefaultL1ValidatorService(l1ValidatorServiceURL)}
    >
      {props.children}
    </L1ValidatorServiceContext.Provider>
  );
};

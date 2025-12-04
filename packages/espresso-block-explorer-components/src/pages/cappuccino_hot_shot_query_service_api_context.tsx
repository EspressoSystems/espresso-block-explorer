import { BlockExplorerConfigContext } from '@/components/config/explorer';
import { CappuccinoHotShotQueryService } from '@/service/hotshot_query_service/cappuccino/hot_shot_query_service_api';
import { FakeDataCappuccinoHotShotQueryService } from '@/service/hotshot_query_service/cappuccino/implementations/fake_data';
import { UnimplementedCappuccinoHotShotQueryService } from '@/service/hotshot_query_service/cappuccino/implementations/unimplemented';
import { WebWorkerClientBasedCappuccinoHotShotQueryService } from '@/service/hotshot_query_service/cappuccino/implementations/web_worker_client';
import React from 'react';

export const CappuccinoHotShotQueryServiceAPIContext =
  React.createContext<CappuccinoHotShotQueryService>(
    new UnimplementedCappuccinoHotShotQueryService(),
  );

let singletonService: CappuccinoHotShotQueryService | null = null;
/**
 * createWebWorkerCappuccinoHotShotQueryService returns a singleton instanceof
 * a CappuccinoHotShotQueryService implemented using Web Workers.
 */
function createWebWorkerCappuccinoHotShotQueryService(
  hotshotQueryServiceURL: string | null | undefined,
): CappuccinoHotShotQueryService {
  if (singletonService === null) {
    singletonService = new WebWorkerClientBasedCappuccinoHotShotQueryService();
  }

  if (hotshotQueryServiceURL) {
    // If the Service URL is provided, then let's invoke the service to set
    // the proxy url.
    singletonService.setURL(hotshotQueryServiceURL).then(
      (success) => {
        if (!success) {
          console.warn(
            'unable to set the url for the hotshot query service',
            hotshotQueryServiceURL,
          );
        }
      },
      (error) => {
        console.error(
          'unable to set the url for the hotshot query service',
          hotshotQueryServiceURL,
          error,
        );
      },
    );
  }

  return singletonService;
}

/**
 * createDefaultCappuccinoHotShotQueryService creates a default instance of a
 * CappuccinoHotShotQueryService depending on the environment that the code is
 * being run within.
 *
 * If support for Web Workers is available, then a Web Worker based solution
 * will returned, otherwise, it will default ot a fake implementation.
 */
function createDefaultCappuccinoHotShotQueryService(
  hotshotQueryServiceURL: string | null | undefined,
): CappuccinoHotShotQueryService {
  if (
    (typeof window !== 'undefined' && 'Worker' in window) ||
    (typeof self !== 'undefined' && 'Worker' in self)
  ) {
    return createWebWorkerCappuccinoHotShotQueryService(hotshotQueryServiceURL);
  }

  return new FakeDataCappuccinoHotShotQueryService();
}

interface ProvideCappuccinoHotShotQueryServiceAPIContextProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * ProvideCappuccinoHotShotQueryServiceAPIContext is a component that provides a
 * Cappuccino HotShot Query Service API using a default implementation that is
 * dependent on the environment that the code is being run within.
 */
export const ProvideCappuccinoHotShotQueryServiceAPIContext: React.FC<
  ProvideCappuccinoHotShotQueryServiceAPIContextProps
> = (props) => {
  const explorerConfig = React.useContext(BlockExplorerConfigContext);
  const hotshotQueryServiceURL = explorerConfig?.hotshotQueryServiceURL;

  return (
    <CappuccinoHotShotQueryServiceAPIContext.Provider
      value={createDefaultCappuccinoHotShotQueryService(hotshotQueryServiceURL)}
    >
      {props.children}
    </CappuccinoHotShotQueryServiceAPIContext.Provider>
  );
};

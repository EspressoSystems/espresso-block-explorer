import { BlockExplorerConfigContext } from '@/components/config/explorer';
import { HotShotQueryService } from '@/service/hotshot_query_service/hot_shot_query_service_api';
import { FakeDataHotShotQueryService } from '@/service/hotshot_query_service/implementations/fake_data';
import { UnimplementedHotShotQueryService } from '@/service/hotshot_query_service/implementations/unimplemented';
import { WebWorkerClientBasedHotShotQueryService } from '@/service/hotshot_query_service/implementations/web_worker_client';
import { default as React } from 'react';

export const HotShotQueryServiceAPIContext =
  React.createContext<HotShotQueryService>(
    new UnimplementedHotShotQueryService(),
  );

let singletonService: HotShotQueryService | null = null;

/**
 * createWebWorkerHotShotQueryService returns a singleton instanceof
 * a HotShotQueryService implemented using Web Workers.
 */
function createWebWorkerHotShotQueryService(
  hotshotQueryServiceURL: string | null | undefined,
): HotShotQueryService {
  if (singletonService === null) {
    singletonService = new WebWorkerClientBasedHotShotQueryService();
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
 * createDefaultHotShotQueryService creates a default instance of a
 * HotShotQueryService depending on the environment that the code is
 * being run within.
 *
 * If support for Web Workers is available, then a Web Worker based solution
 * will returned, otherwise, it will default ot a fake implementation.
 */
function createDefaultHotShotQueryService(
  hotshotQueryServiceURL: string | null | undefined,
): HotShotQueryService {
  if (
    (typeof window !== 'undefined' && 'Worker' in window) ||
    (typeof self !== 'undefined' && 'Worker' in self)
  ) {
    return createWebWorkerHotShotQueryService(hotshotQueryServiceURL);
  }

  return new FakeDataHotShotQueryService();
}

interface ProvideHotShotQueryServiceAPIContextProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * ProvideHotShotQueryServiceAPIContext is a component that provides a
 * HotShot Query Service API using a default implementation that is
 * dependent on the environment that the code is being run within.
 */
export const ProvideHotShotQueryServiceAPIContext: React.FC<
  ProvideHotShotQueryServiceAPIContextProps
> = (props) => {
  const explorerConfig = React.useContext(BlockExplorerConfigContext);
  const hotshotQueryServiceURL = explorerConfig?.hotshotQueryServiceURL;

  return (
    <HotShotQueryServiceAPIContext.Provider
      value={createDefaultHotShotQueryService(hotshotQueryServiceURL)}
    >
      {props.children}
    </HotShotQueryServiceAPIContext.Provider>
  );
};

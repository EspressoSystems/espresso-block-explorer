import React from 'react';
import { CappuccinoHotShotQueryService } from '../service/hotshot_query_service/cappuccino/hot_shot_query_service_api';
import { FakeDataCappuccinoHotShotQueryService } from '../service/hotshot_query_service/cappuccino/implementations/fake_data';
import { FetchBasedCappuccinoHotShotQueryService } from '../service/hotshot_query_service/cappuccino/implementations/remote_api';
import { WebWorkerClientBasedCappuccinoHotShotQueryService } from '../service/hotshot_query_service/cappuccino/web_worker_client_based';

export const CappuccinoHotShotQueryServiceAPIContext =
  React.createContext<CappuccinoHotShotQueryService>(
    createDefaultCappuccinoHotShotQueryService(),
  );

function createDefaultCappuccinoHotShotQueryService(): CappuccinoHotShotQueryService {
  if (
    (typeof window !== 'undefined' && 'Worker' in window) ||
    (typeof self !== 'undefined' && 'Worker' in self)
  ) {
    return new WebWorkerClientBasedCappuccinoHotShotQueryService();
  }

  return new FakeDataCappuccinoHotShotQueryService();
}

export interface ProviderCappuccinoLiveServiceProps {
  url: URL;
  children: React.ReactNode | React.ReactNode[];
}

function getFetch(): typeof fetch {
  if (typeof window === 'undefined') {
    return fetch;
  }

  return fetch.bind(window);
}

/**
 * ProvideCappuccinoLiveService is a component that provides a Cappuccino
 * HotShot Query Service API targeting the given URL.
 */
export const ProvideCappuccinoLiveService: React.FC<
  ProviderCappuccinoLiveServiceProps
> = ({ url, children }) => {
  return (
    <CappuccinoHotShotQueryServiceAPIContext.Provider
      value={new FetchBasedCappuccinoHotShotQueryService(getFetch(), url)}
    >
      {children}
    </CappuccinoHotShotQueryServiceAPIContext.Provider>
  );
};

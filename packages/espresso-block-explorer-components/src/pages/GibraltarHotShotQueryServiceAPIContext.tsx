import React from 'react';
import { FetchBasedGibraltarHotShotQueryService } from '../service/hotshot_query_service/gibraltar/implementations/remote_api';
import { WebWorkerClientBasedGibraltarHotShotQueryService } from '../service/hotshot_query_service/gibraltar/web_worker_client_based';

export const GibraltarHotShotQueryServiceAPIContext = React.createContext(
  new WebWorkerClientBasedGibraltarHotShotQueryService(),
);

export interface ProviderGibraltarLiveServiceProps {
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
 * ProvideGibraltarLiveService is a component that provides a Gibraltar
 * HotShot Query Service API targeting the given URL.
 */
export const ProvideGibraltarLiveService: React.FC<
  ProviderGibraltarLiveServiceProps
> = ({ url, children }) => {
  return (
    <GibraltarHotShotQueryServiceAPIContext.Provider
      value={new FetchBasedGibraltarHotShotQueryService(getFetch(), url)}
    >
      {children}
    </GibraltarHotShotQueryServiceAPIContext.Provider>
  );
};

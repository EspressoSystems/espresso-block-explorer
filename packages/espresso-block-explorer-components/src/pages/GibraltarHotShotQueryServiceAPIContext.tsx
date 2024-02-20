import React from 'react';
import { FakeDataGibraltarHotShotQueryService } from '../types/data_source/hotshot_query_service/gibraltar/fake_data_derived';
import { FetchBasedGibraltarHotShotQueryService } from '../types/data_source/hotshot_query_service/gibraltar/fetch_based_derived';

export const GibraltarHotShotQueryServiceAPIContext = React.createContext(
  new FakeDataGibraltarHotShotQueryService(),
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

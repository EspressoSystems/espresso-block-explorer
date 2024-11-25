import FetchError from '@/errors/FetchError';
import {
  CappuccinoHotShotQueryService,
  UnimplementedCappuccinoHotShotQueryService,
} from '@/service/hotshot_query_service/cappuccino/hot_shot_query_service_api';
import { WebWorkerClientBasedCappuccinoHotShotQueryService } from '@/service/hotshot_query_service/cappuccino/hotshot_query_service_web_worker_client_based';
import { FakeDataCappuccinoHotShotQueryService } from '@/service/hotshot_query_service/cappuccino/implementations/fake_data';
import { FetchBasedCappuccinoHotShotQueryService } from '@/service/hotshot_query_service/cappuccino/implementations/remote_api';
import React from 'react';

export const CappuccinoHotShotQueryServiceAPIContext =
  React.createContext<CappuccinoHotShotQueryService>(
    new UnimplementedCappuccinoHotShotQueryService(),
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

interface ProvideCappuccinoHotShotQueryServiceAPIContextProps {
  children: React.ReactNode | React.ReactNode[];
}

export const ProvideCappuccinoHotShotQueryServiceAPIContext: React.FC<
  ProvideCappuccinoHotShotQueryServiceAPIContextProps
> = (props) => {
  return (
    <CappuccinoHotShotQueryServiceAPIContext.Provider
      value={createDefaultCappuccinoHotShotQueryService()}
    >
      {props.children}
    </CappuccinoHotShotQueryServiceAPIContext.Provider>
  );
};

export interface ProviderCappuccinoLiveServiceProps {
  url: URL;
  children: React.ReactNode | React.ReactNode[];
}

/**
 * wrappedFetch is a wrapper around the fetch function that throws a FetchError
 * when the fetch operation fails.
 *
 * This is done so fetch doesn't have to suffer binding issues, and so that the
 * resulting error can be encodable.
 */
const wrappedFetch: typeof fetch = async (input: unknown, init?: unknown) => {
  try {
    return await fetch(input as RequestInfo | URL, init as RequestInit);
  } catch (error) {
    throw new FetchError(error);
  }
};

/**
 * ProvideCappuccinoLiveService is a component that provides a Cappuccino
 * HotShot Query Service API targeting the given URL.
 */
export const ProvideCappuccinoLiveService: React.FC<
  ProviderCappuccinoLiveServiceProps
> = ({ url, children }) => {
  return (
    <CappuccinoHotShotQueryServiceAPIContext.Provider
      value={new FetchBasedCappuccinoHotShotQueryService(wrappedFetch, url)}
    >
      {children}
    </CappuccinoHotShotQueryServiceAPIContext.Provider>
  );
};

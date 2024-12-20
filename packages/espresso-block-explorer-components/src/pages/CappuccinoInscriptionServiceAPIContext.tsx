import { WebWorkerClientBasedInscriptionService } from '@/service/inscription/cappuccino/inscription_web_worker_client_based';
import {
  UnimplementedWebWorkerInscriptionAPI,
  WebWorkerInscriptionAPI,
} from '@/service/inscription/cappuccino/web_worker_proxy_api';
import FakeDataCappuccinoInscriptionAPI from '@/service/node_validator/cappuccino/implementations/fake_data';
import React from 'react';
import { createBufferedChannel } from '../async';

export const CappuccinoInscriptionServiceAPIContext =
  React.createContext<WebWorkerInscriptionAPI>(
    new UnimplementedWebWorkerInscriptionAPI(),
  );

let singletonService: WebWorkerInscriptionAPI | null = null;

/**
 * createWebWorkerBasedInscriptionService returns a singleton instance of a
 * WebWorkerInscriptionAPI implemented using Web Workers.
 */
function createWebWorkerBasedInscriptionService(): WebWorkerInscriptionAPI {
  if (singletonService === null) {
    singletonService = new WebWorkerClientBasedInscriptionService();
  }

  return singletonService;
}

/**
 * createDefaultCappuccinoInscriptionService creates a default instance of a
 * WebWorkerInscriptionAPI depending on the environment that the code is
 * being run within.
 *
 * If support for Web Workers is available, then a Web Worker based solution
 * will returned, otherwise, it will default ot a fake implementation.
 */
function createDefaultCappuccinoInscriptionService(): WebWorkerInscriptionAPI {
  if (
    (typeof window !== 'undefined' && 'Worker' in window) ||
    (typeof self !== 'undefined' && 'Worker' in self)
  ) {
    return createWebWorkerBasedInscriptionService();
  }

  return new FakeDataCappuccinoInscriptionAPI(
    createBufferedChannel(1024),
    createBufferedChannel(1024),
  );
}

export interface ProvideWebWorkerCappuccinoInscriptionServiceAPIContextProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * ProvideWebWorkerCappuccinoInscriptionServiceAPIContext is a component that
 * provides a Cappuccino Inscription Service API using a default implementation
 * that is dependent on the environment that the code is being run within.
 */
export const ProvideWebWorkerCappuccinoInscriptionServiceAPIContext: React.FC<
  ProvideWebWorkerCappuccinoInscriptionServiceAPIContextProps
> = (props) => {
  // memoize the service so that we do not spawn multiple service workers.
  const service = React.useMemo(
    () => createDefaultCappuccinoInscriptionService(),
    [],
  );

  return (
    <CappuccinoInscriptionServiceAPIContext.Provider value={service}>
      {props.children}
    </CappuccinoInscriptionServiceAPIContext.Provider>
  );
};

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

function createDefaultCappuccinoInscriptionService(): WebWorkerInscriptionAPI {
  if (
    (typeof window !== 'undefined' && 'Worker' in window) ||
    (typeof self !== 'undefined' && 'Worker' in self)
  ) {
    return new WebWorkerClientBasedInscriptionService();
  }

  return new FakeDataCappuccinoInscriptionAPI(
    createBufferedChannel(1024),
    createBufferedChannel(1024),
  );
}

export interface ProvideWebWorkerCappuccinoInscriptionServiceAPIContextProps {
  children: React.ReactNode | React.ReactNode[];
}

export const ProvideWebWorkerCappuccinoInscriptionServiceAPIContext: React.FC<
  ProvideWebWorkerCappuccinoInscriptionServiceAPIContextProps
> = (props) => {
  return (
    <CappuccinoInscriptionServiceAPIContext.Provider
      value={createDefaultCappuccinoInscriptionService()}
    >
      {props.children}
    </CappuccinoInscriptionServiceAPIContext.Provider>
  );
};

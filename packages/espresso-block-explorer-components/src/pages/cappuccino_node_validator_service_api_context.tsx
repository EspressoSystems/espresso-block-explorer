import FakeDataCappuccinoNodeValidatorAPI from '@/service/node_validator/cappuccino/implementations/fake_data';
import { WebWorkerClientBasedNodeValidatorService } from '@/service/node_validator/cappuccino/node_validator_web_worker_client_based';
import {
  UnimplementedWebWorkerNodeValidatorAPI,
  WebWorkerNodeValidatorAPI,
} from '@/service/node_validator/cappuccino/web_worker_proxy_api';
import React from 'react';
import { createBufferedChannel } from '../async';

export const CappuccinoNodeValidatorServiceAPIContext =
  React.createContext<WebWorkerNodeValidatorAPI>(
    new UnimplementedWebWorkerNodeValidatorAPI(),
  );

interface ProvideCappuccinoNodeValidatorServiceAPIContextProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * ProvideCappuccinoNodeValidatorServiceAPIContext is a component that provides
 * a Cappuccino Node Validator Service API using a default implementation that
 * is dependent on the environment that the code is being run within.
 */
export const ProvideCappuccinoNodeValidatorServiceAPIContext: React.FC<
  ProvideCappuccinoNodeValidatorServiceAPIContextProps
> = (props) => {
  return (
    <CappuccinoNodeValidatorServiceAPIContext.Provider
      value={createDefaultCappuccinoNodeValidatorService()}
    >
      {props.children}
    </CappuccinoNodeValidatorServiceAPIContext.Provider>
  );
};

let singletonService: WebWorkerNodeValidatorAPI | null = null;

/**
 * createWebWorkerNodeValidatorService returns a singleton instance of a
 * WebWorkerNodeValidatorAPI implemented using Web Workers.
 */
function createWebWorkerNodeValidatorService(): WebWorkerNodeValidatorAPI {
  if (singletonService === null) {
    singletonService = new WebWorkerClientBasedNodeValidatorService();
  }

  return singletonService;
}

/**
 * createDefaultCappuccinoNodeValidatorService creates a default instance of a
 * WebWorkerNodeValidatorAPI depending on the environment that the code is
 * being run within.
 *
 * If support for Web Workers is available, then a Web Worker based solution
 * will returned, otherwise, it will default ot a fake implementation.
 */
function createDefaultCappuccinoNodeValidatorService(): WebWorkerNodeValidatorAPI {
  if (
    (typeof window !== 'undefined' && 'Worker' in window) ||
    (typeof self !== 'undefined' && 'Worker' in self)
  ) {
    return createWebWorkerNodeValidatorService();
  }

  return new FakeDataCappuccinoNodeValidatorAPI(
    createBufferedChannel(1024),
    createBufferedChannel(1024),
  );
}

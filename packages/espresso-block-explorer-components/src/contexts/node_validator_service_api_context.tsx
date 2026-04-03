import { createBufferedChannel } from '@/async/channel/buffered_channel';
import FakeDataNodeValidatorAPI from '@/service/node_validator/implementations/fake_data';
import { WebWorkerClientBasedNodeValidatorService } from '@/service/node_validator/node_validator_web_worker_client_based';
import {
  UnimplementedWebWorkerNodeValidatorAPI,
  WebWorkerNodeValidatorAPI,
} from '@/service/node_validator/web_worker_proxy_api';
import React from 'react';

export const NodeValidatorServiceAPIContext =
  React.createContext<WebWorkerNodeValidatorAPI>(
    new UnimplementedWebWorkerNodeValidatorAPI(),
  );

interface ProvideNodeValidatorServiceAPIContextProps {
  children: React.ReactNode | React.ReactNode[];
}

/**
 * ProvideNodeValidatorServiceAPIContext is a component that provides
 * a Node Validator Service API using a default implementation that
 * is dependent on the environment that the code is being run within.
 */
export const ProvideNodeValidatorServiceAPIContext: React.FC<
  ProvideNodeValidatorServiceAPIContextProps
> = (props) => {
  return (
    <NodeValidatorServiceAPIContext.Provider
      value={createDefaultNodeValidatorService()}
    >
      {props.children}
    </NodeValidatorServiceAPIContext.Provider>
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
 * createDefaultNodeValidatorService creates a default instance of a
 * WebWorkerNodeValidatorAPI depending on the environment that the code is
 * being run within.
 *
 * If support for Web Workers is available, then a Web Worker based solution
 * will returned, otherwise, it will default ot a fake implementation.
 */
function createDefaultNodeValidatorService(): WebWorkerNodeValidatorAPI {
  if (
    (typeof window !== 'undefined' && 'Worker' in window) ||
    (typeof self !== 'undefined' && 'Worker' in self)
  ) {
    return createWebWorkerNodeValidatorService();
  }

  return new FakeDataNodeValidatorAPI(
    createBufferedChannel(1024),
    createBufferedChannel(1024),
  );
}

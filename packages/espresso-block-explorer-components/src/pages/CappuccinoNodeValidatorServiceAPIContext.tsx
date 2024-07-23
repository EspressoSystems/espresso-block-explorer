import FakeDataCappuccinoNodeValidatorAPI from '@/service/node_validator/cappuccino/implementations/fake_data';
import { WebWorkerClientBasedNodeValidatorService } from '@/service/node_validator/cappuccino/node_validator_web_worker_client_based';
import { WebWorkerNodeValidatorAPI } from '@/service/node_validator/cappuccino/web_worker_proxy_api';
import React from 'react';
import { createBufferedChannel } from '../async';

export const CappuccinoNodeValidatorServiceAPIContext =
  React.createContext<WebWorkerNodeValidatorAPI>(
    createDefaultCappuccinoNodeValidatorService(),
  );

function createDefaultCappuccinoNodeValidatorService(): WebWorkerNodeValidatorAPI {
  if (
    (typeof window !== 'undefined' && 'Worker' in window) ||
    (typeof self !== 'undefined' && 'Worker' in self)
  ) {
    return new WebWorkerClientBasedNodeValidatorService();
  }

  return new FakeDataCappuccinoNodeValidatorAPI(
    createBufferedChannel(1024),
    createBufferedChannel(1024),
  );
}

import FakeDataCappuccinoNodeValidatorAPI from '@/service/node_validator/cappuccino/implementations/fake_data';
import { CappuccinoNodeValidatorAPI } from '@/service/node_validator/cappuccino/node_validator_api';
import { WebWorkerClientBasedNodeValidatorService } from '@/service/node_validator/cappuccino/node_validator_web_worker_client_based';
import React from 'react';
import { createBufferedChannel } from '../async';

export const CappuccinoNodeValidatorServiceAPIContext =
  React.createContext<CappuccinoNodeValidatorAPI>(
    createDefaultCappuccinoNodeValidatorService(),
  );

function createDefaultCappuccinoNodeValidatorService(): CappuccinoNodeValidatorAPI {
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

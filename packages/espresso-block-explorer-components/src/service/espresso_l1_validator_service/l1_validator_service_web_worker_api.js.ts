import { WebWorkerProxy } from './l1_validator_service_web_worker_proxy';

/**
 * L1ValidatorServiceWebWorkerAPI sets up a Web Worker to handle
 * requests for the L1ValidatorService API.
 */
self.addEventListener(
  'message',
  new WebWorkerProxy(self.postMessage.bind(self)),
);

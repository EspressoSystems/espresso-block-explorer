import { WebWorkerProxy } from './web_worker_proxy';

self.addEventListener(
  'message',
  new WebWorkerProxy(self.postMessage.bind(self)),
);

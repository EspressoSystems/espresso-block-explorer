import { WebWorkerProxy } from './inscription_web_worker_proxy';

self.addEventListener(
  'message',
  new WebWorkerProxy(self.postMessage.bind(self)),
);

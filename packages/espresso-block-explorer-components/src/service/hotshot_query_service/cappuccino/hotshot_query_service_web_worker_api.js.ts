import { WebWorkerProxy } from './hotshot_query_service_web_worker_proxy';

self.addEventListener(
  'message',
  new WebWorkerProxy(self.postMessage.bind(self)),
);

import { NodeValidatorAPI } from '../types';
import { WebWorkerProxyRequest } from './requests/web_worker_proxy_request';
import { WebWorkerProxyResponse } from './responses/web_worker_proxy_response';

export interface WebWorkerNodeValidatorAPI extends NodeValidatorAPI<WebWorkerProxyRequest, WebWorkerProxyResponse> {
}

import { Channel } from '../../../../../../../../../../../src/async/channel';
import { WebWorkerProxyRequest } from '../../../../../../../../../../../src/models/web_worker/web_worker_proxy_request';
import { WebWorkerProxyResponse } from '../../../../../../../../../../../src/models/web_worker/web_worker_proxy_response';
import { WebWorkerNodeValidatorAPI } from './web_worker_proxy_api';
export declare class WebWorkerClientBasedNodeValidatorService implements WebWorkerNodeValidatorAPI {
    private requestChannel;
    private responseChannel;
    constructor(requestChannel?: Channel<WebWorkerProxyRequest>, responseChannel?: Channel<WebWorkerProxyResponse>);
    get stream(): AsyncIterable<WebWorkerProxyResponse>;
    send(request: WebWorkerProxyRequest): Promise<void>;
    private handleMessage;
    private handleMessageError;
    private handleError;
}

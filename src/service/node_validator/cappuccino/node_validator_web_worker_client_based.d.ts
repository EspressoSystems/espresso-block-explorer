import { Channel } from '../../../../../../../../../../../src/async/channel';
import { default as CappuccinoNodeValidatorRequest } from './requests/node_validator_request';
import { WebWorkerProxyRequest } from './requests/web_worker_proxy_request';
import { default as CappuccinoNodeValidatorResponse } from './responses/node_validator_response';
import { WebWorkerProxyResponse } from './responses/web_worker_proxy_response';
import { WebWorkerNodeValidatorAPI } from './web_worker_proxy_api';

export declare class WebWorkerClientBasedNodeValidatorService implements WebWorkerNodeValidatorAPI {
    private requestChannel;
    private responseChannel;
    constructor(requestChannel?: Channel<WebWorkerProxyRequest>, responseChannel?: Channel<WebWorkerProxyResponse>);
    get stream(): AsyncIterable<CappuccinoNodeValidatorResponse>;
    send(request: CappuccinoNodeValidatorRequest): Promise<void>;
    private handleMessage;
    private handleMessageError;
    private handleError;
}

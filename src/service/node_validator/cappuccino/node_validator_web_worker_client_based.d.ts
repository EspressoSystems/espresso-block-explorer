import { Channel } from '../../../../../../../../../../../src/async/channel';
import { CappuccinoNodeValidatorService } from './node_validator_service_api';
import { default as CappuccinoNodeValidatorRequest } from './requests/node_validator_request';
import { default as CappuccinoNodeValidatorResponse } from './responses/node_validator_response';

export declare class WebWorkerClientBasedNodeValidatorService implements CappuccinoNodeValidatorService {
    private requestChannel;
    private responseChannel;
    constructor(requestChannel?: Channel<CappuccinoNodeValidatorRequest>, responseChannel?: Channel<CappuccinoNodeValidatorResponse>);
    get stream(): AsyncIterable<CappuccinoNodeValidatorResponse>;
    send(request: CappuccinoNodeValidatorRequest): Promise<void>;
    private handleMessage;
    private handleMessageError;
    private handleError;
}

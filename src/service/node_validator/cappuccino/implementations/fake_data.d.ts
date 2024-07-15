import { Channel } from '../../../../../../../../../../../../src/async/channel';
import { CappuccinoNodeValidatorAPI } from '../node_validator_api';
import { default as CappuccinoNodeValidatorRequest } from '../requests/node_validator_request';
import { default as CappuccinoNodeValidatorResponse } from '../responses/node_validator_response';

export default class FakeDataCappuccinoNodeValidatorAPI implements CappuccinoNodeValidatorAPI {
    readonly responseStream: Channel<CappuccinoNodeValidatorResponse>;
    readonly requestStream: Channel<CappuccinoNodeValidatorRequest>;
    constructor(requestStream: Channel<CappuccinoNodeValidatorRequest>, responseStream: Channel<CappuccinoNodeValidatorResponse>);
    get stream(): AsyncIterable<CappuccinoNodeValidatorResponse>;
    send(request: CappuccinoNodeValidatorRequest): Promise<void>;
    private prng;
    private latestBlock;
    private histogramBlockTimeData;
    private histogramBlockSizeData;
    private histogramBlockTransactionData;
    private histogramBlockHeightData;
    private updateBlockDetails;
    initializeState(): Promise<void>;
    startProcessing(): Promise<void>;
    handleRequests(): Promise<void>;
    streamBlocks(): Promise<void>;
    private handleRequest;
    private handleRoleCall;
}

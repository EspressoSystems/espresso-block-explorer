import { Sink } from '../../../../../../../../../../../../src/async/sink';
import { default as CappuccinoNodeValidatorResponse } from '../responses/node_validator_response';
export declare class WebSocketMessageHandler implements EventListenerObject {
    private readonly nodeValidatorResponseSink;
    constructor(nodeValidatorResponseSink: Sink<CappuccinoNodeValidatorResponse>);
    private decodeMessage;
    private relayMessage;
    handleEvent(event: MessageEvent): Promise<void>;
}
